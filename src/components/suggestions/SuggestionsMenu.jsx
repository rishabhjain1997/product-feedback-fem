import React from "react"
import InteractiveSort from "../shared/InteractiveSort"
import Button from "../shared/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faLightbulb } from "@fortawesome/free-solid-svg-icons"

const SuggestionsMenu = () => {
  return (
    <div className="w-full h-14 md:h-20 md:rounded-lg  px-6 bg-success-content flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <div className="flex-row items-center hidden md:flex mr-10 text-lg font-bold">
            <FontAwesomeIcon
              className="mr-4 text-base-100 text-sm self-center"
              icon={faLightbulb}
            />
            <p className="text-base-100">6 Suggestions</p>
          </div>
          <InteractiveSort />
        </div>
      </div>
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

export default SuggestionsMenu
