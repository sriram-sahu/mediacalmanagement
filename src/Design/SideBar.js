import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Sidebar() {
  return (
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'>
        <Link className='link' to='/'>
          Home
        </Link>
      </li>
      <li className='list-group-item'>
        <Link className='link' to='/AllVenders'>
          All Venders
        </Link>
      </li>
      <li className='list-group-item'>
        <Link className='link' to='/AddVender'>
          Add New Vendor
        </Link>
      </li>
      <li className='list-group-item'>
        <Link className='link' to='/AllDrugs'>
          All Drugs
        </Link>
      </li>
      <li className='list-group-item'>
        <Link className='link' to='/AddDrug'>
          Add New Drug
        </Link>
      </li>
      <li className='list-group-item'>
        <Link className='link' to='/AllCustomers'>
          All Customers
        </Link>
      </li>
      <li className='list-group-item'>
        <Link className='link' to='/AddCustomer'>
          Add New Customer
        </Link>
      </li>
      <li className='list-group-item'>
        <Link className='link' to='/AllBills'>
          Bill Module
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
