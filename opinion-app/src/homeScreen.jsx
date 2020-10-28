import React, { Component } from 'react';
import CreatePost from './createPost.jsx';
class HomeScreen extends Component {
    state = { 
        showCreatePost : false
     }
    handleButtonPress = (event) => {
        this.setState({showCreatePost : !this.state.showCreatePost});
    }
    render() { 
        return ( 
            <div id="container">
            <button
            type="button"
            className="btn btn-success item"
            id="create-button"
            onClick={this.handleButtonPress}
          >
            Create Post
          </button>
            <CreatePost show={this.state.showCreatePost}></CreatePost>
            </div>
         );
    }
}
 
export default HomeScreen;