import React from 'react';
import  { useState } from 'react';

const SubscriptionPlan = ({ plans, handlePlanSelect }) => {
  return (
    <div className="subscription-plans">
      <h2>Choose a Subscription Plan</h2>
      <ul>
        {plans.map(plan => (
          <li key={plan.id}>
            <label>
              <input
                type="radio"
                name="plan"
                value={plan.id}
                onChange={() => handlePlanSelect(plan.id)}
              />
              {plan.name} - ${plan.price}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};



const PaymentForm = ({ selectedPlan, handlePayment }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentSubmit = event => {
    event.preventDefault();
    const paymentData = {
      planId: selectedPlan,
      cardNumber,
      expiry,
      cvv
    };
    handlePayment(paymentData);
  };

  return (
    <div className="payment-form">
      <h2>Payment Information</h2>
      <form onSubmit={handlePaymentSubmit}>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            value={expiry}
            onChange={e => setExpiry(e.target.value)}
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={e => setCvv(e.target.value)}
          />
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};



export {SubscriptionPlan,PaymentForm};
