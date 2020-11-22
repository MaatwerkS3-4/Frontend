import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory} from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/home/home.component.jsx";
import DiscussionsPage from "./pages/discussion-overview/discussion-overview.component.jsx";
import DiscussionDetailPage from "./pages/discussion-detail/discussion-detail.component.jsx";
import {NavBar} from "./components/navigation-bar/navigation-bar.component.jsx";
import {getAllPosts} from "./services/api-service";
import CreateDiscussionComponent from "./components/create-discussion/create-discussion.component";
import {postPost} from "./services/api-service";

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      showCreateDiscussion: false,
      discussions: [],
      selectedDiscussion: {},
      user: {
        id: 1,
        username: "Potatoman",
        password: "Yes",
      }
    };
  }

  componentDidMount() {
    getAllPosts().then((response) => {
      if (response !== undefined && response.data != null) {
        console.log(response.data);
        this.setState({ discussions: response.data });
      }
    });
  };

  handleSelectDiscussion = (discussion) =>{
    console.log(discussion);
    this.setState({selectedDiscussion: discussion});
  };

  handleCreateDiscussion = (discussion) =>{
    console.log(this)
    //Create new discussion object
    console.log("Creating new discussion...")
    console.log(discussion);

    //Send object to backend
    console.log("Sending discussion to backend...")

    postPost(discussion).then((result) => {
          this.addDiscussion(result.data);
        }
    );

    //Close input field popup
    console.log("Closing popup...")
    this.handleToggleCreateDiscussion();
  };

  addDiscussion = (discussion) =>{
    const discussions = [...this.state.discussions];
    discussions.push(discussion);
    this.setState({discussions: discussions})
  }


  handleToggleCreateDiscussion = () =>{
    this.setState({ showCreateDiscussion: !this.state.showCreateDiscussion });
  }

  render (){
    return(
        <Router>
          <div className="App">
            <NavBar handleToggleCreateDiscussion={this.handleToggleCreateDiscussion} />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/discussions/:criteria?'
                     render={(props) => <DiscussionsPage
                         discussions={this.state.discussions}
                         handleSelectDiscussion={this.handleSelectDiscussion}
                         {...props}/>} />
              <Route path='/discussion/:id'
                     render={(props) => <DiscussionDetailPage
                         selectedDiscussion={this.state.selectedDiscussion}
                         {...props}/>}/>
            </Switch>
            {this.state.showCreateDiscussion ? <CreateDiscussionComponent
                handleCreateDiscussion={this.handleCreateDiscussion}
                user={this.state.user}/> : ""}
          </div>
        </Router>
    );
  }
}

export default App;
