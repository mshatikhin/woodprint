// @flow
import styles from "./Home.css";
import React, {Component} from "react";
import Reviews from "../../components/Reviews";
import Header from "../../components/Header/Header";
import SizeInfo from "../../components/SizeInfo/SizeInfo";

class Home extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.posterWrapper}>
                    <div className={styles.logo}>
                        <Header/>
                    </div>
                    <div className={styles.posterText}>
                        Фото на натуральном дереве — <br/>идеальный подарок к любому случаю
                    </div>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.landingWrapper}>
                        <img className={styles.imageLeftWrapper} src={require("./images/1.png")} alt=""/>
                        <div className={styles.textWrapper}>
                            <header className={styles.header}>Одиночная фотография</header>
                            <div>
                                Фотография, напечатанная на дереве — прекрасный подарок родным и близким,  который подойдет к любому празднику.
                                 Дерево — не просто прочный и надежный материал, он наполнен душой и усилит ваши фотографии теплотой и радостью.
                            </div>
                        </div>
                    </div>
                    <div className={styles.landingWrapper}>
                        <div className={styles.textWrapper}>
                            <header className={styles.header}>Триптих</header>
                            <div>
                                Мини-сюжет, состоящий из трех фотографий, объединенных общим сюжетом или тематикой. Придет на помощь, когда одного фото недостаточно.  Возможны различные вариации триптиха, отпустите вашу фантазию и создайте свой неповторимый вариант.
                            </div>
                            <div className={styles.spec}>
                                <span className={styles.specInfo}>Основа: Сосна, 28 мм</span>
                                <span className={styles.specInfo}>Размер: 20х30 см (3 шт)</span>
                            </div>
                        </div>
                        <img className={styles.imageRightWrapper} src={require("./images/2.png")} alt=""/>
                    </div>
                    <div className={styles.landingWrapper}>
                        <img className={styles.imageLeftWrapper} src={require("./images/3.png")} alt=""/>
                        <div className={styles.textWrapper}>
                            <header className={styles.header}>Модульная картина</header>
                            <div>
                                Целая история, рассказанная посредством фотографий, бережно пересенных на  поверхность дерева. Отлично подойдет для печати масштабных мероприятий,  путешествий и семейных
                                 Набор из нескольких фотографий, обычно не более пяти, но возможны и другие варианты по желанию заказчика
                            </div>
                            <div className={styles.spec}>
                                <span className={styles.specInfo}>Основа: Сосна, 28 мм</span>
                                <span className={styles.specInfo}>Размер: 90х60 см (1 шт), 40х40 см (4 шт)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sizeWrapper}>
                    <SizeInfo />
                </div>
                <div className={styles.reviewsWrapper}>
                    <Reviews />
                </div>
            </div>
        );
    }
}

export default Home;
