import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import RegisterPage from "./index";

function RegisterPageContainer({user}) {
    return user.email ? <Redirect to="/"/> : (
        <RegisterPage/>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(RegisterPageContainer);