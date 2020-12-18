export const PUT_USER = "PUT_USER";
export const REMOVE_USER = "REMOVE_USER";

export const putUser = (user) => {
    return {
        type: PUT_USER,
        payload: user,
    }
}
export const removeUser = () => {
  return {
      type: REMOVE_USER,
  }
}

export const logIn = (email, password) => (dispatch, getState) => {
  fetch("http://localhost:3000/user/logIn", {
    method: "POST",
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({email, password}),
  }).then(res => res.json()).then(user => {
    dispatch(putUser(user));
    localStorage.setItem("user", JSON.stringify(user));
  });
}

export const logOut = () => (dispatch, getState) => {
  fetch("http://localhost:3000/user/logout")
    .then(() => {
      dispatch(removeUser());
      localStorage.clear();
    })
}