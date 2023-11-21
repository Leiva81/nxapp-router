import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <nav className='navbar'>
        <Link href='/'>Inicio</Link>
        <Link href='/tienda' className='Tienda'>Tienda</Link>
        <Link href='/blog' className='Blog'>Blog</Link>
        <Link href='/acerca-de' className='Acercade'>Acerca de ...</Link>
        <Link href='/registro' className='Registrarme'>Registrarme</Link>
      </nav>
  )
}

export default NavBar