import { GiftSandboxController } from "./Controllers/giftSandboxController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();


  giftSandboxController = new GiftSandboxController()
}

window["app"] = new App();
