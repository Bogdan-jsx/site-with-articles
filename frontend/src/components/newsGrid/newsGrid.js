import React from "react";
import "./newsGrid.css";
import News from "../news/news.js"

export default function NewsGrid({articles}) {
  return (
    <div className="newsGridMain">
        {articles.length == 0 ? <p>Статьи не найдены</p> : articles.map(item => {
          return <News info={item} key={item._id} />
        })}
    </div>
  );
}