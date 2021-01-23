const refs = {
  previousBtnRef: document.querySelector(".previous"),
  nextBtnRef: document.querySelector(".next"),
  finishBtnRef: document.querySelector(".finish"),
  contentTitleRef: document.querySelector(".content-title"),
  stepValues: [...document.querySelectorAll(".step-value")],
};
console.log(refs);

const MAX_STEP = 4;
let current = 1;

refs.previousBtnRef.addEventListener("click", () => {
  const previousValue = refs.stepValues[current - 2];
  previousValue.classList.remove("complete");
  current -= 1;
  refs.finishBtnRef.disabled = true;
  refs.nextBtnRef.disabled = false;

  if (current === 1) {
    refs.previousBtnRef.disabled = true;
  }
  refs.contentTitleRef.innerText = `Current step ${current}`;
});

refs.nextBtnRef.addEventListener("click", () => {
  const currentValue = refs.stepValues[current - 1];
  currentValue.classList.add("complete");
  current += 1;
  refs.previousBtnRef.disabled = false;

  if (current === MAX_STEP) {
    refs.nextBtnRef.disabled = true;
    refs.finishBtnRef.disabled = false;
  }
  refs.contentTitleRef.textContent = `Current step ${current}`;
});

refs.finishBtnRef.addEventListener("click", () => {
  location.reload();
});
