// Imports:
import "./App.css";
//import CarSharing from "./contracts/CarSharing.json";
import React, { useEffect, useState } from "react";
import CarList from "../components/CarList";
import CarSearch from "../components/CarSearch";
import RentCar from "./RentCar";
import Login from "../components/Login";
import UserProfile from "../components/UserProfile";
import { data, users } from "../data";
import AddCar from "./AddCar";
import About from "./About";
import SignIn from "../components/SignIn";

import Web3 from "web3";

function App() {
  const [pageName, setPageName] = useState("HOME");
  const [currentUser, setUser] = useState(undefined);
  const [currentData, setData] = useState(data);
  const [carRent, setCarToRent] = useState(undefined);
  const [account, setAccount] = useState(null);
  const [showSearch, setShowSearch] = useState(true)

  const addCarToList = (car) => {
    data.push({ ...car, id: data.length + 1 });
  };

  const filterCars = (min = 0, max = 100000000000, loc) => {
    let newData = [];
    for (const car of data) {
      if (
        car.price >= min &&
        car.price <= max &&
        car.location.toLowerCase().match("/*" + loc.toLowerCase() + "/*")
      ) {
        newData.push(car);
      }
    }
    setData(newData);
  };

  // useEffect(() => {
  //   connectToWallet();
  // }, []);

  // const connectToWallet = async () => {
  //   // set the provider you want from Web3.providers
  //   const web3 = new Web3("http://localhost:7545");
  //   const accounts = await web3.eth.getAccounts();
  //   const balance = await web3.eth.getBalance(accounts[2]);
  //   const account = await web3.eth.accounts.privateKeyToAccount(
  //     "361a5c7667d4dd85b9a14e9abf394d32a51140984fe0aa3c6df56ae26ad51c21"
  //   );
  //   console.log(account);
  //   setUser({
  //     address: accounts[0],
  //     balance: (balance / 10 ** 18).toFixed(2),
  //   });
  //   setAccount(account);
  // };

  // useEffect(() => {
  //   const connectMetamask = async () => {
  //     if (window.ethereum) {
  //       try {
  //         // Request account access
  //         await window.ethereum.request({ method: 'eth_requestAccounts' });

  //         // Create a new web3 instance
  //         const web3Instance = new Web3(window.ethereum);

  //         // Set the web3 instance and user's account address
  //         //setWeb3(web3Instance);
  //         const account = await web3Instance.eth.getAccounts();
  //         //const balance=await web3Instance.eth.getBalance();
  //         //console.log('bala',balance)
  //         setAccount(account[0]);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     } else {
  //         console.error('Metamask extension not detected!');
  //     }
  //   };

  //   connectMetamask();
  // }, []);

  const MainPage = (
    <div className="App">
      <nav>
        <div className="nav-div">
          {!currentUser ? (
            <>
              <div className="nav-button" onClick={() => setPageName("LOGIN")}>Log In</div>
              <div className="nav-button" onClick={() => setPageName("SIGNIN")}>Sign In</div>
            </>
          ) : (
            <div className="nav-button" onClick={() => setUser(undefined)}>Log Out</div>
          )}
          <div className="nav-button" onClick={() => setPageName("CAR_FORM")}>
            Add Car
          </div>
          <div className="nav-button" onClick={() => setPageName("ABOUT")}>About</div>
          <div className="nav-button"><a href="#conact">Contact us</a></div>
        </div>
        <div className="nav-div search-div">
          <div style={{ height: "29px" }} onClick={() => setShowSearch(false)}>
            <img id="search-img" src={"./../search.png"} />
          </div>
        </div>
      </nav>
      <h1 style={{ position: "relative", top: "-14vh" }}> Car Sharing </h1>
      {!showSearch ? <CarSearch setShowSearch={setShowSearch} filterCars={filterCars} /> : <></>}
      <UserProfile user={currentUser} />
      <CarList
        data={currentData}
        bookNowHandler={() => setPageName("RENT_FORM")}
        setCarToRent={setCarToRent}
        returnToHomePage={() => {
          setPageName("HOME");
        }}
      />
    </div>
  );

  const LoginPage = (
    <Login
      connectUser={setUser}
      returnToHomePage={() => {
        setPageName("HOME");
      }}
      moveToSignIn={() => {
        setPageName("SIGNIN")
      }}
    />
  );

  const SignInPage = (
    <SignIn
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

  const RentCarPage = <RentCar car={carRent} account={account} returnToHomePage={() => {
    setPageName("HOME");
  }} />;

  const AboutPage = <About returnToHomePage={() => {
    setPageName("HOME");
  }} />;

  const showPage = () => {
    switch (pageName) {
      case "HOME":
        return MainPage;
      case "CAR_FORM":
        return AddCarPage;
      case "LOGIN":
        return LoginPage;
      case "SIGNIN":
        return SignInPage;
      case "RENT_FORM":
        return RentCarPage;
      case "ABOUT":
        return AboutPage;
      default:
        return "HOME";
    }
  };

  return <div className="App">{showPage()}</div>;
}

export default App;
