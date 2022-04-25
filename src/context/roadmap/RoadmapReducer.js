const roadmapReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      }
    case "SET_FEEDBACKS":
      return {
        ...state,
        liveFeedbacks: action.payload.liveFeedbacks,
        plannedFeedbacks: action.payload.plannedFeedbacks,
        inProgressFeedbacks: action.payload.inProgressFeedbacks,
        loading: false,
      }
    case "UPDATE_FEEDBACKS":
      if (action.payload.status === "in-progress") {
        return {
          ...state,
          inProgressFeedbacks: action.payload.feedbacks,
        }
      }
      if (action.payload.status === "planned") {
        return {
          ...state,
          plannedFeedbacks: action.payload.feedbacks,
        }
      }
      return {
        ...state,
        liveFeedbacks: action.payload.feedbacks,
      }
    case "SET_TAB":
      return {
        ...state,
        tab: action.payload,
      }
    default:
      return state
  }
}

export default roadmapReducer
