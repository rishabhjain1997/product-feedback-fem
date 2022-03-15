import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FeedbackDetail from "./pages/FeedbackDetail"
import FeedbackEdit from "./pages/FeedbackEdit"
import FeedbackNew from "./pages/FeedbackNew"
import Roadmap from "./pages/Roadmap"
import Suggestions from "./pages/Suggestions"
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Suggestions />} />
          <Route path="/feedback-detail" element={<FeedbackDetail />} />
          <Route path="/feedback-edit" element={<FeedbackEdit />} />
          <Route path="/feedback-new" element={<FeedbackNew />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
