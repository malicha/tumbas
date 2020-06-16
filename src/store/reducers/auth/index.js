let defaultState = {
  token: null,
  user: null,
  guest: null,
  isLoading: false,
  guestProfiles: null,
  isDeleteGuest: false,
  isSignedIn: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'AUTH/SET_LOADING':
      return {
        ...state,
        isLoading: true
      };

    case 'AUTH/SET_LOADING_FINISHED':
      return {
        ...state,
        isLoading: false
      };

    case 'AUTH/GET_USER_FIREBASE':
      return {
        ...state,
        user: action.payload
      };
    case 'AUTH/SET_IS_SIGNED_IN':
      return {
        ...state,
        isSignedIn: true,
        isLoading: false
      };
    case 'AUTH/GET_AUTH_TOKEN':
      return {
        ...state,
        guest: action.payload
      };

    case 'AUTH/GET_GUEST_PROFILES':
      return {
        ...state,
        guestProfiles: action.payload
      };
    case 'AUTH/IS_DELETE_GUEST':
      return {
        ...state,
        isDeleteGuest: action.payload
      };

    case 'AUTH/ADD_GUEST':
      return {
        ...state,
        guestProfiles: [...state.guestProfiles, action.payload]
      };

    case 'AUTH/EDIT_GUEST':
      return {
        ...state,
        guestProfiles: state.guestProfiles.map(element =>
          element.id === action.payload.id
            ? Object.assign({}, element, action.payload)
            : element
        )
      };

    case 'AUTH/DELETE_GUEST':
      return {
        ...state,
        guestProfiles: state.guestProfiles.filter(l => l.id !== action.payload)
      };

    case 'AUTH/GET_USER_TOKEN':
      return {
        ...state,
        token: action.payload
      };

    case 'AUTH/SET_USER_IS_LOGIN':
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export default authReducer;
