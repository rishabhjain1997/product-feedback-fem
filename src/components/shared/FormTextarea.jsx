import React, { useContext } from "react"
import FeedbackContext from "../../context/feedback/FeedbackContext"

const FormTextarea = () => {
  const { description, dispatch, descriptionError } =
    useContext(FeedbackContext)

  return (
    <div className="flex flex-col self-stretch">
      <textarea
        name="detail"
        id="detail"
        cols="70"
        className={`self-stretch h-28 md:h-24 text-sm px-6 py-3 rounded-md bg-base-200

      ${
        descriptionError.length === 0
          ? "outline-none focus:outline-none border-0 focus:border-primary ring-0 focus:ring-1 focus:ring-primary"
          : "outline-none focus:outline-none border-error ring-1 ring-error"
      }`}
        value={description}
        onChange={(e) => {
          dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })
        }}
      />
      {descriptionError.length !== 0 && (
        <p className="text-sm mt-1 text-error">{descriptionError}</p>
      )}
    </div>
  )
}

export default FormTextarea
