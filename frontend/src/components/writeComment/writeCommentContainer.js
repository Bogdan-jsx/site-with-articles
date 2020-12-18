import React from "react";
import { connect } from "react-redux";
import WriteComment from "./writeComment";

function WriteCommentContainer({articleId}) {
    return (
      <WriteComment articleId={articleId} />
    );
}

const mapStateToProps = state => {
    return {
        articleId: state.commentsReducer.articleId,
    };
}

export default connect(mapStateToProps)(WriteCommentContainer);