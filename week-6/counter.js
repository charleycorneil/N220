let currentCount = 0;

function addCount() {
  currentCount++;
  document.querySelector("#counter").innerHTML = currentCount;
}

showCurrentCount();

function addCount() {
  currentCount++;
  showCurrentCount();
}
