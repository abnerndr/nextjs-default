import { Html, Head, Main, NextScript } from 'next/document';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], style: 'normal' });

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className={`${poppins.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
