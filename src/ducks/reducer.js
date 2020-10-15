const initialState = {
  username: '',
  profilePicture: '',
  userId: 0
}

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';
const LOGIN_USER = 'LOGIN_USER';

export function loginUser(username, userId) {
  return {
    type: loginUser,
    payload: {
      username: username,
      userId: userId
    }
  }
}

export function getUser(userObj) {
  return {
    type: GET_USER,
    payload: userObj
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export function logout() {
  return {
    type: LOGOUT_USER
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      const { username, id, profile_picture } = action.payload.username;
      return { username, id, profile_picture }
    case LOGOUT_USER:
      return initialState;
    case GET_USER + '_PENDING':
      return { ...state }
    case GET_USER + '_FULFILLED':
      return { username, id, profile_picture }
    case GET_USER + '_REJECTED':
      return initialState;
    default:
      return state;
  }
}




// export default function reducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case UPDATE_USER:
//       return { ...state, username: payload.username, profilePic: payload.profile_pic, userId: payload.id };
//     case LOGOUT:
//       return initialState;
//     case GET_USER:
//       return { ...state, username: payload.username, profilePic: payload.profile_pic, userId: payload.id };
//     default:
//       return state;
//   }