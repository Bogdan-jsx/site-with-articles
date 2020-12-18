import React from "react";
import { connect } from "react-redux";
import Header from "./header";

function HeaderContainer({user}) {
    return (
        <Header user={user} />
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(HeaderContainer);