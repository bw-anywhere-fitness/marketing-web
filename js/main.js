
document.querySelector(`.menu`).addEventListener(`click`, (e) => {
  e.stopPropagation();
  const menu = document.querySelector(`.link-group`)
  menu.classList.toggle(`open`);
  if (menu.classList.contains(`open`)) {
    TweenMax.to(menu, 1.5, {
      x:350, ease:Bounce.easeOut,
    });
  } else {
    TweenMax.to(menu, 2, {
      x:-350,
    });
  }
});
