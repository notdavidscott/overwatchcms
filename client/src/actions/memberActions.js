import axios from "axios";

import {
  ADD_MEMBER,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_MEMBERS,
  GET_MEMBER,
  MEMBER_LOADING,
  DELETE_MEMBER,
  EDIT_MEMBER,
  // EDIT_COMMENT
} from "./types";

// Add Post
export const addMember = memberData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/members", memberData)
    .then(res =>
      dispatch({
        type: ADD_MEMBER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get members
export const getMembers = () => dispatch => {
  dispatch(setMemberLoading());
  axios
    .get("/api/members")
    .then(res =>
      dispatch({
        type: GET_MEMBERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MEMBERS,
        payload: null
      })
    );
};

// Get single member
export const getMember = id => dispatch => {
  dispatch(setMemberLoading());
  axios
    .get(`/api/members/${id}`)
    .then(res =>
      dispatch({
        type: GET_MEMBER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MEMBER,
        payload: null
      })
    );
};

// Delete Post
export const deleteMember = id => dispatch => {
  axios
    .delete(`/api/members/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_MEMBER,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// //Edit MEMBER ***** FIX 
// export const editMember = (member, updatedInfo) => dispatch => {
//   console.log('member', member);
//  // console.log('updateText', updatedText);
//   axios
//     .put(`/api/members/${member._id}`, {
//       text: updatedText,
//     })
//     .then(res => {
//     ///  console.log('resp', res);
//       dispatch({
//         type: EDIT_POST,
//         payload: ''
//       });
//     })
//     .catch(err => {
//      console.log('err', err);
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     });
// };


// // Add Comment
// export const addComment = (postId, commentData) => dispatch => {
//   dispatch(clearErrors());
//   axios
//     .post(`/api/posts/comment/${postId}`, commentData)
//     .then(res =>
//       dispatch({
//         type: GET_MEMBER,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// // Delete Comment
// export const deleteComment = (postId, commentId) => dispatch => {
//   axios
//     .delete(`/api/posts/comment/${postId}/${commentId}`)
//     .then(res =>
//       dispatch({
//         type: GET_POST,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };



// Set loading state
export const setMemberLoading = () => {
  return {
    type: MEMBER_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
