import { Head } from 'next/document';
export function Layout({
  children,
  title
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <>
      <Head>
        <title>{title ?? 'title'}</title>
      </Head>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
