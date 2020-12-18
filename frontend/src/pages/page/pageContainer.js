import React from 'react';
import { connect } from "react-redux";
import Page from "./index";

function PageContainer({user}) {
    return (
        <Page user={user} />
    );
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(PageContainer);