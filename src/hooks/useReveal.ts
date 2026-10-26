import { useEffect } from 'react'
export function useReveal() {
 useEffect(()=>{const elements=document.querySelectorAll('.reveal');if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.1})
 elements.forEach(e=>{e.classList.add('will-reveal');observer.observe(e)});return ()=>observer.disconnect()},[])
}
