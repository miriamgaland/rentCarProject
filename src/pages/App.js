// Imports:
import "./App.css";
import "./AddCar";
//import CarSharing from "./contracts/CarSharing.json";

import { useEffect } from "react";

import CarList from "../components/CarList";
import CarSearch from "../components/CarSearch";
import RentCar from "./RentCar";
import Login from "../components/Login";
import UserProfile from "../components/UserProfile";
import { Link } from "react-router-dom";
import { data, users } from "../data";

import React from "react";
import { useState } from "react";
import AddCar from "./AddCar";

import Web3 from "web3";

function App() {
  const [pageName, setPageName] = useState("HOME");
  const [currentUser, setUser] = useState(undefined);
  const [currentData, setData] = useState(data);
  const [carRent, setCarToRent] = useState(undefined);
  const [account, setAccount] = useState(null);
  const [showSearch,setShowSearch]=useState(true)

  const addCarToList = (car) => {
    data.push({ ...car, id: data.length + 1 });
  };

  const filterCars = (min = 0, max = 100000000000, loc) => {
    let newData = [];
    for (const car of data) {
      if (
        car.price >= min &&
        car.price <= max &&
        car.location.toLowerCase().match("/*" + loc + "/*")
      ) {
        newData.push(car);
      }
    }
    setData(newData);
  };

  useEffect(() => {
    connectToWallet();
  }, []);

  const connectToWallet = async () => {
    // set the provider you want from Web3.providers
    const web3 = new Web3("http://localhost:7545");
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[2]);
    const account = await web3.eth.accounts.privateKeyToAccount(
      "361a5c7667d4dd85b9a14e9abf394d32a51140984fe0aa3c6df56ae26ad51c21"
    );
    console.log(account);
    setUser({
      address: accounts[0],
      balance: (balance / 10 ** 18).toFixed(2),
    });
    setAccount(account);
  };

  const MainPage = (
    <div className="App">
      <h1> Car Sharing </h1>
      <UserProfile user={currentUser} />
      <nav className="">
        <button onClick={()=>setShowSearch(false)}><img id="search-img" src={"./../search.jpg"}/></button>
        {!currentUser ? (
          <button onClick={() => setPageName("LOGIN")}>Log In</button>
        ) : (
          <button onClick={() => setUser(undefined)}>Log Out</button>
        )}
      </nav>
      {!showSearch?<CarSearch setShowSearch={setShowSearch} filterCars={filterCars}/>:<></>}
      
      <button id="add-car-button" onClick={() => setPageName("CAR_FORM")}>
        Add Car +{" "}
      </button>
      <CarList
        data={currentData}
        bookNowHandler={() => setPageName("RENT_FORM")}
        setCarToRent={setCarToRent}
      />
    </div>
  );

  const LoginPage = (
    <Login
      connectUser={setUser}
      returnToHomePage={() => {
        setPageName("HOME");
      }}
    />
  );

  const AddCarPage = (
    <AddCar
      addCarToList={addCarToList}
      returnToHomePage={() => {
        setPageName("HOME");
      }}
    />
  );

  const RentCarPage = <RentCar car={carRent} account={account} />;

  const showPage = () => {
    switch (pageName) {
      case "HOME":
        return MainPage;
      case "CAR_FORM":
        return AddCarPage;
      case "LOGIN":
        return LoginPage;
      case "RENT_FORM":
        return RentCarPage;
      default:
        return "HOME";
    }
  };

  return <div>{showPage()}</div>;
}

export default App;
