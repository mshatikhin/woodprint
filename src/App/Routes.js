// @flow

import React from "react";
import {Route, IndexRedirect} from "react-router";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound/NotFound";

let store;

export default function routes(storeRef) {
    store = storeRef;

    return (
        <Route path="/" component={ Layout }>
            <IndexRedirect to={"home"}/>
            <Route path="home" component={ Home }/>
            <Route path="*" component={ NotFound }/>
        </Route>
    )
}
