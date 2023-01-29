import './globals.css'
import Header from './Header'
import Footer from './Footer'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='h-screen bg lg:p-6 lg:px-15 items-center md:p-9 p-3  py-10'>
      <Header/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
