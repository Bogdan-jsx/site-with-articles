export const PUT_ARTICLE_INFO = "PUT_ARTICLE_INFO";

export const putArticleInfo = (articleInfoFromServer) => {
    return {
        type: PUT_ARTICLE_INFO,
        payload: articleInfoFromServer,
    }
}

export const loadArticleInfo = (articleId, userId) => (dispatch, getState) => {
    fetch(`http://localhost:3000/articles/article?id=${articleId}&&userId=${userId}`)
      .then(res => res.json())
      .then(json => {
        dispatch(putArticleInfo(json));
      })
}

export const deleteArticle = (articleId) => (dispatch, getState) => {
  fetch(`http://localhost:3000/articles/delete/${articleId}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then(() => {
    window.location = "/";
    dispatch(putArticleInfo({}));
  });
}
export const likeArticle = (articleId, userId) => (dispatch, getState) => {
  fetch("http://localhost:3000/articles/addLike", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({articleId, likedUserId: userId}),
  }).then((res) => res.json())
    .then((result) => dispatch(putArticleInfo(result)));
}
export const dislikeArticle = (articleId, userId) => (dispatch, getState) => {
  fetch("http://localhost:3000/articles/addDislike", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({articleId, likedUserId: userId}),
  }).then((res) => res.json())
    .then((result) => dispatch(putArticleInfo(result)));
}