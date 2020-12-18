import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import EditArticlePage from "./index";

function EditArticleContainer({user, article}) {
    return !user.email ? <Redirect to="/logIn"/> : (
        <EditArticlePage user={user} article={article} />
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        article: state.articleInfoReducer.articleInfo,
    }
}

export default connect(mapStateToProps)(EditArticleContainer);