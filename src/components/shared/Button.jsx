import React from "react"
import { useEffect, useState } from "react"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"

const Button = ({ children, type }) => {
  const bgColor = (type) => {
    switch (type) {
      case "primary":
        return {
          default: "bg-primary  text-base-100",
          hover: "hover:bg-primary-focus",
        }

      case "secondary":
        return {
          default: "bg-secondary  text-base-100",
          hover: "hover:bg-secondary-focus",
        }

      case "neutral":
        return {
          default: "bg-neutral  text-base-100",
          hover: "hover:bg-neutral-focus",
        }
      case "back":
        return { default: "bg-base-100 text-info", hover: "hover:underline" }
      case "back-dark":
        return {
          default: "bg-success-content text-base-100",
          hover: "hover:underline",
        }
      case "error":
        return {
          default: "bg-error  text-base-100",
          hover: "hover:bg-error-content",
        }
      default:
        return {
          default: "bg-error  text-base-100",
          hover: "hover:bg-error-content",
        }
    }
  }

  const [defaultColor, setDefaultColor] = useState(bgColor(type).default)
  const [hoverColor, setHoverColor] = useState(bgColor(type).hover)

  return (
    <button
      type="button"
      className={`h-10 md:h-[44px] md:w-40 w-32 rounded-xl text-xs md:text-sm font-bold ${defaultColor} ${hoverColor} flex content-center justify-center`}
    >
      {(type === "back" || type === "back-dark") && (
        <ArrowBackIosNewIcon style={{ fontSize: 12 }} className="self-center" />
      )}
      <div className="self-center ml-2.5">{children}</div>
    </button>
  )
}

export default Button

// className={`${defaultColor} hover:${hoverColor}`}
// {`${defaultColor} hover:${hoverColor}`}
