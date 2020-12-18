import React from "react";
import { useDispatch } from "react-redux";
import "./tags.css";
import Tag from "../tag";
import { loadArticlesByTheme } from "../../store/home/actions";

export default function Tags() {
  const dispatch = useDispatch();
  function selectItem (event) {
    let theme = event.currentTarget;
    let list = theme.parentElement;
    for (let item of list.children) {
        item.style.fontStyle = "normal";
        item.style.listStyle = "none";
    }
    theme.style.fontStyle = "italic";
    theme.style.listStyle = "circle";

    dispatch(loadArticlesByTheme(event.currentTarget.id));
  };
  const tags = [
    {id: "all", name: "Все статьи"},
    {id: "sport", name: "Спорт"},
    {id: "nature", name: "Природа"},
    {id: "it", name: "IT"},
    {id: "music", name: "Музыка"},
    {id: "films", name: "Фильмы"},
  ]

  return (
    <div className="themes">
        <h1>Темы:</h1>
        <ul>
            {tags.map(item => {
              return <Tag tag={item} selectItem={selectItem} key={item.id}/>
            })}
        </ul>
    </div>
  );
}