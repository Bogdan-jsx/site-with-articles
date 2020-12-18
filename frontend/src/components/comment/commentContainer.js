import React from "react";
import { connect } from "react-redux";
import Comment from "./comment";

function CommentContainer({ articleId, comment, user }) {
    return (
      <Comment comment={comment} articleId={articleId} user={user} />
    );
}
const mapStateToProps = state => {
    return {
        articleId: state.commentsReducer.articleId,
        user: state.userReducer.user,
    };
}

export default connect(mapStateToProps)(CommentContainer);