import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import image from "./Group45.png";
import axios from "axios";

function TableData_1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://easygoldfincorp-reports.onrender.com/api/inquiry")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
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
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Country</th>
              <th scope="col">Pincode</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.country}</td>
                <td>{item.pincode}</td>
                <td>{item.state}</td>
                <td>{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableData_1;
