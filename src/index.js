const rangeText = document.querySelector(".rangeText"),
  rangeBar = document.querySelector("#rangeBar"),
  userInputNum = document.querySelector("#userInputNum"),
  playBtn = document.querySelector(".playBtn"),
  compare = document.querySelector(".compareSentence"),
  result = document.querySelector(".result");

function sliderHandler(e) {
  const sliderValue = e.target.value;
  rangeText.innerText = `Generate a number between 0 and ${sliderValue}`;
}

function guessNumber(event) {
  event.preventDefault();
  const rangeOutput = rangeBar.value;
  const currentValue = parseInt(userInputNum.value);
  const random = Math.floor(Math.random() * rangeOutput);

  compare.innerText = `You choose: ${currentValue}, machine choose: ${random}`;
  if (currentValue === random) {
    result.innerText = "You Win";
  } else {
    result.innerText = "You Lose";
  }
}

function init() {
  rangeBar.addEventListener("change", sliderHandler);
  playBtn.addEventListener("click", guessNumber);
}
init();
