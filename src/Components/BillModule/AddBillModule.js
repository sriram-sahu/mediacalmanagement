import React, { useState } from "react";
import Header from "../../Design/Header";
import axios from "axios";
import { Link } from "react-router-dom";

function AddNewBillModule() {
  const [billData, setBillData] = useState({
    bill_no: "",
    customer_id: "",
    bill_amount: "",
    modeofPayment: "",
    cancellation_options: "",
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
  };

  return (
    <div>
      <Header />
      <form className='my-form py-3' onSubmit={handleSubmit}>
        <h1>Add New Bill</h1>
        <div className='button-container'>
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
            <label htmlFor='netPrice'>Net Price : {"  "}</label>
            <input
              id='netPrice'
              name='netPrice'
              type='text'
              placeholder='Enter Net Price'
              className='input'
              value={billData.unitPrice * billData.quantity}
            />
          </div>
          {errorMsg !== "" && <p className='error-msg'>*{errorMsg}</p>}
          <button type='submit' className='submit-btn'>
            <Link to='/AddBillModule' className='link'>
              Add Bill
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewBillModule;
