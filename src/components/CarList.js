import React from 'react';
import { Link } from "react-router-dom";

function CarList({data, bookNowHandler, setCarToRent}) {

 return (
   <div style={{height:"40vh",overflow:"scroll",boxShadow:"0 0 4px #dddddd"}}>
    <table>
        <tr>
          <th>Image</th>
          <th>Manufacturer</th>
          <th>Model</th>
          <th>Year</th>
          <th>Price</th>
          <th>Location</th>
          <th></th>
        </tr>
        {data.map((val) => {
          const bookNow = () => {
            bookNowHandler()
            setCarToRent(val)
          } 
          return (
            <tr key={val.id}>
              <td><img src={val.carimage}/></td>
              <td>{val.manufacturer}</td>
              <td>{val.model}</td>
              <td>{val.year}</td>
              <td>{val.price}</td>
              <td>{val.location}</td>
              <td><button onClick={bookNow}> Book Now </button></td>
            </tr>
          )
        })}
      </table>

   </div>
 );
}

export default CarList;
