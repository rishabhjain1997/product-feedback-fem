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
        newComment: "",
      }
    case "SET_UPVOTES":
      return {
        ...state,
        upvotes: action.payload,
      }
    case "ADD_NEWCOMMENT":
      return {
        ...state,
        newComment: "",
        comments: [...state.comments, action.payload],
      }
    case "SET_NEWCOMMENT":
      return {
        ...state,
        newComment: action.payload,
      }
    case "SET_FEEDBACK":
      return {
        ...state,
        loading: false,
        category:
          action.payload.category === "ui" || action.payload.category === "ux"
            ? action.payload.category.toUpperCase()
            : action.payload.category.charAt(0).toUpperCase() +
              action.payload.category.substr(1).toLowerCase(),
        comments: action.payload.comments,
        description: action.payload.description,
        currentId: action.payload.id,
        status:
          action.payload.status === "in-progress"
            ? "In-Progress"
            : action.payload.status.charAt(0).toUpperCase() +
              action.payload.status.substr(1).toLowerCase(),
        upvotes: action.payload.upvotes,
        title: action.payload.title,
        docId: action.payload.docId,
        newComment: "",
      }
    case "SET_NEWFEEDBACK":
      return {
        ...state,
        currentId: action.payload,
        loading: false,
        status: "suggestion",
        category: "Feature",
        newComment: "",
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
