export const PUT_ARTICLES = "PUT_ARTICLES";

export const putArticles = (articlesFromServer) => {
    return {
        type: PUT_ARTICLES,
        payload: articlesFromServer,
    }
}

export const loadArticles = () => (dispatch, getState) => {
    fetch("http://localhost:3000/articles/")
      .then(res => res.json())
      .then(json => {
        dispatch(putArticles(json));
      })
}

export const loadArticlesByTheme = (theme) => (dispatch, getState) => {
  fetch(`http://localhost:3000/articles/theme/${theme}`)
    .then(res => res.json())
    .then(json => {
      dispatch(putArticles(json));
    })
}

export const searchArticles = (request) => (dispatch, getState) => {
  fetch(`http://localhost:3000/articles/search?searchRequest=${request}`)
    .then(res => res.json())
    .then(json => {
      dispatch(putArticles(json));
    })
}
export const addArticle = (title, description, theme, content) => (dispatch, getState) => {
  const user = getState().userReducer.user;
  fetch("http://localhost:3000/articles/addArticle", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({title, description, theme, content, userId: user._id})
  }).then(() => window.location = "/");
}

export const editArticle = (title, description, theme, content, articleId) => (dispatch, getState) => {
  console.log({title, description, theme, content, articleId});
  fetch("http://localhost:3000/articles/edit", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({title, description, theme, content, articleId})
  }).then(() => window.location = `/page/${articleId}`);
}

export const getArticlesByIds = (ids) => (dispatch, getState) => {
  fetch(`http://localhost:3000/articles/getArticlesByIds?ids=${ids}`)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      dispatch(putArticles(json));
    })
}