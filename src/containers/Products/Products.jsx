import { useState, useContext, useEffect} from "react";
import React from "react";
import { Grid } from '@material-ui/core'
import Product from "../../components/Product/Product";
import useStyles from './styles'
import { APIConfig } from "../../store/API-Config";
import axios from 'axios';

// const products = [
//     { id: 1, name: "shoes", description: "running", price: '$5' },
//     { id: 2, name: "laptop", description: "running", price: '10' }
// ]

const Products = (props) => {
    const classes=useStyles();
    const APIs = useContext(APIConfig);
    const productAPI = APIs.productAPI;

    const [products, setProducts]=useState([]);
    const [isLoading, setLoading]=useState(false);
    const [error, setError]=useState();

    //=====Fetching Products ==========
    function fetchProducts(){
        const headers={
            'Access-Control-Allow-Origin': '*',
        }
        setLoading(true);
        setError(null);

        axios(productAPI, {headers})
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            setError(error.message);
            setLoading(false);
        })
    }

    useEffect(fetchProducts, [productAPI]);

    const pdts = products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
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