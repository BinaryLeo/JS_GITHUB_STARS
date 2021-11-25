const btnEl = document.getElementById("btnUser");
const starEl = document.getElementById("stars");
const followersEl = document.getElementById("followers");
const gravatarEl = document.getElementById("gravatar");
function run() {
  let stars = 0;
  userEl = document.getElementById("gituser").value;
  let api = `https://api.github.com/users/${userEl}`;
  const repo = api + "/repos";
  fetch(repo)
    .then((data) => data.json())
    .then((data) => {
      for (const repo of data) {
        stars += repo.stargazers_count;
      }
      starEl.innerHTML =`Stars earned: ${stars}`;
    });
  fetch(api)
    .then((data) => data.json())
    .then((data) => {
      let followers = data.followers;
      let gravatar = data.avatar_url;
      followersEl.innerHTML = `Followers: ${followers}`;
      gravatarEl.src = gravatar
    });
}
btnEl.addEventListener("click", run);
setInterval(loadCanvasEffect,1000);
function loadCanvasEffect(){
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  const width = 40;
  const height = 40;
  const gap = 5;
  context.strokeStyle="#00fdff";
  let x, y;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      context.beginPath();
      x = 20 + (width + gap) * i;
      y = 20 + (width + gap) * j;
      context.rect(x, y, width, height);
      context.stroke();
      if (Math.random() > 0.5) {
        context.beginPath();
        context.rect(x + 8, y + 8, width - 16, height - 16);
        context.stroke();
      }
    }
  }
}
