import React, { useState, useContext } from "react"
import FeedbackContext from "../../context/feedback/FeedbackContext"

const FormTextField = () => {
  const { title, dispatch, titleError } = useContext(FeedbackContext)

  return (
    <div className="flex flex-col self-stretch">
      <input
        type="text"
        name="input"
        id="input"
        className={`self-stretch h-12 text-sm px-6 rounded-md bg-base-200

      ${
        titleError.length === 0
          ? "outline-none focus:outline-none border-0 focus:border-primary ring-0 focus:ring-1 focus:ring-primary"
          : "outline-none focus:outline-none border-error ring-1 ring-error"
      }`}
        value={title}
        onChange={(e) => {
          dispatch({ type: "SET_TITLE", payload: e.target.value })
        }}
      />
      {titleError.length !== 0 && (
        <p className="text-sm mt-1 text-error">{titleError}</p>
      )}
    </div>
  )
}

export default FormTextField

// ${
//   type === "detail" ? "h-28 md:h-24" : "h-12"
// }
