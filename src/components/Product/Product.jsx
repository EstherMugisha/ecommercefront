import React,{useContext} from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './Styles';
import ShoppingContext from "../../store/itemsinCart";

const Product = ({product}) => {
    const{cart,setCart} = useContext(ShoppingContext);

    const addToCart =(product.id, product.quantity) =>{
        setCart([...cart,product.id]);
    }
    const classes = useStyles();
    return (
        <Card className="classes.root">
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
                    {<AddShoppingCart onClick={()=>addToCart(product.id,1)} />}
                </IconButton>
            </CardActions>
        </Card>
        
    )
}

export default Product
