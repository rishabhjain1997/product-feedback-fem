import React from "react"
import InteractiveElement from "../shared/InteractiveElement"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const SuggestionCard = ({ suggestion, incrementUpvote }) => {
  const { category, title, description, upvotes, comments } = suggestion.data

  const productId = suggestion.data.id

  return (
    <div
      className="bg-base-100 rounded-lg  
    mb-4 w-full h-[200px] md:h-[150px] p-6 md:px-7 md:py-8 flex flex-row items-stretch"
    >
      <div className="hidden md:flex flex-row items-center mr-10 self-center">
        <InteractiveElement
          type="upvote"
          layout="col"
          incrementUpvote={incrementUpvote}
          docId={suggestion.id}
          upvotes={upvotes}
        >
          {upvotes}
        </InteractiveElement>
      </div>
      <div className="flex flex-col w-full">
        <Link
          className="flex flex-col  justify-between w-full flex-1"
          to={productId ? `/feedback-detail/${productId}` : "#"}
        >
          <h4 className="font-bold text-sm text-neutral">{title}</h4>
          <p>{description}</p>

          <InteractiveElement type="tag">
            {category === "ui" ||
            category === "ux" ||
            category === "UI" ||
            category === "UX"
              ? category.toUpperCase()
              : category.charAt(0).toUpperCase() +
                category.substr(1).toLowerCase()}
          </InteractiveElement>
        </Link>
        <div className="flex flex-row justify-between md:hidden mt-4">
          <InteractiveElement
            type="upvote"
            layout="row"
            incrementUpvote={incrementUpvote}
            docId={suggestion.id}
            upvotes={upvotes}
          >
            {upvotes}
          </InteractiveElement>
          <Link
            className="flex flex-row items-center"
            to={productId ? `/feedback-detail/${productId}` : "#"}
          >
            <FontAwesomeIcon
              icon={faComment}
              className="self-center font-bold text-lg text-[#CDD2EE] mr-1"
            />
            <p className="text-neutral text-sm font-bold">
              {comments?.length ?? 0}
            </p>
          </Link>
        </div>
      </div>

      <Link
        className="hidden md:flex flex-row items-center ml-auto self-center"
        to={productId ? `/feedback-detail/${productId}` : "#"}
      >
        <FontAwesomeIcon
          icon={faComment}
          className="self-center font-bold text-lg text-[#CDD2EE] mr-1"
        />
        <p className="text-neutral text-sm font-bold">
          {comments?.length ?? 0}
        </p>
      </Link>
    </div>
  )
}

export default SuggestionCard
