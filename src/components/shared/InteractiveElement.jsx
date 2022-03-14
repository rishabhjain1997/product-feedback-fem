import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
const InteractiveElement = ({ type, children }) => {
  return (
    <div
      className={`${
        type === "upvote" ? "px-2.5 py-2" : "py-1.5 px-4"
      }  bg-base-300 flex flex-col content-center 
      justify-center rounded-xl hover:bg-success active:bg-primary group`}
    >
      {type === "upvote" && (
        <FontAwesomeIcon
          icon={faAngleUp}
          className=" self-center mb-2 font-bold text-primary group-active:text-base-100"
        />
      )}
      <div
        className={`w-fit self-center font-bold text-sm group-active:text-base-100 ${
          type === "upvote" ? "text-neutral" : "text-primary"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

InteractiveElement.defaultProps = {
  type: "tag",
}

export default InteractiveElement
