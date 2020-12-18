import React from "react";
import HeaderContainer from "../../components/header/headerContainer";
import NewsGridContainer from "../../components/newsGrid/newsGridContainer.js";
import Tags from "../../components/tags/tags.js";
import ConfirmModal from "../../components/modalConfirmLogOut/confirm";
import { useDispatch } from "react-redux";
import { loadArticles } from "../../store/home/actions.js";

export default function Home() {
  const dispatch = useDispatch();

  dispatch(loadArticles());

  return (
    <div className="App" style={{backgroundColor: "#fffec4"}}>
      <HeaderContainer />
      <Tags />
      <NewsGridContainer/>
    </div>
  );
}
