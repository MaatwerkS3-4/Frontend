import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/home/home.page.jsx";
import DiscussionsPage from "./pages/discussion-overview/discussion-overview.page.jsx";
import DiscussionDetailPage from "./pages/discussion-detail/discussion-detail.page.jsx";
import {NavBar} from "./components/navigation-bar/navigation-bar.component.jsx";
import {getAllPosts, postPost} from "./services/api.service";
import DiscussionCreate from "./components/discussion-create/discussion-create.component.jsx";
import {LoadOverlay} from "./components/load-overlay/load-overlay.component";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCreateDiscussion: false,
            discussions: [],
            selectedDiscussion: undefined,
            user: {
                id: 1,
                username: "Potatoman",
                password: "Yes",
            },
            loading: true
        };
    }

    componentDidMount() {
        getAllPosts().then((response) => {
            if (response !== undefined && response.data != null) {
                console.log(response.data);
                this.setState({discussions: response.data});
                this.handleToggleLoading(false);
            }
        });
    };

    handleSelectDiscussion = (discussion) => {
        console.log(discussion);
        this.setState({selectedDiscussion: discussion});
    };

    handleCreateDiscussion = (discussion) => {
        if (discussion !== undefined) {
            this.handleToggleLoading(true);

            //Create new discussion object
            console.log("Creating new discussion...")
            console.log(discussion);

            //Send object to backend
            console.log("Sending discussion to backend...")

            postPost(discussion).then((result) => {
                    this.addDiscussion(result.data);
                }
            ).finally(() =>this.handleToggleLoading(false));
        }

        //Close input field popup
        console.log("Closing popup...")
        this.handleToggleCreateDiscussion();
    };

    addDiscussion = (discussion) => {
        const newDiscussions = [...this.state.discussions];
        newDiscussions.push(discussion);
        this.setState({discussions: newDiscussions});
    }


    handleToggleCreateDiscussion = () => {
        this.setState({showCreateDiscussion: !this.state.showCreateDiscussion});
    }

    handleToggleLoading = (status) => {
        this.setState({loading: status});
    }

    render() {
        return (
            <Router>
                <div className="App">
                    {this.state.loading ? <LoadOverlay/> :
                        <div>

                            <NavBar handleToggleCreateDiscussion={this.handleToggleCreateDiscussion}/>
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
                            {this.state.showCreateDiscussion ? <DiscussionCreate
                                handleCreateDiscussion={this.handleCreateDiscussion}
                                user={this.state.user}/> : ""}
                        </div>}
                </div>
            </Router>
        );
    }
}

export default App;
