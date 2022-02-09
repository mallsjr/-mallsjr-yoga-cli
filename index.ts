import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

const questions: inquirer.QuestionCollection<inquirer.Answers> = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: ["Log Entry", "View Entries", "Exit"],
  },
];

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

const exitProcess = async () => {
  const spinner = createSpinner("Exitting...").start();
  await sleep();
  spinner.success({ text: "Goodbye!" });
  process.exit(0);
};

const main = async () => {
  const answer = await inquirer.prompt(questions);

  if (answer.action === "Exit") {
    exitProcess();
  }
};

main();
