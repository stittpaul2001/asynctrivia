import { AppState } from "../AppState.js"
import { Question } from "../models/Trivia.js"


const questionsApiURL = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple'


class TriviaService {

  async getQuestions() {
    const response = await fetch(questionsApiURL)


    const questionData = await response.json()

    const questions = questionData.data.map(questionData => new Question(questionData))

    AppState.questions = questions
  }
}
export const triviaService = new TriviaService()