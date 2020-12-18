import React from "react";
import "./personalInfoBlock.css";
import NewsGrid from "../newsGrid/newsGridContainer";
import { useDispatch } from "react-redux";
import { getArticlesByIds } from "../../store/home/actions";
import { Link } from "react-router-dom";

export default function PersonalInfoBlock({user}) {
    const dispatch = useDispatch();
    dispatch(getArticlesByIds(user.articles));
    return (
        <div className="personalInfoBlock">
            <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} className="personalAvatar" alt="avatar" />
            <table className="userInfoTable">
                <tbody>
                    <tr>
                        <td className="addArticleLink" colspan="2"><Link to="/addArticle" className="paramInfo">Добавить статью</Link></td>
                    </tr>
                    <tr>
                        <td className="paramName">Имя</td>
                        <td className="paramInfo">{user.name}</td>
                    </tr>
                    <tr>
                        <td className="paramName">Почта</td>
                        <td className="paramInfo">{user.email}</td>
                    </tr>
                    <tr>
                        <td className="paramName">Статус</td>
                        <td className="paramInfo">{user.isAdmin ? "Модератор" : "Пользователь"}</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="myArticles">Мои статьи</h2>
            <NewsGrid />
        </div>
    );
}