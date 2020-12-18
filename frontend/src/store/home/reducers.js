import { PUT_ARTICLES } from "./actions";

const initialState = {
    allArticles: [],
}

export const allArticlesReducer = (state = initialState, action) => {
    if (action.type === PUT_ARTICLES) {
        return {
            ...state,
            allArticles: action.payload,
        }
    }

    return state;
}