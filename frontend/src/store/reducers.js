import { combineReducers } from "redux";
import { allArticlesReducer } from "./home/reducers";
import { articleInfoReducer } from "./articlePage/reducers";
import { commentsReducer } from "./comments/reducers";
import { userReducer } from "./user/reducers";

export default combineReducers({
    articlesReducer: allArticlesReducer,
    articleInfoReducer,
    commentsReducer,
    userReducer,
});