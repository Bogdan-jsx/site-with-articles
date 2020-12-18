import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./header.css";
import { searchArticles } from "../../store/home/actions";
import ModalConfirm from "../modalConfirmLogOut/confirm";

export default function Header({user}) {
  const dispatch = useDispatch();
  const [isModalConfirm, setIsModalConfirm] = useState(false);

  const searchInput = useRef();
  const onSearchButtonClick = () => {
    if (searchInput.current.value) {
      const searchRequest = searchInput.current.value;
      searchInput.current.value = "";
      dispatch(searchArticles(searchRequest));
    }
  }

  const onLogOutClick = () => {
    setIsModalConfirm(true);
  }

  return (
      <header>
        {isModalConfirm && (
          <ModalConfirm setIsModalConfirm={setIsModalConfirm} />
        )}
        <Link className="logoElem" to="/">
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="logo" />
          <h1 className="logoName">NAME</h1>
        </Link>
        <form>
          <input type="text" placeholder="Поиск..." className="searchInput" ref={searchInput} />
          <input type="button" value="Поиск" className="searchButton" onClick={onSearchButtonClick.bind(null)} />
        </form>
        {user.email && (
          <div className="headerButtons">
            <Link to="/personalArea/" className="personalArea">Личный кабинет</Link>
            <p className="logOut" onClick={onLogOutClick.bind(null)} >Выход</p>
          </div>
        )}
        {!user.email && (
          <div>
            <Link to="/register" className="register" >Регистрация</Link>
            <Link to="/logIn" className="login">Вход</Link>
          </div>
        )}
      </header>
  );
}