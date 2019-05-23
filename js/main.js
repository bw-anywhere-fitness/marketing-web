
document.querySelector(`.menu`).addEventListener(`click`, (e) => {
  e.stopPropagation();
  const menu = document.querySelector(`.link-group`)
  menu.classList.toggle(`open`);
  if (menu.classList.contains(`open`)) {
    TweenMax.to(menu, 1.5, {
      x:300, ease:Bounce.easeOut,
    });
  } else {
    TweenMax.to(menu, 2, {
      x:-300,
    });
  }
});

window.addEventListener(`load`, e => {
  const headingList = String(`Take your Fitness with you!`).split(``);
  const subHeadingList = String(`Anywhere... Anytime...`).split(``);
  const h1 = document.querySelector(`.header-content .text-content h1`);
  const h2 = document.querySelector(`.header-content .text-content h2`);
  const heading = [];
  const subHeading = [];

  if (h1 && h2) {
    const animate = setInterval(() => {
      if (headingList.length > 0) {
        heading.push(headingList.shift());
        h1.textContent = heading.join(``);
      } else if (subHeadingList.length > 0) {
        subHeading.push(subHeadingList.shift());
        h2.textContent = subHeading.join(``);
      } else {
        clearInterval(animate);
      }
    }, 50);
  }
});

const scroll = new SmoothScroll('a[href*="#"]');
