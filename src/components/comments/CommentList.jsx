import React from "react"
import { useContext, useEffect } from "react"
import FeedbackContext from "../../context/feedback/FeedbackContext"
import CommentCard from "./CommentCard"

const CommentList = () => {
  const { comments } = useContext(FeedbackContext)
  return (
    <div className="p-6 bg-base-100 rounded-lg md:px-8">
      <h1 className="text-neutral text-lg font-bold">
        {comments.length} Comment{comments.length !== 1 && "s"}
      </h1>
      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.id} />
      })}
    </div>
  )
}

export default CommentList
