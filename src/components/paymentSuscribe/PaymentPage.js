import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import Card from './Card'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './cardUtils'
import { TextField, Button, Typography, Stack, Container } from '@mui/material'
import Page from '../Page';
import { Link as RouterLink } from 'react-router-dom';
import { size } from 'lodash'
import { color } from '@mui/system'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const styles ={
    btn:{
        width:'150px',
        height:'40px',
        fontSize:'20px',
        marginTop: '10px',
        color:'white'
    }
}

const PaymentPage = () => (
  <Page title="Checkout | Good Game">
  <Typography variant="h4" gutterBottom align='center'>
    Show yourself to our clients and be featured on tester searchs
    </Typography>
  <Styles>
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        active
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Card
              number={values.number || ''}
              name={values.name || ''}
              expiry={values.expiry || ''}
              cvc={values.cvc || ''}
              focused={active}
            />
            <div>
              <Field
                name="number"
                component="input"
                type="text"
                pattern="[\d| ]{16,22}"
                placeholder="Card Number"
                format={formatCreditCardNumber}
              />
            </div>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <Field
                name="expiry"
                component="input"
                type="text"
                pattern="\d\d/\d\d"
                placeholder="Valid Thru"
                format={formatExpirationDate}
              />
              <Field
                name="cvc"
                component="input"
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                format={formatCVC}
              />
            </div>
            <br></br>
            <hr
        style={{
            color: "green",
            backgroundColor: "green",
            height: 3
        }}
    />
    <br></br><center>
            <Typography>
            Suscribe: <b>$5</b>
            </Typography>
            <Typography>
            To be charged: <b>Monthly</b>
            </Typography>
            <Button style={styles.btn} to="/" size="small" variant="contained" component={RouterLink}>
                Pay: 5$
            </Button></center>
          </form>
        )
      }}
    />
  </Styles>
    </Page>
)


export default PaymentPage;