import { useRef, useEffect, useState } from 'react'

function useIntersetion(opciones={}) {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const elementoRef = useRef()
    useEffect(()=>{
      const elemento = elementoRef.current
      
      const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          setIsIntersecting(entry.isIntersecting)
        })
      },opciones);
      if(elemento){
        observer.observe(elemento)
      }
      return ()=>{
          if(elemento){
              observer.unobserve(elemento)
            }
      }
    }, []);
    return[elementoRef, isIntersecting];
}

export default useIntersetion
