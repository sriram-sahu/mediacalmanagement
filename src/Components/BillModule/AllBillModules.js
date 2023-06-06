import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Header from "../../Design/Header";

const apiStatusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

function AllBillModules() {
  const [billModule, setBillModule] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress);
  const [message, setMessage] = useState("");

  const displayLoadingView = () => {
    return (
      <div className='center'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  };

  const displayFailureView = () => {
    return (
      <div className='center'>
        <h1 className='no-found-heading'>
          Something went wrong. Please try again
        </h1>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    );
  };

  const displaySuccessView = () => {
    return (
      <div>
        <div className='d-md-none'>
          {console.log(billModule)}
          {billModule.map((each) => (
            <div className='card m-3' key={each.bill_no}>
              <div className='card-body'>
                <div className='space'>
                  <p>Bill No : {each.bill_no}</p>
                  <div>
                    <button className='btn btn-primary m-1'>Edit</button>
                  </div>
                </div>
                <p>Customer Id : {each.customer_id}</p>
                <p>Bill Amount: {each.bill_amount}</p>
                <p>Mode of Payment: {each.modeofPayment}</p>
                <p>Cancelation Options: {each.cancellation_options}</p>
              </div>
            </div>
          ))}
        </div>
        <div class='table-responsive d-none d-sm-block'>
          <table class='table'>
            <thead>
              <tr>
                <th scope='col'>Bill No</th>
                <th scope='col'>Customer Id</th>
                <th scope='col'>Bill Amount</th>
                <th scope='col'>Mode Of Payment</th>
                <th scope='col'>Cancelation Options</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {billModule.map((each) => (
                <tr>
                  <td>{each.bill_no}</td>
                  <td>{each.customer_id}</td>
                  <td>{each.bill_amount}</td>
                  <td>{each.modeofPayment}</td>
                  <td>{each.cancellation_options}</td>
                  <td>
                    <button className='btn btn-primary m-1'>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const displayDetails = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return displaySuccessView();
      case apiStatusConstants.failure:
        return displayFailureView();
      case apiStatusConstants.inProgress:
        return displayLoadingView();
      default:
        return null;
    }
  };

  useEffect(() => {
    axios
      .get("http://192.168.0.140:8080/api/getAllBillModule")
      .then((response) => {
        console.log(response);
        // setBillModule(response.data);
        setApiStatus(apiStatusConstants.success);
      })
      .catch((error) => {
        setBillModule(error.response.data);
        setApiStatus(apiStatusConstants.success);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className='display py-3'>
        <h1>Bill Modules</h1>
        {/* <button type='button' className='btn btn-primary link'>
          <Link className='link' to='/AddBill'>
            Add New
          </Link>
        </button> */}
      </div>
      {displayDetails()}
    </div>
  );
}

export default AllBillModules;
