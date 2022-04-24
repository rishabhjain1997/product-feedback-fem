import React, { useEffect } from "react"
import RoadmapCard from "../components/roadmap/RoadmapCard"
import RoadmapNav from "../components/roadmap/RoadmapNav"

const Roadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full h-screen bg-base-200">
      <RoadmapNav />
      <div className="my-4 px-6 md:px-0 md:w-[689px] xl:w-[1110px] md:mx-auto md:grid md:grid-cols-3 md:gap-4">
        <RoadmapCard />
        <RoadmapCard />
        <RoadmapCard />
      </div>
    </div>
  )
}

export default Roadmap
