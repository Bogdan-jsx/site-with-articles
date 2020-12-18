import React from "react";
import { Redirect } from "react-router-dom";
import "./editArticle.css";
import HeaderContainer from "../../components/header/headerContainer";
import EditArticleBlockContainer from "../../components/editArticleBlock/editArticleBlockContainer";
import { useDispatch } from "react-redux";
import { loadArticleInfo } from "../../store/articlePage/actions";


export default function EditArticle({user, article}) {
  const dispatch = useDispatch();

  const url = window.location.href.split("/");
  const updatedArticleId = url[url.length - 1];

  if (article._id != updatedArticleId) {
    dispatch(loadArticleInfo())
  }
  
  return user._id != article.author && !user.isAdmin ? <Redirect to="/" /> : (
    <div className="addArticlePage">
      <HeaderContainer />
      <EditArticleBlockContainer />
    </div>
  );
}

