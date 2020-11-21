import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import Discussions from "./pages/discussionslist/discussionlist.component.jsx";
import DiscussionDetail from "./pages/discussiondetail/discussiondetail.component.jsx";

import CreatePost from "./components/creatediscussion/creatediscussion.component";
import {NavBar} from "./components/navbar/navbar.component.jsx";


class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      showCreateDiscussion: false
    };
  }

  handleCreateDiscussion = (e) =>{
    console.log("handle create discussion button pressed");
    this.setState({ showCreateDiscussion: !this.state.showCreateDiscussion });
  };

  render (){
    return(
        <Router>
          <div className="App">
            <NavBar handleCreateDiscussion={this.handleCreateDiscussion} />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/discussions' component={Discussions} />
              <Route path='/discussions/:discussionId' component={DiscussionDetail} />
            </Switch>
            <CreatePost show={this.state.showCreateDiscussion}/>
          </div>
        </Router>
    );
  }
}

export default App;
