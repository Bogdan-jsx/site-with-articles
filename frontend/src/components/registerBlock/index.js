import React from "react";
import "./registerBlock.css";


export default function LogInBlock() {
  return (
    <div className="registerBlock">
      <form action="http://localhost:3000/user/register" method="post">
        <label>Имя: </label>
        <input type="text" name="name"/>
        <br/>
        <label>Эл. почта: </label>
        <input type="text" name="email"/>
        <br/>
        <label>Пароль: </label>
        <input type="password" name="password"/>
        <br/>
        <input type="submit" value="Зарегистрироватся"/>
      </form>
      <p className="haveAccount">Есть аккаунт? <a href="/logIn">Войти</a></p>
    </div>
  );
}

