import React from "react"
import Button from "../components/shared/Button"
import { useNavigate } from "react-router-dom"
import SuggestionCard from "../components/suggestions/SuggestionCard"
import AddComment from "../components/comments/AddComment"
import { useParams } from "react-router-dom"
const FeedbackDetail = () => {
  const navigate = useNavigate()
  const { feedbackId } = useParams()
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
      <div className="w-full mt-6">{/* <SuggestionCard /> */}</div>
      <div className="mt-6">
        <AddComment />
      </div>
    </div>
  )
}

export default FeedbackDetail
