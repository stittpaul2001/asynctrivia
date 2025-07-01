import { generateId } from "../utils/GenerateId.js"


export class Question {
  constructor(data) {
    this.id = generateId()
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.category = data.category
    this.correctAnswer = data.correct_answer
    this.answersForAll = data.incorrect_answers
    this.answersForAll.push(this.correctAnswer)
    this.answersForAll.sort(() => Math.random() - .5)


  }

  get questionCard() {
    return `<div class="col-md-6">
          <div class="question-card p-5 ${this.id}">
            <div class="card bg-dark border border-success border-3">
              <div class="d-flex justify-content-between px-2">
                <div class="px-2 text-warning fs-4">${this.difficulty}</div>
                <span class="fw-bold text-end text-danger fs-4">${this.category}</span>
              </div>
              <div class="card-body border border-solid border-info d-flex">
                <div class="text-start fs-2 text-light text-decoration-underline">Question: </div>
                <p class="fw-normal text-light fs-2"> ${this.question}</p>
              </div>
              <div class="d-flex flex-wrap gap-3 border text-center justify-content-around text-danger mc-2 fw-bold">
              ${this.answersButtons}
              </div>
            </div>
          </div>
        </div>
    `
  }

  get answersButtons() {
    let content = ''
    this.answersForAll.forEach(answer => content += `<button onclick="app.TriviaController.checkAnswers('${answer}', '${this.id}')" class="btn btn-light btn-outline-danger text-dark fw-bold fs-5" role="button">${answer}</button>`)
    return content


  }




}