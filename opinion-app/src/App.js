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
import {handleGetAllDiscussionInfos} from "./services/api.service";

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
        this.handleToggleLoading(true);
        handleGetAllDiscussionInfos().then(infos => {
            console.log("Discussion infos retrieved:");
            console.log(infos);
        }).finally(() =>{this.handleToggleLoading(false)});
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

    handleToggleLoading = (status) => {
        this.setState({loading: status});
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
