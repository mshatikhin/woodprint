import React, {Component} from "react";
import styles from "./Menu.css";
import Socials from "../Socials";

const MenuLink = ({url, title}) => <a className={styles.link} activeClassName={styles.activeLink} href={url}>
    {title}
</a>;

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={styles.wrap}>
                <MenuLink url="/home" title="ГЛАВНАЯ"/>
                <MenuLink url="/portfolio" title="ПОРТФОЛИО"/>
                <MenuLink url="/services" title="УСЛУГИ"/>
                <MenuLink url="/contact" title="КОНТАКТЫ"/>
                <div className={styles.socials}>
                    <Socials />
                </div>
            </nav>
        );
    }
}
