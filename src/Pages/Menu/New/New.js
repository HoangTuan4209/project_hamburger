import React, { useContext } from 'react'
import styles from '../all.module.scss'
import products from './Data'
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from '../../../Components/Contexts/CartContext';

const New = () => {
  const { AddToCart,setTotal,setCount } = useContext(CartContext);

  const handleClick = (product) => {
    alert('Bạn vừa thêm thành công 1 món');
    const priceNumber = Number(product.price.replace(/[^0-9.-]+/g,""));
    const countProduct = product.count;
    const newItem = {
      image: product.image,
      name: product.name,
      count: product.count,
      price: product.price
    };
    AddToCart(newItem);
    setCount((countProduct) => countProduct += 1);
    setTotal((total) => total += priceNumber);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.listProduct}>
          {products.map((product, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.image}>
                <img src={product.image} alt='img' />
              </div>
              <h4 className={styles.productName}>
                <a href='#'>{product.name}</a>
              </h4>
              <div className={styles.combo}>
                <p>{product.description}</p>
              </div>
              <div className={styles.price}>
                <p>{product.price}</p>
              </div>
              <button className={styles.cart} onClick={() => handleClick(product)}>
                <TiShoppingCart />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default New