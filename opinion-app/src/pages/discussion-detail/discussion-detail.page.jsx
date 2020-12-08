import React, {Component} from "react";
import "./discussion-detail.styles.css";
import {DiscussionInfo} from "../../components/discussion-info/discussion-info.component";
import {ButtonAttention} from "../../components/button/button-attention/button-attention.component";
import CommentCreate from "../../components/comment-create/comment-create.component";
import {ButtonRegular} from "../../components/button/button-regular/button-regular.component";

class DiscussionDetailPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            id: props.match.params.id,
            comments: [],
            showCreateComment: false,
            activeTime: 10
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log("error caught");
        this.props.history.push("/");
    }

    handleToggleCreateComment = () => {
        this.setState({showCreateComment: !this.state.showCreateComment});
    };

    handleBackToOverviewClick = () => {
        this.props.history.push(`/discussions`);
    };

    render() {
        const discussion = this.props.selectedDiscussion;
        if(discussion === undefined){
            this.props.history.push("/");
            return null;
        }
        return (
            <div className="discussion-detail-container">
                <div className="discussion-info">
                    <div className="discussion-title">
                        {discussion.subject}
                    </div>
                    <div className="discussion-content">
                        Nog te implementeren...
                    </div>
                    <div className="discussion-info-extra">
                        <DiscussionInfo discussion={discussion}/>
                        <div className="discussion-options">
                            <ButtonRegular handleOnClick={this.handleBackToOverviewClick} text="terug naar overzicht"/>
                            <ButtonAttention handleOnClick={this.handleToggleCreateComment} text="Opmerking plaatsen"/>
                        </div>
                    </div>
                </div>
                {/*<CommentList comments={discussion.comments}/>*/}
                {this.state.showCreateComment ? <CommentCreate
                    handlePostComment={this.handleToggleCreateComment}
                    user={this.props.user}
                    parentDiscussion={discussion}
                /> : ""}
            </div>
        )
    }
}

export default DiscussionDetailPage;
