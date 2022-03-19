import React, { useState } from "react"

const FormTextarea = () => {
  const [inputText, setInputText] = useState("")
  const [error, setError] = useState("")
  return (
    <div className="flex flex-col self-stretch">
      <textarea
        name="detail"
        id="detail"
        cols="70"
        className={`self-stretch h-28 md:h-24 text-sm px-6 py-3 rounded-md bg-base-200

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

export default FormTextarea

// ${
//   type === "detail" ? "h-28 md:h-24" : "h-12"
// }
