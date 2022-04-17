import React, { useState } from "react"
import Button from "../shared/Button"
const AddComment = () => {
  const [title, setTitle] = useState("")
  const [titleError, setTitleError] = useState("")
  return (
    <div className="bg-base-100 rounded-lg p-6 md:p-8 md:pt-6 flex flex-col">
      <h1 className="text-neutral text-lg font-bold">Add Comment</h1>
      <textarea
        placeholder="Type your coment here"
        className={`self-stretch h-20 text-xs  md:text-base p-4 md:px-6 rounded-md bg-base-200 mt-6

      ${
        titleError.length === 0
          ? "outline-none focus:outline-none border-0 focus:border-primary ring-0 focus:ring-1 focus:ring-primary"
          : "outline-none focus:outline-none border-error ring-1 ring-error"
      }`}
        value={title}
        onChange={(e) => {
          console.log("Button Clicked")
        }}
      />
      <div className="flex flex-row mt-4 md:mt-7 justify-between items-center">
        <p className="text-info text-xs md:text-base">250 Characters left</p>
        <div className="w-32 md:w-36">
          <Button type="secondary">Post Comment</Button>
        </div>
      </div>
    </div>
  )
}

export default AddComment
