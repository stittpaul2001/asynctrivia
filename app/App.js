import { ExampleController } from './controllers/ExampleController.js';
import { TriviaController } from './controllers/TriviaController.js';

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

  triviaController = new TriviaController()

}

window['app'] = new App()


