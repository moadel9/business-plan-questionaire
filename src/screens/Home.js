import React, { useState } from "react"
import QuestionaireModel from "../components/QuestionaireModal"

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="d-flex justify-content-center align-items-center flex-column main">
      <h1 className="mx-5">Business Plan Generator</h1>
      <p className="mx-5">
        Here's our open source business plans generator for your new business using our business team experience model with a professional delivery
        for your plan
      </p>
      <button onClick={() => setShowModal(true)} className="generateButton mt-5 px-5">
        Generate Business Plan <i className="fa-solid fa-arrow-right mx-2"></i>
      </button>
      <QuestionaireModel key={showModal} showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default Home
