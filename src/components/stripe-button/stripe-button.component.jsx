import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({price}) => {
    //stripe wants to see value in cents
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IGv40FeDzbfYpwUWiFozNUbrkRmXLNA0Kr047pULDs4s3DgSCZ9Ln0BA8KlSSzyxvctnRNyZA7KbCbmJyuiLItX002qv0TB83'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
        label ="Pay Now"
        name = 'Rockys Pet Shop.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton