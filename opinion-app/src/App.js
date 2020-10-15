import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import "./App.css";
import createPost from "./createPost";
import CreatePost from "./createPost";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch> 
              <Route exact path='/' component={createPost}></Route> 
            </Switch> 
    </div>
    </Router>
  );
}

export default App;
