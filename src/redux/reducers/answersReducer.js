import * as answerType from "../constants/answerConstants"

export const answersReducer = (state = { loading: false, answers: {} }, action) => {
  switch (action.type) {
    // add secret
    case answerType.ADD_ANSWER_REQUEST:
      return { loading: true }
    case answerType.ADD_ANSWER_SUCCESS:
      return { loading: false, answers: action.payload }
    case answerType.ADD_ANSWER_FAIL:
      return { loading: false, error: action.payload }
    case "answersReset":
      return { loading: false, answers: {} }

    default:
      return state
  }
}
