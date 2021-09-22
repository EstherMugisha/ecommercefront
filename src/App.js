import './App.css';
import React from 'react';
import Dashboard from "./containers/Dashboard/Dashboard";
import {BrowserRouter, Switch,Route,PrivateRoute} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
        <PrivateRoute
          path="/seller"
          roles={[Role.Seller]}
          component={SellerP}
        />
        <PrivateRoute path="/buyer" roles={[Role.Buyer]} component={Buyer} />
        <Route path="/sellers/:id" component={SellerPage} />
        <Route exact path="/" component={Dashboard} />
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
