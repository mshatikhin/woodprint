// @flow
import React, {PropTypes, Component} from "react";
import styles from "./Portfolio.css";

const propTypes = {
    albums: PropTypes.any
};

class PortfolioContainer extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                
            </div>
        );
    }
}
PortfolioContainer.propTypes = propTypes;

export default PortfolioContainer;
