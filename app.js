const puzzleBoard = document.querySelector("#puzzle");
const solveButton = document.querySelector("#solve-button");
const solutionDisplay = document.querySelector("#solution");
const squares = 81;
const submission = [];

for (let i = 0; i < squares; i++) {
  const square = document.createElement("input");
  square.setAttribute("type", "number");
  square.setAttribute("min", "1");
  square.setAttribute("max", "9");

  let row = Math.floor(i / 9);
  let col = i % 9;

  if ((Math.floor(row / 3) + Math.floor(col / 3)) % 2 === 0) {
    square.classList.add("odd-section");
  }

  puzzleBoard.appendChild(square);
}

const joinValues = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.value) submission.push(input.value);
    else submission.push(".");
  });
  console.log(submission);
};
//solveButton.addEventListener("click", joinValues);

const populateValues = (isSolvable, solution) => {
  const inputs = document.querySelectorAll("input");
  if (isSolvable && solution) {
    inputs.forEach((input, i) => {
      input.value = solution[i];
    });
    solutionDisplay.textContent = "Solved!";
  } else {
    solutionDisplay.textContent = "Unsolvable!";
  }
};

const solve = async () => {
  joinValues();
  const data = submission.join("");
  console.log("data", data);

  // const options = {
  //   method: "POST",
  //   url: "https://solve-sudoku.p.rapidapi.com/",
  //   headers: {
  //     "content-type": process.env.CONTENT_TYPE,
  //     "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
  //     "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
  //   },
  //   data: {
  //     puzzle: data,
  //   },
  // };

  // axios
  //   .request(options)
  //   .then((response) => {
  //     console.log(response.data);
  //     populateValues(response.data.solvable, response.data.solution);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
};

solveButton.addEventListener("click", solve);
