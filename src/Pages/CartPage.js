import React, { useContext } from 'react';
import { Context } from '../Context';
import { Grid, Typography } from '@material-ui/core';
import StripeCheckout from 'react-stripe-checkout';
import SingleCard from './MainPageComponents/SingleCard';

function CartPage() {
	const { cartItems, setCartItems } = useContext(Context);

	const cartCards = cartItems.map(movie => <SingleCard>{movie}</SingleCard>);

	const totalPrice = cartItems
		.map(movie => movie.price)
		.reduce((acc, amt) => acc + amt, 0);

	const handleToken = (token, addresses) => {
		setCartItems([]);
	};
	return (
		<Grid container direction='row' style={{ textAlign: 'center' }}>
			<Grid item xs={12} style={{ marginTop: '80px', marginBottom: '20px' }}>
				<Typography variant='h4'>Your Cart</Typography>
			</Grid>
			{cartCards}
			<Grid item xs={12}>
				<Typography>{`Total Price is $${totalPrice}`}</Typography>
			</Grid>
			<Grid style={{ alignItems: 'center' }} item xs={12}>
				<StripeCheckout
					stripeKey='pk_test_51J9OnyCuY8d0eRifs2B40Zf90yTZALfjrvnhGxpzcbkZI8K8qpLGeMVPGofic5LccikoEdexFVfM9q7StX2uIKkd00NG3nQW47'
					token={handleToken}
					billingAddress
					amount={totalPrice * 100}
				/>
			</Grid>
		</Grid>
	);
}
export default CartPage;
