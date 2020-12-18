export const PUT_COMMENTS = "PUT_COMMENTS";
export const PUT_ARTICLE_ID = "PUT_ARTICLE_ID";

export const putComments = (comments) => {
  return {
      type: PUT_COMMENTS,
      payload: comments,
  }
}
export const putArticleId = (articleId) => {
  return {
    type: PUT_ARTICLE_ID,
    payload: articleId,
  }
}
export const loadComments = (articleId) => (dispatch, getState) => {
  fetch(`http://localhost:3000/comment/getComments?articleId=${articleId}`)
      .then(res => res.json())
      .then(result => {
        dispatch(putComments(result));
      })
}
export const editComment = (articleId, newText, commentId) => (dispatch, getState) => {
  fetch("http://localhost:3000/comment/edit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({articleId, newText, commentId})
    }).then(res => res.json()).then(updatedComments => {
      dispatch(putComments(updatedComments));
    });
}
export const addComment = (articleId, commentContent) => (dispatch, getState) => {
  const user = getState().userReducer.user;
  fetch("http://localhost:3000/comment/post", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({articleId, commentContent, userId: user._id})
    }).then(() => dispatch(loadComments(articleId)));
}
export const addCommentAnswer = (articleId, commentId, answerText) => (dispatch, getState) => {
  const user = getState().userReducer.user;
  fetch("http://localhost:3000/comment/addCommentAnswer", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({articleId, commentId, answerText, userId: user._id})
    }).then(() => dispatch(loadComments(articleId)));
}
export const editCommentAnswer = (articleId, commentId, answerId, newText ) => (dispatch, getState) => {
  fetch("http://localhost:3000/comment/editCommentAnswer", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({articleId, commentId, answerId, newText })
    }).then(() => dispatch(loadComments(articleId)));
}
