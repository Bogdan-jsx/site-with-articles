import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import "./addArticle.css";
import { addArticle } from "../../store/home/actions";
import { Description } from "@material-ui/icons";


export default function AddArticleBlock() {
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
    dispatch(addArticle(title, description, theme, content));
  }
  return (
    <main className="main">
        <form action="http://localhost:3000/articles/addArticle" method="POST" id="addArticleForm">
            <input type="text" placeholder="Заголовок..." name="title" maxLength="30" required ref={titleInput} />
            <input type="text" id="descriptionInput" placeholder="Краткое описание..." name="description" maxLength="100" required ref={descriptionInput} />
            <label htmlFor="selectTheme">Тема: </label>
            <select name="theme" id="selectTheme" required ref={themeSelect} >
                <option value="sport">Спорт</option>
                <option value="nature">Природа</option>
                <option value="it">IT</option>
                <option value="music">Музыка</option>
                <option value="films">Фильмы</option>
            </select>
            <br/>
            <textarea placeholder="Содержимое статьи..." name="content" required ref={contentInput} id="contentInput" ></textarea>
            <br/>
            <input type="button" value="Сохранить" onClick={onSendButtonClick.bind(null)} id="saveButton" />
        </form>
    </main>
  );
}