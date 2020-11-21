import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import "./App.css";
import HomePage from "./pages/home/home.component.jsx";
import DiscussionsPage from "./pages/discussions-list/discussion-list.component.jsx";
import DiscussionDetailPage from "./pages/discussion-detail/discussion-detail.component.jsx";
import CreatePost from "./components/create-discussion/create-discussion.component";
import {NavBar} from "./components/navigation-bar/navigation-bar.component.jsx";


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
              <Route path='/discussions/:criteria?' component={DiscussionsPage} />
              <Route path='/discussion/:discussionId' component={DiscussionDetailPage} />
            </Switch>
            <CreatePost show={this.state.showCreateDiscussion}/>
          </div>
        </Router>
    );
  }
}

export default App;
