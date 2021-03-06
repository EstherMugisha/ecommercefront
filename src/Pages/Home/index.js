import React, { useEffect } from 'react'
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Products from "../../containers/Products/Products";
import useStyles from './styles';
import { authenticationService } from '../../services/authentication.service';
import { AppBar, CssBaseline, Toolbar, Typography, Button, Chip, Avatar, Box, Container } from '@material-ui/core';
import Orders from '../Buyer/orders';
import Sellers from '../Buyer/sellers'
import { makeStyles } from '@material-ui/core';
import Role from '../../helpers/role';
import Reviews from '../../containers/Reviews/Reviews';


const navStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
const Home = () => {
 
    const classes = useStyles();
    const nav_bar = navStyles();
    const history = useHistory();
  
    useEffect(() => {
      if (authenticationService.currentUserValue) {
        if (authenticationService.currentUserValue.role === Role.Admin) {
          history.push('/admin');
        }
        if (authenticationService.currentUserValue.role === Role.Seller) {
          history.push('/seller');
        }
      }
    }, [history]);
  
    const redirectToSignup = () => {
      history.push('/register');
    };
    const redirectToLogin = () => {
      history.push('/login');
    };

    return (
        <>
            <CssBaseline />
            <AppBar postion="static">
                <Toolbar>
                    <Typography variant="h6" className={nav_bar.title} onClick={() => { history.push('/') }}>
                        E-commerce Shop
                    </Typography>
                {authenticationService.currentUserValue && (
                    <>
                        <Button color="inherit" onClick={() => { history.push('/buyer/orders'); }}> Orders</Button>
                        <Button color="inherit" onClick={() => { history.push('/buyer/sellers') }}>Follow Sellers</Button>
                        <Button color="inherit" onClick={() => { history.push('/cart') }}>Cart</Button>
                        <Chip
                                label={
                                authenticationService.currentUserValue &&
                                authenticationService.currentUserValue.userData.user.username
                            }
                            color="primary"
                        />

                        {<Avatar></Avatar>}
                        <Button color="inherit" onClick={() => { authenticationService.logout(); history.push('/'); }}> Logout</Button>
                    </>
                )}

                {!authenticationService.currentUserValue && (
                    <div>
                        <Button onClick={redirectToLogin} color="inherit" variant="outlined" className={classes.link}> Login </Button>
                        <Button onClick={redirectToSignup} color="inherit" variant="outlined" className={classes.link}>Sign Up</Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
        <Switch>
        <Route path="/buyer/orders" component={Orders} />
        <Route exact path="/buyer/sellers" component={Sellers} />
        <Route path="/buyer/products/:id" component={Reviews} />
        <Route exact path="/">
          <Box component="span" m={1}>
            <Container maxWidth="md">
              <Products />
            </Container>
          </Box>
        </Route>
        </Switch>
        </>
    )
}

export default Home
