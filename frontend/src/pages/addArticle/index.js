import React from "react";
import "./addArticle.css";
import HeaderContainer from "../../components/header/headerContainer";
import AddArticleBlock from "../../components/addArticleBlock";


export default function AddArticle() {
  return (
    <div className="addArticlePage">
      <HeaderContainer />
      <AddArticleBlock />
    </div>
  );
}

