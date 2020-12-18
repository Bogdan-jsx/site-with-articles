import React, { useRef }  from "react";
import "./logInBlock.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/user/actions";


export default function LogInBlock() {
  const dispatch = useDispatch();

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const onButtonClick = () => {
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    dispatch(logIn(email, password));
  };
  return (
    <div className="logInBlock">
      <form action="http://localhost:3000/user/logIn" method="post">
        <label>Эл. почта: </label>
        <input ref={inputEmail} type="text" name="email"/>
        <br/>
        <label>Пароль: </label>
        <input ref={inputPassword} type="password" name="password"/>
        <br/>
        <input type="button" value="Войти" onClick={onButtonClick.bind(null)} />
      </form>
      <p className="noAccount">Нет аккаунта? <a href="/register">Регистрация</a></p>
    </div>
  );
}

