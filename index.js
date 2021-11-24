const btnEl = document.getElementById("btnUser");
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
      console.log("Stars earned: ", stars);
    });
  fetch(api)
    .then((data) => data.json())
    .then((data) => {
      console.log("Number of followers: ", data.followers);
    });
}
btnEl.addEventListener("click", run);
