const space = document.querySelector(".space");
// var width = window.innerWidth;
// var height = window.innerHeight;

const randomNum = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

function appendStar(starsNum, type) {
  const starDiv = document.createDocumentFragment();
  for (i = 0; i < starsNum; i++) {
    const star = document.createElement("span");
    const randomX = randomNum(1000);
    const randomY = randomNum(1000);
    star.style.top = `${randomY}px`;
    star.style.left = `${randomX}px`;
    star.classList.add(type);
    star.style.animationDelay = `${randomNum(1005)}00ms`;
    star.style.animationDuration = `${randomNum(50)}00ms`;
    starDiv.appendChild(star);
  }
  space.appendChild(starDiv);
}

appendStar(1000, "star");

appendStar(250, "shootingstar");
