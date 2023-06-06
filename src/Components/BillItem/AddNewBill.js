import React, { useEffect, useState } from "react";
import Header from "../../Design/Header";
import axios from "axios";
import { Link } from "react-router-dom";

function AddNewBill() {
  const [billData, setBillData] = useState({
    billId: "",
    billNo: "",
    drugId: "",
    quantity: "",
    unitPrice: "",
    netPrice: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBillData({
      ...billData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (billData.billId === "") {
      setErrorMsg("Enter Bill ID");
    } else if (billData.billNo === "") {
      setErrorMsg("Enter Bill No");
    } else if (billData.drugId === "") {
      setErrorMsg("Enter Drug Id");
    } else if (billData.quantity === "") {
      setErrorMsg("Enter Quantity");
    } else {
      let data = JSON.stringify(billData);
      console.log(JSON.stringify(billData));
      axios
        .post("http://192.168.0.140:8080/api/postCustomer", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then(() => setMessage("Drug Added Successfully"))
        .catch(() => setMessage("Something Went Wrong"));
    }
  };

  useEffect(() => {
    axios
      .post("http://192.168.0.140:8080/api/postCustomer")
      .then(() => setMessage("Drug Added Successfully"))
      .catch(() => setMessage("Something Went Wrong"));
  });

  return (
    <div>
      <Header />
      <form className='my-form py-3' onSubmit={handleSubmit}>
        <h1>Add New Bill</h1>
        <div>
          <div className='button-div'>
            <label className='label' htmlFor='billId'>
              Enter Bill id :{" "}
            </label>
            <input
              id='billId'
              name='billId'
              type='text'
              placeholder='Enter Bill Id'
              className='input'
              value={billData.billId}
              onChange={handleInputChange}
            />
          </div>
          <div className='button-div'>
            <label className='label' htmlFor='billNo'>
              Enter Bill No :{" "}
            </label>
            <input
              id='billNo'
              name='billNo'
              type='text'
              placeholder='Enter Bill No'
              className='input'
              value={billData.billNo}
              onChange={handleInputChange}
            />
          </div>
          <div className='button-div'>
            <label className='label' htmlFor='drugId'>
              Drug Id :{" "}
            </label>
            <input
              id='drugId'
              name='drugId'
              type='text'
              placeholder='Enter Drug Id'
              className='input'
              value={billData.drugId}
              onChange={handleInputChange}
            />
          </div>
          <div className='button-div'>
            <label className='label' htmlFor='quantity'>
              Quantity:{" "}
            </label>
            <input
              id='quantity'
              name='quantity'
              type='text'
              placeholder='Enter Quantity'
              className='input'
              value={billData.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div className='button-div'>
            <label className='label' htmlFor='unitPrice'>
              Unit Price :{" "}
            </label>
            <input
              id='unitPrice'
              name='unitPrice'
              type='text'
              placeholder='Enter Unit Price'
              className='input'
              value={billData.unitPrice}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <h1>Net Price: {billData.unitPrice * billData.quantity}</h1>
        {errorMsg !== "" && <p className='error-msg'>*{errorMsg}</p>}
        <button type='submit' className='submit-btn'>
          <Link to='/AddBillModule' className='link'>
            Add Bill
          </Link>
        </button>
      </form>
    </div>
  );
}

export default AddNewBill;
