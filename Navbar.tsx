'use client';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-soft">
          <Link href="/" className="text-lg font-semibold gradient-text">Ayush Bhosale</Link>

          <nav className="hidden md:flex gap-3">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="nav-tab text-slate-700 hover:text-primaryStart">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 border rounded">
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-3 md:hidden bg-white/90 p-3 rounded-lg shadow-soft">
            <div className="flex flex-col gap-2">
              {navItems.map(i => (
                <Link key={i.name} href={i.href} className="block p-3 border nav-tab">{i.name}</Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
