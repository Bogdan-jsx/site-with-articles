import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LogIn from "./index";

function LogInContainer({user}) {
    return user.email ? <Redirect to="/" /> : (
        <LogIn />
    );
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(LogInContainer);