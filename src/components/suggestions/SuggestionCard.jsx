import React from "react"
import InteractiveElement from "../shared/InteractiveElement"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons"

const SuggestionCard = () => {
  return (
    <div
      className="bg-base-100 rounded-lg  
    mb-4 w-full h-[200px] md:h-[150px] p-6 md:px-7 md:py-8 flex flex-row items-stretch"
    >
      <div className="hidden md:flex flex-row items-center mr-10 self-center">
        <InteractiveElement type="upvote" layout="col">
          112
        </InteractiveElement>
      </div>
      <div className="flex flex-col  justify-between w-full">
        <h4 className="font-bold text-sm text-neutral">
          Add tags for solutions
        </h4>
        <p>Easier to search for solutions based on a specific stack.</p>

        <InteractiveElement type="tag">Enhancement</InteractiveElement>
        <div className="flex flex-row justify-between  md:hidden">
          <InteractiveElement type="upvote" layout="row">
            112
          </InteractiveElement>
          <div className="flex flex-row items-center">
            <FontAwesomeIcon
              icon={faComment}
              className="self-center font-bold text-lg text-[#CDD2EE] mr-1"
            />
            <p className="text-neutral text-sm font-bold">4</p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-row items-center ml-auto self-center">
        <FontAwesomeIcon
          icon={faComment}
          className="self-center font-bold text-lg text-[#CDD2EE] mr-1"
        />
        <p className="text-neutral text-sm font-bold">4</p>
      </div>
    </div>
  )
}

export default SuggestionCard