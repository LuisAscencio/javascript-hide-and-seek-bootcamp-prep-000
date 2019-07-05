function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector("div.target");
}

function deepestChild() {
  return document.querySelector("div#grand-node div div div div");
}

function increaseRankBy(n) {
  const list = document
    .getElementById("app")
    .querySelectorAll("ul.ranked-list li");

  for (let index = 0; index < list.length; index++) {
    list[index].innerHTML = parseInt(list[index].innerHTML) + n;
  }
}
