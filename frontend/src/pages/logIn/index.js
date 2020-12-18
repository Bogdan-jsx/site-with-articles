import React from "react";
import "./logIn.css";
import HeaderContainer from "../../components/header/headerContainer";
import LogInBlock from "../../components/logInBlock/index.js";


export default function LogIn() {
  return (
    <div className="logInPage">
      <HeaderContainer />
      <LogInBlock />
    </div>
  );
}

