import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { isEmpty } from "../validations/validations"
const FirstSection = ({ question1Answers, question1, question2, question3, setQuestion1, setQuestion2, setQuestion3, setStep, setShowModal }) => {
  const [q2Val, setQ2Val] = useState(false)
  const [q3Val, setQ3Val] = useState(false)

  const submit = () => {
    setQ2Val(false)
    setQ3Val(false)
    if (question1.answer === question1Answers[0]) {
      if (isEmpty(question2.answer)) {
        setQ2Val(true)
        return
      }
    }
    if (question1.answer === question1Answers[1]) {
      if (isEmpty(question3.answer)) {
        setQ3Val(true)
        return
      }
    }
    if (question1.answer === question1Answers[2]) {
      if (isEmpty(question2.answer)) {
        setQ2Val(true)
        return
      }
      if (isEmpty(question3.answer)) {
        setQ3Val(true)
        return
      }
    }
    setStep("two")
  }

  return (
    <div className="content mx-5">
      <div className="title">
        <Modal.Title className="my-2  d-inline">First Section</Modal.Title>
        <small className="px-1">1/3</small>
        <p>choosing your business model type</p>
      </div>
      <div className="questions">
        <div className="question">
          <p className="mt-3 mb-1">{question1.body}</p>
          {question1Answers.map((a, i) => (
            <div key={i}>
              <input
                value={a}
                checked={question1.answer === a}
                onChange={(e) => setQuestion1({ ...question1, answer: e.target.value })}
                type="radio"
                placeholder="fill me"
              />
              <label>{a}</label>
            </div>
          ))}
        </div>
        {question1.answer === question1Answers[0] ? (
          <div className="question">
            <p className="mt-3 mb-1">{question2.body}</p>
            <div>
              <input
                value="yes"
                checked={question2.answer === "yes"}
                onChange={(e) => setQuestion2({ ...question2, answer: e.target.value })}
                type="radio"
              />
              <label>Yes</label>
            </div>
            <div>
              <input
                value="no"
                checked={question2.answer === "no"}
                onChange={(e) => setQuestion2({ ...question2, answer: e.target.value })}
                type="radio"
              />
              <label>No</label>
            </div>
            {q2Val && <p className="text-danger error">Please choose an answer!</p>}
          </div>
        ) : (
          <>
            {question1.answer === question1Answers[1] ? (
              <div className="question">
                <p className="mt-3 mb-1">{question3.body}</p>
                {/* <input
                value={question3.answer}
                onChange={(e) => setQuestion3({ ...question3, answer: e.target.value })}
                type="text"
                placeholder="answer"
              ></input> */}
                <div>
                  <input
                    value="yes"
                    checked={question3.answer === "yes"}
                    onChange={(e) => setQuestion3({ ...question3, answer: e.target.value })}
                    type="radio"
                  />
                  <label>Yes</label>
                </div>
                <div>
                  <input
                    value="no"
                    checked={question3.answer === "no"}
                    onChange={(e) => setQuestion3({ ...question3, answer: e.target.value })}
                    type="radio"
                  />
                  <label>No</label>
                </div>
                {q3Val && <p className="text-danger error">Please choose an answer!</p>}
              </div>
            ) : (
              <>
                <div className="question">
                  <p className="mt-3 mb-1">{question2.body}</p>
                  <div>
                    <input
                      value="yes"
                      checked={question2.answer === "yes"}
                      onChange={(e) => setQuestion2({ ...question2, answer: e.target.value })}
                      type="radio"
                    />
                    <label>Yes</label>
                  </div>
                  <div>
                    <input
                      value="no"
                      checked={question2.answer === "no"}
                      onChange={(e) => setQuestion2({ ...question2, answer: e.target.value })}
                      type="radio"
                    />
                    <label>No</label>
                  </div>
                  {q2Val && <p className="text-danger error">Please choose an answer!</p>}
                </div>
                <div className="question">
                  <p className="mt-3 mb-1">{question3.body}</p>
                  <div>
                    <input
                      value="yes"
                      checked={question3.answer === "yes"}
                      onChange={(e) => setQuestion3({ ...question3, answer: e.target.value })}
                      type="radio"
                    />
                    <label>Yes</label>
                  </div>
                  <div>
                    <input
                      value="no"
                      checked={question3.answer === "no"}
                      onChange={(e) => setQuestion3({ ...question3, answer: e.target.value })}
                      type="radio"
                    />
                    <label>No</label>
                  </div>
                  {q3Val && <p className="text-danger error">Please choose an answer!</p>}
                </div>
              </>
            )}
          </>
        )}
      </div>
      <div className="d-flex justify-content-end"></div>
      <div className="d-flex mt-5 justify-content-between">
        <button className="next back" onClick={() => setShowModal(false)}>
          <i className="fa-solid fa-arrow-left mx-2"></i>Cancel
        </button>
        <button className="next" onClick={submit}>
          Next<i className="fa-solid fa-arrow-right mx-2"></i>
        </button>
      </div>
    </div>
  )
}

export default FirstSection
