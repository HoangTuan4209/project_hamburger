import React, { useContext, useState } from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from './Header.module.scss'
import { ROUTERS } from '../../utils/router';
import { Link } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContext';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {count} = useContext(CartContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link to={ROUTERS.USER.HOME} className={styles.logo}>
                    <img src='/images/logo_header.png' alt='sss'></img>
                </Link>
                <div className={styles.headerRight}>
                    <ul className={menuOpen ? styles.show : ''}>
                        <Link to={ROUTERS.USER.SALE}>
                            <a href='#'>khuyến mãi</a>
                        </Link>
                        <li>
                            <a href='#'>thực đơn</a>
                        </li>
                        <li>
                            <a href='#'>cửa hàng</a>
                        </li>
                        <Link to={ROUTERS.USER.CART} className={styles.iconCart}>
                            <MdOutlineShoppingBag />
                            <p className={styles.quantityCart}>{count}</p>
                        </Link>
                    </ul>
                </div>
                <div className={styles.iconMenu} onClick={toggleMenu}>
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>
    )
}

export default Header