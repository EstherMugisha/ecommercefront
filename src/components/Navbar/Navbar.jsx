import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {  ShoppingCart} from '@material-ui/icons';
import logo from "../../Assets/NavBarLogo.jpg"
import useStyles from './styles'

const Navbar = () => {
    const classes=useStyles();
    return (
        <>
        <AppBar position ="fixed" className={classes.AppBar} color="inherit">
            <Toolbar>
                <Typography>
                    <img src={logo} alt ="Commerce.js" height="25px" className={classes.image}/>
                    Our E-commerce App
                </Typography>
                <div className={classes.grow}>
                    <div className={classes.button}>
                        <IconButton aria-label="show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
            
        </>
    )
}

export default Navbar
