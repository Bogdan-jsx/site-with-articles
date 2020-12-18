import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { ThumbUp, ThumbDown, RemoveRedEye } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./pageContent.css";
import AllCommentsContainer from "../allComments/allCommentsContainer";
import WriteCommentContainer from "../writeComment/writeCommentContainer.js";
import DeleteArticleModalConfirm from "../deleteModalConfirm/confirm";
import { putComments, putArticleId } from "../../store/comments/actions";
import { likeArticle } from "../../store/articlePage/actions";

export default function PageContent({articleContent, user}) {
  const isLiked = articleContent.isLiked !== -1 ? true : false;
  const isDisliked = articleContent.isDisliked !== -1 ? true : false;

  const dispatch = useDispatch();
  const [isDeleteModalConfirm, setIsDeleteModalConfirm] = useState(false);

  let isEditable = false;
  if (user._id == articleContent.author || user.isAdmin) {
   isEditable = true; 
  }

  dispatch(putComments(articleContent.comments));
  dispatch(putArticleId(String(articleContent._id)));

  const onDeleteButtonClick = () => {
    setIsDeleteModalConfirm(true);
  }

  const onLikeButtonClick = () => {
    dispatch(likeArticle(articleContent._id, user._id))
  }

  return (
    <main className="main">
        {isDeleteModalConfirm && (
          <DeleteArticleModalConfirm setIsDeleteModalConfirm={setIsDeleteModalConfirm} articleId={articleContent._id} />
        )}
        {user.isAdmin && (
          <p className="deleteArticleButton" onClick={onDeleteButtonClick.bind(null)}>Удалить</p>
        )}
        {isEditable && (
          <Link to={`/editArticle/${articleContent._id}`} className="editArticleLink">Изменить</Link>
        )}
        <h1 className="articleName">{articleContent.title}</h1>
        <p className="articleContent">{articleContent.content}</p>
        <div className="stats">
            <ThumbUp className={isLiked ? "likes liked" : "likes"} onClick={!isLiked ? onLikeButtonClick.bind(null) : undefined} />
            <p className={isLiked ? "likes liked" : "likes"}>{articleContent.likesCount}</p>
            <ThumbDown className={isDisliked ? "dislikes disliked" : "dislikes"}/>
            <p className={isDisliked ? "dislikes disliked" : "dislikes"}>{articleContent.dislikesCount}</p>
            <RemoveRedEye/>
            <p className="views">{articleContent.views}</p>  
            <p className="theme">Тема: {articleContent.theme}</p>
        </div>
          <WriteCommentContainer/>
          <AllCommentsContainer/>
    </main>
  );
}