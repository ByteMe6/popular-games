const prevBtn = document.querySelector('.sliderBtnPrev');
const nextBtn = document.querySelector('.sliderBtnNext');
const sliderImg = document.querySelectorAll('.sliderImg');
let masterSlide = 0;
const sliderImgWidth = document.querySelector('.slide').offsetWidth;
const sliderImgBox = document.querySelector(".sliderImgBox");

console.log("width:" + sliderImgWidth + "px");

prevBtn.addEventListener('click', () => {
    masterSlide = (masterSlide === 0) ? sliderImg.length - 1 : masterSlide - 1;
    sliderImgBox.style.transform = `translateX(-${masterSlide * sliderImgWidth}px)`;
    console.log(masterSlide);
});

nextBtn.addEventListener('click', () => {
    masterSlide = (masterSlide === sliderImg.length - 1) ? 0 : masterSlide + 1;
    sliderImgBox.style.transform = `translateX(-${masterSlide * sliderImgWidth}px)`;
    console.log(masterSlide);
});