import React from 'react';
import Razorpay from 'razorpay';
import {  Button } from 'react-bootstrap';  

const RazorpayPayment = ({ amount, onSuccess }) => {

  const options = {
    key: 'YOUR_RAZORPAY_KEY_ID', // Enter your Razorpay Key ID
    amount: amount * 100, // Amount in paise
    currency: 'INR',
    name: 'Your Company Name',
    description: 'Test Transaction',
    image: '/your_logo.png',
    handler: function(response) {
      onSuccess(true); // Invoke the callback with success status
    },
    prefill: {
      name: 'Your Name',
      email: 'your_email@example.com',
      contact: '9999999999',
    },
    notes: {
      address: 'Your Address',
    },
    theme: {
      color: '#3399cc',
    },
  };

  const openPaymentModal = () => {
    const rzp = new Razorpay(options);
    rzp.on('payment.failed', function (response) {
      onSuccess(false); // Invoke the callback with failure status
    });
    rzp.open();
  };

  return (
    <div>
      <Button variant="success" onClick={openPaymentModal}>Proceed to Pay {amount}</Button>
    </div>
  );
};

export default RazorpayPayment;
