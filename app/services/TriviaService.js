import { AppState } from "../AppState.js"
import { Question } from "../models/Trivia.js"
import { Pop } from "../utils/Pop.js"


const questionsApiURL = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple'


class TriviaService {
  checkAnswers(guess, id) {

    const questions = AppState.questions
    const findQuestions = questions.find(question => id == question.id)

    if (guess == findQuestions.correctAnswer) {
      Pop.success('You got the correct answer!!!')
    } else {
      return
    }
  }

  async getQuestion() {
    const response = await fetch(questionsApiURL)
    // console.log(response)
    // this.getQuestions()
    const questionResults = await response.json()
    console.log(questionResults)
    const questions = questionResults.results.map(questionResult => new Question(questionResult))
    // console.log(questions)
    AppState.questions = questions
    AppState.questionList = questions
  }






}
export const triviaService = new TriviaService()