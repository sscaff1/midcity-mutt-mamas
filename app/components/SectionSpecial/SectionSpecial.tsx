import type { ReactNode } from 'react';
import cn from 'clsx';
import './SectionSpecial.css';

interface SectionSpecialProps {
  children: ReactNode;
  className?: string;
}

function SectionSpecial({ children, className }: SectionSpecialProps) {
  return <div className={cn('root', className)}>{children}</div>;
}

export default SectionSpecial;
