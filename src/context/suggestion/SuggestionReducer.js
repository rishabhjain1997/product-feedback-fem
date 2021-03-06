const suggestionReducer = (state, action) => {
  switch (action.type) {
    case "SET_SORT":
      return {
        ...state,
        sortBy: action.payload,
      }

    case "SET_FILTER": {
      return {
        ...state,
        filter: action.payload.toLowerCase(),
      }
    }

    case "SET_SUGGESTIONS":
      return {
        ...state,
        suggestions: action.payload,
        loading: false,
      }
    case "SET_STATS":
      return {
        ...state,
        stats: action.payload,
        loading: false,
      }
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      }
    case "CLEAR_LOADING":
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}

export default suggestionReducer
