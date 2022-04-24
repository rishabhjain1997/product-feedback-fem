import React from "react"
import Button from "../shared/Button"
import { useNavigate, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const RoadmapNav = () => {
  const navigate = useNavigate()
  // in-progress, planned, live
  const [tab, setTab] = useState("in-progress")

  const getTabDetails = () => {
    if (tab === "in-progress") {
      return { name: "In-Progress", description: "Currently being developed" }
    } else if (tab === "planned") {
      return { name: "Planned", description: "Ideas prioritized for research" }
    }
    return { name: "Live", description: "Released features" }
  }
  return (
    <div className="w-full">
      <div className="block md:hidden fixed w-full">
        <div className="bg-success-content h-24 w-full px-6 flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <div
              className="self-start w-[70px]"
              onClick={() => {
                navigate(-1)
              }}
            >
              <Button type="back-dark">Go Back</Button>
            </div>

            <h3 className="text-base-100 font-bold text-lg mt-1">Roadmap</h3>
          </div>
          <Link to="/feedback-new" className="w-32">
            <Button type="secondary">
              <FontAwesomeIcon
                className="mr-1 text-base-100 text-xs md:text-sm self-center"
                icon={faPlus}
              />
              Add Feedback
            </Button>
          </Link>
        </div>
        <div className="h-14 w-full bg-base-200 shadow-sm grid grid-cols-3 text-gray-400">
          <div
            className={`cursor-pointer flex flex-col items-center justify-center border-b-4 ${
              tab === "planned" ? "border-warning" : "border-base-200"
            }`}
            onClick={() => setTab("planned")}
          >
            <p
              className={`cursor-pointer text-sm font-bold ${
                tab === "planned" && "text-neutral"
              }`}
            >
              Planned (2)
            </p>
          </div>
          <div
            className={`cursor-pointer flex flex-col items-center justify-center border-b-4 ${
              tab === "in-progress" ? "border-secondary" : "border-base-200"
            }`}
            onClick={() => setTab("in-progress")}
          >
            <p
              className={`cursor-pointer text-sm font-bold ${
                tab === "in-progress" && "text-neutral"
              }`}
            >
              In-Progress (2)
            </p>
          </div>
          <div
            className={`cursor-pointer flex flex-col items-center justify-center border-b-4 ${
              tab === "live" ? "border-accent" : "border-base-200"
            }`}
            onClick={() => setTab("live")}
          >
            <p
              className={`cursor-pointer text-sm font-bold ${
                tab === "live" && "text-neutral"
              }`}
            >
              Live (1)
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between md:hidden pt-44 px-6">
        <h3 className="text-neutral font-bold text-lg">{`${
          getTabDetails().name
        } (2)`}</h3>
        <p className="text-info text-sm mt-1">{getTabDetails().description}</p>
      </div>
      <div className="hidden md:flex flex-col  w-[689px] xl:w-[1110px] mx-auto mt-14 xl:mt-20">
        <div className="px-8 h-28  rounded-lg bg-success-content text-base-100 flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <div
              className="self-start"
              onClick={() => {
                navigate(-1)
              }}
            >
              <Button type="back-dark">Go Back</Button>
            </div>

            <h3 className="text-base-100 font-bold text-2xl mt-1">Roadmap</h3>
          </div>
          <Link to="/feedback-new" className="w-40">
            <Button type="secondary">
              <FontAwesomeIcon
                className="mr-1 text-base-100 text-xs md:text-sm self-center"
                icon={faPlus}
              />
              Add Feedback
            </Button>
          </Link>
        </div>
        <div className="mt-8 xl:mt-12 w-full h-11 xl:h-auto bg-base-200 grid grid-cols-3 gap-2.5">
          <div className="flex flex-col justify-between items-start">
            <p className="text-neutral font-bold text-sm xl:text-lg">
              Planned (2)
            </p>
            <p className="text-info text-sm xl:text-base">
              Ideas prioritized for research
            </p>
          </div>
          <div className="flex flex-col justify-between items-start">
            <p className="text-neutral font-bold text-sm xl:text-lg">
              In-Progress (3)
            </p>
            <p className="text-info text-sm xl:text-base">
              Currently being developed
            </p>
          </div>
          <div className="flex flex-col justify-between items-start">
            <p className="text-neutral font-bold text-sm xl:text-lg">
              Live (1)
            </p>
            <p className="text-info text-sm xl:text-base">Released features</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapNav
