import inquirer from "inquirer";

const questions: inquirer.QuestionCollection<inquirer.Answers> = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      "Log Entry",
      "View Entries",
      new inquirer.Separator(),
      "Ask for opening hours",
      {
        name: "Contact support",
        disabled: "Unavailable at this time",
      },
    ],
  },
];

const main = async () => {
  const answers = await inquirer.prompt(questions);
  console.log(answers);
};

main();
