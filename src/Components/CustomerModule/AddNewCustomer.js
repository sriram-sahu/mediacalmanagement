import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../Design/Header";
import axios from "axios";

function AddNewCustomer() {
  const [formData, setFormData] = useState({
    customer_id: "",
    c_name: "",
    c_phoneno: "",
    c_address: "",
    c_email: "",
  });
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const { customer_id, c_name, c_phoneno, c_address, c_email } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customer_id === "") {
      setErrorMsg("Enter Customer Id");
    } else if (c_name === "") {
      setErrorMsg("Enter Name");
    } else if (c_phoneno === "") {
      setErrorMsg("Enter Phone no");
    } else if (c_address === "") {
      setErrorMsg("Enter Address");
    } else if (c_email === "") {
      setErrorMsg("Enter Email");
    } else {
      console.log(formData);
      let data = JSON.stringify(formData);
      console.log(JSON.stringify(formData));
      axios
        .post("http://192.168.0.140:8080/api/postCustomer", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then(() => setMessage("Drug Added Successfully"))
        .catch(() => setMessage("Something Went Wrong"));
    }
  };

  return (
    <div>
      <Header />
      <form className='my-form py-3' onSubmit={handleSubmit}>
        <h1>Add New Customer</h1>
        <div>
          <label className='label' htmlFor='customer_id'>
            Customer id : {"  "}
          </label>
          <input
            id='customer_id'
            type='text'
            placeholder='Enter Customer Id'
            className='input'
            value={customer_id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='label' htmlFor='c_name'>
            Name : {"  "}
          </label>
          <input
            id='c_name'
            type='text'
            placeholder='Enter Name'
            className='input'
            value={c_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='label' htmlFor='c_phoneno'>
            Phone No : {"  "}
          </label>
          <input
            id='c_phoneno'
            type='text'
            placeholder='Enter Phone No'
            className='input'
            value={c_phoneno}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='label' htmlFor='c_address'>
            Address: {"  "}
          </label>
          <input
            id='c_address'
            type='text'
            placeholder='Enter Address'
            className='input'
            value={c_address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='label' htmlFor='c_email'>
            Email : {"  "}
          </label>
          <input
            id='c_email'
            type='text'
            placeholder='Enter Email'
            className='input'
            value={c_email}
            onChange={handleChange}
          />
        </div>
        {errorMsg !== "" && <p className='error-msg'>*{errorMsg}</p>}
        <button type='submit' className='submit-btn'>
          Add Customer
        </button>
      </form>
    </div>
  );
}

export default AddNewCustomer;
