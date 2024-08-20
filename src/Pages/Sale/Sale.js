import React from 'react'
import styles from './Sale.module.scss'

const Sale = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src='/images/img_kmai.jpg' alt='img khuyen mai'/>
                </div>
            </div>
        </div>
    )
}

export default Sale