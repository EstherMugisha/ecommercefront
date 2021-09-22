import React,{useContext} from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './Styles';
import axios from 'axios';
import api from '../../Configuration/API';
import { authenticationService } from '../../services/authentication.service';


const Product = ({product}) => {
        const handleAddtoCart=()=>{
        api
        .get(
          'buyers/' +
            authenticationService.currentUserValue.userId +
            '/shoppingcart'
        )
        .then(function (response) {
          let products = response.data;
          products.push(product);
          api
            .patch(
              'buyers/' +
                authenticationService.currentUserValue.userId +
                '/shoppingcart',
              products
            )
            // .then(function (response) {
            //   setRefresh(true);
            // })
            .catch(function (error) {
              console.log(error);
            });
        });
    }
    console.log(product.name);
    const classes = useStyles();
    return (
        <Card className="classes.root" ref="addingtoCart">
            <CardMedia className={classes.media} image=''title={product.name} />
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
                <IconButton aria-label ="Add to Cart">
                    {<AddShoppingCart onClick={()=>handleAddtoCart()} />}
                </IconButton>
            </CardActions>
        </Card>
        
    )
}

export default Product
