import axios from 'axios';


// actions/paymentActions.js

export const processPayment = (phoneNumber, amount) => async (dispatch) => {

    try {
        // Prepare the request body as an object
        const requestBody = {
            phoneNumber: phoneNumber,
            amount: amount
        };

       

        // Send the POST request with the request body
        const response = await axios.post('/mpesa/stk-push-request', requestBody
        );
        dispatch({ type: 'PAYMENT_SUCCESS', payload: response.data });
        console.log(response);
    } catch (error) {
        dispatch({ type: 'PAYMENT_FAILURE', payload: error.message });
    }
};
