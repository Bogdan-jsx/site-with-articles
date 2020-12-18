import { PUT_USER, REMOVE_USER } from "./actions";

const initialState = {
    user: localStorage.user ? JSON.parse(localStorage.getItem("user")) : {},
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_USER:
            return {
                ...state,
                user: action.payload,
            }
        case REMOVE_USER: 
            return {
                ...state,
                user: {},
            }
    }

    return state;
}