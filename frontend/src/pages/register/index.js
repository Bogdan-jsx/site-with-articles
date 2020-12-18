import React from "react";
import "./register.css";
import HeaderContainer from "../../components/header/headerContainer";
import RegisterBlock from "../../components/registerBlock/index.js";


export default function RegisterPage() {
  return (
    <div className="registerPage">
      <HeaderContainer />
      <RegisterBlock />
    </div>
  );
}

