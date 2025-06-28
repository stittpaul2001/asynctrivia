import { AppState } from "../AppState.js"
import { triviaService } from "../services/TriviaService.js"


export class TriviaController {
  constructor() {
    console.log('Loading my TriviaController')

    this.getQuestions()
    AppState.on('questions', this.drawQuestions)
  }

  async getQuestions() {
    // console.log('are there questions in the controller?')
    await triviaService.getQuestion()
  }

  drawQuestions() {
    const questions = AppState.questions
    let questionsContent = ''
    questions.forEach(question => questionsContent += question.questionCard)
    let questionsElem = document.getElementById('questions')
    questionsElem.innerHTML = questionsContent
  }

  filterQuestions(filterCategory) {
    console.log(filterCategory)
    triviaService.filterQuestions(filterCategory)
  }
}