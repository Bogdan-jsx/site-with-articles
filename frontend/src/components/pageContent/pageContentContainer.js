import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PageContent from "./pageContent";

function PageContentContainer({articleInfo, user}) {
    return (
      <PageContent articleContent={articleInfo} user={user} />
    );
}

const mapStateToProps = state => {
    return {
        articleInfo: state.articleInfoReducer.articleInfo,
        user: state.userReducer.user,
    };
}

export default connect(mapStateToProps)(PageContentContainer);