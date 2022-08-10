import React from "react";

export default function Navbar({ onHide }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <span className="navbar-brand text-light fw-bold" href="#">
          LOGO
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <div className="navbar-nav ml-auto">
            <div className="search-div">
              <input
                // onChange={({ target }) => setSearch(target.value)}
                type="text"
                className="search-form"
                placeholder="Search by Title or Brand"
              
              />
              <span className="icon" id="basic-addon2">
                <i className="fa fa-search"></i>
              </span>
            </div>

            <button
              type="button"
              onClick={onHide}
              className="btn ml-2 bg-light rounded-0 text-primary"
           
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
