import React from "react";
import { GoThreeBars } from "react-icons/go";
import Sidebar from "../Design/SideBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className='navbar bg-body-tertiary'>
      <div className='container-fluid'>
        <div className='navbar-brand'>
          <Link to='/'>
            <img
              src='https://i.pinimg.com/originals/b6/f7/f0/b6f7f09123c20a6d7f95d14297cb73a7.png'
              className='logo-img'
            />
          </Link>
        </div>
        <div>
          <button
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasRight'
            aria-controls='offcanvasRight'
            className='button'
          >
            <GoThreeBars />
          </button>

          <div
            className='offcanvas offcanvas-end'
            tabIndex='-1'
            id='offcanvasRight'
            aria-labelledby='offcanvasRightLabel'
          >
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasRightLabel'>
                Categories
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
