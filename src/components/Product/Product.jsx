import React,{useContext} from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './Styles';
import ShoppingContext from "../../store/itemsinCart";
import axios from 'axios';
import { APIConfig } from '../../store/API-Config';

const Product = ({product}) => {
    const APIs=useContext(APIConfig);
    const cartAPI=APIs.cartAPI;
    const addingtoCart=useRef();

    const handleAddtoCart=()=>{
        const addtocart=addingtoCart.current;
        const data={id:addtocart['id'].value, name:addtocart['name'].value, price:addtocart['price'].value, description:addtocart['description']}
        axios.post(cartAPI, data)
        .then(data =>{
            console.log('Success:',data);
        })
    }

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
