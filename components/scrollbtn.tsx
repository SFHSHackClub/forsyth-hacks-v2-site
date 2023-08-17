const isBrowser = () => typeof window !== 'undefined';
function scroll(point: number) {
    if (!isBrowser()) return
    window.scrollTo({top: point, behavior: 'smooth'})
}

export default function scrollBtn(p:number) {
    
    <div onClick={() => scroll(p)}>
        
    </div>
}