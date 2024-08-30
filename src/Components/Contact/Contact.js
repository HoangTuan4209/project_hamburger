import React from 'react'
import styles from './Contact.module.scss'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.titleTop}>Liên hệ</div>
                    <div className={styles.grid}>
                        <div className={styles.left}>
                            <h2>Thông tin liên hệ</h2>
                            <p><FaMapMarkerAlt className={styles.icon} /> <b>Địa chỉ: </b>15B/8 Lê Thánh Tôn, phường Bến Nghé, quận 1, TPHCM</p>
                            <p><FaPhoneAlt className={styles.icon} /> <b>Điện Thoại: </b>1900 6960</p>
                            <p><MdOutlineEmail className={styles.icon} /> <b>Email: </b>bi.pp-marketing@vfbs.vn</p>
                        </div>
                        <div className={styles.right}>
                            <h2>Gửi tin nhắn cho chúng tôi</h2>
                            <form>
                                <label>Email <span>*</span></label>
                                <input type="Email" placeholder='Email' />
                                <label>Họ và Tên <span>*</span></label>
                                <input type="text" placeholder='Họ và Tên' />
                                <label>Nội dung <span>*</span></label>
                                <textarea placeholder="Nội dung"></textarea>
                                <button type="submit">Gửi đi</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact