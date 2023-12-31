import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ejemplo de app en nextJS',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="">
        <NavBar />
        {children}
        </body>
    </html>
  )
}
