import React from "react"
import { useEffect, useState } from "react"

const Button = ({ children, type }) => {
  const bgColor = (type) => {
    switch (type) {
      case "primary":
        return { default: "bg-primary", hover: "bg-primary-focus" }

      case "secondary":
        return { default: "bg-secondary", hover: "bg-secondary-focus" }

      case "neutral":
        return { default: "bg-neutral", hover: "bg-neutral-focus" }

      default:
        return { default: "bg-error", hover: "bg-error-content" }
    }
  }

  const [defaultColor, setDefaultColor] = useState(bgColor(type).default)
  const [hoverColor, setHoverColor] = useState(bgColor(type).hover)

  return (
    <button
      type="button"
      className={`h-11 w-40 rounded-xl text-sm ${defaultColor} font-bold text-base-100 hover:${hoverColor}`}
    >
      {children}
    </button>
  )
}

export default Button

// className={`${defaultColor} hover:${hoverColor}`}
// {`${defaultColor} hover:${hoverColor}`}
