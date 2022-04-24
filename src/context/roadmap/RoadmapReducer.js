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
