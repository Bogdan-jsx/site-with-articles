import { PUT_ARTICLE_INFO, ADD_LIKE, ADD_DISLIKE } from "./actions";

const initialState = {
    articleInfo: {},
}

export const articleInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_ARTICLE_INFO:
            return {
                ...state,
                articleInfo: action.payload,
            };
    }
    return state;
}