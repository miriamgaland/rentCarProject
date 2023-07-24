import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./RentCar.css";
import Web3 from "web3";
import CarSharing from "../contracts/CarSharing.json";

export default function RentCar({ car, returnToHomePage }) {
  const [hour, setHour] = useState("");
  const [web3, setWeb3] = useState(null)
  const options = [
    { value: 1, label: "1 a.m." },
    { value: 2, label: "2 a.m." },
    { value: 3, label: "3 a.m." },
    { value: 4, label: "4 a.m." },
    { value: 5, label: "5 a.m." },
    { value: 6, label: "6 a.m." },
    { value: 7, label: "7 a.m." },
    { value: 8, label: "8 a.m." },
    { value: 9, label: "9 a.m." },
    { value: 10, label: "10 a.m." },
    { value: 11, label: "11 a.m." },
    { value: 12, label: "12 a.m." },
    { value: 13, label: "1 p.m." },
    { value: 14, label: "2 p.m." },
    { value: 15, label: "3 p.m." },
    { value: 16, label: "4 p.m." },
    { value: 17, label: "5 p.m." },
    { value: 18, label: "6 p.m." },
    { value: 19, label: "7 p.m." },
    { value: 20, label: "8 p.m." },
    { value: 21, label: "9 p.m." },
    { value: 22, label: "10 p.m." },
    { value: 23, label: "11 p.m." },
    { value: 24, label: "12 p.m." },
  ];

  useEffect(() => {
    const connectMetamask = async () => {
      if (window.ethereum) {
        try {
          // Request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Create a new web3 instance
          const web3Instance = new Web3(window.ethereum);

          // Set the web3 instance and user's account address
          setWeb3(web3Instance);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('Metamask extension not detected!');
      }
    };

    connectMetamask();
  }, []);

  const handleRent = async () => {
    try {
      const [selectedAddress] = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(selectedAddress)
      if (parseInt(balance) < parseInt(24 * car.price * 10 ** 18)) {
        alert("Balance too low");
        returnToHomePage()
      }
      const contract = new web3.eth.Contract(
        CarSharing.abi,
        "0xa02d3a1fF29cdac792C85Be78C7C707BFD108E80"
      );

      const result = await contract.methods.rental().send({
        from: selectedAddress,
        value: web3.utils.toWei((24 * car.price).toString(), 'ether')
      })
      alert("Rental successful")
      returnToHomePage()
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-wrap">
      <h1> Car Rental</h1>
      <div id="rent-div">
        <div onClick={returnToHomePage}>
          <img className="home" src={"./../home.png"}></img>
        </div>
        <div>
          <img src={car.carimage} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "20vw", alignItems: "center", height: "50vh", justifyContent: "space-around" }}>
          <span>Manufacture <b>{car.manufacturer}</b></span>
          <span>Model <b>{car.model}</b></span>
          <span>Year of manufacture <b>{car.year}</b></span>
          <span>Price per day <b>{car.price}</b></span>
          <span>Location <b>{car.location}</b></span>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", fontSize: "larger", width: "12vw" }}>
            Hour
            <Select options={options} onChange={(e) => setHour(e.value)}>
              {/* {" "} */}
              Select Hour{" "}
            </Select></div>
          <button id="rent-now-button" onClick={handleRent}>
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}
