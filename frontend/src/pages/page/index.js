import React from "react";
import {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import "./page.css";
import HeaderContainer from "../../components/header/headerContainer";
import PageContentContainer from "../../components/pageContent/pageContentContainer";
import { loadArticleInfo } from "../../store/articlePage/actions";

export default function Page({user}) {
  const dispatch = useDispatch();
  
  let url = window.location.href;
  url = url.split("/");
  const articleId = url[url.length - 1];

  dispatch(loadArticleInfo(articleId, user._id));

  return (
    <div className="pageContent">
      <HeaderContainer />
      <PageContentContainer/>
    </div>
  );
}

