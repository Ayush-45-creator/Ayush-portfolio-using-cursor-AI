import '../styles/globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import RainCanvas from '../components/RainCanvas';

export const metadata = {
  title: 'Ayush Bhosale — Portfolio',
  description: 'AI/ML engineering student portfolio'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <div className="fixed inset-0 -z-10">
          <RainCanvas />
        </div>

        <Navbar />
        <main className="pt-28">
          {children}
        </main>
      </body>
    </html>
  );
}
