// ### SUPER MARIO Challenge 2:
// Animate Mario walking to the left and right by pressing the
// left and right arrow keys (HINT: implement event handler(s)
// for handling the key presses)
let mario = document.querySelector("img");

mario.src = "assets/mario/Mario1.png";

let rightImgIndex = 2;
let leftImgIndex = 4;

document.addEventListener("keydown", (evt) => {
  console.log(evt.key);

  switch (evt.key) {
    case "ArrowRight":
      if (rightImgIndex === 4) {
        rightImgIndex = 1;
      }
      mario.src = `assets/mario/Mario${rightImgIndex}.png`;
      leftImgIndex = 4;
      rightImgIndex++;
      break;
    case "ArrowLeft":
      if (leftImgIndex === 7) {
        leftImgIndex = 4;
      }
      rightImgIndex = 1;
      mario.src = `assets/mario/Mario${leftImgIndex}.png`;
      leftImgIndex++;
      break;

    default:
      break;
  }
});
