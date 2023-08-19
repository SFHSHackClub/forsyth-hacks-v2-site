'use client'
import React, { Ref, useEffect, useRef } from "react";

const isBrowser = () => typeof window !== 'undefined';
function scroll(element: any, offset: any) {
    if (!isBrowser()) return
    var point: number = 0
    if (element != null) {
        const height = document.getElementById(element)?.getBoundingClientRect().top
        if (!isNaN(Number(height))) point += Number(height)-window.innerHeight*0.4
    }
    if (offset != null) point += window.innerHeight*offset
    if (isNaN(Number(point))) point = 0;
    window.scrollTo({top: point, behavior: 'smooth'})
}

export default function ScrollElement({ children, element, className, offsetpercent}: {children: React.ReactNode, element?: string, className?: string, offsetpercent?: number}) {
    return (
        <span className={className} onClick={() => scroll(element, offsetpercent)}>
            {children}
        </span>
    )
}