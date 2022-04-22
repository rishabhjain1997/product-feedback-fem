import React, { useState } from "react"
import Button from "../shared/Button"
const CommentCard = ({ comment, isReply }) => {
  const bgUrl = `../.${comment.user.image}`
  const [isReplyActive, setIsReplyActive] = useState(false)
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
              onClick={() =>
                setIsReplyActive((prev) => {
                  return !prev
                })
              }
            >
              <button className="text-sm text-primary font-bold">Reply</button>
            </div>
          </div>
          <p className="text-info text-sm text-left mt-4  md:text-base">
            {comment.replyingTo && (
              <p className="inline-block mr-1 font-bold text-secondary">
                @{comment.replyingTo}
              </p>
            )}
            {comment.content}
          </p>
          <div
            className={`flex flex-col md:flex-row md:mt-6 ${
              isReplyActive ? "flex" : "hidden"
            }`}
          >
            <textarea
              placeholder="Type your reply here"
              className={`h-20 text-xs md:text-base p-4 md:px-6 rounded-md bg-base-200 mt-6 md:mt-0
               outline-none focus:outline-none border-0 focus:border-primary ring-0 focus:ring-1 focus:ring-primary w-full`}
              value={""}
            />
            <div className="w-28 mt-6 md:mt-0 md:ml-4 md:self-start">
              <Button type="secondary">Post Reply</Button>
            </div>
          </div>
        </div>
      </div>
      {comment.replies && (
        <div className="pl-6">
          {comment.replies.map((reply) => (
            <CommentCard comment={reply} isReply={true} />
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
