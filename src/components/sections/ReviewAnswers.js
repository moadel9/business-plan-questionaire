import React from "react"
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addAnswers } from "../../redux/actions/answersActions"
import ReactLoading from "react-loading"

const ReviewAnswers = ({ application, setStep, setShowModal }) => {
  const dispatch = useDispatch()
  const { answers, loading } = useSelector((state) => state.answersReducer)

  const submit = () => {
    dispatch(addAnswers(application))
  }
  return (
    <div className="content mx-5">
      {loading ? (
        <div className="loading">
          <ReactLoading color="#040442" type="bars" width={100} />
          <p className="mt-5">Sending Answers</p>
        </div>
      ) : answers && Object.keys(answers).length > 0 ? (
        <>
          <div className="final">
            <p>{answers.message}</p>
            <i className="fa-solid fa-circle-check fa-4x"></i>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="next submit w-25 mt-5"
              onClick={() => {
                setShowModal(false)
                dispatch({ type: "answersReset" })
              }}
            >
              Done
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="title">
            <Modal.Title className="my-2  d-inline">Review Answers</Modal.Title>
            <small className="px-1">3/3</small>
            <p>Check your final answers</p>
          </div>
          <div className="questions">
            {application.map(
              (q, i) =>
                q.answer && (
                  <div key={i}>
                    <h6>{q.body}</h6>
                    <p className=" answer px-2">{q.answer}</p>
                  </div>
                )
            )}
          </div>
          <div className="d-flex mt-2 justify-content-between">
            <button className="next back mt-4" onClick={() => setStep("two")}>
              <i className="fa-solid fa-arrow-left mx-2"></i>Back
            </button>
            <button className="next submit w-25 mt-4" onClick={submit}>
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default ReviewAnswers
