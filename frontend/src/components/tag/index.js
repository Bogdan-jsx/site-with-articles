import React from "react";
import "./tag.css"

export default function Tag({tag, selectItem}) {
  return (
    <li className="theme" onClick={selectItem} id={tag.id}>
      {tag.name}
    </li>
  );
}