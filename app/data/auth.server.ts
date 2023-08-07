import { createCookieSessionStorage, redirect } from '@remix-run/node';
import { prisma } from './db.server';
import { hash, compare } from 'bcryptjs';

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error('Must environment variable SESSION_SECRET');
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'admin-session',
    secure: true,
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export const signup = async (email: string, password: string) => {
  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (existingUser) {
    const error = new Error('A user with the provided email address exists already');
    // error.status = 422;
    throw error;
  }

  const passwordHash = await hash(password, 12);

  await prisma.user.create({ data: { email, password: passwordHash } });
};

export const login = async (email: string, password: string) => {
  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (!existingUser) {
    throw new Error('A user with the provided email does not exist');
  }

  const passwordsMatch = await compare(password, existingUser.password);
  if (!passwordsMatch) throw new Error('A password with the provided email is incorrect');

  return await createUserSession(existingUser.id, '/admin');
};

export const createUserSession = async (userId: string, redirectTo: string) => {
  const session = await storage.getSession();
  session.set('userId', userId);
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  });
};

export const getUserFromSession = async (request: Request) => {
  const session = await storage.getSession(request.headers.get('Cookie'));
  let userId = session.get('userId');
  if (typeof userId !== 'string') return null;
  return userId;
};

export const allowUserToUseFromCountry = (request: Request) => {
  let cf = request.headers.get('x-vercel-ip-country');
  if (cf === 'CA' || cf === 'US') {
    return;
  } else {
    throw new Response(null, {
      status: 404,
      statusText: 'Website is not available.',
    });
  }
};

export const requireUserSession = async (request: Request) => {
  const userId = await getUserFromSession(request);
  if (!userId) {
    // let params = new URLSearchParams([['redirectTo', redirectTo]]);
    throw redirect(`/auth`);
  }
  return userId;
};

export async function destroyUserSession(request: Request) {
  const session = await storage.getSession(request.headers.get('Cookie'));

  return redirect('/', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  });
}
