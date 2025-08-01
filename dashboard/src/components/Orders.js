import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAallOrders] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAallOrders(res.data);
    });
  }, []);

  const deleteOrder = async (name) => {
    try {
      const res = await axios.delete(`http://localhost:3002/sellOrder/${name}`);

      if (res.status === 200) {
        setMessage(res.data.message);
        setError("");
        setTimeout(() => {
          setMessage("");
        }, 2000);

        const refreshed = await axios.get("http://localhost:3002/allOrders");
        setAallOrders(refreshed.data);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to delete order");
      }
      setMessage("");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      {/* Show messages */}
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>qty.</th>
              <th>price</th>
              <th>mode</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
                <td>
                  <button onClick={() => deleteOrder(stock.name)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
