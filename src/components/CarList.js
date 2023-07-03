import React from 'react';
import { Link } from "react-router-dom";
import './CarList.css'

function CarList({ data, bookNowHandler, setCarToRent }) {

  return (
    <div id="list">
      {data.map((val) => {
        const bookNow = () => {
          bookNowHandler()
          setCarToRent(val)
        }
        return (
          <div className='card' key={val.id}>
            <img className='img' src={val.carimage} />
            <div>
              Manufacturer <span>{val.manufacturer}</span><br />
              Model <span>{val.model}</span><br />
              Year of manufacture <span>{val.year}</span><br />
              Price per hour <span>{val.price}</span><br />
              Location <span>{val.location}</span>
            </div>
            <div><button className='list-btn' onClick={bookNow}> Book Now </button></div>
          </div>
        )
      })}
      {/* <table>
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
      </table> */}

    </div>
  );
}

export default CarList;
