import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import Discussions from "./pages/discussionslist/discussionlist.component.jsx";
import DiscussionDetail from "./pages/discussiondetail/discussiondetail.component.jsx";


function App() {
  return (
    <Router>
    <div className="App">
    <Switch> 
      <Route exact path='/' component={HomePage} />
      <Route exact path='/discussions' component={Discussions} />
      <Route path='/discussions/:discussionId' component={DiscussionDetail} />
    </Switch> 
    </div>
    </Router>
  );
}

export default App;
