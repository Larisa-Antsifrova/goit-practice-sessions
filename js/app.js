const sliderPriceRef = document.querySelector(".slider-price");
const rangesRef = [...document.querySelectorAll('[type="range"]')];
const inputsRef = [...document.querySelectorAll('[type="number"]')];

rangesRef.forEach((el) => {
  el.addEventListener("input", showRange);
});

inputsRef.forEach((el) => {
  el.addEventListener("input", updateRange);
});

function showRange() {
  let rangeOne = +rangesRef[0].value;
  let rangeTwo = +rangesRef[1].value;

  if (rangeOne > rangeTwo) {
    [rangeOne, rangeTwo] = [rangeTwo, rangeOne];
  }

  inputsRef[0].value = rangeOne;
  inputsRef[1].value = rangeTwo;
}

function updateRange() {
  let valueOne = +inputsRef[0].value;
  let valueTwo = +inputsRef[1].value;

  if (valueOne > valueTwo) {
    [valueOne, valueTwo] = [valueTwo, valueOne];
  }

  rangesRef[0].value = valueOne;
  rangesRef[1].value = valueTwo;
}
