import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <header><img id="head-img" src={"./../image.jpg"}/></header> */}
    <Routes>
      <Route exact path="/" element={<App />} />
    </Routes>
    <footer style={{position:"sticky"}}>
      <div id="conact">
        <h3>Contact Us</h3>
        <div>
          <div className='f-div'>
            <img src="./whatsapp.png" className='footer-img' />
            <span className='f-span'>055-7115889</span>
          </div>
          <div className='f-div'>
            <img src="./instagram.png" className='footer-img' />
            <span className='f-span'>instagram.com/car_sharing/</span>
          </div>
          <div className='f-div'>
            <img src="./facebook.png" className='footer-img' />
            <span className='f-span'>facebook.com/CarSharing</span>
          </div>
        </div>
      </div>
    </footer>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
