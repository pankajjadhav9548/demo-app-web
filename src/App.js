import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Electronies from './components/Electronies';
import Home from './components/Home';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    
    <Router>
    <div>
      <Navbar title="Shop Name"/>
      <Switch>
        <Route path="/Navbar">
          <Navbar />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Electronies">
          <Electronies />
        </Route>
        <Route path="/Products">
          <Products />
        </Route>
      </Switch>
    </div>
  </Router>
      
        
          
          
    
  );
}


