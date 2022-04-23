import React from "react"
import { useContext } from "react"
import FeedbackContext from "../../context/feedback/FeedbackContext"
import CommentCard from "./CommentCard"

const CommentList = () => {
  const { comments } = useContext(FeedbackContext)
  const calculateCommentsLength = () => {
    let commentsLength = comments.length
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i]
      commentsLength += comment.replies ? comment.replies.length : 0
    }
    return commentsLength
  }
  return (
    <div className="p-6 bg-base-100 rounded-lg md:px-8">
      <h1 className="text-neutral text-lg font-bold">
        {comments ? calculateCommentsLength() : 0} Comment
        {calculateCommentsLength() !== 1 && "s"}
      </h1>
      {comments &&
        comments.map((comment, index) => {
          return (
            <CommentCard comment={comment} key={comment.id} id={comment.id} />
          )
        })}
    </div>
  )
}

export default CommentList
