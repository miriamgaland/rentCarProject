import React from 'react';
import { Link } from "react-router-dom";
import './CarList.css'

function CarList({ data, bookNowHandler, setCarToRent}) {

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
              Manufacturer <b>{val.manufacturer}</b><br />
              Model <b>{val.model}</b><br />
              Year of manufacture <b>{val.year}</b><br />
              Price per day <b>{val.price}</b><br />
              Location <b>{val.location}</b>
            </div>
            <div><button className='list-btn' onClick={bookNow}> Book Now </button></div>
          </div>
        )
      })}
    </div>
  );
}

export default CarList;
