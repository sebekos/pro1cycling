import {
  NEWS_REQUEST,
  NEWS_SUCCESS,
  NEWS_ERROR,
  NEWS_UPDATE,
  NEWS_UPDATE_SUCCESS,
} from "../constants/constants";

const initialState = {
  news: [],
  loading: true,
  errors: null,
  success: false,
  firstLoad: false,
};

function News(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case NEWS_REQUEST:
    case NEWS_UPDATE:
      return {
        ...state,
        loading: true,
      };
    case NEWS_SUCCESS:
      return {
        ...state,
        news: payload,
        loading: false,
        firstLoad: true,
      };
    case NEWS_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case NEWS_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default News;
