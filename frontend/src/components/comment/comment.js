import React from "react";
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import "./comment.css";
import CommentStats from "../commentStats";
import AllAnswers from "../allAnswers/allAnswers";
import { editComment, addCommentAnswer } from "../../store/comments/actions"


export default function Comment({comment, articleId, user}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState("");
  const [isChangable, setIsChangable] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/user/getUserName/${comment.userId}`)
      .then(res => res.text())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [comment, setItem])

  function onEditClick() {
    setIsChangable(true);
  }
  const editCommentInput = useRef(null);
  const onSaveButtonClick = () => {
    setIsChangable(false);
    const commentId = comment._id;
    const newText = editCommentInput.current.value;
    dispatch(editComment(articleId, newText, commentId));
  }

  function onAnswerClick() {
    setIsAnswering(true);
  }
  const answerInput = useRef(null);
  const onSendAnswerClick = () => {
    setIsAnswering(false);
    const commentId = comment._id;
    const answerText = answerInput.current.value;
    dispatch(addCommentAnswer(articleId, commentId, answerText));
  }

  const isUsersComment = user._id == comment.userId;

  return (
    <div className="comment">
        <div className="commentAuthorInfo">
          <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} className="avatar" />
          <p className="userName">{item}</p>
          {isUsersComment && (
            <p className="editCommentButton" onClick={onEditClick.bind(null)}>Изменить</p>
          )}
        </div>
        <div className="commentInfo">
          {isChangable && (
            <div className="editComment">
              <textarea ref={editCommentInput} className="editCommentInput" defaultValue={comment.commentContent}></textarea>
              <input type="button" className="sendEditCommentButton" value="Сохранить" onClick={onSaveButtonClick.bind(null)}/>
            </div>
          )}
          {!isChangable && (
            <p className="commentContent">{comment.commentContent}</p>
          )}
          <br/>
          <CommentStats comment={comment}/>
          {isAnswering && (
            <div className="answerForm">
              <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} className="avatar" />
              <textarea ref={answerInput} className="answerInput" placeholder="Ответить..."></textarea>
              <input type="button" className="sendAnswerButton" value="Отправить" onClick={onSendAnswerClick.bind(null)}/>
            </div>
          )}
          {!isAnswering && (
            <p className="answerButton" onClick={onAnswerClick.bind(null)}>Ответить</p>
          )}
          <AllAnswers comment={comment} />
        </div>
    </div>
  );
}