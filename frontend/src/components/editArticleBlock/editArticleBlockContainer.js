import React from "react";
import { connect } from "react-redux";
import EditArticleBlock from "./index";

function EditArticleBlockContainer({article}) {
    return (
        <EditArticleBlock article={article} />
    );
}

const mapStateToProps = (state) => {
    return {
        article: state.articleInfoReducer.articleInfo,
    }
};

export default connect(mapStateToProps)(EditArticleBlockContainer);