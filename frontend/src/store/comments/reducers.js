import { PUT_COMMENTS, PUT_ARTICLE_ID } from "./actions";

const initialState = {
    articleId: "",
    comments: {},
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            };
        case PUT_ARTICLE_ID:
            return {
                ...state,
                articleId: action.payload,
            };
        }

    return state;
}