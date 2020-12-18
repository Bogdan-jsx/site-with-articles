import React from "react";
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import "./commentAnswer.css";
import CommentStats from "../commentStats";
import { editCommentAnswer } from "../../store/comments/actions"

export default function Comment({answer, articleId, commentId, user}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState("");
  const [isChangable, setIsChangable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/user/getUserName/${answer.userId}`)
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
  }, [answer, setItem])

  function onEditClick() {
    setIsChangable(true);
  }
  const inputText = useRef(null);
  const onButtonClick = () => {
    setIsChangable(false);
    const answerId = answer._id;
    const newText = inputText.current.value;
    dispatch(editCommentAnswer(articleId, commentId, answerId, newText ));
  }

  const isUsersAnswer = user._id == answer.userId;

  return (
    <div className="answer">
        <div className="answerAuthorInfo">
          <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} className="avatar" />
          <p className="userName">{item}</p>
          {isUsersAnswer && (
            <p className="editAnswerButton" onClick={onEditClick.bind(null)}>Изменить</p>
          )}
        </div>
        <div className="answerInfo">
          {isChangable && (
            <div className="editAnswer">
              <textarea ref={inputText} className="editAnswerInput" defaultValue={answer.answerContent}></textarea>
              <input type="button" className="sendEditAnswerButton" value="Сохранить" onClick={onButtonClick.bind(null)}/>
            </div>
          )}
          {!isChangable && (
            <p className="answerContent">{answer.answerContent}</p>
          )}
          <br/>
          <CommentStats comment={answer}/>
        </div>
    </div>
  );
}