import React from "react"
import RoadmapStats from "../components/suggestions/RoadmapStats"
import FeedbackFilter from "../components/suggestions/FeedbackFilter"
import Navbar from "../components/suggestions/Navbar"
import SuggestionsMenu from "../components/suggestions/SuggestionsMenu"
import SuggestionsList from "../components/suggestions/SuggestionsList"
const Suggestions = () => {
  return (
    <div className="bg-base-200 min-h-screen ">
      <div
        className="md:max-w-[688px] md:mx-auto
        lg:max-w-[944px] lg:w-full  
       xl:flex xl:flex-row xl:max-w-[1110px] xl:mx-auto xl:pt-24 "
      >
        <Navbar />
        <div className="pt-20 md:pt-0  xl:ml-7 xl:w-full">
          <SuggestionsMenu />
          <SuggestionsList />
        </div>
      </div>
    </div>
  )
}

export default Suggestions
