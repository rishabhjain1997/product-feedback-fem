import React from "react"
import EmptySuggestions from "./EmptySuggestions"
const SuggestionsList = () => {
  return (
    <div className="min-h-[calc(100vh-136px)] md:min-h-[calc(100vh-352px)]  xl:min-h-[calc(100vh-176px)] flex flex-row">
      <EmptySuggestions className="flex-1" />
    </div>
  )
}

export default SuggestionsList
