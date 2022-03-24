import { createContext, useReducer } from "react"
import suggestionReducer from "./SuggestionReducer"

const SuggestionContext = createContext()

export const SuggestionProvider = ({ children }) => {
  const initialState = {
    suggestions: null,
    loading: true,
    // stats: {},
    filter: "all",
    sortBy: "mostUpvotes",
  }
  const [state, dispatch] = useReducer(suggestionReducer, initialState)
  return (
    <SuggestionContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SuggestionContext.Provider>
  )
}

export default SuggestionContext
