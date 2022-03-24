// API calls go here
// fetchSuggestions
// fetchStats

export const sortSuggestions = (sortBy, suggestions) => {
  const feedbacks = suggestions

  if (sortBy === "leastUpvotes") {
    feedbacks.sort(function (a, b) {
      return a.data.upvotes > b.data.upvotes
        ? 1
        : b.data.upvotes > a.data.upvotes
        ? -1
        : 0
    })
  }

  if (sortBy === "mostUpvotes") {
    feedbacks.sort(function (a, b) {
      return a.data.upvotes > b.data.upvotes
        ? -1
        : b.data.upvotes > a.data.upvotes
        ? 1
        : 0
    })
  }

  if (sortBy === "mostComments") {
    feedbacks.sort(function (a, b) {
      return a.data.comments?.length > b.data.comments?.length ||
        (a.data.comments && !b.data.comments)
        ? -1
        : b.data.comments?.length > a.data.comments?.length ||
          (b.data.comments && !a.data.comments)
        ? 1
        : 0
    })
  }

  if (sortBy === "leastComments") {
    feedbacks.sort(function (a, b) {
      return a.data.comments?.length > b.data.comments?.length ||
        (a.data.comments?.length && !b.data.comments?.length)
        ? 1
        : b.data.comments?.length > a.data.comments?.length ||
          (b.data.comments?.length && !a.data.comments?.length)
        ? -1
        : 0
    })
  }
  // console.log(sortBy, feedbacks)
  return feedbacks
}
