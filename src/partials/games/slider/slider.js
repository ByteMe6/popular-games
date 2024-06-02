const slider = document.querySelector(".slider");
const sliderItems = document.querySelector(".slider-items");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;
const slideWidth = slides[0].offsetWidth;

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  sliderItems.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1 + slides.length) % slides.length;
  sliderItems.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});
