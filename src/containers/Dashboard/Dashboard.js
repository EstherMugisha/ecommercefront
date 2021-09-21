import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { APIConfig } from '../../store/API-Config';
import { Switch, Route, Redirect} from 'react-router-dom';
import Products from "../Products/Products";

const Dashboard = () => {
const base ='http://localhost:8080';

    return (
        <APIConfig.Provider value ={
            {
                productAPI: base,
                userAPI: base + '/users'
            }
        }>
        <div className="Dashboard">
            <Navbar />

            <Switch>
                <Route path="/products" component={Products} />
                {/* <Route path="/users" component ={Users} /> */}
                <Redirect from ="/" to = "/products" />
            </Switch>
            
        </div>
        </APIConfig.Provider>
    )
}

export default Dashboard
