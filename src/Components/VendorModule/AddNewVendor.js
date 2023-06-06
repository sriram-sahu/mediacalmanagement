import React, { useState } from "react";
import Header from "../../Design/Header";
import axios from "axios";

function AddNewVendor() {
  const [formData, setFormData] = useState({
    vendor_id: "",
    vname: "",
    v_phoneno: "",
    v_address: "",
    tin_no: "",
    gst_no: "",
    v_email: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = JSON.stringify(formData);
    console.log(JSON.stringify(formData));
    axios
      .post("http://192.168.0.140:8080/api/saveVendor", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => setMessage("Vendor Added Successfully"))
      .catch(() => setMessage("Something Went Wrong"));
  };

  return (
    <div>
      <Header />
      <form className='my-form py-3' onSubmit={handleSubmit}>
        <h1>Add New Vender</h1>
        <div>
          <label className='label' htmlFor='vendor_id'>
            Vender id : {"  "}
          </label>
          <input
            id='vendor_id'
            type='text'
            placeholder='Enter Vender Id'
            className='input'
            value={formData.vendor_id}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='label' htmlFor='vname'>
            Name : {"  "}
          </label>
          <input
            id='vname'
            type='text'
            placeholder='Enter Name'
            className='input'
            value={formData.vname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='label' htmlFor='v_phoneno'>
            Ph. no : {"  "}
          </label>
          <input
            id='v_phoneno'
            type='text'
            placeholder='Enter Ph. no'
            className='input'
            value={formData.v_phoneno}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='label' htmlFor='v_address'>
            Address: {"  "}
          </label>
          <input
            id='v_address'
            type='text'
            placeholder='Enter Address'
            className='input'
            value={formData.v_address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='label' htmlFor='tin_no'>
            Tin no : {"  "}
          </label>
          <input
            id='tin_no'
            type='text'
            placeholder='Enter Tin no'
            className='input'
            value={formData.tin_no}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='gst_no'>Gst : {"  "}</label>
          <input
            id='gst_no'
            type='text'
            placeholder='Enter Gst no'
            className='input'
            value={formData.gst_no}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='v_email'>Email : {"  "}</label>
          <input
            id='v_email'
            type='text'
            placeholder='Enter Email'
            className='input'
            value={formData.v_email}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className='submit-btn'>
          Add Vender
        </button>
      </form>
    </div>
  );
}

export default AddNewVendor;
