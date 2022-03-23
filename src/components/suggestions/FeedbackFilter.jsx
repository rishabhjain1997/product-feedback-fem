import React from "react"
import FeedbackFilterInteractive from "./FeedbackFilterInteractive"
import { useState } from "react"
const FeedbackFilter = ({ tags }) => {
  const [activeTag, setActiveTag] = useState(tags[0])
  const activateTag = (tag) => {
    console.log(tag)
    setActiveTag(tag)
  }
  return (
    <div className="py-4 px-6 h-44 w-[223px] lg:w-72 xl:w-64 bg-base-100 rounded-lg grid grid-rows-3 gap-2 grid-flow-col-dense">
      {tags.map((tag) => {
        return (
          <FeedbackFilterInteractive
            key={tag}
            tag={tag}
            isActive={activeTag === tag}
            activateFilter={activateTag}
          >
            {tag}
          </FeedbackFilterInteractive>
        )
      })}
    </div>
  )
}
FeedbackFilter.defaultProps = {
  tags: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
}
export default FeedbackFilter
