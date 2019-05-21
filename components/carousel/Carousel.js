
class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.previous = this.carousel.querySelector(`.previous`);
    this.next = this.carousel.querySelector(`.next`);
    this.boxes = Array.from(this.carousel.querySelectorAll(`.box`));
    this.currentPosition = parseInt(this.boxes[0].dataset.pos);
    this.total = this.boxes.length;
    this.hideAll();
    this.boxes[0].style.display = `flex`;

    this.previous.addEventListener(`click`, this.previousBox);
    this.next.addEventListener(`click`, this.nextBox);
  }

  previousBox = () => {
    if (parseInt(this.currentPosition) > 1) {
      this.currentPosition -= 1;
      this.hideAll();
      this.show();
    }
  }

  nextBox = () => {
    if (parseInt(this.currentPosition) < this.total) {
      this.currentPosition += 1;
      this.hideAll();
      this.show();
    }
  }

  show() {
    const currentBox = document.querySelector(`.box[data-pos="${this.currentPosition}"]`);
    currentBox.style.display = `flex`;
    currentBox.style.opacity = 0;
    TweenLite.to(currentBox, 1.5, {opacity: 1});
  }

  hideAll() {
    this.boxes.forEach(box => box.style.display = `none`);
  }
}

const boxes = document.querySelector(`.bottom-container .box-group`);
new Carousel(boxes);
