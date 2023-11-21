import React from 'react'
import Link from 'next/link'

function page() {
  return (
    
    <div className='pageTienda'>
        <h1 className='tienda'><b>Tienda/electronica</b></h1>
        <p className='electronica'><Link href='/tienda/electronica'>Electrónica</Link></p>
        <p className='decoracion'><Link href='/tienda/decoracion'>Decoración</Link></p>
        <p className='mobiliario'><Link href='/tienda/mobiliario'>Mobiliario</Link></p>
        <p className='libros'><Link href='/tienda/libros'>Libros</Link></p>
    </div>
  )
}

export default page