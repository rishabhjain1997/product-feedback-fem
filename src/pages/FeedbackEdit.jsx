import React, { useEffect, useContext } from "react"
import Button from "../components/shared/Button"
import FormTextField from "../components/shared/FormTextField"
import FormTextarea from "../components/shared/FormTextarea"
import FormDropdown from "../components/shared/FormDropdown"
import { ReactComponent as EditFeedbackIcon } from "../assets/shared/icon-edit-feedback.svg"
import { useParams, useNavigate } from "react-router-dom"
import { collection, query, where, getDocs, orderBy } from "firebase/firestore"
import { db } from "../firebase.config"
import FeedbackContext from "../context/feedback/FeedbackContext"

const FeedbackEdit = () => {
  const { feedbackId } = useParams()
  const {
    dispatch,
    loading,
    currentId,
    title,
    category,
    comments,
    status,
    upvotes,
    description,
  } = useContext(FeedbackContext)

  useEffect(() => {
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
        type: "SET_EDITFEEDBACK",
        payload: feedback.data,
      })
      console.log(feedback.data)
    }

    fetchFeedback()
  }, [])

  return (
    <div className="w-full min-h-screen bg-base-200 px-6 py-9 md:px-0 md:py-14 flex flex-col items-center">
      <div className="w-full md:w-[540px]">
        <Button type="back">Go Back</Button>
      </div>
      <form
        className="mt-14 md:mt-16 md:w-[540px] md:self-center bg-base-100 rounded-lg px-6 md:px-10 md:pt-14 pt-10 md:pb-10 pb-6 
      self-stretch flex flex-col relative"
      >
        <div className="absolute -top-4">
          <EditFeedbackIcon />
        </div>

        <h3 className="text-lg md:text-2xl font-bold text-neutral">
          Editing ‘{title}’
        </h3>
        <div className="mt-20 flex flex-col self-stretch">
          <h4 className="text-neutral text-sm font-bold">Feedback Title</h4>
          <p className="text-info text-sm mb-4">
            Add a short, descriptive headline
          </p>
          <FormTextField />
        </div>
        <div className="pt-6 flex flex-col self-stretch">
          <h4 className="text-neutral text-sm font-bold">Category</h4>
          <p className="text-info text-sm mb-4">
            Choose a category for your feedback
          </p>
          <FormDropdown />
        </div>

        <div className="pt-6 flex flex-col self-stretch">
          <h4 className="text-neutral text-sm font-bold">Update Status</h4>
          <p className="text-info text-sm mb-4">Change feature state</p>
          <FormDropdown
            options={["Suggestion", "Planned", "In-Progress", "Live"]}
            type="status"
          />
        </div>

        <div className="pt-6 flex flex-col self-stretch">
          <h4 className="text-neutral text-sm font-bold">Feedback Detail</h4>
          <p className="text-info text-sm mb-4">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <FormTextarea />
        </div>
        <div className="flex flex-col space-y-4 self-stretch mt-10 md:mt-8 md:flex-row-reverse md:space-y-0 md:justify-start">
          <div className="md:w-36">
            <Button type="secondary">Save Changes</Button>
          </div>
          <div className="md:w-24 md: mr-4">
            <Button type="neutral">Cancel</Button>
          </div>
          <div className="md:w-24 md:mr-auto">
            <Button type="error">Delete</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FeedbackEdit
