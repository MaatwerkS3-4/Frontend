import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/home/home.page.jsx";
import DiscussionsPage from "./pages/discussion-overview/discussion-overview.page.jsx";
import DiscussionDetailPage from "./pages/discussion-detail/discussion-detail.page.jsx";
import {Header} from "./components/header/header.component";
import DiscussionCreate from "./components/discussion/discussion-create/discussion-create.component.jsx";
import {LoadOverlay} from "./components/load-overlay/load-overlay.component";
import {Footer} from "./components/footer/footer.component";
import Login from "./pages/login/login.page"
import Register from "./pages/register/register.page"
import {
    handleCommentUpvote,
    handleDiscussionUpvote,
    handleGetAllDiscussionInfos,
    handleGetAvailableCategories,
    handleGetDiscussionById,
    handleGetUserById,
    handlePostNewComment,
    handlePostNewDiscussion,
    handlePostReply
} from "./services/api.service";
import Profile from "./pages/profile/profile.page";

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
            selectedDiscussion: undefined,

            categoriesAndReverse: []
        };
    }

    handleSetState = (state, shouldRender = true) => {
        this.setState({shouldRender: shouldRender})
        this.setState(state);
    }

    handleToggleLoading = (status) => {
        if (this.state.loading === status && this.state.shouldRender === !status) return;

        this.handleSetState({
            loading: status,
        }, !status);
    }

    handleToggleCreateDiscussion = () => {
        this.setState({showCreateDiscussion: !this.state.showCreateDiscussion});
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
                handleGetAvailableCategories().then(categories => {
                    this.handleSetState({categoriesAndReverse: categories});
                }).finally(() =>{
                    this.handleToggleLoading(false);
                });
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

    handleCreateDiscussion = (subject, description, categories) => {
        this.handleToggleCreateDiscussion();
        this.handleToggleLoading(true);
        const createDiscussionDTO = {
            description: description,
            subject: subject,
            userId: localStorage.getItem("Id"),
            tags: categories
        }

        handlePostNewDiscussion(createDiscussionDTO).then(d => {
        }).then(() => {
                handleGetAllDiscussionInfos().then(i => {
                    this.handleSetState({discussionInfos: i})
                })
            }
        )
            .finally(() => {
                this.handleToggleLoading(false);
            })
    };

    handlePostComment = (content) => {
        this.handleToggleLoading(true);
        const createCommentDTO = {
            content: content,
            posterId: localStorage.getItem("Id")
        }

        handlePostNewComment(this.state.selectedDiscussion.id, createCommentDTO).then(c => {
            this.state.selectedDiscussion.comments.unshift(c);
        }).finally(() => {
            this.handleToggleLoading(false)
        });
    }

    handleDiscussionUpvote = () => {
        handleDiscussionUpvote(this.state.selectedDiscussion.id);

        const dInfos = [...this.state.discussionInfos];
        dInfos.forEach(d => {
            if(d.id === this.state.selectedDiscussion.id){
                d.upvotedByUser = true;
                d.score = d.score+1;
                return;
            }
        });

        this.setState({
            discussionInfos: dInfos
        });
    }

    handleCommentUpvote = (commentId) => {
        handleCommentUpvote(commentId);
    }

    handlePostReply = (parent, content) => {
        this.handleToggleLoading(true);
        const createCommentDTO = {
            content: content,
            posterId: localStorage.getItem("Id")
        }

        handlePostReply(this.state.selectedDiscussion.id, parent.id, createCommentDTO).then(c => {
            parent.replies.unshift(c);
        }).finally(() => {
            this.handleToggleLoading(false)
        });
    }
    render() {
        console.log("reverse", this.state.categoriesAndReverse);
        let categories = [];
        this.state.categoriesAndReverse.forEach(p =>{
            categories.push(p.first);
        })

        return (
            <Router>
                <div className="App">
                    <Header
                        menuEnabled={!this.state.loading}
                        handleToggleCreateDiscussion={this.handleToggleCreateDiscussion}
                    />
                    <div id="content-container">
                        {this.state.loading ?
                            <LoadOverlay/>
                            :
                            <Switch>
                                <Route exact path='/' render={(props) => <HomePage
                                    discussionInfos={this.state.discussionInfos}
                                    handleSelectDiscussion={this.handleSelectDiscussion}
                                    {...props}/>}/>
                                <Route path='/discussions/:criteria?'
                                       render={(props) => <DiscussionsPage
                                           //filter discussions for search criteria
                                           discussionInfos={this.state.discussionInfos}
                                           handleSelectDiscussion={this.handleSelectDiscussion}
                                           reverseRecommendations={this.state.categoriesAndReverse}
                                           {...props}/>}/>
                                <Route path='/discussion/:id'
                                       render={(props) => <DiscussionDetailPage
                                           selectedDiscussion={this.state.selectedDiscussion}
                                           //find discussion info with selected discussion id
                                           discussionInfo={this.state.discussionInfos.find(c =>
                                               c.id === this.state.selectedDiscussion.id)}
                                           handlePostComment={this.handlePostComment}
                                           handlePostReply={this.handlePostReply}
                                           handleCommentUpvote={this.handleCommentUpvote}
                                           handleDiscussionUpvote={this.handleDiscussionUpvote}
                                           {...props}/>}/>
                                <Route exact path="/register"
                                       component={Register}/>
                                <Route exact path="/login"
                                       component={Login}/>
                                       <Route path="/profile" render={(props) => <Profile
                                           handleSelectDiscussion={this.handleSelectDiscussion}
                                           userId={this.state.user.id}
                                           {...props}/>

                                       }/>
                            </Switch>
                        }
                    </div>
                    <div className="content-container">
                        {this.state.showCreateDiscussion ? <DiscussionCreate
                            handleCreateDiscussion={this.handleCreateDiscussion}
                            handleToggleCreateDiscussion={this.handleToggleCreateDiscussion}
                            user={this.state.user}
                            categories={categories}/> : ""}
                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
