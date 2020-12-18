import React from "react";
import {useRef} from "react";
import {useDispatch} from "react-redux";
import "./writeComment.css";
import {addComment} from "../../store/comments/actions";

export default function WriteComment({articleId}) {
  const dispatch = useDispatch();
  const inputCommentText = useRef(null);
  const setComment = () => {
    const commentText = inputCommentText.current.value;
    inputCommentText.current.value = "";
    dispatch(addComment(articleId, commentText));
  }
  return (
    <div className="writeComment">
        <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} className="avatar" />
        <div className="commentForm">
          <textarea ref={inputCommentText} placeholder="Оставить комментарий..." name="commentContent" className="writeCommentInput"></textarea>
          <input type="button" className="sendCommentButton" value="Отправить" onClick={setComment.bind(null)}/>
        </div>
    </div>
  );
}