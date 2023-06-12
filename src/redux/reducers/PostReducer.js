import {  ADD_POST_REQUEST_SUCCESS, GET_POSTS_REQUEST, GET_POSTS_REQUEST_FAILURE, GET_POSTS_REQUEST_SUCCESS } from "../actions";

const postsReducer = (state = { posts: [], loading: false, error: null }, action) => {
    switch(action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_POSTS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }

        case GET_POSTS_REQUEST_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case ADD_POST_REQUEST_SUCCESS:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default:
            return state
    }
}

export default postsReducer