import React, { useState } from "react"
import InteractiveElement from "../shared/InteractiveElement"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment, faCircle } from "@fortawesome/free-solid-svg-icons"

const RoadmapCard = () => {
  const [tab, setTab] = useState("planned")
  const tabColor = () => {
    if (tab === "planned") {
      return "warning"
    }
    if (tab === "in-progress") {
      return "secondary"
    }
    return "accent"
  }
  const getTabDetails = () => {
    if (tab === "in-progress") {
      return { name: "In-Progress", description: "Currently being developed" }
    } else if (tab === "planned") {
      return {
        name: "Planned",
        description: "Ideas prioritized for research",
      }
    }
    return { name: "Live", description: "Released features" }
  }

  return (
    <div
      className={`bg-base-100 rounded-lg  
    mb-4 w-full p-6  flex flex-row items-stretch border-t-8 border-${tabColor()}`}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-start items-center">
          <FontAwesomeIcon
            icon={faCircle}
            className={`mr-2 md:mr-4 text-${tabColor()} text-[10px] ${
              tab === "live" && "iconCircleLive"
            }`}
          />
          <p className="text-info text-sm xl:text-base">
            {getTabDetails().name}
          </p>
        </div>
        <h4 className="mt-4 xl:mt-2 font-bold text-sm  xl:text-lg text-neutral">
          Add tags for solutions
        </h4>
        <p className="text-info mt-2 xl:mt-1 text-left text-sm xl:text-base">
          Easier to search for solutions based on a specific stack.
        </p>
        <div className="mt-6 xl:mt-4">
          <InteractiveElement type="tag">Enhancement</InteractiveElement>
        </div>

        <div className="flex flex-row justify-between mt-4">
          <InteractiveElement type="upvote" layout="row">
            112
          </InteractiveElement>
          <div className="flex flex-row items-center">
            <FontAwesomeIcon
              icon={faComment}
              className="self-center font-bold text-lg text-[#CDD2EE] mr-1 xl:mr-2"
            />
            <p className="text-neutral text-sm font-bold">4</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapCard
