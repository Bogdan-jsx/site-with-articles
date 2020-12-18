import React from "react";
import "./commentStats.css"
import { ThumbUp, ThumbDown } from "@material-ui/icons"

export default function CommentStats({comment}) {
  const {likes, dislikes} = comment;
  return (
    <div className="commentStats">
        <ThumbUp/>
        <p className="commentLikes">{likes}</p>
        <ThumbDown/>
        <p className="commentDislikes">{dislikes}</p>
    </div>
  );
}