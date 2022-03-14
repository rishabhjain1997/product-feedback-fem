import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleUp,
  faAngleDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons"

const InteractiveSort = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [sortBy, setSortBy] = useState("mostComments")

  const sortClass = {
    mostUpvotes: "Most Upvotes",
    leastUpvotes: "Least Upvotes",
    mostComments: "Most Comments",
    leastComments: "Least Comments",
  }

  return (
    <div className="relative">
      <button
        className="bg-success-content py-6 px-4 text-base-300 rounded-xl flex flex-row align-center justify-center"
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
          className="ml-2 text-base-100 self-center"
          icon={isDropdownOpen ? faAngleUp : faAngleDown}
        />
      </button>

      <div
        className={`absolute mt-4 w-64 flex flex-col bg-base-100 shadow-xl rounded-xl ${
          isDropdownOpen ? "visible" : "invisible"
        }`}
      >
        <button
          className="text-left text-base px-6 py-3 text-info border-b-2 border-base-300 flex justify-between hover:text-secondary"
          onClick={() => {
            setSortBy("mostUpvotes")
            setIsDropdownOpen(false)
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
          className="text-left text-base px-6 py-3 text-info border-b-2 border-base-300 flex justify-between hover:text-secondary"
          onClick={() => {
            setSortBy("leastUpvotes")
            setIsDropdownOpen(false)
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
          className="text-left text-base px-6 py-3 text-info border-b-2 border-base-300 flex justify-between hover:text-secondary"
          onClick={() => {
            setSortBy("mostComments")
            setIsDropdownOpen(false)
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
          className="text-left text-base px-6 py-3 text-info flex justify-between hover:text-secondary"
          onClick={() => {
            setSortBy("leastComments")
            setIsDropdownOpen(false)
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
