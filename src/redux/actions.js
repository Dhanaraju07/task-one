import axios from 'axios'

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_REQUEST_SUCCESS = "GET_POSTS_REQUEST_SUCCESS"
export const GET_POSTS_REQUEST_FAILURE = "GET_POSTS_REQUEST_FAILURE"

export const RETRIEVE_POST_DETAILS_REQUEST = 'RETRIEVE_POST_DETAILS_REQUEST'
export const RETRIEVE_POST_DETAILS_REQUEST_SUCCESS = 'RETRIEVE_POST_DETAILS_REQUEST_SUCCESS'
export const RETRIEVE_POST_DETAILS_REQUEST_FAILURE = 'RETRIEVE_POST_DETAILS_REQUEST_FAILURE'

export const ADD_POST_REQUEST_SUCCESS = 'ADD_POST_REQUEST_SUCCESS'


export const gettingPosts = () => {
    return async (dispatch) => {
        dispatch({ type: GET_POSTS_REQUEST})
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(response)
            dispatch({ type: GET_POSTS_REQUEST_SUCCESS, payload: response.data})
        } catch (err) {
            console.log('Error', err)
            dispatch({ type: GET_POSTS_REQUEST_FAILURE, payload: err})
        }
    }
}

export const postDetail = (id) => {
    return async (dispatch) => {
        dispatch({ type: RETRIEVE_POST_DETAILS_REQUEST})
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(response.data)
        dispatch({ type: RETRIEVE_POST_DETAILS_REQUEST_SUCCESS, payload: response.data})

        } catch(err) {
            console.log("Error", err)
            dispatch({ type: RETRIEVE_POST_DETAILS_REQUEST_FAILURE, paylaod: err})
        }
    }
}

