'use client'

import React, { Ref, useRef } from "react";

const isBrowser = () => typeof window !== 'undefined';
function scroll(point: any) {
    if (!isBrowser()) return
    if (isNaN(Number(point))) point = 0;
    window.scrollTo({top: point+window.scrollY, behavior: 'smooth'})
}

export default function ScrollElement({ children, element, className}: {children: React.ReactNode, element?: string, className?: string}) {
    var point = element==null ? 0-window.scrollY : document.getElementById(element)?.getBoundingClientRect().top
    console.log(point)
    return (
        <span className={className} onClick={() => scroll(point)}>
            {children}
        </span>
    )
}