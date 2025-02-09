import './ui/global.css';
import { lusitana } from '@/app/ui/fonts';
import SideNav from './ui/dashboard/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        <h1>Este es el título de mi aplicación</h1>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav/>
            </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>      
        <footer>Hecho con ❤️ Por la gente de Vercel</footer>
      </body>
    </html>
  );
}
