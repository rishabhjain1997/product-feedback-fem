import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import RoadmapStats from "./RoadmapStats"
import FeedbackFilter from "./FeedbackFilter"
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <div className="fixed w-full md:hidden z-10">
        <div className="bg-gradient-to-tr from-primary via-secondary to-warning h-20 px-6 flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h3 className="text-base-100 text-base font-bold">
              Frontend Mentor
            </h3>
            <p className="text-xs text-base-200">Feedback Board</p>
          </div>
          <FontAwesomeIcon
            icon={isSidebarOpen ? faXmark : faBars}
            className="self-center font-bold text-base-100"
            onClick={() => {
              setIsSidebarOpen((prev) => {
                return !prev
              })
            }}
          />
        </div>
        <div
          className={`absolute bg-base-200 right-0 h-[calc(100vh-80px)] sidebar flex flex-col space-y-6 p-6 ${
            isSidebarOpen ? "visible" : "invisible"
          } z-10`}
        >
          <FeedbackFilter />
          <RoadmapStats />
        </div>
        <div
          className={`absolute bg-black opacity-60 h-[calc(100vh-80px)] left-0  w-full z-0 ${
            isSidebarOpen ? "visible" : "invisible"
          }`}
          onClick={() => {
            setIsSidebarOpen(false)
          }}
        ></div>
      </div>
      <div className="hidden md:block">
        {/*   lg:max-w-[944px] */}
        <div className="pt-14 pb-10 mx-10 mx-auto xl:p-0 flex flex-row xl:flex-col xl:space-y-6 justify-between content-center">
          <div className="h-44 xl:h-32 w-[223px] lg:w-72 xl:w-64 rounded-lg bg-gradient-to-tr from-primary via-secondary to-warning ">
            <div className="mt-24 xl:mt-16 ml-6">
              <h3 className="text-base-100 text-xl font-bold">
                Frontend Mentor
              </h3>
              <p className="text-base text-base-200">Feedback Board</p>
            </div>
          </div>
          <FeedbackFilter />
          <RoadmapStats />
        </div>
      </div>
    </>
  )
}

export default Navbar
