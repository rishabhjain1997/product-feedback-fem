import React, { useContext } from "react"
import InteractiveSort from "../shared/InteractiveSort"
import Button from "../shared/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import SuggestionContext from "../../context/suggestion/SuggestionContext"

const SuggestionsMenu = () => {
  const { suggestions, dispatch } = useContext(SuggestionContext)

  const sortSuggestions = (sortBy) => {
    dispatch({ type: "SET_LOADING" })
    dispatch({ type: "SET_SORT", payload: sortBy })
    const feedbacks = suggestions

    if (sortBy === "leastUpvotes") {
      feedbacks.sort(function (a, b) {
        return a.data.upvotes > b.data.upvotes
          ? 1
          : b.data.upvotes > a.data.upvotes
          ? -1
          : 0
      })
    }

    if (sortBy === "mostUpvotes") {
      feedbacks.sort(function (a, b) {
        return a.data.upvotes > b.data.upvotes
          ? -1
          : b.data.upvotes > a.data.upvotes
          ? 1
          : 0
      })
    }

    if (sortBy === "mostComments") {
      feedbacks.sort(function (a, b) {
        return a.data.comments?.length > b.data.comments?.length ||
          (a.data.comments && !b.data.comments)
          ? -1
          : b.data.comments?.length > a.data.comments?.length ||
            (b.data.comments && !a.data.comments)
          ? 1
          : 0
      })
    }

    if (sortBy === "leastComments") {
      feedbacks.sort(function (a, b) {
        return a.data.comments?.length > b.data.comments?.length ||
          (a.data.comments?.length && !b.data.comments?.length)
          ? 1
          : b.data.comments?.length > a.data.comments?.length ||
            (b.data.comments?.length && !a.data.comments?.length)
          ? -1
          : 0
      })
    }
    dispatch({ type: "SET_SORT", payload: sortBy })
    dispatch({ type: "SET_SUGGESTIONS", payload: feedbacks })
  }

  return (
    <div className="w-full h-14 md:h-20 md:rounded-lg  px-6 bg-success-content flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <div className="flex-row items-center hidden md:flex mr-10 text-lg font-bold">
            <FontAwesomeIcon
              className="mr-4 text-base-100 text-sm self-center"
              icon={faLightbulb}
            />
            <p className="text-base-100">{suggestions?.length} Suggestions</p>
          </div>
          <InteractiveSort sortSuggestions={sortSuggestions} />
        </div>
      </div>
      <Link to="/feedback-new" className="md:w-40 w-32">
        <Button type="secondary">
          <FontAwesomeIcon
            className="mr-1 text-base-100 text-xs md:text-sm self-center"
            icon={faPlus}
          />
          Add Feedback
        </Button>
      </Link>
    </div>
  )
}

export default SuggestionsMenu
