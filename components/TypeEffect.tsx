'use client'
import { TypeAnimation } from 'react-type-animation';

export default function TypeEffect({ sequence, className, cursor }: { sequence: any[], className?:string, cursor?:boolean }) {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      className={className}
      cursor={cursor}
    />
  );
};