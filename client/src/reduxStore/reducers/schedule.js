import {
  SCHEDULE_REQUEST,
  SCHEDULE_SUCCESS,
  SCHEDULE_ERROR,
  SCHEDULE_UPDATE,
  SCHEDULE_UPDATE_SUCCESS,
} from "../constants/constants";

const initialState = {
  schedule: [],
  loading: true,
  errors: null,
  success: false,
};

function Schedule(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SCHEDULE_REQUEST:
    case SCHEDULE_UPDATE:
      return {
        ...state,
        loading: true,
      };
    case SCHEDULE_SUCCESS:
      return {
        ...state,
        schedule: payload,
        loading: false,
      };
    case SCHEDULE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case SCHEDULE_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default Schedule;