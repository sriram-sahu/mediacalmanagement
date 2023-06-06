import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Header from "../../Design/Header";
import CustomerDetails from "./CustomerDetails";
import GetEachBillItem from "./GetEachBillItem";

const apiStatusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const GetAllBillItems = () => {
  const [bills, setBills] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress);
  const [displayCustomerDetails, setDisplayCustomerDetails] = useState(true);

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
        {bills.map((each) => (
          <div className='bill-item-details' key={each.bill_items_id}>
            <div className='display'>
              <p>Bill No : {each.bill_no}</p>
              <div>
                <p>Customer Details</p>
                <CustomerDetails id={each.bill_no} />
              </div>
            </div>
            <div>
              {displayCustomerDetails && (
                <div>
                  <GetEachBillItem billDetails={each} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    axios
      .get("http://192.168.0.140:8080/api/getAllBillItems")
      .then((response) => {
        setBills(response.data);
        setApiStatus(apiStatusConstants.success);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  return (
    <div>
      <Header />
      <div className='display py-3'>
        <h1>All Bills</h1>
        <button type='button' className='btn btn-primary link'>
          <Link className='link' to='/AddBill'>
            Add New
          </Link>
        </button>
      </div>
      {displayDetails()}
    </div>
  );
};

export default GetAllBillItems;
