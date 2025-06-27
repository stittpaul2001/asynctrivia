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
    await triviaService.getQuestions()
  }

  drawQuestions() {
    const questions = AppState.questions
    let questionsContent = ''
    questions.forEach(question => questionsContent += question.questionCard)
    const questionsElem = document.getElementById('questions')
    questionsElem.innerHTML = questionsContent
  }
}