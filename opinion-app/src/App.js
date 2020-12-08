import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/home/home.page.jsx";
import DiscussionsPage from "./pages/discussion-overview/discussion-overview.page.jsx";
import DiscussionDetailPage from "./pages/discussion-detail/discussion-detail.page.jsx";
import {Header} from "./components/header/header.component";
import DiscussionCreate from "./components/discussion-create/discussion-create.component.jsx";
import {LoadOverlay} from "./components/load-overlay/load-overlay.component";
import {Footer} from "./components/footer/footer.component";
import {handleGetAllDiscussionInfos, handleGetUserById} from "./services/api.service";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Current user
            user: {
                id: undefined,
                username: undefined,
            },
            //Overlay status
            showCreateDiscussion: false,
            loading: true,

            //Discussions data
            discussionInfos: [],
            discussions: [],
            selectedDiscussion: undefined
        };
    }

    componentDidMount() {
        // Set loading to true
        this.setState({loading: true});

        // Create object for retrieved data
        const retrievedData = {
            user: undefined,
            discussionInfos: []
        }

        //Retrieve User
        handleGetUserById(1).then(user =>{
            retrievedData.user = user;
        })
        //Retrieve discussionInfos
        .then(() => {handleGetAllDiscussionInfos().then(infos => {
            retrievedData.discussionInfos.push(infos);
        })})
        //Set new state
        .finally(() =>{
            this.setState({
                user: retrievedData.user,
                discussionInfos: retrievedData.discussionInfos,
                loading: false
            });
            console.log(this.state)
        });
    };

    handleSelectDiscussion = (discussion) => {
        console.log(discussion);
        this.setState({selectedDiscussion: discussion});
    };

    handleCreateDiscussion = (discussion) => {
        console.log("Handle create discussion called")
        this.handleToggleCreateDiscussion();
    };

    handleToggleCreateDiscussion = () => {
        this.setState({showCreateDiscussion: !this.state.showCreateDiscussion});
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header
                        menuEnabled={!this.state.loading}
                        handleToggleCreateDiscussion={this.handleToggleCreateDiscussion}
                    />
                    {this.state.loading ?
                        <LoadOverlay/>
                        :
                        <Switch>
                            <Route exact path='/' component={HomePage}/>
                            <Route path='/discussions/:criteria?'
                                   render={(props) => <DiscussionsPage
                                       discussions={this.state.discussions}
                                       handleSelectDiscussion={this.handleSelectDiscussion}
                                       {...props}/>}/>
                            <Route path='/discussion/:id'
                                   render={(props) => <DiscussionDetailPage
                                       selectedDiscussion={this.state.selectedDiscussion}
                                       user={this.state.user}
                                       handleToggleLoading={this.handleToggleLoading}
                                       {...props}/>}/>
                        </Switch>
                    }
                    <div className="content-container">
                    {this.state.showCreateDiscussion ? <DiscussionCreate
                        handleCreateDiscussion={this.handleCreateDiscussion}
                        user={this.state.user}/> : ""}

                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
