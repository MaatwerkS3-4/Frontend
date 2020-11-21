import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import "./App.css";
import HomepageComponent from "./pages/homepage/homepage.component.jsx";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch> 
      <Route exact path='/' component={HomepageComponent} />
    </Switch> 
    </div>
    </Router>
  );
}

export default App;
