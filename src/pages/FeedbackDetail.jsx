import React from "react"
import Button from "../components/shared/Button"
import { useNavigate } from "react-router-dom"
import SuggestionCard from "../components/suggestions/SuggestionCard"
import AddComment from "../components/comments/AddComment"
import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import FeedbackContext from "../context/feedback/FeedbackContext"
import CommentList from "../components/comments/CommentList"
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore"
import { db } from "../firebase.config"

const FeedbackDetail = () => {
  const navigate = useNavigate()
  const { feedbackId } = useParams()
  const { dispatch, title, category, comments, upvotes, description, docId } =
    useContext(FeedbackContext)

  const incrementUpvote = async (docId, upvotes) => {
    const docRef = doc(db, "productRequests", docId)
    try {
      await updateDoc(docRef, {
        upvotes: upvotes + 1,
      })

      dispatch({
        type: "SET_UPVOTES",
        payload: upvotes + 1,
      })
    } catch (error) {
      // TODO - Change to Toast
      console.log("Could not update")
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    const fetchFeedback = async () => {
      const feedbackRef = collection(db, "productRequests")
      const q = query(feedbackRef, where("id", "==", parseInt(feedbackId)))
      const querySnapshot = await getDocs(q)

      const feedbacks = []
      querySnapshot.forEach((doc) => {
        feedbacks.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      const feedback = feedbacks[0]
      dispatch({
        type: "SET_FEEDBACK",
        payload: { ...feedback.data, docId: feedback.id },
      })
    }
    fetchFeedback()
  }, [])

  return (
    <div className="p-6 md:px-10 md:pt-14 xl:max-w-[730px] xl:mx-auto xl:px-0 xl:pt-20 xl:pb-32 flex flex-col items-stretch">
      <div className="flex flex-row justify-between">
        <div
          className=""
          onClick={() => {
            navigate(-1)
          }}
        >
          <Button type="back">Go Back</Button>
        </div>

        <div
          className="w-32 md:w-36"
          onClick={() => {
            navigate(`/feedback-edit/${feedbackId}`)
          }}
        >
          <Button type="primary">Edit Feedback</Button>
        </div>
      </div>
      <div className="w-full mt-6">
        <SuggestionCard
          suggestion={{
            data: { category, title, description, upvotes, comments },
            id: docId,
          }}
          incrementUpvote={incrementUpvote}
        />
      </div>
      {comments && (
        <div className="mt-2">
          <CommentList />
        </div>
      )}

      <div className="mt-6">
        <AddComment />
      </div>
    </div>
  )
}

export default FeedbackDetail
