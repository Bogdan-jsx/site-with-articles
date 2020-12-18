import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import PageContainer from "./pages/page/pageContainer";
import LogInContainer from "./pages/logIn/logInContainer";
import RegisterPageContainer from "./pages/register/registerContainer";
import AddArticleContainer from "./pages/addArticle/addArticleContainer";
import EditArticleContainer from "./pages/editArticle/editArticleContainer";
import PersonalArea from "./pages/personalArea";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/logIn" exact component={LogInContainer} />  
          <Route path="/register" exact component={RegisterPageContainer} />
          <Route path="/page/:id" exact component={PageContainer} />
          <Route path="/personalArea" exact component={PersonalArea} />
          <Route path="/addArticle" exact component={AddArticleContainer} />
          <Route path="/editArticle/:id" exact component={EditArticleContainer} />
          <Route path="/" exact component={Home} />
          <Route path="" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
1. Вывод ответов на комментарии YES
2. Возможность ответить на комментарий YES
3. Изменение ответа YES
4. Счетчик просмотров YES
5. Поиск YES
6. Добавление/изменение/удаление статей YES
7. Вход/регистрация YES
    1. Возможность лайкать/дизлайкать статьи/комментарии/ответы
    2. Личный кабинет
*/
