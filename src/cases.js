export const initialState = {
    loading: true,
    movies: [],
    errorMessage: null,
    idList: ''
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "SEARCH_MOVIES_REQUEST":
        return {
          ...state,
          loading: true,
          errorMessage: null
        };
      case "SEARCH_MOVIES_SUCCESS":
        return {
          ...state,
          loading: false,
          movies: action.payload
        };
      case "SEARCH_MOVIES_FAILURE":
        return {
          ...state,
          loading: false,
          errorMessage: action.error
        };
        case "GET_LIST_ID":
          return{
            ...state,
            idList:  action.payload.listId
          }
      default:
        return state;
    }
  };
  