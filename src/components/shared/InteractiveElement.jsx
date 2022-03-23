import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
const InteractiveElement = ({ type, children, layout }) => {
  return (
    <div
      className={`${
        type !== "upvote"
          ? "py-4 px-4"
          : layout === "col"
          ? "px-2.5 py-7"
          : "px-2.5 py-4"
      }  bg-base-300 flex ${layout === "col" && "flex-col"} content-center 
      justify-center rounded-lg hover:bg-success active:bg-primary group max-w-fit h-7 cursor-pointer`}
    >
      {type === "upvote" && (
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`self-center  ${
            layout === "col" ? "mb-2" : "mr-2"
          }  font-bold text-primary group-active:text-base-100`}
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
  layout: "col",
  type: "tag",
}

export default InteractiveElement
