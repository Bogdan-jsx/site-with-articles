import React from "react";
import { connect } from "react-redux";
import NewsGrid from "./newsGrid";

function NewsGridContainer({articles}) {
    return (
      <NewsGrid articles={articles}/>
    );
}

const mapStateToProps = state => {
    return {
        articles: state.articlesReducer.allArticles,
    };
}

export default connect(mapStateToProps)(NewsGridContainer);