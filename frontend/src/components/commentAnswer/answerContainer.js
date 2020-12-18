import React from "react";
import { connect } from "react-redux";
import CommentAnswer from "./commentAnswer";

function AnswerContainer({ articleId, answer, commentId, user }) {
    return (
      <CommentAnswer answer={answer} articleId={articleId} commentId={commentId} user={user} />
    );
}
const mapStateToProps = state => {
    return {
        articleId: state.commentsReducer.articleId,
        user: state.userReducer.user,
    };
}

export default connect(mapStateToProps)(AnswerContainer);