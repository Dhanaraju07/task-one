import {
  RETRIEVE_POST_DETAILS_REQUEST,
  RETRIEVE_POST_DETAILS_REQUEST_FAILURE,
  RETRIEVE_POST_DETAILS_REQUEST_SUCCESS,
} from "../actions";

const PostDetailReducer = (
  state = { post: {}, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case RETRIEVE_POST_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RETRIEVE_POST_DETAILS_REQUEST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
    case RETRIEVE_POST_DETAILS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};


export default PostDetailReducer