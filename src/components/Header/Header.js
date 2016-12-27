// @flow

import styles from "./Header.css";
import Menu from "../Menu/Menu";
import React, {Component} from "react";

export default class Layout extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <a href="/" className={styles.logoLink}>
                        <div className={styles.logoText}>Woodprint</div>
                    </a>
                    <div className={styles.menu}>
                        <Menu />
                    </div>
                </div>
            </div>
        );
    }
}
