import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import SiteNav from "./SiteNav";
import Snickers from "./Snickers";
import Gum from "./Gum";
import Coke from "./Coke";

import "./VendingMachine.css";

const snackList = [
    { path: '/snickers', name: 'Snickers', Component: Snickers },
    { path: '/gum', name: 'Gum', Component: Gum },
    { path: '/coke', name: 'Coke', Component: Coke }
]

const VendingMachineHeader = () => (
    <header>
            <h1> Hello! I am the vending machine! </h1>
            <h3> Here are my options </h3>
                <ul>
                    {snackList.map( snack => (
                        <li>
                            <Link to={snack.path}>{snack.name}</Link>
                        </li>
                    ))}
                </ul>
    </header>
);


const VendingMachine = () => {
    return (
    <div className="VendingMachine">
        <BrowserRouter>

            <SiteNav className="VendingMachine-nav" pageList={snackList} />

            <Route exact path="/" >
                <VendingMachineHeader /> 
            </Route>
            { snackList.map( ({ path, Component }) => (
                <Route exact path={path} >
                    <Component />
                </Route >
            ))}
        </BrowserRouter>
    </div>
)};
export default VendingMachine