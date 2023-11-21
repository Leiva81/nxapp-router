import React from 'react'
import Link from 'next/link'

function page() {
  return (
    
    <div className='pageTienda'>
        <h1 className='tienda'><b>Blog/cuartoBlog</b></h1>
        <p className='electronica'><Link href='/blog/primerBlog'>Blog 1</Link></p>
        <p className='decoracion'><Link href='/blog/segundoBlog'>Blog 2</Link></p>
        <p className='decoracion'><Link href='/blog/tercerBlog'>Blog 3</Link></p>
        <p className='decoracion'><Link href='/blog/cuartoBlog'>Blog 4</Link></p>
    </div>
  )
}

export default page
