import React,{useRef, useContext} from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Field, Form, Formik, useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import api from '../../Configuration/API';
import useStyles from './styles'
import axios from 'axios';

const Signup = () => {
    const classes = useStyles();
    const history = useHistory();
    const APIs=useContext(api);
    const config =APIs.userAPI;
    const loginConfig=APIs.loginAPI
    
    return (
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          height: '100vh',
        }}
      >
        <Formik
        initialValues={{ username: '', password: '', fullname: '',email:''}}
        onSubmit={(values) => {
          let seller = false;
          let buyer = false;
          if (values.picked === 'seller') {
            seller = true;
          }
          if (values.picked === 'buyer') {
            buyer = true;
          }
          console.log('not signed up');
          const headers = {
            'Access-Control-Allow-Origin': '*',
        }
          axios.post(config, {
              username: values.username,
              password: values.password,
              name: values.fullname,
              email:values.email,
              role:2
            }, {headers})
            .then(function (response) {
              console.log("signed up", response.data)
              cogoToast.success('You have successfully registerd!');
              history.push('/login');
            });

          // axios.post(loginConfig,{headers},{
          //   username:values.username,
          //   password:values.password
          // })
          // .then(console.log("authenticated"))
          
        }}
      >
            {({ values }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field name="fullname">
                    {({ field, form, meta }) => (
                      <TextField
                        autoComplete="fname"
                        label="Fullname"
                        variant="outlined"
                        required
                        fullWidth
                        autoFocus
                        {...field}
                        type="text"
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="username">
                    {({ field, form, meta }) => (
                      <TextField
                        autoComplete="username"
                        label="Username"
                        variant="outlined"
                        required
                        fullWidth
                        autoFocus
                        {...field}
                        type="text"
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="password">
                    {({ field, form, meta }) => (
                      <TextField
                        autoComplete="password"
                        label="Password"
                        variant="outlined"
                        required
                        fullWidth
                        autoFocus
                        {...field}
                        type="password"
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="email">
                    {({ field, form, meta }) => (
                      <TextField
                        autoComplete="email"
                        label="email"
                        variant="outlined"
                        required
                        fullWidth
                        autoFocus
                        {...field}
                        type="email"
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <label>
                    <Field type="radio" name="picked" value="buyer"/>
                    Buyer
                  </label>
                  <label>
                    <Field type="radio" name="picked" value="seller" />
                    Seller
                  </label>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                Already have an account? 
                  <Link href="/login" variant="body2">
                    Sign in
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    );
  };
  
  export default Signup;