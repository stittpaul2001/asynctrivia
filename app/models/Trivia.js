

export class Question {
  constructor(data) {
    this.questionNumber = data.questionNumber
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correctAnswer
    this.incorrectAnswer = data.incorrectAnswer
    this.category = data.category

  }

  get questionCard() {
    return `<div class="col-md-6">
          <div class="question-card p-5">
            <span class="fw-bold text-start text-pink px-2 mb-2">${this.questionNumber}:</span>
            <div class="card bg-dark border border-success border-3">
              <span class="d-flex justify-content-between px-2 text-warning">
                ${this.difficulty}
                <span class="fw-bold text-end text-danger fs-4">${this.category}</span>
              </span>
              <div class="card-body border border-solid border-info">
                <p class="text-start fs-2 text-light">${this.question}</p>
              </div>
              <div class="d-flex flex-wrap gap-3 border text-center justify-content-evenly">
                <button onclick="" class="btn btn-outline-secondary">A</button>
                <button onclick="" class="btn btn-outline-secondary">B</button>
                <button onclick="" class="btn btn-outline-secondary">C</button>
                <button onclick="" class="btn btn-outline-secondary">D</button>
              </div>
            </div>
          </div>
        </div>
    `
  }
}