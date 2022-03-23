import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleUp,
  faAngleDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons"

const InteractiveSort = ({ sortSuggestions }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [sortBy, setSortBy] = useState("mostUpvotes")

  const sortClass = {
    mostUpvotes: "Most Upvotes",
    leastUpvotes: "Least Upvotes",
    mostComments: "Most Comments",
    leastComments: "Least Comments",
  }

  return (
    <div className="relative">
      <button
        className="bg-success-content py-4 md:py-6 px-0 md:px-4 text-base-300 text-xs md:text-sm 
        lg:text-base xl:text-sm rounded-xl flex flex-row align-center justify-center"
        onClick={() => {
          setIsDropdownOpen((prev) => {
            return !prev
          })
        }}
      >
        <div>
          Sort by :
          <span
            className={`font-bold ${
              isDropdownOpen ? "text-base-300" : "text-base-100"
            }`}
          >{` ${sortClass[sortBy]}`}</span>
        </div>
        <FontAwesomeIcon
          className="ml-1 md:ml-2 text-base-100 self-center"
          icon={isDropdownOpen ? faAngleUp : faAngleDown}
        />
      </button>

      <div
        className={`absolute mt-4 w-52 md:w-64 flex flex-col bg-base-100 shadow-xl rounded-xl ${
          isDropdownOpen ? "visible" : "invisible"
        }`}
      >
        <button
          className="text-left text-xs md:text-sm lg:text-base  xl:text-sm px-6 py-2 md:py-3 text-info border-b-2 border-base-300 flex justify-between hover:text-secondary"
          onClick={() => {
            setSortBy("mostUpvotes")
            setIsDropdownOpen(false)
            sortSuggestions("mostUpvotes")
          }}
        >
          Most Upvotes
          {sortBy === "mostUpvotes" && (
            <FontAwesomeIcon
              className="self-center text-secondary fa-lg"
              icon={faCheck}
            />
          )}
        </button>
        <button
          className="text-left text-xs md:text-sm lg:text-base  xl:text-sm px-6 py-2 md:py-3 text-info border-b-2 border-base-300 flex justify-between hover:text-secondary"
          onClick={() => {
            setSortBy("leastUpvotes")
            setIsDropdownOpen(false)
            sortSuggestions("leastUpvotes")
          }}
        >
          Least Upvotes
          {sortBy === "leastUpvotes" && (
            <FontAwesomeIcon
              className="self-center text-secondary fa-lg"
              icon={faCheck}
            />
          )}
        </button>
        <button
          className="text-left text-xs md:text-sm lg:text-base xl:text-sm px-6 py-2 md:py-3 text-info border-b-2 border-base-300 flex justify-between hover:text-secondary"
          onClick={() => {
            setSortBy("mostComments")
            setIsDropdownOpen(false)
            sortSuggestions("mostComments")
          }}
        >
          Most Comments
          {sortBy === "mostComments" && (
            <FontAwesomeIcon
              className="self-center text-secondary fa-lg"
              icon={faCheck}
            />
          )}
        </button>
        <button
          className="text-left text-xs md:text-sm lg:text-base xl:text-sm px-6 py-2 md:py-3 text-info flex justify-between hover:text-secondary"
          onClick={() => {
            setSortBy("leastComments")
            setIsDropdownOpen(false)
            sortSuggestions("leastComments")
          }}
        >
          Least Comments
          {sortBy === "leastComments" && (
            <FontAwesomeIcon
              className="self-center text-secondary fa-lg"
              icon={faCheck}
            />
          )}
        </button>
      </div>
    </div>
  )
}

export default InteractiveSort
