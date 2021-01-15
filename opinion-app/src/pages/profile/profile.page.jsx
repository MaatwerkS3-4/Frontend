import React, {Component} from "react";
import {DiscussionList} from "../../components/discussion/discussion-list/regular/discussion-list.component";
import {handleGetCommentsByUserId, handleGetDiscussionInfosByUser} from "../../services/api.service";
import {FormattedMessage} from "react-intl";
import {PaddingItem} from "../../components/layout/padding-item/padding-item.component";
import "./profile.styles.css";

class Profile extends Component {
    state = {
        discussionInfos: [],
        comments: []
    };

    async componentDidMount() {
        await handleGetDiscussionInfosByUser().then((res) => {
            this.setState({discussionInfos: res});
        });

        await handleGetCommentsByUserId(this.props.userId).then(res => {
            this.setState({comments: res})
        });

    };

    handleRedirect = (id) => {
        this.props.history.push(`/discussion/${id}`);
    };

    render() {
        return (
            <div id="profile-container">
                <div className="text-title">
                    {localStorage.getItem("Username")}
                </div>
                <div id="profile-content-container">
                    <PaddingItem/>

                    <div id="profile-content">
                        <div className="text-subheader">
                            <FormattedMessage id="profile.yourposts"/>
                        </div>
                        <div id="profile-content-discussions">
                            <DiscussionList
                                discussionInfos={this.state.discussionInfos}
                                handleSelectDiscussion={this.props.handleSelectDiscussion}
                                handleRedirect={this.handleRedirect}
                            />
                        </div>
                        <PaddingItem/>
                        <div className="text-subheader">
                            <FormattedMessage id="profile.yourcomments"/>
                        </div>
                        <div id="profile-content-discussions">
                            {this.state.comments.map(c =>{
                                return <div>{c.content}</div>
                            })
                        }
                        </div>
                        <PaddingItem/>
                    </div>
                    <PaddingItem/>
                </div>
            </div>
        );
    }
}

export default Profile;
