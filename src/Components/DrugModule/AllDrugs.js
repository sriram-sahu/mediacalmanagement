import React from "react";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Header from "../../Design/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import EditDrug from "./EditDrug";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const apiStatusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AllDrugs() {
  const [allDrugs, setDrugs] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress);
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const [activeId, setActiveId] = useState(null);
  const handleOpen = (id) => {
    setOpen(true);
    setActiveId(id);
  };
  const handleClose = () => setOpen(false);

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
        .delete(`http://192.168.0.140:8080/api/deleteById/${id}`)
        .then(() => setMessage("Drug Deleted Successfully"))
        .catch(() => setMessage("Something Went Wrong"));
    }
  };

  const onClickEdit = (id) => {
    return <EditDrug />;
  };

  const displaySuccessView = () => {
    return (
      <div>
        <div className='d-sm-none'>
          {allDrugs.map((each) => (
            <div className='card m-3'>
              <div className='card-body' key={each.drug_id}>
                <div className='space'>
                  <h1>Name :{each.d_name}</h1>
                  <div>
                    <button
                      className='btn btn-primary m-1'
                      onClick={() => onClickEdit(each.drug_id)}
                    >
                      Edit
                    </button>
                    <button
                      className='btn btn-primary'
                      onClick={() => onDeleteItem(each.drug_id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p>Brand :{each.company}</p>
                <p>quantity : {each.quantity}</p>
                <p>Dose : {each.dose}</p>
                <p>Batch No: {each.batch_no}</p>
                <p>Vendor Id : {each.vendor_id}</p>
                <p>MFG Date : {each.mfg_date}</p>
                <p>EXP Date : {each.exp_date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='table-responsive d-none d-sm-block'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Brand</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Batch No</th>
                <th scope='col'>Vendor Id</th>
                <th scope='col'>MFG Date</th>
                <th scope='col'>EXP Date</th>
                <th scope='col'>{""}</th>
                <th scope='col'>{""}</th>
              </tr>
            </thead>
            <tbody>
              {allDrugs.map((each) => (
                <tr id={each.drug_id}>
                  <td>{each.d_name}</td>
                  <td>{each.company}</td>
                  <td>{each.quantity}</td>
                  <td>{each.batch_no}</td>
                  <td>{each.vendor_id}</td>
                  <td>{each.mfg_date}</td>
                  <td>{each.exp_date}</td>
                  <td>
                    <button
                      className='btn btn-primary m-1'
                      onClick={() => handleOpen(each.drug_id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-primary'
                      onClick={() => onDeleteItem(each.drug_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id='transition-modal-title'
                  variant='h6'
                  component='h2'
                >
                  Text in a modal
                </Typography>
                <Typography id='transition-modal-description' sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Fade>
          </Modal>
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
    fetch("http://192.168.0.140:8080/api/getAllDrug")
      .then((response) => response.json())
      .then((data) => {
        setDrugs(data);
        setApiStatus(apiStatusConstants.success);
      })
      .catch((error) => console.error("Error fetching drugs:", error));
  }, []);

  return (
    <div>
      <Header />
      <div className='display py-3'>
        <h1>All Drugs</h1>
        <button type='button' className='btn btn-primary'>
          <Link className='link' to='/AddDrug'>
            Add New
          </Link>
        </button>
        {console.log(JSON.stringify(allDrugs))}
      </div>
      {displayDetails()}
    </div>
  );
}

export default AllDrugs;
