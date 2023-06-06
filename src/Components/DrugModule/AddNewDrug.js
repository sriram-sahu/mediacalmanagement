import React, { useEffect, useState } from "react";
import Header from "../../Design/Header";
import axios from "axios";

function AddNewDrug() {
  const [formValues, setFormValues] = useState({
    drug_id: "",
    d_name: "",
    dose: "",
    company: "",
    batch_no: "",
    mfg_date: "",
    exp_date: "",
    quantity: "",
    vendor_id: "",
    unit_price: "",
  });
  const [message, setMessage] = useState("");
  const [vendorDetails, setVendorDetails] = useState([]);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = JSON.stringify(formValues);
    console.log(formValues);
    console.log(JSON.stringify(formValues));
    axios
      .post("http://192.168.0.140:8080/api/saveDrug", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => setMessage("Drug Added Successfully"))
      .catch(() => setMessage("Something Went Wrong"));
  };
  useEffect(() => {
    axios
      .get("http://192.168.0.140:8080/api/getAllVendor")
      .then((response) => setVendorDetails(response.data))
      .then((error) => console.log(error));
  }, []);
  return (
    <div>
      <Header />
      <form className='my-form py-3' onSubmit={handleSubmit}>
        <h1>Add New Drug</h1>
        <div>
          <label className='label' htmlFor='drug_id'>
            Drug id : {"  "}
          </label>
          <input
            id='drug_id'
            type='text'
            placeholder='Enter Drug Id'
            className='input'
            value={formValues.drug_id}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='label' htmlFor='d_name'>
            Name: {"  "}
          </label>
          <input
            id='d_name'
            type='text'
            placeholder='Enter Name'
            className='input'
            value={formValues.d_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='label' htmlFor='dose'>
            Dose : {"  "}
          </label>
          <input
            id='dose'
            type='text'
            placeholder='Enter Dose'
            className='input'
            value={formValues.dose}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='label' htmlFor='company'>
            Company: {"  "}
          </label>
          <input
            id='company'
            type='text'
            placeholder='Enter Company'
            className='input'
            value={formValues.company}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='label' htmlFor='batch_no'>
            Batch No : {"  "}
          </label>
          <input
            id='batch_no'
            type='text'
            placeholder='Enter Batch No'
            className='input'
            value={formValues.batch_no}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='mfg_date'>MFG Date : {"  "}</label>
          <input
            id='mfg_date'
            type='date'
            placeholder='Enter MFG Date'
            className='input'
            value={formValues.mfg_date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='exp_date'>EXP Date : {"  "}</label>
          <input
            id='exp_date'
            type='date'
            placeholder='Enter EXP Date'
            className='input'
            value={formValues.exp_date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='quantity'>Quantity : {"  "}</label>
          <input
            id='quantity'
            type='text'
            placeholder='Enter Quantity'
            className='input'
            value={formValues.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='vendor_id'>Vendor Id : {"  "}</label>
          <select
            id='vendor_id'
            className='input'
            value={formValues.vendor_id}
            onChange={handleInputChange}
          >
            {vendorDetails.map((each) => (
              <option key={each.vendor_id}>{each.vendor_id}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='unit_price'>Unit Prize : {"  "}</label>
          <input
            id='unit_price'
            type='text'
            placeholder='Enter Unit Prize'
            className='input'
            value={formValues.unit_price}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className='submit-btn'>
          Add Drug
        </button>
      </form>
    </div>
  );
}

export default AddNewDrug;
