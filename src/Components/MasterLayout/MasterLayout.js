import React, { memo } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import './MasterLayout.scss'
import { CartProvider } from '../Contexts/CartContext'

const MasterLayout = ({ children, ...props }) => {
  return (
    <div className='masterLayout' {...props}>
      <CartProvider>
        <Header />
        <Nav />
        {children}
        <Footer />
      </CartProvider>
    </div>
  )
}

export default memo(MasterLayout)