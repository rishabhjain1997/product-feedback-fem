import React, { useContext } from "react"
import InteractiveElement from "../shared/InteractiveElement"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment, faCircle } from "@fortawesome/free-solid-svg-icons"
import { db } from "../../firebase.config"
import { doc, updateDoc } from "firebase/firestore"
import RoadmapContext from "../../context/roadmap/RoadmapContext"
import { Link } from "react-router-dom"

const RoadmapCard = ({ feedback }) => {
  const { status, category, title, description, upvotes, comments } =
    feedback.data

  const { dispatch, liveFeedbacks, plannedFeedbacks, inProgressFeedbacks } =
    useContext(RoadmapContext)

  const getFeedbacks = () => {
    if (status === "in-progress") {
      return inProgressFeedbacks
    } else if (status === "planned") {
      return plannedFeedbacks
    }
    return liveFeedbacks
  }

  const incrementUpvote = async (docId, upvotes) => {
    const docRef = doc(db, "productRequests", docId)
    try {
      await updateDoc(docRef, {
        upvotes: upvotes + 1,
      })

      const feedbacks = getFeedbacks().map((feedback) => {
        if (feedback.id === docId) {
          feedback.data.upvotes += 1
        }
        return feedback
      })

      dispatch({
        type: "UPDATE_FEEDBACKS",
        payload: {
          feedbacks,
          status,
        },
      })
    } catch (error) {
      // TODO - Change to Toast
      console.log("Could not update")
    }
  }

  const calculateCommentsLength = () => {
    if (!comments || !comments.length) {
      return 0
    }
    let commentsLength = comments.length
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i]
      commentsLength += comment.replies ? comment.replies.length : 0
    }

    return commentsLength
  }

  const tabColor = () => {
    if (status === "planned") {
      return "warning"
    }
    if (status === "in-progress") {
      return "secondary"
    }
    return "accent"
  }
  const getTabDetails = () => {
    if (status === "in-progress") {
      return { name: "In-Progress", description: "Currently being developed" }
    } else if (status === "planned") {
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
    mb-4 w-full p-6  flex flex-row items-stretch border-t-8 border-${tabColor()} md:min-h-[310px] xl:min-h-0`}
    >
      <div className="flex flex-col w-full">
        <Link
          to={`/feedback-detail/${feedback.data.id}`}
          className="flex flex-row justify-start items-center"
        >
          <FontAwesomeIcon
            icon={faCircle}
            className={`mr-2 md:mr-4 text-${tabColor()} text-[10px] ${
              status === "live" && "iconCircleLive"
            }`}
          />
          <p className="text-info text-sm xl:text-base">
            {getTabDetails().name}
          </p>
        </Link>
        <Link
          to={`/feedback-detail/${feedback.data.id}`}
          className="mt-4 xl:mt-2 font-bold text-sm  xl:text-lg text-neutral"
        >
          {title}
        </Link>
        <Link
          to={`/feedback-detail/${feedback.data.id}`}
          className="text-info mt-2 xl:mt-1 text-left text-sm xl:text-base"
        >
          {description}
        </Link>
        <Link
          to={`/feedback-detail/${feedback.data.id}`}
          className="mt-6 xl:mt-4  md:mt-auto"
        >
          <InteractiveElement type="tag">
            {category === "ui" ||
            category === "ux" ||
            category === "UI" ||
            category === "UX"
              ? category.toUpperCase()
              : category.charAt(0).toUpperCase() +
                category.substr(1).toLowerCase()}
          </InteractiveElement>
        </Link>

        <div className="flex flex-row justify-between mt-4">
          <InteractiveElement
            type="upvote"
            layout="row"
            incrementUpvote={incrementUpvote}
            docId={feedback.id}
            upvotes={upvotes}
          >
            {upvotes}
          </InteractiveElement>
          <Link
            to={`/feedback-detail/${feedback.data.id}`}
            className="flex flex-row items-center"
          >
            <FontAwesomeIcon
              icon={faComment}
              className="self-center font-bold text-lg text-[#CDD2EE] mr-1 xl:mr-2"
            />
            <p className="text-neutral text-sm font-bold">
              {calculateCommentsLength()}
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RoadmapCard
