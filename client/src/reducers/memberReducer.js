import {
    ADD_MEMBER,
    GET_MEMBERS,
    GET_MEMBER,
    DELETE_MEMBER,
    MEMBER_LOADING,
    EDIT_MEMBER
  } from "../actions/types";
  
  const initialState = {
    members: [],
    member: {},
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case MEMBER_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_MEMBERS:
        return {
          ...state,
          members: action.payload,
          loading: false
        };
      case GET_MEMBER:
        return {
          ...state,
          member: action.payload,
          loading: false
        };
      case ADD_MEMBER:
        return {
          ...state,
          members: [action.payload, ...state.members]
        };
      case DELETE_MEMBER:
        return {
          ...state,
          members: state.members.filter(member => member._id !== action.payload)
        };
        case EDIT_MEMBER:
        return {
          ...state
        };
      default:
        return state;
    }
  }
  