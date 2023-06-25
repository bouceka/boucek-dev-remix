import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import styles from './styles/index.css';
import { NavBar } from './components/nav-bar/nav-bar.component';
import toast from 'react-toastify/dist/ReactToastify.css';
import { Footer } from './components/footer/footer.components';
import { getUserFromSession } from './data/auth.server';
import type { LoaderFunction } from '@remix-run/node';

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning={true}>
        <header>
          <NavBar />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  return getUserFromSession(request);
};

export const links = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: toast },
];
