import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faCheck } from "@fortawesome/free-solid-svg-icons"

const FormDropdown = ({ options }) => {
  const [selected, setSelected] = useState(options[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="relative">
      <div
        className="w-fit hover:outline-none hover:ring-1 hover:ring-primary hover:rounded-md"
        onClick={() => {
          setIsDropdownOpen(true)
        }}
      >
        <button className="w-64 h-12 px-6 py-auto bg-base-200 rounded-md flex flex-row justify-between align-center">
          <span className="self-center text-base text-neutral">{selected}</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className=" self-center font-bold text-primary"
          />
        </button>
      </div>

      <div
        className={`absolute top-0 w-64 flex flex-col bg-base-100 shadow-xl rounded-xl ${
          isDropdownOpen ? "visible" : "invisible"
        }`}
      >
        {options.map((option, index) => {
          return (
            <button
              className={`text-left text-base px-6 py-3 text-info flex justify-between hover:text-secondary ${
                index !== options.length - 1 && " border-b-2 border-base-300"
              }`}
              key={option}
              onClick={() => {
                setSelected(option)
                setIsDropdownOpen(false)
              }}
            >
              {option}
              {selected === option && (
                <FontAwesomeIcon
                  className="self-center text-secondary fa-lg"
                  icon={faCheck}
                />
              )}
            </button>
          )
        })}
        {/* <button
          className="text-left text-base px-6 py-3 text-info border-b-2 border-base-300 flex justify-between hover:text-secondary"
          onClick={() => {
            setSelected("mostUpvotes")
            setIsDropdownOpen(false)
          }}
        >
          Most Upvotes
          {selected === "mostUpvotes" && (
            <FontAwesomeIcon
              className="self-center text-secondary fa-lg"
              icon={faCheck}
            />
          )}
        </button> */}
      </div>
    </div>
  )
}
FormDropdown.defaultProps = {
  options: ["Feature", "UI", "UX", "Enhacement", "Bug"],
}
export default FormDropdown
