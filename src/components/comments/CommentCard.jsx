import React, { useState, useContext } from "react"
import Button from "../shared/Button"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
import FeedbackContext from "../../context/feedback/FeedbackContext"

const CommentCard = ({ comment, isReply, id }) => {
  const { dispatch, comments, docId } = useContext(FeedbackContext)
  const bgUrl = `../.${comment.user.image}`
  const [isReplyActive, setIsReplyActive] = useState(false)
  const [replyText, setReplyText] = useState("")
  return (
    <div
      className={`py-6 md:py-8 md:pt-7 w-full flex flex-col ${
        !isReply && "border-b border-base-300"
      }`}
    >
      <div className="flex flex-row">
        <div
          className={`rounded-full w-10 h-10 bg-center object-fill mr-8 hidden md:block`}
          style={{
            backgroundImage: "url(" + bgUrl + ")",
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-row w-full items-center">
            <div
              className={`rounded-full w-10 h-10 bg-center object-fill md:hidden`}
              style={{
                backgroundImage: "url(" + bgUrl + ")",
                backgroundSize: "100% 100%",
              }}
            ></div>
            <div className="flex flex-col ml-4 md:ml-0">
              <h4 className="text-neutral text-sm font-bold">
                {comment.user.name}
              </h4>
              <p className="text-info text-sm">@{comment.user.username}</p>
            </div>
            <div
              className="ml-auto"
              onClick={() => {
                setIsReplyActive((prev) => {
                  return !prev
                })
              }}
            >
              <button className="text-sm text-primary font-bold">Reply</button>
            </div>
          </div>
          <div className="text-info text-sm text-left mt-4  md:text-base">
            {comment.replyingTo && (
              <p className="inline-block mr-1 font-bold text-secondary">
                @{comment.replyingTo}
              </p>
            )}
            {comment.content}
          </div>
          <div
            className={`flex flex-col md:flex-row md:mt-6 ${
              isReplyActive ? "flex" : "hidden"
            }`}
          >
            <textarea
              placeholder="Type your reply here"
              className={`h-20 text-xs md:text-base p-4 md:px-6 rounded-md bg-base-200 mt-6 md:mt-0
               outline-none focus:outline-none border-0 focus:border-primary ring-0 focus:ring-1 focus:ring-primary w-full`}
              value={replyText}
              onChange={(e) => {
                setReplyText(e.target.value)
              }}
            />
            <div
              className="w-28 mt-6 md:mt-0 md:ml-4 md:self-start"
              onClick={async (e) => {
                const reply = {
                  content: replyText,
                  replyingTo: comment.user.username,
                  // TODO - Change user values to user-defined
                  user: {
                    image: "./assets/user-images/image-george.jpg",
                    name: "George Partridge",
                    username: "soccerviewer8",
                  },
                }

                try {
                  const currentComments = [...comments]
                  const updatedComments = []
                  for (let i = 0; i < currentComments.length; i++) {
                    let comment

                    if (currentComments[i].id === id) {
                      if (currentComments[i].replies) {
                        comment = {
                          ...currentComments[i],

                          replies: [...currentComments[i].replies, reply],
                        }
                      } else {
                        comment = {
                          ...currentComments[i],

                          replies: [reply],
                        }
                      }
                    } else {
                      comment = currentComments[i]
                    }
                    updatedComments.push(comment)
                  }

                  await updateDoc(doc(db, "productRequests", docId), {
                    comments: updatedComments,
                  })

                  reply.commentId = id
                  dispatch({
                    type: "ADD_REPLY",
                    payload: reply,
                  })
                  setReplyText("")
                  setIsReplyActive(false)
                } catch (error) {
                  // TODO - Change to toast
                  console.log(error)
                }
              }}
            >
              <Button type="secondary">Post Reply</Button>
            </div>
          </div>
        </div>
      </div>
      {comment.replies && (
        <div className="pl-6">
          {comment.replies.map((reply, index) => (
            <CommentCard
              comment={reply}
              //TODO - Remove isReply
              // TODO - Remove comment indexes
              isReply={true}
              id={id}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  )
}
CommentCard.defaultProps = {
  isReply: false,
}
export default CommentCard
