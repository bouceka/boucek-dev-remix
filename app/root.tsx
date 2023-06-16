import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import styles from './styles/index.css';
import { NavBar } from './components/nav-bar/nav-bar.component';
import toast from 'react-toastify/dist/ReactToastify.css';
import { Footer } from './components/footer/footer.components';

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

export const links = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: toast },
];
