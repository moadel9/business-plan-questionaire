// import axios from "axios"
// import { API } from "../API/api"
import * as answerType from "../constants/answerConstants"

// Add New secret
export const addAnswers = (application) => async (dispatch) => {
  dispatch({ type: answerType.ADD_ANSWER_REQUEST })
  try {
    // const { data } = await axios.post(`${API}/api/answer`, application)
    setTimeout(() => {
      dispatch({ type: answerType.ADD_ANSWER_SUCCESS, payload: { application: application, message: "Your answers are submmited successfully" } })
    }, 5000)
  } catch (error) {
    dispatch({ type: answerType.ADD_ANSWER_FAIL, payload: error.message })
  }
}
