// @flow

import React, { useContext, useEffect } from "react";
import { Auth0Context } from "src/context/Auth0Context";

export const Billing = () => {
  const { getTokenSilently } = useContext(Auth0Context);
  const callApi = async () => {
    try {
      const token = await getTokenSilently();
      console.log(token);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  return <div>This is the billing page</div>;
};

export default Billing;
