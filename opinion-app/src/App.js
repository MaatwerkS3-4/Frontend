import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/home/home.page.jsx";
import DiscussionsPage from "./pages/discussion-overview/discussion-overview.page.jsx";
import DiscussionDetailPage from "./pages/discussion-detail/discussion-detail.page.jsx";
import {Header} from "./components/header/header.component";
import DiscussionCreate from "./components/discussion-create/discussion-create.component.jsx";
import {LoadOverlay} from "./components/load-overlay/load-overlay.component";
import {Footer} from "./components/footer/footer.component";
import {handleGetAllDiscussionInfos, handleGetDiscussionById, handleGetUserById} from "./services/api.service";

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
            shouldRender: false,

            //Discussions data
            discussionInfos: [],
            selectedDiscussion: undefined
        };
    }

    handleSetState = (state, shouldRender = true) => {
        this.setState({shouldRender: shouldRender})
        this.setState(state);
    }

    handleToggleLoading = (status) => {
        console.log("Toggling loading status to " + status + "...");
        if (this.state.loading === status && this.state.shouldRender === !status) return;

        this.handleSetState({
            loading: status,
        }, !status);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.shouldRender;
    }

    componentDidMount() {
        this.handleToggleLoading(true);
        //Retrieve User
        handleGetUserById(1).then(user => {
            this.handleSetState({user: user}, false);
        }).finally(() => {
            handleGetAllDiscussionInfos().then(infos => {
                this.handleSetState({discussionInfos: infos}, false);
            }).finally(() => {
                this.handleToggleLoading(false);
            });
        });
    };

    handleSelectDiscussion = (id) => {
        this.handleToggleLoading(true);
        //Retrieve discussion
        handleGetDiscussionById(id).then(d => {
            this.handleSetState({selectedDiscussion: d}, false);
        }).finally(() => {
            this.handleToggleLoading(false);
        })
    };

    handleCreateDiscussion = (discussion) => {
        console.log("Handle create discussion called")
        this.handleToggleCreateDiscussion();
    };

    handleToggleCreateDiscussion = () => {
        this.setState({showCreateDiscussion: !this.state.showCreateDiscussion});
    }

    render() {
        console.log("Rendering App...");
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
                                       //filter discussions for search criteria
                                       discussionInfos={this.state.discussionInfos}
                                       handleSelectDiscussion={this.handleSelectDiscussion}
                                       {...props}/>}/>
                            <Route path='/discussion/:id'
                                   render={(props) => <DiscussionDetailPage
                                       selectedDiscussion={this.state.selectedDiscussion}
                                       //find discussion info with selected discussion id
                                       discussionInfo={this.state.discussionInfos.find(c =>
                                           c.id === this.state.selectedDiscussion.id)}
                                       user={this.state.user}
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
