import React from "react";
import { Link } from "react-router-dom";
import Header from "../../src/Design/Header";

function Home() {
  return (
    <div>
      <Header />
      <h1 className='p-3'>DashBoard</h1>
      <div className='card-container'>
        <Link
          to='/AllVenders'
          className='card my-card'
          style={{ width: "18rem" }}
        >
          <div className='card-body text-center'>
            <img
              src='https://cdn.onlinewebfonts.com/svg/img_403874.png'
              className='my-logo'
            />
            <h5 className='card-title'>All Venders</h5>
          </div>
        </Link>
        <Link
          to='/AllCustomers'
          className='card my-card'
          style={{ width: "18rem" }}
        >
          <div className='card-body text-center'>
            <img
              src='https://www.vhv.rs/dpng/d/486-4865840_customer-icon-png-team-icon-font-awesome-transparent.png'
              className='my-logo'
            />
            <h5 className='card-title'>All Customers</h5>
          </div>
        </Link>
        <Link
          to='/AllDrugs'
          className='card my-card'
          style={{ width: "18rem" }}
        >
          <div className='card-body text-center'>
            <img
              src='https://static.vecteezy.com/system/resources/previews/000/637/367/original/vector-medicine-icon-symbol-sign.jpg'
              className='my-logo'
            />
            <h5 className='card-title'>All Drugs</h5>
          </div>
        </Link>
        <Link
          to='/AllBills'
          className='card my-card'
          style={{ width: "18rem" }}
        >
          <div className='card-body text-center'>
            <img
              src='https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-receipt-icon-png-image_321044.jpg'
              className='my-logo'
            />
            <h5 className='card-title'>All Bills</h5>
          </div>
        </Link>
        <Link
          to='/AllBillModules'
          className='card my-card'
          style={{ width: "18rem" }}
        >
          <div className='card-body text-center'>
            <img
              src='https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-receipt-icon-png-image_321044.jpg'
              className='my-logo'
            />
            <h5 className='card-title'>All Bill Modules</h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
