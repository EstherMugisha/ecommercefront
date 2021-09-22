import { useState, useContext, useEffect} from "react";
import React from "react";
import { Grid } from '@material-ui/core'
import Product from "../../components/Product/Product";
import useStyles from './styles'


const Products = ({products, handleAddtoCart}) => {
    const classes=useStyles();

    const pdts = products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} handleAddtoCart={handleAddtoCart}/>
        </Grid>
    ));

    let content = <p> No products available</p>;
    if(pdts.length > 0){
        content = pdts;
    }
    else if(error){
        content =<p>{error}</p>
    }

    else if (isLoading){
        content=<p>Loading Products ...</p>
    }

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {
                    content
                }
            </Grid>
        </main>

    );
}

export default Products;