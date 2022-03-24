import React from "react"
import SuggestionCard from "./SuggestionCard"
import SuggestionContext from "../../context/suggestion/SuggestionContext"
import { useContext } from "react"
import Loading from "../../components/Loading"

const SuggestionsList = () => {
  const { suggestions, loading } = useContext(SuggestionContext)
  if (loading) {
    return <Loading />
  }
  return (
    <div className="flex flex-col">
      {suggestions.map((suggestion) => {
        return <SuggestionCard suggestion={suggestion} key={suggestion.id} />
      })}
    </div>
  )
}

export default SuggestionsList
