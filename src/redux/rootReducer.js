import { combineReducers } from "redux";
import postsReducer from "./reducers/PostReducer";
import PostDetailReducer from "./reducers/DetailReducer";


const rootReducer = combineReducers({
    Posts: postsReducer,
    Post: PostDetailReducer
})

export default rootReducer