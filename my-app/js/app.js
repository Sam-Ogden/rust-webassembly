// import("../pkg/index.js")
//   .then((...args) => {
//     console.log(...args);
//   })
//   .catch(console.error);
import { memory } from "../pkg/index_bg";
import { Image } from "../pkg/index";

console.log(memory);

const image = Image.new();
const pixelsPtr = image.pixels_ptr();
const pixels = new Uint8Array(memory.buffer, pixelsPtr, 6);

console.log(pixels);

function numToHex(value) {
  const hex = value.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

const canvas = document.createElement("canvas");

function drawPixel(x, y, color) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = `#${numToHex(color[0])}${numToHex(color[1])}${numToHex(
    color[2]
  )}`;
  ctx.fillRect(x, y, 100, 100);
}

document.body.appendChild(canvas);
drawPixel(0, 0, pixels.slice(0, 3));
drawPixel(100, 0, pixels.slice(3, 6));
