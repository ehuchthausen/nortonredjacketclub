import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class Scroll {
  constructor() {
    this.button = $(".reserve__btn");
    this.addSmoothScrolling();

  }

  addSmoothScrolling() {
    this.button.smoothScroll({
      speed: 800,
    });
  }


  }



export default Scroll;
