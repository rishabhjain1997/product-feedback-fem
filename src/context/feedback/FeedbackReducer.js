const feedbackReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      }
    case "CLEAR_FEEDBACK":
      return {
        ...state,
        loading: false,
        currentId: null,
        title: "",
        category: "",
        comments: [],
        status: "",
        upvotes: 0,
        description: "",
        titleError: "",
        descriptionError: "",
      }
    case "SET_NEWFEEDBACK":
      return {
        ...state,
        currentId: action.payload,
        loading: false,
        status: "suggestion",
        // upvotes: 0,
        // titleError: "",
        // descriptionError: "",
        // comments: [],
      }

    case "SET_CURRENTID":
      return {
        ...state,
        currentId: action.payload,
      }
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      }
    case "SET_TITLE_ERROR":
      return {
        ...state,
        titleError: action.payload,
      }

    case "SET_DESCRIPTION_ERROR":
      return {
        ...state,
        descriptionError: action.payload,
      }

    case "CLEAR_ERRORS":
      return {
        ...state,
        descriptionError: "",
        titleError: "",
      }

    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      }
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
      }
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      }

    default:
      return state
  }
}

export default feedbackReducer
