import './app.css'
import { useRef, useEffect, useState } from 'react'
import useIntersetion from './components/useIntersetion'
import Menu from './components/navbar/menu'

const App = () => {
  const [elementoRef, isIntersecting] = useIntersetion({
    threshold :0.6,
  })
  const [elementoRef2, isIntersecting2] = useIntersetion({
    threshold :0.6,
  })
  return (
    <>
      <Menu/>
      <section><h1 className='a'>App a-01</h1></section>
      <section><h1 className='b'>App b-02</h1></section>
      <section ref={elementoRef2}><h1 className='c'>{isIntersecting2 ? "dentro -1" : "fuera -1"}</h1></section>
      <section><h1 className='d'>App d-04</h1></section>
      <section><h1 className='e'>App e-05</h1></section>
      <section><h1 className='f'>App f-06</h1></section>
      <section><h1 className='g'>App g-07</h1></section>
      <section ref={elementoRef}><h1 className='h'>{isIntersecting ? "dentro -2" : "fuera -2"}</h1></section>
      <section><h1 className='i'>App i-09</h1></section>
      <section><h1 className='j'>App j-10</h1></section>
    </>
  )
}

export default App
