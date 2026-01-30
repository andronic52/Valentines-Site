const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");

let count = 2;

// GIF paths (make sure these exist in /resources/)
const gifs = {
  catHeart: "resources/cat-heart.gif",
  rusure: "resources/rusure.gif",
  shocked: "resources/3shocked-1.gif",
  crying1: "resources/4.crying.gif",
  crying2: "resources/5.crying.gif",
  idc: "resources/idc.gif"
};

// Preload GIFs and log if any fail
Object.values(gifs).forEach(src => {
  const img = new Image();
  img.src = src;
  img.onload = () => console.log(`Loaded GIF: ${src}`);
  img.onerror = () => console.error(`Failed to load GIF: ${src}`);
});

// Helper function to update GIF and text
function updateState(gifSrc, message, yesStyles = {}, noStyles = {}) {
  gif.src = gifSrc;
  text.innerHTML = message;
  
  Object.assign(yes.style, yesStyles);
  Object.assign(no.style, noStyles);
}

// NO button logic
no.addEventListener("click", () => {
  switch(count) {
    case 2:
      updateState(
        gifs.rusure,
        "You meant to press YES right?🤨",
        {height: "65%", width: "60%"},
        {width: "30%"}
      );
      count++;
      break;
    case 3:
      updateState(
        gifs.shocked,
        "Your hand must have slipped right?🥹",
        {height: "70%", width: "70%"},
        {width: "20%"}
      );
      count++;
      break;
    case 4:
      updateState(
        gifs.crying1,
        "I'm gonna cry😭",
        {height: "80%", width: "80%"},
        {width: "10%", fontSize: "4vh"}
      );
      count++;
      break;
    case 5:
      updateState(
        gifs.crying2,
        "Pretty Please🥺😘",
        {height: "90%", width: "96%"},
        {display: "none"}
      );
      break;
    default:
      console.log("NO clicked too many times!");
  }
});

// YES button logic
yes.addEventListener("click", () => {
  vid.style.display = "block";

  updateState(
    gifs.idc,
    "Knew it babe 😘",
    {height: "90%", width: "96%"},
    {display: "none"}
  );

  // Add link
  yes.innerHTML = '<a href="https://www.instagram.com/a.ndronix/" target="_blank">Message me</a>';

  // Hide video after 9s
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
