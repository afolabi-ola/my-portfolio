import NavBar from './_components/NavBar';
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-text-base dark:bg-background'>
        <header className='bg-surface'>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
