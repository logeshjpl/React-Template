import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './Farmfresh/Header';
import Section from './Farmfresh/Section';
import Services from './Farmfresh/Services';
import Quality from './Farmfresh/Quality';
import Choose from './Farmfresh/Choose';
import Test from './Farmfresh/Test';
import Fotter from './Farmfresh/Fotter';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Section/>
   <Services/>
   <Quality/>
   <Choose/>
   <Test/>
   <Fotter/>
  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

