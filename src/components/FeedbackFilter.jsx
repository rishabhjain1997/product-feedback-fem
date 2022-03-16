import React from "react"
import InteractiveElement from "./shared/InteractiveElement"
const FeedbackFilter = ({ tags }) => {
  return (
    <div className="py-4 px-6 h-44 w-[223px] lg:w-72 xl:w-64 bg-base-100 rounded-lg flex flex-row flex-wrap space-x-2">
      {tags.map((tag) => {
        return <InteractiveElement key={tag}>{tag}</InteractiveElement>
      })}
    </div>
  )
}
FeedbackFilter.defaultProps = {
  tags: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
}
export default FeedbackFilter
