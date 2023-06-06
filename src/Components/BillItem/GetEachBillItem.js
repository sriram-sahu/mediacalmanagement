import axios from "axios";
import React, { useEffect, useState } from "react";

const GetEachBillItem = (props) => {
  const { billDetails } = props;
  const { bill_no, bill_items_id } = billDetails;
  const [AllBillDetails, setAllBillDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.0.140:8080/api/getBillItemsByBillNumber/${bill_no}`)
      .then((response) => setAllBillDetails(response.data))
      .catch();
  }, []);
  return (
    <div>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Bill Id</th>
            <th scope='col'>Drug Id</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Unit Price</th>
            <th scope='col'>Net Price</th>
          </tr>
        </thead>
        <tbody>
          {AllBillDetails.map((each) => (
            <tr>
              {console.log(each)}
              <th scope='row'>{bill_items_id}</th>
              <th scope='row'>{each.drug_id}</th>
              <td>{each.quantity}</td>
              <td>{each.unit_price}</td>
              <td>{each.net_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetEachBillItem;
