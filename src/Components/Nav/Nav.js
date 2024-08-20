import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.scss'
import { ROUTERS } from '../../utils/router'

import React, { useEffect, useState } from 'react'

const Nav = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const location = useLocation();

    const menuItems = [
        { route: ROUTERS.USER.NEW, imgSrc: '/images/img_nav-1.png', label: 'Món Mới' },
        { route: ROUTERS.USER.BURGER, imgSrc: '/images/img_nav-2.jpg', label: 'Burger' },
        { route: ROUTERS.USER.COMBO, imgSrc: '/images/img_nav-3.jpg', label: 'Combo' },
        { route: ROUTERS.USER.GARAN, imgSrc: '/images/img_nav-4.jpg', label: 'Gà rán' },
        { route: ROUTERS.USER.COMVUA, imgSrc: '/images/img_nav-5.png', label: 'Cơm vua' },
        { route: ROUTERS.USER.MONANKEM, imgSrc: '/images/img_nav-6.png', label: 'Món ăn kèm' },
        { route: ROUTERS.USER.THUCUONG, imgSrc: '/images/img_nav-7.jpg', label: 'Thức uống' }
    ];

    useEffect(() => {
        if(location.pathname === '/'){
            setActiveIndex(null);
        } else {
            const currentIndex = menuItems.findIndex(item => item.route === location.pathname);
            setActiveIndex(currentIndex);
        }
    },[location.pathname]);
   
    const handleClick = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.route}>
                                <img src={item.imgSrc} alt='img' />
                                <span
                                    className={activeIndex === index ? styles.active : ''}
                                    onClick={() => handleClick(index)}>
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Nav
