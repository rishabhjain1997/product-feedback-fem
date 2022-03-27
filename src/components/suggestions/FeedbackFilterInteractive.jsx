import React from "react"
import PropTypes from "prop-types"

const FeedbackFilterInteractive = ({
  tag,
  children,
  activateFilter,
  isActive,
}) => {
  return (
    <div
      className={` py-4 px-4 flex content-center 
      justify-center rounded-lg hover:bg-success  ${
        isActive ? "bg-primary" : "bg-base-300"
      } max-w-fit h-7 cursor-pointer`}
      onClick={() => activateFilter(tag.toLowerCase())}
    >
      <div
        className={`w-fit self-center font-bold text-sm ${
          isActive ? "text-base-100" : "text-primary"
        }`}
      >
        {children}
      </div>
    </div>
  )
}
FeedbackFilterInteractive.propTypes = {
  activateFilter: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
}
export default FeedbackFilterInteractive
