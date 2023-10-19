import React from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   NavLink
// } from 'react-router-dom';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home.js";
import ViewCustomers from "./ViewCustomers.js";
import RegisterCustomer from "./RegisterCustomer.js";

class App extends React.Component {

  render(){
  return (
    
      <div>
        <h1>Single Page Web Application</h1>
        <ul className="links">
          <li><NavLink exact to ="/">Home</NavLink></li>
          <li><NavLink to="/viewCustomers">View Customers</NavLink></li>
          <li><NavLink to="/registerCustomer">Register Customer</NavLink></li>
        </ul>
        <div className="content">
        <Routes> <Route exact path="/" component={Home}/>
          <Route path="/viewCustomers" component={ViewCustomers}/>
          <Route path="/registerCustomer" component={RegisterCustomer}/>
          </Routes>
        </div>
      </div>
    
  );
  }
}

export default App;