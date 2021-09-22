import React, {useState} from 'react'
import { APIConfig } from '../../store/API-Config';
import ShoppingContext from "../../store/itemsinCart";
import {Container, Typography, Button, Grid} from '@material-ui/core'
import useStyles from './styles';
import cartItem from './CartItem/cartItem';

const shoppingCart = ({props}) => {
    const classes=useStyles();


    const EmptyCart=() =>(
        <Typography variant="subtitle1">You have no items in your shopping cart, 
        <Link to="/" className={classes.link}> start adding some!</Link>
        </Typography>
    )

    const FilledCart =() =>(
        <>
        <Grid container spacing={3}>
            {cart.map((item)=>(
                <Grid item xs={12} sm={4} key={item.id}>
                  <cartItem item={item}/>
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">
                Subtotal: {cart.subtotal}
                <div>
                    <button className={classes.emptyButton} size="large" type="button" variant="contained"color="secondary" onClick={handleEmptyCart}>Empty Cart</button>
                    <button className={classes.checkoutButton} size="large" type="button" variant="contained"color="primary">Checkout</button>
                </div>
            </Typography>
        </div>
        </>
    )
    if(!cart) return 'Loading ...';
    return (
        <Container>
             <div className={classes.toolbar}/>
             <Typography className={classes.title} variant={h3}> Your Shopping Cart</Typography>
             {!cart.length ? <EmptyCart/> : <FilledCart />}
             
        </Container>
       
    )
}


export default shoppingCart
