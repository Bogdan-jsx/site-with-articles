import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PersonalInfoBlock from "./index";

function PersonalInfoContainer({user}) {
    return !user.email ? <Redirect to="/logIn" /> : (
        <PersonalInfoBlock user={user} />
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(PersonalInfoContainer);