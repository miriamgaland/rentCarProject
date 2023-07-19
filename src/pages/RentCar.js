import React, { useState } from "react";
import Select from "react-select";
import "./RentCar.css";
import Web3 from "web3";

//import CarSharing from "../contracts/CarSharing.json";

export default function RentCar({ car, account, returnToHomePage }) {
  const [hour, setHour] = useState("");
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

  const handleRent = async () => {
    //     try {
    //       const web3 = new Web3("http://localhost:7545");
    //       const accounts = await web3.eth.getAccounts();
    //       const balance = await web3.eth.getBalance(accounts[2]);

    //       if (parseInt(balance) < car.price * 10 ** 18) {
    //         alert("Balance too low");
    //         return;
    //       }
    // //matan ya ahabal

    //       const contract = new web3.eth.Contract(
    //         CarSharing.abi,
    //         "0xa02d3a1fF29cdac792C85Be78C7C707BFD108E80"      );

    //       const account = await web3.eth.accounts.privateKeyToAccount(
    //         "361a5c7667d4dd85b9a14e9abf394d32a51140984fe0aa3c6df56ae26ad51c21"

    //       );
    //       const tx = await contract.methods.rental().send({
    //         from: account.address,
    //         value: car.price * 10 ** 18,
    //       });
    //       alert("Rental successful");
    //     } catch (error) {
    //       console.log(error);
    //     }
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
