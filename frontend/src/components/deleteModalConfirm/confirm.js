import React from "react";
import "./deleteConfirm.css";
import { useDispatch } from "react-redux";
import { deleteArticle } from "../../store/articlePage/actions";

export default function DeleteArticleModalConfirm({setIsDeleteModalConfirm, articleId}) {
  const dispatch = useDispatch();

  const onCancelClick = () => {
    setIsDeleteModalConfirm(false);
  }
  const onConfirmClick = () => {
    dispatch(deleteArticle(articleId));
    setIsDeleteModalConfirm(false);
  }
  return (
      <div className="deleteComfirmModal">
          <h2 className="confirmText">Вы точно хотите удалить эту статью?</h2>
          <button className="cancel" onClick={onCancelClick.bind(null)}>Отмена</button>
          <button className="confirm" onClick={onConfirmClick.bind(null)}>Да</button>
      </div>
  );
}