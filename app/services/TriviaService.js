import { AppState } from "../AppState.js"
import { Question } from "../models/Trivia.js"


const questionsApiURL = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple'


class TriviaService {

  async getQuestions() {
    const response = await fetch(questionsApiURL)
    console.log(response)
    // this.getQuestions()
    const questionData = await response.json()
    console.log(questionData)
    const questions = questionData.results.map(questionData => new Question(questionData))
    console.log(questions)
    AppState.questions = questions
  }
}
export const triviaService = new TriviaService()