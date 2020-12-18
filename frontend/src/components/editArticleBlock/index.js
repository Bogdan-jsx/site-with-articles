import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import "./editArticle.css";
import { editArticle } from "../../store/home/actions";
import { Redirect } from "react-router-dom";

export default function EditArticleBlock({article}) {
  const dispatch = useDispatch();

  const titleInput = useRef(),
        descriptionInput = useRef(),
        themeSelect = useRef(),
        contentInput = useRef();

  const onSendButtonClick = () => {
    const title = titleInput.current.value,
          description = descriptionInput.current.value,
          theme = themeSelect.current.value,
          content = contentInput.current.value;
    dispatch(editArticle(title, description, theme, content, article._id));
  }

  return (
    <main className="main">
        <form id="editArticleForm">
            <input type="text" placeholder="Заголовок..." name="title" maxLength="30" required ref={titleInput} defaultValue={article.title} />
            <input type="text" id="descriptionInput" placeholder="Краткое описание..." name="description" maxLength="100" required ref={descriptionInput} defaultValue={article.description} />
            <label htmlFor="selectTheme">Тема: </label>
            <select name="theme" id="selectTheme" required ref={themeSelect} defaultValue={article.theme} >
                <option value="sport">Спорт</option>
                <option value="nature">Природа</option>
                <option value="it">IT</option>
                <option value="music">Музыка</option>
                <option value="films">Фильмы</option>
            </select>
            <br/>
            <textarea placeholder="Содержимое статьи..." name="content" defaultValue={article.content} required ref={contentInput} id="contentInput" ></textarea>
            <br/>
            <input type="button" value="Сохранить" onClick={onSendButtonClick.bind(null)} id="saveButton" />
        </form>
    </main>
  );
}