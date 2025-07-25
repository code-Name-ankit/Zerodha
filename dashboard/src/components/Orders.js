import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAallOrders] = useState([]);
  
  
    useEffect(() => {
      axios.get("http://localhost:3002/allOrders").then((res) => {
        // console.log(res.data);
        setAallOrders(res.data);
      });
    }, []);

  return (
   <>
         <h3 className="title">Orders ({allOrders.length})</h3>
   
         <div className="order-table">
           <table>
             <tr>
               <th>name</th>
               <th>qty.</th>
               <th>price</th>
               <th>mode</th>
              
             </tr>
   
             {allOrders.map((stock, index) => {
                 
               return (
                 <tr key={index}>
                   <td>{stock.name}</td>
                   <td>{stock.qty}</td>
                    <td>{stock.price}</td>
                     <td>{stock.mode}</td>
                   
                 </tr>
               );
             })}
             
           </table>
         </div>
   
         
             </>
     );
   };

export default Orders;
