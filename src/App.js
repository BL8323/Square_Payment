import * as React from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

const applicationId = "sandbox-sq0idb-MrcMdTGKILvT4KTMb8xpWw";
const locationId = "LBVV3QKR4CFWH";

const MyComponent = () => {
  const cardTokenizeResponseReceived = (tokenReceived) => {
    console.log("Token Received -----", tokenReceived);
  };

  return (
    <PaymentForm
      applicationId={applicationId}
      locationId={locationId}
      cardTokenizeResponseReceived={cardTokenizeResponseReceived}
    >
      <CreditCard />
    </PaymentForm>
  );
};

export default MyComponent
