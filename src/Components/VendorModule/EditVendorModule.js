import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditVendorModule = () => {
  const [vendor, setVendor] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://192.168.0.140:8080/api/getVendorById/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error, "e"));
  });
  return (
    <div>
      <div className='my-form py-3'>
        <label>
          Name :
          <input className='input' type='text' />
        </label>
        <label>
          Email :
          <input className='input' type='text' />
        </label>
        <label>
          Phone No :
          <input className='input' type='text' />
        </label>
        <label>
          Address :
          <input className='input' type='text' />
        </label>
        <label>
          Gst No :
          <input className='input' type='text' />
        </label>
        <label>
          Tin No :
          <input className='input' type='text' />
        </label>
      </div>
      {console.log(id)}
    </div>
  );
};

export default EditVendorModule;
