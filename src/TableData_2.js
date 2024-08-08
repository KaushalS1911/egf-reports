import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import image from "./Group45.png";

function TableData_2() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://easygoldfincorp-reports.onrender.com/api/allCustomers")
      .then((response) => {
        setCustomers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);


  return (
    <>
      <div className="d-flex justify-content-between px-3 align-items-center border-bottom border-dark">
        <div style={{ height: "80px", margin: "15px 0px" }}>
          <img src={image} alt="logo" />
        </div>
        <div className="px-5">
          <ul className="nav">
            <li className="list">
              <NavLink to="/" exact activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="/about" activeClassName="active">
                Inquiry
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="container my-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
              <th scope="col">Country</th>
              <th scope="col">Pincode</th>
              <th scope="col">City</th>
              <th scope="col">Address</th>
              <th scope="col">Service</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map((customer, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phoneNo}</td>
                  <td>{customer.country}</td>
                  <td>{customer.pincode}</td>
                  <td>{customer.city}</td>
                  <td>{customer.address}</td>
                  <td>{customer.service}</td>
                  <td>{customer.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableData_2;
