import React,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { APIConfig } from '../../store/API-Config';
import { Switch, Route, Redirect} from 'react-router-dom';
import Products from "../Products/Products";
import ShoppingContext from "../../store/itemsinCart"

const Dashboard = () => {
const base ='http://localhost:8080';
const [cart, setCart]=useState([]);

    return (
        <ShoppingContext.Provider value={{cart, setCart}}>
        <APIConfig.Provider value ={
            {
                productAPI: base,
                userAPI: base + '/users',
                cartAPI: base + '/shoppingcart'
            }
        }>
        <div className="Dashboard">
            <Navbar />

            <Switch>
                <Route path="/products" component={Products} />
                {/* <Route path="/shoppingCart" component={ShoppingCart} /> */}
                {/* <Route path="/users" component ={Users} /> */}
                <Redirect from ="/" to = "/products" />
            </Switch>
            
        </div>
        </APIConfig.Provider>
        </ShoppingContext.Provider>
    )
}

export default Dashboard
