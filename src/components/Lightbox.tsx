import { useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, X, ExternalLink } from 'lucide-react'
import { gallery } from '../config/business'
export default function Lightbox({index,onChange,onClose}:{index:number;onChange:(index:number)=>void;onClose:()=>void}) {
 const ref=useRef<HTMLDialogElement>(null)
 useEffect(()=>{const dialog=ref.current!;const previous=document.activeElement as HTMLElement;dialog.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{dialog.close();document.body.style.overflow=old;previous?.focus()}},[])
 return <dialog className="lightbox" ref={ref} aria-label="Galeria de fotografias" onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose()}} onKeyDown={e=>{if(e.key==='ArrowRight')onChange((index+1)%gallery.length);if(e.key==='ArrowLeft')onChange((index+gallery.length-1)%gallery.length)}}><button className="lightbox-close icon-button" aria-label="Fechar galeria" onClick={onClose}><X/></button><div className="lightbox-content"><button className="icon-button" aria-label="Foto anterior" onClick={()=>onChange((index+gallery.length-1)%gallery.length)}><ArrowLeft/></button><figure><img src={gallery[index].src} alt={gallery[index].alt}/><figcaption>{gallery[index].label}<a href={gallery[index].source} target="_blank" rel="noreferrer">Ver publicação original <ExternalLink size={14}/></a></figcaption></figure><button className="icon-button" aria-label="Próxima foto" onClick={()=>onChange((index+1)%gallery.length)}><ArrowRight/></button></div></dialog>
}
