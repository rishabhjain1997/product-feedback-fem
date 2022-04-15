import React, { useEffect, useContext } from "react"
import Button from "../components/shared/Button"
import FormTextField from "../components/shared/FormTextField"
import FormTextarea from "../components/shared/FormTextarea"
import FormDropdown from "../components/shared/FormDropdown"
import { ReactComponent as EditFeedbackIcon } from "../assets/shared/icon-edit-feedback.svg"
import { useParams, useNavigate } from "react-router-dom"
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore"
import { db } from "../firebase.config"
import FeedbackContext from "../context/feedback/FeedbackContext"

const FeedbackEdit = () => {
  const navigate = useNavigate()
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
    docId,
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
        payload: { ...feedback.data, docId: feedback.id },
      })
      console.log(feedback.data)
    }

    fetchFeedback()
  }, [])
  const formSubmit = async (e) => {
    e.preventDefault()
    if (title.length < 10) {
      dispatch({
        type: "SET_TITLE_ERROR",
        payload: "Title must be greater than 10 characters",
      })
      setTimeout(
        () =>
          dispatch({
            type: "CLEAR_ERRORS",
          }),
        2000
      )
      return
    }
    if (description.length < 10) {
      dispatch({
        type: "SET_DESCRIPTION_ERROR",
        payload: "Description must be greater than 10 characters",
      })
      setTimeout(
        () =>
          dispatch({
            type: "CLEAR_ERRORS",
          }),
        2000
      )
      return
    }
    try {
      await updateDoc(doc(db, "productRequests", docId), {
        category: category.toLowerCase(),
        comments: comments,
        description: description,
        status: status.toLowerCase(),
        upvotes: upvotes,
        title: title,
      })
      dispatch({
        type: "CLEAR_FEEDBACK",
      })
      navigate("/")
      return
    } catch (error) {
      // TODO - Change to toast
      console.log(error)
    }
  }
  return (
    <div className="w-full min-h-screen bg-base-200 px-6 py-9 md:px-0 md:py-14 flex flex-col items-center">
      <div
        className="w-full md:w-[540px]"
        onClick={() => {
          navigate(-1)
        }}
      >
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
        <div
          className="flex flex-col space-y-4 self-stretch mt-10 md:mt-8 md:flex-row-reverse md:space-y-0 md:justify-start"
          onClick={formSubmit}
        >
          <div className="md:w-36">
            <Button type="secondary">Save Changes</Button>
          </div>
          <div
            className="md:w-24 md: mr-4"
            onClick={() => {
              navigate(-1)
            }}
          >
            <Button type="neutral">Cancel</Button>
          </div>
          <div
            className="md:w-24 md:mr-auto"
            onClick={async () => {
              await deleteDoc(doc(db, "productRequests", docId))

              dispatch({
                type: "CLEAR_FEEDBACK",
              })

              navigate("/")
            }}
          >
            <Button type="error">Delete</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FeedbackEdit
