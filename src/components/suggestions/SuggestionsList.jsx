import React from "react"
import SuggestionCard from "./SuggestionCard"
const SuggestionsList = ({ suggestions }) => {
  return (
    <div className="flex flex-col">
      {suggestions.map((suggestion) => {
        return <SuggestionCard suggestion={suggestion} key={suggestion.id} />
      })}
    </div>
  )
}

export default SuggestionsList
