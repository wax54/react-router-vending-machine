import React, { useState } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid';

import SiteNav from "./SiteNav";
import ShoppingCart from "./ShoppingCart";

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
    <header className="VendingMachine-header">
            <h1> Hello! I am the vending machine! </h1>
            <h3> Here are my options </h3>
                <ul>
                    {snackList.map( snack => (
                        <li key= { snack.path }>
                            <Link  to={snack.path}>{snack.name}</Link>
                        </li>
                    ))}
                </ul>
    </header>
);


const VendingMachine = () => {
    const [cart, setCart] = useState([]);

    const addToCart =  item  => setCart( cart => [...cart, {...item, id: uuid() }]);
    const removeFromCart = itemId => setCart(cart => cart.filter( ({ id }) => id !== itemId ));
    return (
    <div className="VendingMachine">
        <BrowserRouter>

            <SiteNav className="VendingMachine-nav" pageList={snackList} />

            <Route exact path="/" >
                <VendingMachineHeader /> 
            </Route>

            { snackList.map( ({ path, Component }) => (
                <Route key={path} exact path={path} >
                    <Component purchase={addToCart}/>
                </Route >
            ))}

            <ShoppingCart items={cart} remove={ removeFromCart } />

        </BrowserRouter>
    </div>
)};
export default VendingMachine