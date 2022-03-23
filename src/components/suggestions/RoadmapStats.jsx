import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { db } from "../../firebase.config"
import { collection, getDocs } from "firebase/firestore"
import Loading from "../../components/Loading"

const RoadmapStats = () => {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({})
  useEffect(() => {
    const fetchStats = async () => {
      const suggestionsRef = collection(db, "productRequests")
      const querySnapshot = await getDocs(suggestionsRef)
      const feedbacks = []
      querySnapshot.forEach((doc) => {
        feedbacks.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      const liveFeedbackCount = feedbacks.filter(
        (feedback) => feedback.data.status === "live"
      ).length
      const inProgressFeedbackCount = feedbacks.filter(
        (feedback) => feedback.data.status === "in-progress"
      ).length

      const plannedFeedbackCount = feedbacks.filter(
        (feedback) => feedback.data.status === "planned"
      ).length

      setStats({
        live: liveFeedbackCount,
        inProgress: inProgressFeedbackCount,
        planned: plannedFeedbackCount,
      })
      setLoading(false)
    }
    fetchStats()
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <div className="py-4 px-6 h-44 w-[223px] lg:w-72 xl:w-64 bg-base-100 grid grid-rows-5 gap-2 rounded-lg">
      <div className="row-span-2 flex flex-row justify-between">
        <p className="text-neutral font-bold text-lg self-center">Roadmap</p>
        <Link
          to="/roadmap"
          className="text-primary self-center font-semibold text-sm underline hover:text-secondary"
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
        <p className="text-info font-bold">{stats.planned}</p>
      </div>
      <div className=" flex flex-row justify-between">
        <div className="flex flex-row align-center self-center">
          <FontAwesomeIcon
            className="mr-4 text-secondary text-xs self-center"
            icon={faCircle}
          />
          <p className="self-center text-info text-base">In-Progress</p>
        </div>
        <p className="text-info font-bold">{stats.inProgress}</p>
      </div>
      <div className=" flex flex-row justify-between">
        <div className="flex flex-row align-center self-center">
          <FontAwesomeIcon
            className="mr-4 text-primary text-xs self-center"
            icon={faCircle}
          />
          <p className="self-center text-info text-base">Live</p>
        </div>
        <p className="text-info font-bold">{stats.live}</p>
      </div>
    </div>
  )
}

export default RoadmapStats
