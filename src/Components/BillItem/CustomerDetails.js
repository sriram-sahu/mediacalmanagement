import axios from "axios";
import React, { useState, useEffect } from "react";

const CustomerDetails = (props) => {
  const { id } = props;
  const [customerData, setCustomerData] = useState({});

  useEffect(() => {
    const getCustomerId = async () => {
      let billApi = `http://192.168.0.140:8080/api/getBillModuleById/${id}`;
      let response = await fetch(billApi);
      let data = await response.json();
      let customer_id = data.customer_id;
      const customerApi = `http://192.168.0.140:8080/api/getCustomerModuleById/${customer_id}`;
      let customerResponse = await fetch(customerApi);
      let customerData = await customerResponse.json();
      setCustomerData(customerData);
    };
    getCustomerId();
  }, [id]);

  return (
    <div>
      {customerData.length !== 0 && (
        <div>
          <p> Name : {customerData.c_name}</p>
          <p> Phone No : {customerData.c_phoneno}</p>
          <p> Email : {customerData.c_email}</p>
          <p> Address : {customerData.c_address}</p>
          {console.log(customerData)}
          {console.log(customerData.c_name)}
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
