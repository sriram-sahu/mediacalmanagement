import React from "react";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Header from "../../Design/Header";
import { Link } from "react-router-dom";
import axios from "axios";

const apiStatusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

function AllCustomers() {
  const [customers, setCustomers] = useState([]);
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

  const onDeleteItem = (id) => {
    let alert = window.confirm("You want to Delete Item");
    if (alert) {
      axios
        .delete(`http://192.168.0.140:8080/api/deleteBillItemsById/${id}`)
        .then(() => setMessage("Drug Deleted Successfully"))
        .catch(() => setMessage("Something Went Wrong"));
    }
  };

  const displaySuccessView = () => {
    return (
      <div>
        <div className='d-sm-none'>
          {console.log(customers)}
          {customers.map((each) => (
            <div className='card m-3' key={each.customer_id}>
              <div className='card-body'>
                <div className='space'>
                  <h1>Name :{each.c_name}</h1>
                  <div>
                    <button className='btn btn-primary m-1'>Edit</button>
                    {/* <button
                    className='btn btn-primary'
                    onClick={() => onDeleteItem(each.customer_id)}
                  >
                    Delete
                  </button> */}
                  </div>
                </div>
                <p>Email: {each.c_email}</p>
                <p>Phone No :{each.c_phoneno}</p>
                <p>Address : {each.c_address}</p>
              </div>
            </div>
          ))}
        </div>
        <div class='table-responsive d-none d-sm-block'>
          <table class='table'>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Phone No</th>
                <th scope='col'>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((each) => (
                <tr>
                  <td>{each.c_name}</td>
                  <td>{each.c_email}</td>
                  <td>{each.c_phoneno}</td>
                  <td>{each.c_address}</td>
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
    fetch("http://192.168.0.140:8080/api/getAllCustomer")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setApiStatus(apiStatusConstants.success);
      })
      .catch((error) => console.error("Error fetching drugs:", error));
  }, []);

  return (
    <div>
      <Header />
      <div className='display py-3'>
        <h1>All Customers</h1>
        <button type='button' className='btn btn-primary'>
          <Link className='link' to='/AddCustomer'>
            Add New
          </Link>
        </button>
      </div>
      {displayDetails()}
    </div>
  );
}

export default AllCustomers;
