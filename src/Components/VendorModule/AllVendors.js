import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Design/Header";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiStatusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

function AllVenders() {
  const [venders, setVenders] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress);
  const [message, setMessage] = useState("");
  const [isEditable, setIsEditable] = useState("false");

  const navigate = useNavigate();

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
        .delete(`http://192.168.0.140:8080/api/deleteVendorById/${id}`)
        .then(() => {
          setMessage("Drug Deleted Successfully");
        })
        .catch(() => setMessage("Something Went Wrong"));
    }
  };
  const onClickEdit = (id) => {
    navigate(`/editVendor/${id}`);
  };
  const displaySuccessView = () => {
    return (
      <div>
        <div className='d-sm-none'>
          {venders.map((each) => (
            <div className='card m-3' key={each.vendor_id}>
              <div className='card-body'>
                <div className='space'>
                  <h1>Name :{each.vname}</h1>
                  <div>
                    <button className='btn btn-primary m-1'>Edit</button>
                    <button
                      className='btn btn-primary'
                      onClick={() => onDeleteItem(each.vendor_id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p>Email : {each.v_email}</p>
                <p>Phone No : {each.v_phoneno}</p>
                <p>Address : {each.v_address}</p>
                <p>Gst No : {each.gst_no}</p>
                <p>Tin No : {each.tin_no}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='table-responsive d-none d-sm-block'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Phone No</th>
                <th scope='col'>Address</th>
                <th scope='col'>Gst no</th>
                <th scope='col'>Tin no</th>
                <th scope='col'>{""}</th>
                <th scope='col'>{""}</th>
              </tr>
            </thead>
            <tbody>
              {venders.map((each) => {
                return (
                  <tr>
                    <td>{each.vname}</td>
                    <td>{each.v_email}</td>
                    <td>{each.v_phoneno}</td>
                    <td>{each.v_address}</td>
                    <td>{each.gst_no}</td>
                    <td>{each.tin_no}</td>
                    <td>
                      <button className='btn btn-primary m-1'>Edit</button>
                    </td>
                    <td>
                      <button
                        className='btn btn-primary'
                        onClick={() => onDeleteItem(each.vendor_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
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
    fetch("http://192.168.0.140:8080/api/getAllVendor")
      .then((response) => response.json())
      .then((data) => {
        setVenders(data);
        setApiStatus(apiStatusConstants.success);
      })
      .catch(() => setApiStatus(apiStatusConstants.failure));
  }, [message]);

  return (
    <div>
      {console.log(JSON.stringify(venders))}
      <Header />
      <div className='display py-3'>
        <h1>All Vendors</h1>
        <button type='button' className='btn btn-primary'>
          <Link className='link' to='/AddVender'>
            Add New
          </Link>
        </button>
      </div>
      {displayDetails()}
    </div>
  );
}

export default AllVenders;
