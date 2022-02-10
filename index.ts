import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

const mainPrompt: inquirer.QuestionCollection<inquirer.Answers> = [
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

const logEntryPrompt: inquirer.QuestionCollection<inquirer.Answers> = [
  {
    type: "input",
    name: "date",
    message: "Enter Date Example format: Feb 13, 2014",
  },
  {
    type: "input",
    name: "duration",
    message: "Enter Duration of practice in minutes",
  },
  {
    type: "list",
    name: "type",
    message: "Enter type of practice",
    choices: ["Gentle", "Yin", "Bed", "Morning"],
  },
];

const addEntryProcess = async () => {
  const logEntry = await inquirer.prompt(logEntryPrompt);

  const spinner = createSpinner("Logging Practice...").start();
  await sleep();
  spinner.success({ text: "Practice logged!" });

  console.log(logEntry);

  main();
};

const main = async () => {
  const answer = await inquirer.prompt(mainPrompt);

  if (answer.action === "Exit") {
    console.clear();
    exitProcess();
  } else if (answer.action === "Log Entry") {
    console.clear();
    addEntryProcess();
  }
};

main();
