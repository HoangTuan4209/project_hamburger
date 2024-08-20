import React, { useContext } from 'react'
import styles from './Cart.module.scss'
import { CartContext } from '../../Components/Contexts/CartContext'

const Cart = () => {
  const { myCart,total} = useContext(CartContext);
  return (
    <div className={styles.wapper}>
      <div className={styles.container}>
        <h3 className={styles.title}>CART</h3>
        {myCart.length > 0 ? (
          myCart.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={item.image} alt={item.name} />
              <p className={styles.cartName}>{item.name}</p>
              <p className={styles.cartPrice}>{item.price}</p>
              <p className={styles.cartQuantity}>Count: {item.count}</p>
            </div>
          ))
        ) : (
          <p className={styles.emtyCart}>Giỏ hàng của bạn hiện đang trống.</p>
        )}
        <div className={styles.total}> TOTAL: {total}.000 VNĐ</div>
      </div>
    </div>
  )
}

export default Cart