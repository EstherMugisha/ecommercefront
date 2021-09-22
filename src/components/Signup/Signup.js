import React,{useRef} from 'react';
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

const Signup = () => {
    const classes = useStyles();
    const history = useHistory();

    const formik=useFormik({
          initialValues:{ username: '', password: '', fullname: '',email:'' },
          onSubmit(values) {
            let seller = false;
            let buyer = false;
            let admin=false;
            if (values.picked === 'seller') {
              seller = true;
            }
            if (values.picked === 'buyer') {
              buyer = true;
            }
            if (values.picked === 'admin') {
              admin = true;
            }
            api
              .post('users', {
                username: values.username,
                password: values.password,
                name: values.fullname,
                email:values.email,
                seller: seller,
                buyer: buyer,
              })
              .then(function (response) {
                cogoToast.success('You have successfully registered!');
                history.push('/');
              });
          },
        handleReset(values){
          return this.initialValues;
        }
        })
    
    return (
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          height: '100vh',
        }}
      >
            {({ values }) => (
            <Form onSubmit={formik.handleSubmit,formik.handleReset}>
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
                        value={formik.values.fullname}
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
                        value={formik.values.username}
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
                        value={formik.values.password}
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
                        value={formik.values.email}
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
                  <label>
                    <Field type="radio" name="picked" value="admin" />
                    Admin
                  </label>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={formik.handleSubmit, formik.handleReset}
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
        
      </Box>
    );
  };
  
  export default Signup;