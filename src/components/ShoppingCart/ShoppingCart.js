import React,{useContext} from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './Styles';
import axios from 'axios';
import api from '../../Configuration/API';
import { authenticationService } from '../../services/authentication.service';


const ShoppingCartProducts = (props) => {
    const [cart, setCart] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState();

    function fetchCart() {
        setLoading(true);
        setError(null);

        headers = {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${authenticationService.currentUserValue.userData.jwt}`,
        }
        
        axios.get('/cart',{headers}).then(function (response) {
                setCart(response.data);
            }).catch(function (error) {
                setLoading(false);
                setError(error.message);
            });
    }

    useEffect(() => {
        fetchCart();
    }, []);

    const updateShoppingCart = (prods) => {
        api
            .patch(
                '/buyers/' +
                authenticationService.currentUserValue.userId +
                '/shoppingcart',
                prods
            )
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
                setError(error.message);
            });
    };
    const handleDelete = (id) => {
        updateShoppingCart(products.filter((product) => product.id !== id));
    };

    const prds = cart.cartLine.map((cartLine) => {
        return (
            <Chip
                variant="outlined"
                key={cartLine.id}
                size="large"
                label={cartLine.product.name + ' $' + cartLine.product.price}
                onDelete={() => {
                    handleDelete(cartLine.id);
                }}
            />
        );
    });

    let content = prds;
    if (products.length > 0) {
        content = prds;
    } else if (error) {
        content = <p>{error}</p>;
    } else if (isLoading) {
        content = <p> Empty Cart...</p>;
    }

    return (
        <Box display="flex" justifyContent="space-between" mb={1}>
            {content}
        </Box>
    );
};

export default ShoppingCart
