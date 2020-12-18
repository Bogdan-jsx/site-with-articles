import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AddArticlePage from "./index";

function AddArticleContainer({user}) {
    return !user.email ? <Redirect to="/logIn"/> : (
        <AddArticlePage/>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(AddArticleContainer);