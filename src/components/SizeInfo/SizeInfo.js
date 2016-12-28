//@flow

import React from "react";
import styles from "./SizeInfo.css";

const sizes = [
    {
        size: "20х20",
        cost: "750 ₽"
    },
    {
        size: "20х30",
        cost: "1 100 ₽"
    },
    {
        size: "30х30",
        cost: "1 550 ₽"
    },
    {
        size: "30х40",
        cost: "1 750 ₽"
    },
    {
        size: "40х40",
        cost: "2 000 ₽"
    },
    {
        size: "40х60",
        cost: "2 500 ₽"
    },
    {
        size: "50х50",
        cost: "2 700 ₽"
    },
    {
        size: "60х100",
        cost: "5 600 ₽"
    },
]

class SizeInfo extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.header}>Популярные размеры</div>
                <div>
                    <div className={styles.printImages}></div>
                    <table className={styles.popularSizes}>
                        {sizes.map(s=><tr>
                            <td>{s.size}</td>
                            <td>.....................................</td>
                            <td>{s.cost}</td>
                        </tr>)}
                    </table>
                </div>
                <div className={styles.info}>
                    Возможно изготовление фотографии произвольного размера, стоимость рассчитывается индивидуально.
                </div>
                <div>
                    <button className={styles.orderBtn}>
                        Оформить заказ
                    </button>
                </div>
                <div className={styles.shippingWrapper}>
                    <div className={styles.header}>Сроки изготовления и доставка</div>
                    <div className={styles.shippingInfo}>
                        <div className={styles.shippingInfoCell}>
                            <img className={styles.image} src={require("./images/time.png")} alt=""/>
                            <div>
                                Изготовление от 3 рабочих дней
                            </div>
                            <div className={styles.hint}>
                                Для фото нестандартного размера срок рассчитывается индивидуально
                            </div>
                        </div>
                        <div className={styles.shippingInfoCell}>
                            <img className={styles.image} src={require("./images/shipping.png")} alt=""/>
                            <div>
                                Доставка по всей России
                            </div>
                            <div className={styles.hint}>
                                Сроки доставки зависят от выбранного оператора (Почта России, DPD, DHL и.т.п.)
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SizeInfo;