import React from "react"
import { useState } from "react"
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
        return { default: "bg-transparent text-info", hover: "hover:underline" }

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

  const [defaultColor] = useState(bgColor(type).default)
  const [hoverColor] = useState(bgColor(type).hover)
  // md:w-40 w-32
  return (
    <button
      type="button"
      className={`${
        type !== "back-dark" ? "h-10 md:h-[44px]" : "h-fit"
      } w-full  rounded-xl text-xs md:text-sm font-bold 
      ${defaultColor} ${hoverColor} flex content-center 
      ${
        type !== "back"
          ? type === "back-dark"
            ? "justify-between"
            : "justify-center"
          : "justify-start"
      } `}
    >
      {(type === "back" || type === "back-dark") && (
        <ArrowBackIosNewIcon
          style={{ fontSize: 12 }}
          className={`self-center ${
            type === "back" ? "text-primary" : "text-info"
          } font-bold mr-2.5`}
        />
      )}
      <div className="self-center">{children}</div>
    </button>
  )
}

export default Button

// className={`${defaultColor} hover:${hoverColor}`}
// {`${defaultColor} hover:${hoverColor}`}
