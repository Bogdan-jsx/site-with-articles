import React from "react";
import { connect } from "react-redux";
import AllComments from "./index";

function AllCommentsContainer({ comments }) {
    return (
      <AllComments comments={comments} />
    );
}

const mapStateToProps = state => {
    return {
        comments: state.commentsReducer.comments,
    };
}

export default connect(mapStateToProps)(AllCommentsContainer);