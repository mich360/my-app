import { AppProps } from 'next/app';
import About from './about';

function MyApp({ Component, pageProps }: AppProps) {
  if (Component === About) {
    // Aboutページの場合はそのまま表示する
    return <Component {...pageProps} />;
  }

  return (
    <div>
      <h1>We App</h1>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
