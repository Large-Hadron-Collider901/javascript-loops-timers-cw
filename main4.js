// ### Timer Challenge 1:
// Animate the included sprite images of 'guy' images. Start with an initial image of `guy1.png`
// then every .5 second (500 ms) update the image to the next one in sequence. Once you reach image
//  `guy9.png` start over with the `guy1.png` image.

let idx = 1;
setInterval(() => {
  let myCanvas = document.querySelector("canvas"); // select my canvas in the DOM
  let ctx = myCanvas.getContext("2d");
  let img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  };
  if (idx >= 10) idx = 1; // when the index reaches 10 reset to the first image

  img.src = "assets/guy/guy" + idx + ".png";

  idx++;
}, 500);
