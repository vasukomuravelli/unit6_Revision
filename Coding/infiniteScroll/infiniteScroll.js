function getData(i) {
  fetch(`https://api.pexels.com/v1/curated?page=${i}&per_page=25`, {
    method: "GET",
    headers: {
      //   Authorization: "563492ad6f9170000100000180a152de2b3a48579c71ec5794cc6bb7",
      Authorization: "563492ad6f9170000100000153773b5c95d14d0291140d39b7064f0e",
    },
  })
    .then((res) => res.json())
    .then((data) => showData(data.photos))
    .catch((err) => console.log(err));
}
let container = document.getElementById("container");
function showData(data) {
  data.forEach((item) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = item.src.large2x;
    image.setAttribute("class", "image");
    let details = document.createElement("div");
    let title = document.createElement("h3");
    title.innerText = item.alt;
    let photographer = document.createElement("p");
    photographer.innerText = `Photographer : ${item.photographer}`;
    details.setAttribute("class", "details");
    details.append(title, photographer);
    div.append(image, details);
    container.append(div);
  });
}
let i = 2;
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    getData(i++);
  }
});
function scrolltop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
