import React, { useState, useEffect, useContext } from 'react';
import api from '../../Configuration/API';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MUIDataTable from 'mui-datatables';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Sellers = () => {
  const [sellers, setSellers] = useState([]);
  const classes = useStyles();

  const APIs=useContext(api);
  const config =APIs.sellerAPI;

  useEffect(getAllSeller, []);

  function getAllSeller() {
    const headers = {
      'Access-Control-Allow-Origin': '*',
  }
    axios
      .get(config, {headers})
      .then(function (response) {
        console.log(response.data);
        setSellers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function folloWSeller(id) {
    axios
      .patch('orders/' + id + '/cancel')
      .then(function (response) {
        // fetchOrdersByBuyer();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const options = {
    selectableRows: true,
    selectableRowsOnClick: true,
    onRowClick: handleRowClick,
  };

  function handleRowClick() {
    console.log('Row clicked');
  }

  const columns = [
    {
      name: 'fullName',
    },

    {
      name: 'Actions',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <button
                onClick={() => {
                  folloWSeller(tableMeta.rowData[0]);
                }}
              >
                Follow
              </button>
            </>
          );
        },
      },
    },
  ];

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <MUIDataTable
            title={'Sellers'}
            data={sellers}
            columns={columns}
            options={options}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sellers;
