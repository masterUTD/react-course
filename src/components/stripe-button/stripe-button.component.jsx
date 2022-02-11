import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // cause stripe wants the price in cents
    const publishableKey = 'pk_test_51IWBgjExUpnN3Baw0GYgjuDaK0vk7uPITAwFY2CPBodGwF5RC8tkd5wWjDHfBNRNuIqynbPuSios9tk8WGCLq4mi00ClwSiHFC';

    const onToken = token => {
        console.log(token)
        alert('Payment successful')

    }

    return ( // si es un componente pero a la final es solo un button
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN CLOTHING LTD.'
            billingAddress
            shippingAddress
            image = 'https://www.festisite.com/static/partylogo/img/logos/manchester-united.png'
            description = { `Your total is  $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay right now'
            token = {onToken}
            stripeKey = {publishableKey}

        />


    );


};


export default StripeCheckoutButton;