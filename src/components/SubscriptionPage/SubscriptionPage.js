import React, { useState } from 'react';
import { SubscriptionPlan, PaymentForm } from '../Subscription/Subscription';
import './SubscriptionPage.css'; // SubscriptionPagely your own styling

const SubscriptionPage = () => {
  const subscriptionPlans = [
    { id: 1, name: 'Basic', price: 9.99 },
    { id: 2, name: 'Standard', price: 14.99 },
    { id: 3, name: 'Premium', price: 19.99 }
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = planId => {
    setSelectedPlan(planId);
  };

  const handlePayment = paymentData => {
    // Handle payment logic here
    console.log('Payment data:', paymentData);
  };

  return (
    <div className="SubscriptionPage">
      <SubscriptionPlan
        plans={subscriptionPlans}
        handlePlanSelect={handlePlanSelect}
      />
      {selectedPlan && (
        <PaymentForm
          selectedPlan={selectedPlan}
          handlePayment={handlePayment}
        />
      )}
    </div>
  );
};

export default SubscriptionPage;
