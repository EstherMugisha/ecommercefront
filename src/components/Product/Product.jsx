import React from 'react'
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './Styles';
import axios from 'axios';
import api from '../../Configuration/API';
import {authenticationService} from '../../services/authentication.service';
import cogoToast from 'cogo-toast';
import {authHeader} from '../../helpers/auth-header';

const Product = ({product}) => {
    var headers = null
    if (authenticationService.currentUserValue) {
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${authenticationService.currentUserValue.userData.jwt}`,
        }
    }
    
    const data = {
        quantity: 1,
        id: product.id
    }
    function addItemToCart() {
        axios.post('/cart', data, {headers}).then(function (response) {
            // let products = response.data;
            // products.push(product);
            console.log(response.data);
            //add to global cart
            cogoToast.success('Product added to cart');
        }).catch(error => {
            cogoToast.success(error.message);
        })
    }

    const handleAddtoCart = () => {
        if (authenticationService.currentUserValue) {
            addItemToCart();
        } else {
            //display toast
            cogoToast.success('Login to add to cart');
        }
    }

    const classes = useStyles();
    return (
        <Card className="classes.root">
            <CardMedia className={classes.media} image='' title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        ${product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart">
                    {<AddShoppingCart onClick={() => handleAddtoCart()}/>}
                </IconButton>
            </CardActions>
        </Card>

    )
}

export default Product
