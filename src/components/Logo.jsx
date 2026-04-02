
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-foreground text-background overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50" />
        <span className="font-serif text-2xl relative z-10 font-bold">R</span>
      </div>
      <div className="flex flex-col -gap-1">
        <span className="font-serif text-3xl font-bold tracking-tight text-foreground leading-none">
          Glowverse
        </span>
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-muted-foreground ml-1">
          RHS Protocol
        </span>
      </div>
    </Link>
  );
};

export default Logo;
