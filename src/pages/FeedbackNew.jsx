import React, { useEffect } from "react"
import Button from "../components/shared/Button"
import FormTextField from "../components/shared/FormTextField"
import FormTextarea from "../components/shared/FormTextarea"
import FormDropdown from "../components/shared/FormDropdown"
import { ReactComponent as NewFeedbackIcon } from "../assets/shared/icon-new-feedback.svg"
import { useNavigate } from "react-router-dom"
import FeedbackContext from "../context/feedback/FeedbackContext"
import { useContext } from "react"
import { db } from "../firebase.config"
import { collection, getDocs, setDoc, doc } from "firebase/firestore"
import Loading from "../components/Loading"
import { v4 as uuidv4 } from "uuid"

const FeedbackNew = () => {
  const navigate = useNavigate()
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
      await setDoc(doc(db, "productRequests", uuidv4()), {
        id: currentId,
        category: category.toLowerCase(),
        comments: comments,
        description: description,
        status: status,
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
  useEffect(() => {
    // TODO - Clear Feedback here
    dispatch({
      type: "CLEAR_FEEDBACK",
    })

    const fetchCurrentId = async () => {
      dispatch({ type: "SET_LOADING" })

      const suggestionsRef = collection(db, "productRequests")
      const querySnapshot = await getDocs(suggestionsRef)
      const feedbacks = []
      querySnapshot.forEach((doc) => {
        feedbacks.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      const feedbackIds = feedbacks.map((feedback) => feedback.data.id)
      dispatch({
        type: "SET_NEWFEEDBACK",
        payload: Math.max(...feedbackIds) + 1,
      })
    }
    fetchCurrentId()
  }, [dispatch])

  if (loading) {
    return <Loading />
  }
  return (
    <div className="w-full min-h-screen bg-base-200 px-6 py-9 md:px-0 md:py-14 flex flex-col items-center">
      <div
        className="w-full md:w-[540px]"
        onClick={() => {
          dispatch({
            type: "CLEAR_FEEDBACK",
          })
          navigate(-1)
        }}
      >
        <Button type="back">Go Back</Button>
      </div>
      <form
        className="mt-14 md:mt-16 md:w-[540px] md:self-center bg-base-100 rounded-lg px-6 md:px-10 md:pt-14 pt-10 md:pb-10 pb-6 
      self-stretch flex flex-col relative"
      >
        <div className="absolute -top-7">
          <NewFeedbackIcon />
        </div>

        <h3 className="text-lg md:text-2xl font-bold text-neutral">
          Create New Feedback
        </h3>
        <div className="pt-6 flex flex-col self-stretch">
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
          <h4 className="text-neutral text-sm font-bold">Feedback Detail</h4>
          <p className="text-info text-sm mb-4">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <FormTextarea />
        </div>
        <div className="flex flex-col space-y-4 self-stretch mt-10 md:mt-8 md:flex-row-reverse md:space-y-0 md:space-x-4 md:space-x-reverse md:self-end">
          <div className="md:w-36" onClick={formSubmit}>
            <Button type="secondary">Add feedback</Button>
          </div>
          <div
            className="md:w-24"
            onClick={() => {
              dispatch({
                type: "CLEAR_FEEDBACK",
              })

              navigate(-1)
            }}
          >
            <Button type="neutral">Cancel</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FeedbackNew

// md:px-28
