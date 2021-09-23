import './App.css';
import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute'
import SellerPage from './Pages/facilities/SellerPage';
import Buyer from './Pages/Buyer/index';
import Login from './Pages/facilities/Login';
import Register from './Pages/facilities/Register';
import Home from './Pages/Home/index';
import Role from './helpers/role'
import Admin from './Pages/admin/index'
import SellerProfile from './Pages/seller';
import api from './Configuration/API';

function App() {
  const base = 'http://localhost:8080';
  return (
    <api.Provider value={
      {
          productAPI: base + '/products',
          userAPI: base + '/users',
          loginAPI:base +'/authenticate'
      }
  }>
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
        <PrivateRoute
          path="/seller"
          roles={[Role.Seller]}
          component={SellerProfile}
        />
        <PrivateRoute path="/buyer" roles={[Role.Buyer]} component={Buyer} />
        <Route path="/sellers/:id" component={SellerPage} />
        <Route exact path="/" component={Home} />
        <Route path="*">
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
    </api.Provider>
  );
}

export default App;
