import React from 'react'
import Link from 'next/link'

function page() {
  return (
    
    <div className='pageTienda'>
        <h1 className='tienda'><b>Blog</b></h1>
        <p className='electronica'><Link href='/blog/primerBlog'>Blog 1</Link></p>
        <p className='decoracion'><Link href='/tienda/segundoBlog'>Blog 2</Link></p>
        <p className='decoracion'><Link href='/tienda/tercerBlog'>Blog 3</Link></p>
        <p className='decoracion'><Link href='/tienda/cuartoBlog'>Blog 4</Link></p>
    </div>
  )
}

export default page