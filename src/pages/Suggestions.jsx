import React, { useEffect, useContext } from "react"
import Navbar from "../components/suggestions/Navbar"
import SuggestionsMenu from "../components/suggestions/SuggestionsMenu"
import SuggestionsList from "../components/suggestions/SuggestionsList"
import EmptySuggestions from "../components/suggestions/EmptySuggestions"
import { db } from "../firebase.config"
import { collection, query, where, getDocs, orderBy } from "firebase/firestore"
import Loading from "../components/Loading"
import SuggestionContext from "../context/suggestion/SuggestionContext"

const Suggestions = () => {
  const { suggestions, loading, dispatch } = useContext(SuggestionContext)

  useEffect(() => {
    const fetchSuggestions = async () => {
      dispatch({ type: "SET_LOADING" })
      const suggestionsRef = collection(db, "productRequests")
      const q = query(
        suggestionsRef,
        where("status", "==", "suggestion"),
        orderBy("upvotes", "desc")
      )
      const querySnapshot = await getDocs(q)
      const feedbacks = []
      querySnapshot.forEach((doc) => {
        feedbacks.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      dispatch({ type: "SET_SUGGESTIONS", payload: feedbacks })
    }
    fetchSuggestions()
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <div className="bg-base-200 min-h-screen ">
      <div
        className="md:max-w-[688px] md:mx-auto
        lg:max-w-[944px] lg:w-full  
       xl:flex xl:flex-row xl:max-w-[1110px] xl:mx-auto xl:pt-24 "
      >
        <Navbar />
        <div className="pt-20 md:pt-0  xl:ml-7 xl:w-full min-h-screen md:min-h-[calc(100vh-272px)] xl:min-h-[calc(100vh-96px)] flex flex-col">
          <SuggestionsMenu />
          <div className="px-6 pt-8 pb-12 md:px-0 md:pt-6 md:pb-14 xl:pb-32 bg-base-200 w-full flex-1 flex flex-col">
            {suggestions && suggestions.length === 0 ? (
              <EmptySuggestions />
            ) : (
              <div className="flex flex-col">
                <SuggestionsList />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestions
