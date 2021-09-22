import React from 'react'
import {Typography, Button, Card, CardActions, cardContent, cardMedia} from '@material-ui/core';
import useStyles from './styles'

const cartItem = ({props}) => {
    const classes=useStyles();

    handleUpdateCartQty =(productId,productqty)=>{
        
    }

    return (
        <Card>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.linetotal}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={()=>handleUpdateCartQty(props.item.id, props.item.quantity-1)} >-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={()=>handleUpdateCartQty(props.item.id, props.item.quantity+1)}>+</Button>
                </div>

                <Button variant="contained" type="button" color="secondary" onClick={()=>handleRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default cartItem
