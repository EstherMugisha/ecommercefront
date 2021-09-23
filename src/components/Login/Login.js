import React from 'react';
import {useDispatch} from 'react-redux';
import {Field, Form, Formik} from 'formik';
import {login} from '../../store/user';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Box, Card, CardContent} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import cogoToast from 'cogo-toast';
import useStyles from './styles'

const LoginComponent = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
                height: '100vh',
            }}
        >
            <Card>
                <CardContent>
                    <Formik
                        initialValues={{username: '', password: ''}}
                        onSubmit={(values) => {
                            dispatch(login(values)).then(() => {
                                cogoToast.success('Login Successful!');
                                history.replace('/');
                            });
                        }}
                    >
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field name="username">
                                        {({field, form, meta}) => (
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
                                        {({field, form, meta}) => (
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
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </CardContent>
            </Card>
        </Box>
    );
};

export default LoginComponent;
  