// pages/_app.tsx
import type { AppProps } from 'next/app';  // Import AppProps from Next.js
import '@/styles/globals.css';             // Import global Tailwind CSS

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

