const bg = document.getElementById("bg");
const charles = document.getElementById("charles");
const ctz = document.getElementById("ctz");
const united = document.getElementById("united");

charles.style = `position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -40%) scale(0.13);
  z-index: 2;`

charles.addEventListener("click", function() {
  console.log("charles clicked");
  if (charles.style.zIndex == 2) {
    charles.style = "";
    charles.style.zIndex = 3
    charles.style.maxWidth = "80%";
    charles.style.maxHeight = "80%";
  } else {
    charles.style = `position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-60%, -40%) scale(0.13);
    z-index: 2;`
  }
});

ctz.style = `position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%) scale(0.13);
  z-index: 2;`

ctz.addEventListener("click", function() {
  console.log("ctz clicked");
  if (ctz.style.zIndex == 2) {
    ctz.style = "";
    ctz.style.zIndex = 3
    ctz.style.maxWidth = "80%";
    ctz.style.maxHeight = "80%";
  } else {
    ctz.style = `position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%) scale(0.13);
    z-index: 2;`
  }
});

united.style = `position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -60%) scale(0.13);
  z-index: 2;`

united.addEventListener("click", function() {
  console.log("united clicked");
  if (united.style.zIndex == 2) {
    united.style = "";
    united.style.zIndex = 3
    united.style.maxWidth = "80%";
    united.style.maxHeight = "80%";
  } else {
    united.style = `position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-60%, -60%) scale(0.13);
    z-index: 2;`
  }
});