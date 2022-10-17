// header
const openSitemap = document.querySelector(".three");
const sitemap = document.querySelector(".sitemap");
const exit1 = document.querySelector(".exit-left-sitemap");
const openSearch = document.querySelector(".magn");
const search = document.querySelector(".search");
const exit2 = document.querySelector(".exit-left-search");
const openLogin = document.querySelector(".person");
const login = document.querySelector(".login");
const exit3 = document.querySelector(".exit-right-login");

openSitemap.addEventListener("click", function () {
  sitemap.style.display = "block";
  search.style.display = "none";
  login.style.display = "none";
});
openSitemap.addEventListener("click", function () {
  exit1.style.display = "block";
});
exit1.addEventListener("click", function () {
  exit1.style.display = "none";
  sitemap.style.display = "none";
});

openSearch.addEventListener("click", function () {
  search.style.display = "block";
  sitemap.style.display = "none";
  login.style.display = "none";
});
openSearch.addEventListener("click", function () {
  exit2.style.display = "block";
});
exit2.addEventListener("click", function () {
  exit2.style.display = "none";
  search.style.display = "none";
});

openLogin.addEventListener("click", function () {
  login.style.display = "block";
  sitemap.style.display = "none";
  search.style.display = "none";
});

openLogin.addEventListener("click", function () {
  exit3.style.display = "block";
});
exit3.addEventListener("click", function () {
  exit3.style.display = "none";
  login.style.display = "none";
});

const clickRatio = document.querySelector(".tab-ratio");
const clickAttend = document.querySelector(".tab-attend");
const ratio = document.querySelector(".ratio");
const attend = document.querySelector(".attend");
clickRatio.addEventListener("click", function () {
  ratio.style.display = "block";
  attend.style.display = "none";
  clickRatio.style.borderBottom = "1px solid white";
  clickAttend.style.borderBottom = "none";
  imgLeft.src =
    "https://img.megabox.co.kr/SharedImg/2022/10/13/TnglPxaL6kXOO8KI7PNDTDgua4HXGHwV_316.jpg";
});
clickAttend.addEventListener("click", function () {
  ratio.style.display = "none";
  attend.style.display = "block";
  clickRatio.style.borderBottom = "none";
  clickAttend.style.borderBottom = "1px solid white";
  imgRight.src =
    "https://img.megabox.co.kr/SharedImg/2022/05/23/oZfETtpEvKGpdY2JQo2Z6wFL0S4cpKy5_316.jpg";
});
const imgLeft = document.querySelector(".ratio > img");
const onblack = document.querySelector(".black");
const onEvery = document.querySelector(".everything");
const onLifeis = document.querySelector(".lifeis");
const onOrphan = document.querySelector(".orphan");
const onDaemuga = document.querySelector(".daemuga");

onblack.addEventListener("mouseenter", function () {
  imgLeft.src =
    "https://img.megabox.co.kr/SharedImg/2022/10/13/TnglPxaL6kXOO8KI7PNDTDgua4HXGHwV_316.jpg";
});
onEvery.addEventListener("mouseenter", function () {
  imgLeft.src =
    "https://img.megabox.co.kr/SharedImg/2022/09/23/wvATIEQIktD0lu2o737EBiV4W3TrtBnH_316.jpg";
});
onLifeis.addEventListener("mouseenter", function () {
  imgLeft.src =
    "https://img.megabox.co.kr/SharedImg/2022/09/29/06m9Gzvx2eKlMeNBm6aEuoAD9raGSG7D_316.jpg";
});
onOrphan.addEventListener("mouseenter", function () {
  imgLeft.src =
    "https://img.megabox.co.kr/SharedImg/2022/10/06/BrRH3tIXBvmLPEZSeuJ1gYoCDDwfM42a_420.jpg";
});
onDaemuga.addEventListener("mouseenter", function () {
  imgLeft.src =
    "https://img.megabox.co.kr/SharedImg/2022/09/23/A5TPl8lztOB8OQzQ7LZgWX0ypNaDR0yt_316.jpg";
});
const imgRight = document.querySelector(".attend > img");
const onCriminal = document.querySelector(".criminal");
const onTopGun = document.querySelector(".topGun");
const onHanSan = document.querySelector(".hanSan");
const onGongZo = document.querySelector(".gongZo");
const onHunt = document.querySelector(".hunt");

onCriminal.addEventListener("mouseenter", function () {
  imgRight.src =
    "https://img.megabox.co.kr/SharedImg/2022/05/23/oZfETtpEvKGpdY2JQo2Z6wFL0S4cpKy5_316.jpg";
});
onTopGun.addEventListener("mouseenter", function () {
  imgRight.src =
    "https://img.megabox.co.kr/SharedImg/2022/05/09/6zfAYe6IrZ8BWnruqEfafwakt5cUjWgX_316.jpg";
});
onHanSan.addEventListener("mouseenter", function () {
  imgRight.src =
    "https://img.megabox.co.kr/SharedImg/2022/07/28/1ogGcWYxCNJ9MTnizlZLdZ6REjg6xX1z_316.jpg";
});
onGongZo.addEventListener("mouseenter", function () {
  imgRight.src =
    "https://img.megabox.co.kr/SharedImg/2022/08/29/oUQrNQTflUqvHUQG6kvlzF8SEhJSomfh_316.jpg";
});
onHunt.addEventListener("mouseenter", function () {
  imgRight.src =
    "https://img.megabox.co.kr/SharedImg/2022/08/05/QDUC0cjm2bnWDCCQPYpQvelnoFe1CCfH_316.jpg";
});
// swiper
new Swiper(".section4 .swiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  navigation: {
    prevEl: ".section4 .swiper-button-prev",
    nextEl: ".section4 .swiper-button-next",
  },
});

const swiper = new Swiper(".section2 .swiper", {
  direction: "vertical",
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".section2 .swiper-pagination",
    clickable: false,
  },
  navigation: {
    prevEl: ".section2 .swiper-button-prev",
    nextEl: ".section2 .swiper-button-next",
  },
});

const pauseSwiper = document.querySelector(".swiper-button-pause");
const startSwiper = document.querySelector(".swiper-button-play");

pauseSwiper.addEventListener("click", function () {
  swiper.autoplay.stop();
});
startSwiper.addEventListener("click", function () {
  swiper.autoplay.start();
});

const play = document.querySelector(".swiper-button-play");
const pause = document.querySelector(".swiper-button-pause");

pause.addEventListener("click", function () {
  play.style.display = "block";
  pause.style.display = "none";
});

play.addEventListener("click", function () {
  pause.style.display = "block";
  play.style.display = "none";
});
