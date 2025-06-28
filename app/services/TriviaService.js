import { AppState } from "../AppState.js"
import { Question } from "../models/Trivia.js"


const questionsApiURL = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple'


class TriviaService {

  async getQuestion() {
    const response = await fetch(questionsApiURL)
    console.log(response)
    // this.getQuestions()
    const questionData = await response.json()
    console.log(questionData)
    const questions = questionData.results.map(questionData => new Question(questionData))
    console.log(questions)
    AppState.questions = questions
  }

  filterQuestions(filterCategory) {

    let filtered = AppState.questions.filter(question => question.category.include(filterCategory))
    AppState.questions = filtered
  }





}
export const triviaService = new TriviaService()