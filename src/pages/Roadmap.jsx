import React, { useEffect, useContext } from "react"
import RoadmapCard from "../components/roadmap/RoadmapCard"
import RoadmapNav from "../components/roadmap/RoadmapNav"
import { collection, query, getDocs, orderBy } from "firebase/firestore"
import RoadmapContext from "../context/roadmap/RoadmapContext"
import { db } from "../firebase.config"

const Roadmap = () => {
  const {
    dispatch,
    liveFeedbacks,
    plannedFeedbacks,
    inProgressFeedbacks,
    tab,
  } = useContext(RoadmapContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const fetchFeedbacks = async () => {
      dispatch({ type: "SET_LOADING" })
      const feedbackRef = collection(db, "productRequests")
      let q

      q = query(feedbackRef, orderBy("upvotes", "desc"))

      const querySnapshot = await getDocs(q)
      const feedbacks = []
      querySnapshot.forEach((doc) => {
        feedbacks.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      const plannedFeedbacks = feedbacks?.filter((feedback) => {
        return feedback.data.status === "planned"
      })

      const liveFeedbacks = feedbacks?.filter((feedback) => {
        return feedback.data.status === "live"
      })

      const inProgressFeedbacks = feedbacks?.filter((feedback) => {
        return feedback.data.status === "in-progress"
      })
      dispatch({
        type: "SET_FEEDBACKS",
        payload: { plannedFeedbacks, inProgressFeedbacks, liveFeedbacks },
      })
    }
    fetchFeedbacks()
  }, [])

  const getTabFeedbacks = () => {
    if (tab === "in-progress") {
      return inProgressFeedbacks
    } else if (tab === "planned") {
      return plannedFeedbacks
    }
    return liveFeedbacks
  }

  return (
    <div className="w-full h-screen bg-base-200">
      <RoadmapNav />
      <div className="my-4 px-6 md:px-0 md:w-[689px] xl:w-[1110px] md:mx-auto md:grid md:grid-cols-3 md:gap-4 ">
        <div className="hidden flex-col items-stretch md:flex">
          {plannedFeedbacks?.map((feedback) => (
            <RoadmapCard feedback={feedback} key={feedback.id} />
          ))}
        </div>
        <div className="hidden flex-col items-stretch md:flex">
          {inProgressFeedbacks?.map((feedback) => (
            <RoadmapCard feedback={feedback} key={feedback.id} />
          ))}
        </div>
        <div className="hidden flex-col items-stretch md:flex">
          {liveFeedbacks?.map((feedback) => (
            <RoadmapCard feedback={feedback} key={feedback.id} />
          ))}
        </div>
        <div className="flex flex-col items-stretch md:hidden">
          {getTabFeedbacks()?.map((feedback) => (
            <RoadmapCard feedback={feedback} key={feedback.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Roadmap
