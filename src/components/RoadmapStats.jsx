import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

const RoadmapStats = () => {
  return (
    <div className="py-4 px-6 h-44 w-56 xl:w-64 bg-base-100 grid grid-rows-5 gap-2 rounded-lg">
      <div className="row-span-2 flex flex-row justify-between">
        <p className="text-neutral font-bold text-lg self-center">Roadmap</p>
        <Link
          to="/roadmap"
          className="text-primary self-center font-semibold text-sm underline"
        >
          View
        </Link>
      </div>
      <div className=" flex flex-row justify-between">
        <div className="flex flex-row align-center self-center">
          <FontAwesomeIcon
            className="mr-4 text-warning text-xs self-center"
            icon={faCircle}
          />
          <p className="self-center text-info text-base">Planned</p>
        </div>
        <p className="text-info font-bold">2</p>
      </div>
      <div className=" flex flex-row justify-between">
        <div className="flex flex-row align-center self-center">
          <FontAwesomeIcon
            className="mr-4 text-secondary text-xs self-center"
            icon={faCircle}
          />
          <p className="self-center text-info text-base">In-Progress</p>
        </div>
        <p className="text-info font-bold">3</p>
      </div>
      <div className=" flex flex-row justify-between">
        <div className="flex flex-row align-center self-center">
          <FontAwesomeIcon
            className="mr-4 text-primary text-xs self-center"
            icon={faCircle}
          />
          <p className="self-center text-info text-base">Live</p>
        </div>
        <p className="text-info font-bold">1</p>
      </div>
    </div>
  )
}

export default RoadmapStats
