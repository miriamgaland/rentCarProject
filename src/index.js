import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import AddCar from './pages/AddCar';
import Login from './components/Login';
// import Rental from './pages/Rental';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <header><img id="head-img" src={"./../image.jpg"}/></header>
      <Routes>
        <Route exact path="/" element={<App />} />
          {/* <Route index element={<App />} /> */}
        <Route path="/addCar" element={<AddCar />} />
        <Route path="/login" element={<Login />} />
          {/* <Route path="rental" element={<Rental />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <footer>
        <div>
          <h4>about...</h4>
        </div>
      </footer>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
