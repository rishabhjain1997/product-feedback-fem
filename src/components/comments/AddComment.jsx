import React, { useState, useContext } from "react"
import FeedbackContext from "../../context/feedback/FeedbackContext"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
import Button from "../shared/Button"
const AddComment = () => {
  const { newComment, dispatch, comments, docId } = useContext(FeedbackContext)
  const [characterLengthError, setCharacterLengthError] = useState(false)

  return (
    <div className="bg-base-100 rounded-lg p-6 md:p-8 md:pt-6 flex flex-col">
      <h1 className="text-neutral text-lg font-bold">Add Comment</h1>
      <textarea
        placeholder="Type your coment here"
        className={`self-stretch h-20 text-xs  md:text-base p-4 md:px-6 rounded-md bg-base-200 mt-6

      ${
        !characterLengthError
          ? "outline-none focus:outline-none border-0 focus:border-primary ring-0 focus:ring-1 focus:ring-primary"
          : "outline-none focus:outline-none border-error ring-1 ring-error"
      }`}
        value={newComment}
        onChange={(e) => {
          dispatch({
            type: "SET_NEWCOMMENT",
            payload: e.target.value,
          })
          if (e.target.value.length > 250) {
            setCharacterLengthError(true)
          } else {
            setCharacterLengthError(false)
          }
        }}
      />
      <div className="flex flex-row mt-4 md:mt-7 justify-between items-center">
        <p className="text-info text-xs md:text-base">
          {250 - newComment.length} Characters left
        </p>
        <div
          className="w-32 md:w-36"
          onClick={async (e) => {
            if (!characterLengthError && newComment.length) {
              const commentIds = comments?.map((comment) => comment.id)

              const currentCommentId =
                comments && comments.length ? Math.max(...commentIds) + 1 : 0
              const comment = {
                id: currentCommentId,
                content: newComment,
                // TODO - Change user values to user-defined
                user: {
                  image: "./assets/user-images/image-george.jpg",
                  name: "George Partridge",
                  username: "soccerviewer8",
                },
              }
              try {
                await updateDoc(doc(db, "productRequests", docId), {
                  comments: comments ? [...comments, comment] : [comment],
                })

                dispatch({
                  type: "ADD_NEWCOMMENT",
                  payload: comment,
                })
              } catch (error) {
                // TODO - Change to toast
                console.log(error)
              }
            }
          }}
        >
          <Button type="secondary">Post Comment</Button>
        </div>
      </div>
    </div>
  )
}

export default AddComment
