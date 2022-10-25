(function (time){

  const container = document.querySelector('#carousel');
  const slides = container.querySelectorAll('.carousel-slide');
  const prevBtn = container.querySelector('#prev');
  const nextBtn = container.querySelector('#next');
  const menuBtn = document.querySelector('.menu__btn');
  const menu = document.querySelector('.menu__list');
  
  const SLIDES_COUNT = slides.length; 
  let currentSlide = 0;
  let timerID = null;
  let interval = time;
  
  function gotoNth(n){
    slides[currentSlide].classList.toggle('active');
    currentSlide = (n + SLIDES_COUNT) % SLIDES_COUNT;
    slides[currentSlide].classList.toggle('active');
  }
  
  function gotoPrev() {
    gotoNth(currentSlide - 1);
  }
  
  function gotoNext() {
    gotoNth(currentSlide + 1);
  }
  
  function prev() {
    gotoPrev();
  }
  
  function next() {
    gotoNext();
  }
  
  function initListeners() {
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }

  function init() {
    timerID = setInterval(gotoNext, interval);
    initListeners();
  }

  init();

}(5000));