const initialState = {
    username: '',
    profilePic: '',
    userId: 0
  }
  
  const UPDATE_USER = 'UPDATE_USER';
  const LOGOUT = 'LOGOUT';
  const GET_USER = 'GET_USER';
  
  export function getUser(userObj){
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
    type: LOGOUT
  }
}
  
  export default function reducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
      case UPDATE_USER:
        return { ...state, username: payload.username, profilePic: payload.profile_pic, userId: payload.id };
      case LOGOUT:
        return initialState;
      default:
        return state;
    }
  }
  
