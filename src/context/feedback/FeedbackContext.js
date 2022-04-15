import { createContext, useReducer } from "react"
import feedbackReducer from "./FeedbackReducer"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const initialState = {
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
    docId: null,
  }
  const [state, dispatch] = useReducer(feedbackReducer, initialState)
  return (
    <FeedbackContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FeedbackContext.Provider>
  )
}
export default FeedbackContext
