const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

// Absolute paths for GitHub Pages
const gifs = [
  "/Valentines-Site/resources/cat-heart.gif",
  "/Valentines-Site/resources/rusure.gif",
  "/Valentines-Site/resources/3shocked-1.gif",
  "/Valentines-Site/resources/4.crying.gif",
  "/Valentines-Site/resources/5.crying.gif",
  "/Valentines-Site/resources/idc.gif"
];

// Preload GIFs
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// NO button click
no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "/Valentines-Site/resources/rusure.gif";
    text.innerHTML = "You meant to press YES right?🤨";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "/Valentines-Site/resources/3shocked-1.gif";
    text.innerHTML = "Your hand must have slipped right?🥹";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "/Valentines-Site/resources/4.crying.gif";
    text.innerHTML = "I'm gonna cry😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "/Valentines-Site/resources/5.crying.gif";
    text.innerHTML = "Pretty Please🥺😘";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// YES button click
yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "/Valentines-Site/resources/idc.gif";
  text.innerHTML = "Knew it babe 😘";
  yes.innerHTML = '<a href="https://www.instagram.com/a.ndronix/">Message me</a>';
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
