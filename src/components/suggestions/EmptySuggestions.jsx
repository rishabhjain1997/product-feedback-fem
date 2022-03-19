import React from "react"
import Button from "../shared/Button"
import { ReactComponent as EmptyIllustration } from "../../assets/suggestions/illustration-empty.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import SuggestionsCard from "../suggestions/SuggestionCard"
import SuggestionsList from "./SuggestionsList"

const EmptySuggestions = () => {
  return (
    <div
      className="h-full w-full bg-base-100 shadow-sm rounded-lg px-6 md:px-36 lg:px-52 flex-1 flex flex-col items-center justify-center 
      "
    >
      <EmptyIllustration />
      <p className="mt-10 md:mt-14 text-center font-bold text-lg md:text-2xl text-neutral">
        There is no feedback yet.
      </p>
      <p className="mt-3 md:mt-4 mb-6 md:mb-12 max-w-72 text-center text-sm md:text-base leading-6 text-info">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <div className="md:w-40 w-32">
        <Button type="secondary">
          <FontAwesomeIcon
            className="mr-1 text-base-100 text-xs md:text-sm self-center"
            icon={faPlus}
          />
          Add Feedback
        </Button>
      </div>
    </div>
  )
}

export default EmptySuggestions

// There is no feedback yet. Got a suggestion? Found a bug that needs to be squashed? We love
// hearing about new ideas to improve our app.

// Add Feedback
