import React, { useState } from "react"

const FormTextField = () => {
  const [inputText, setInputText] = useState("")
  const [error, setError] = useState("")
  return (
    <div className="w-fit flex flex-col">
      <input
        type="text"
        name="input"
        id="input"
        className={`w-64 h-12 text-sm px-6 rounded-md bg-base-200

      ${
        error.length === 0
          ? "outline-none focus:outline-none border-0 focus:border-primary ring-0 focus:ring-1 focus:ring-primary"
          : "outline-none focus:outline-none border-error ring-1 ring-error"
      }`}
      />
      {error.length !== 0 && <p className="text-sm mt-1 text-error">{error}</p>}
    </div>
  )
}

export default FormTextField
