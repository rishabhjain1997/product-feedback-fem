import React from "react"
import InteractiveElement from "../shared/InteractiveElement"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
import { useContext } from "react"
import SuggestionContext from "../../context/suggestion/SuggestionContext"
import { sortSuggestions } from "../../context/suggestion/SuggestionActions"

const SuggestionCard = ({ suggestion }) => {
  const { suggestions, dispatch, sortBy } = useContext(SuggestionContext)
  const { category, title, description, upvotes, comments } = suggestion.data

  const productId = suggestion.data.id
  const incrementUpvote = async (docId, upvotes) => {
    const docRef = doc(db, "productRequests", docId)
    try {
      await updateDoc(docRef, {
        upvotes: upvotes + 1,
      })
      const updatedSuggestion = suggestions.filter(
        (suggestion) => suggestion.id === docId
      )[0]
      updatedSuggestion.data.upvotes = upvotes + 1
      let feedbacks = suggestions.filter(
        (suggestion) => suggestion.id !== docId
      )
      feedbacks.push(updatedSuggestion)

      dispatch({
        type: "SET_SUGGESTIONS",
        payload: sortSuggestions(sortBy, feedbacks),
      })
    } catch (error) {
      // TODO - Change to Toast
      console.log("Could not update")
    }
  }

  return (
    <div
      className="bg-base-100 rounded-lg  
    mb-4 w-full h-[200px] md:h-[150px] p-6 md:px-7 md:py-8 flex flex-row items-stretch"
    >
      <div className="hidden md:flex flex-row items-center mr-10 self-center">
        <InteractiveElement
          type="upvote"
          layout="col"
          incrementUpvote={incrementUpvote}
          docId={suggestion.id}
          upvotes={upvotes}
        >
          {upvotes}
        </InteractiveElement>
      </div>
      <div className="flex flex-col w-full">
        <Link
          className="flex flex-col  justify-between w-full flex-1"
          to={`/feedback-detail/${productId}`}
        >
          <h4 className="font-bold text-sm text-neutral">{title}</h4>
          <p>{description}</p>

          <InteractiveElement type="tag">
            {category.charAt(0).toUpperCase() +
              category.substr(1).toLowerCase()}
          </InteractiveElement>
        </Link>
        <div className="flex flex-row justify-between md:hidden mt-4">
          <InteractiveElement
            type="upvote"
            layout="row"
            incrementUpvote={incrementUpvote}
            docId={suggestion.id}
            upvotes={upvotes}
          >
            {upvotes}
          </InteractiveElement>
          <Link
            className="flex flex-row items-center"
            to={`/feedback-detail/${productId}`}
          >
            <FontAwesomeIcon
              icon={faComment}
              className="self-center font-bold text-lg text-[#CDD2EE] mr-1"
            />
            <p className="text-neutral text-sm font-bold">
              {comments?.length ?? 0}
            </p>
          </Link>
        </div>
      </div>

      <Link
        className="hidden md:flex flex-row items-center ml-auto self-center"
        to={`/feedback-detail/${productId}`}
      >
        <FontAwesomeIcon
          icon={faComment}
          className="self-center font-bold text-lg text-[#CDD2EE] mr-1"
        />
        <p className="text-neutral text-sm font-bold">
          {comments?.length ?? 0}
        </p>
      </Link>
    </div>
  )
}

export default SuggestionCard
