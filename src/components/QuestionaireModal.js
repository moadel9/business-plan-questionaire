import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import FirstSection from "./sections/FirstSection"
import ReviewAnswers from "./sections/ReviewAnswers"
import SecondSection from "./sections/SecondSection"

const QuestionaireModel = ({ showModal, setShowModal }) => {
  // const dispatch = useDispatch()
  const question1Answers = ["B2C", "B2B", "both"]
  const [question1, setQuestion1] = useState({ body: "Is your business model B2C or B2B or both?", answer: question1Answers[0] })
  const [question2, setQuestion2] = useState({ body: "Do you target all age brackets?", answer: "" })
  const [question3, setQuestion3] = useState({ body: "Do you target all industries?", answer: "" })
  const [question4, setQuestion4] = useState({ body: "Did you have an investement before?", answer: "yes" })
  const [question5, setQuestion5] = useState({ body: "How much was the investement?", answer: "" })
  const [step, setStep] = useState("one")
  const application = [question1, question2, question3, question4, question5]
  console.log(question2.answer)
  // const submit = () => {}
  return (
    <Modal
      key={showModal}
      show={showModal}
      onHide={() => {
        setShowModal(false)
      }}
      dialogClassName="ourModal"
      centered
    >
      <div className="innerModal px-2 pt-2 pb-4">
        {step === "one" && (
          <FirstSection
            setShowModal={setShowModal}
            question1Answers={question1Answers}
            question1={question1}
            question2={question2}
            question3={question3}
            setQuestion1={setQuestion1}
            setQuestion2={setQuestion2}
            setQuestion3={setQuestion3}
            setStep={setStep}
          />
        )}
        {step === "two" && (
          <SecondSection question5={question5} question4={question4} setQuestion5={setQuestion5} setQuestion4={setQuestion4} setStep={setStep} />
        )}
        {step === "three" && <ReviewAnswers setStep={setStep} application={application} setShowModal={setShowModal} />}
      </div>
    </Modal>
  )
}

export default QuestionaireModel
