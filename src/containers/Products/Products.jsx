import { useState, useContext, useEffect} from "react";
import React from "react";
import { Grid } from '@material-ui/core'
import Product from "../../components/Product/Product";
import useStyles from './styles'
import axios from "axios";
import api from "../../Configuration/API";
import { authenticationService } from "../../services/authentication.service";


const Products = (props) => {
  const classes=useStyles();
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  const APIs=useContext(api);
  const config =APIs.productAPI;

  function fetchProducts() {
    const headers = {
      'Access-Control-Allow-Origin': '*',
  }
    setLoading(true);
    setError(null);
    console.log("Products are not fetched yet")
    axios(config, {headers})
      .then((response)=> {
        setProducts(response.data);
        console.log("Products are fetched" + response.data)

      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
        setError(error.message);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

    const pdts = products.map((product) => {
      return(
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
        </Grid>
      )
    });

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
                {content}
            </Grid>
        </main>

    );
}

export default Products;