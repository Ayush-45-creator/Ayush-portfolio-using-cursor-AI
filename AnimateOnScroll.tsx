import { ReactNode } from 'react';

export default function AnimateOnScroll({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <div style={{ transitionDelay: `${delay}ms` }} className="opacity-100 transform">
      {children}
    </div>
  );
}
