import React from "react"
import SuggestionCard from "./SuggestionCard"
import SuggestionContext from "../../context/suggestion/SuggestionContext"
import { useContext } from "react"
import Loading from "../../components/Loading"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
import { sortSuggestions } from "../../context/suggestion/SuggestionActions"

const SuggestionsList = () => {
  const { suggestions, loading, dispatch, sortBy } =
    useContext(SuggestionContext)

  const incrementUpvote = async (docId, upvotes) => {
    const docRef = doc(db, "productRequests", docId)
    try {
      await updateDoc(docRef, {
        upvotes: upvotes + 1,
      })
      // const updatedSuggestion = suggestions.filter(
      //   (suggestion) => suggestion.id === docId
      // )[0]
      // updatedSuggestion.data.upvotes = upvotes + 1
      // let feedbacks = suggestions.filter(
      //   (suggestion) => suggestion.id !== docId
      // )
      // feedbacks.push(updatedSuggestion)

      const feedbacks = suggestions.map((suggestion) => {
        if (suggestion.id === docId) {
          suggestion.data.upvotes += 1
        }
        return suggestion
      })

      dispatch({
        type: "SET_SUGGESTIONS",
        payload: sortSuggestions(sortBy, feedbacks),
      })
    } catch (error) {
      // TODO - Change to Toast
      console.log("Could not update")
    }
  }
  if (loading) {
    return <Loading />
  }
  return (
    <div className="flex flex-col">
      {suggestions.map((suggestion) => {
        return (
          <SuggestionCard
            suggestion={suggestion}
            key={suggestion.id}
            incrementUpvote={incrementUpvote}
          />
        )
      })}
    </div>
  )
}

export default SuggestionsList
