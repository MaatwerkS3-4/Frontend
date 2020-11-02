import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import "./App.css";
import HomeScreen from "./homeScreen.jsx";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch> 
      <Route exact path='/' component={HomeScreen}></Route> 
    </Switch> 
    </div>
    </Router>
  );
}

export default App;
