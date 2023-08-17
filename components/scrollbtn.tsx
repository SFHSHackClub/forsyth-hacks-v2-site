'use client'

import { ScriptProps } from "next/script";
import React from "react";

const isBrowser = () => typeof window !== 'undefined';
function scroll(point: number) {
    if (!isBrowser()) return
    window.scrollTo({top: point, behavior: 'smooth'})
}

export default function ScrollBtn({ children }: ScriptProps) {
    return (
        <div onClick={() => scroll(0)}>
            {children}
        </div>
    )
}