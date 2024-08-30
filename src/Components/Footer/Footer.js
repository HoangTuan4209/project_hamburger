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
            <Link>
              <a href='#'>Hướng dẫn</a>
            </Link>
            <Link to={ROUTERS.USER.CONTACT}>
              <a href='#'>Liên hệ</a>
            </Link>
            <Link>
              <a href='#'>Tuyển dụng</a>
            </Link>
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