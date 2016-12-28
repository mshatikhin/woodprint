// @flow
import styles from "./Home.css";
import React,{Component} from "react";
import Reviews from "../../components/Reviews";

class Home extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.reviewsWrapper}>
                    <Reviews />
                </div>
            </div>
        );
    }
}

export default Home;
