import { createContext, useReducer } from "react"
import roadmapReducer from "./RoadmapReducer"

const RoadmapContext = createContext()

export const RoadmapProvider = ({ children }) => {
  const initialState = {
    loading: false,
  }
  const [state, dispatch] = useReducer(roadmapReducer, initialState)
  return (
    <RoadmapContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RoadmapContext.Provider>
  )
}
export default RoadmapContext
