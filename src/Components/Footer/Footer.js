import React from 'react'
import styles from './Footer.module.scss'
import { IoLogoInstagram } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { ROUTERS } from '../../utils/router';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <span>Copyright 2015 Burger King Corporation.All Rights Reserved.</span>
          <p>Designed by Levinci Group</p>
        </div>
        <div className={styles.center}>
          <ul className={styles.link}>
            <Link to={ROUTERS.USER.ABOUT}>
              <a href='#'>Giới Thiệu</a>
            </Link>
            <li>
              <a href='#'>Hướng Dẫn</a>
            </li>
            <li>
              <a href='#'>Liên Hệ</a>
            </li>
            <li>
              <a href='#'>Tuyển Dụng</a>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <a>
            <IoLogoInstagram />
          </a>
          <a>
            <MdFacebook />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer