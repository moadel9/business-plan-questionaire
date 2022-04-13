import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { acceptOnlyNumber, isEmpty } from "../validations/validations"
const SecondSection = ({ question5, question4, setQuestion5, setQuestion4, setStep }) => {
  const [q5Val, setQ5Val] = useState(false)

  const submit = () => {
    setQ5Val(false)
    if (question4.answer === "yes") {
      if (isEmpty(question5.answer)) {
        setQ5Val(true)
        return
      }
    }

    setStep("three")
  }
  return (
    <div className="content mx-5">
      <div className="title">
        <Modal.Title className="my-2  d-inline">Second Section</Modal.Title>
        <small className="px-1">2/3</small>
        <p>Investement history information</p>
      </div>
      <div className="questions">
        <div className="question">
          <p className="mt-3 mb-1">{question4.body}</p>
          <div>
            <input
              value="yes"
              checked={question4.answer === "yes"}
              onChange={(e) => setQuestion4({ ...question4, answer: e.target.value })}
              type="radio"
            />
            <label>Yes</label>
          </div>
          <div>
            <input
              value="no"
              checked={question4.answer === "no"}
              onChange={(e) => {
                setQuestion4({ ...question4, answer: e.target.value })
                setQuestion5({ ...question5, answer: "" })
              }}
              type="radio"
            />
            <label>No</label>
          </div>
        </div>
      </div>
      <div className="question">
        <p className="mt-3 mb-1">{question5.body}</p>
        <input
          disabled={question4.answer === "no"}
          value={question5.answer}
          onChange={(e) => setQuestion5({ ...question5, answer: acceptOnlyNumber(e.target.value) })}
          type="text"
          placeholder="enter value"
        ></input>
        {q5Val && <p className="text-danger error">Please enter value!</p>}
      </div>
      <div className="d-flex mt-5 justify-content-between">
        <button className="next back mt-4" onClick={() => setStep("one")}>
          <i className="fa-solid fa-arrow-left mx-2"></i>Back
        </button>
        <button className="next mt-4" onClick={submit}>
          Next<i className="fa-solid fa-arrow-right mx-2"></i>
        </button>
      </div>
    </div>
  )
}

export default SecondSection
