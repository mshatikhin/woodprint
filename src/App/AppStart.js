import "babel-polyfill";
import "whatwg-fetch";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "../components/Layout/Layout"
import Home from "../pages/Home/Home"

const App = () => (
    <Layout>
        <Home />
    </Layout>
)

ReactDOM.render(<App/>, document.getElementById("app"));
