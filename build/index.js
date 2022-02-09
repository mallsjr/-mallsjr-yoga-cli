var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: ["Log Entry", "View Entries", "Exit"],
    },
];
const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));
const exitProcess = () => __awaiter(void 0, void 0, void 0, function* () {
    const spinner = createSpinner("Exitting...").start();
    yield sleep();
    spinner.success({ text: "Goodbye!" });
    process.exit(0);
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield inquirer.prompt(questions);
    if (answer.action === "Exit") {
        exitProcess();
    }
});
main();
