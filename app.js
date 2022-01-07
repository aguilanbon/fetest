const navOpen = document.getElementById('menu-cta');
const nav = document.querySelector('nav');
const navExit = document.getElementById('nav-exit');
const scrollBtn = document.getElementById('scroll-btn');

// Call to Action Buttons

navOpen.addEventListener('click', () => {
	nav.classList.toggle('nav-toggle');
});

navExit.addEventListener('click', () => {
	nav.classList.toggle('nav-toggle');
});

scrollBtn.addEventListener('click', () => {
	window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
	const scrHeight = document.documentElement.scrollHeight - window.innerHeight;

	const halved = scrHeight / 2;

	if (document.documentElement.scrollTop >= halved) {
		scrollBtn.style.display = 'block';
	}

	if (document.documentElement.scrollTop <= halved) {
		scrollBtn.style.display = 'none';
	}
});

// Slider

const cat1 = document.querySelector('.cat1');
const cat2 = document.querySelector('.cat2');
const cat3 = document.querySelector('.cat3');
const cat4 = document.querySelector('.cat4');
const cat5 = document.querySelector('.cat5');
const cat6 = document.querySelector('.cat7');
const cat7 = document.querySelector('.cat8');
const cat8 = document.querySelector('.cat9');
const cat9 = document.querySelector('.cat10');
const cat10 = document.querySelector('.cat11');
const cat11 = document.querySelector('.cat12');
const slideWrapper = document.querySelector('.swiper-wrapper');
const swiperSlide = document.querySelector('.swiper-slide');

const swiper = new Swiper('.swiper', {
	direction  : 'horizontal',
	loop       : true,
	pagination : {
		el : '.swiper-pagination'
	},
	navigation : {
		nextEl : '.swiper-button-next',
		prevEl : '.swiper-button-prev'
	}
});

const swiperWeb = new Swiper('.mySwiper', {
	slidesPerView : 3,
	spaceBetween  : 30,
	direction     : 'horizontal',
	pagination    : {
		el : '.swiper-pagination'
	},
	navigation    : {
		nextEl : '.swiper-button-next',
		prevEl : '.swiper-button-prev'
	}
});

window.addEventListener('load', () => {
	fetch('https://api.thecatapi.com/v1/images/search?limit=12', {
		method  : 'GET',
		headers : {
			'Content-Type' : 'application/json',
			'x-api-key'    : '3c232207-6436-4896-a9bc-e2af1c20c3c6'
		}
	})
		.then((res) => res.json())
		.then((data) => {
			cat1.style.backgroundImage = `url("${data[0].url}")`;
			cat1.style.backgroundSize = 'cover';
			cat1.childNodes[1].setAttribute('href', `${data[0].url}`);
			cat2.style.backgroundImage = `url("${data[1].url}")`;
			cat2.style.backgroundSize = 'cover';
			cat2.childNodes[1].setAttribute('href', `${data[1].url}`);
			cat3.style.backgroundImage = `url("${data[2].url}")`;
			cat3.style.backgroundSize = 'cover';
			cat3.childNodes[1].setAttribute('href', `${data[2].url}`);
			cat4.style.backgroundImage = `url("${data[3].url}")`;
			cat4.style.backgroundSize = 'cover';
			cat4.childNodes[1].setAttribute('href', `${data[3].url}`);
			cat5.style.backgroundImage = `url("${data[4].url}")`;
			cat5.style.backgroundSize = 'cover';
			cat5.childNodes[1].setAttribute('href', `${data[4].url}`);
			cat6.style.backgroundImage = `url("${data[5].url}")`;
			cat6.style.backgroundSize = 'cover';
			cat6.childNodes[1].setAttribute('href', `${data[5].url}`);
			cat7.style.backgroundImage = `url("${data[6].url}")`;
			cat7.style.backgroundSize = 'cover';
			cat7.childNodes[1].setAttribute('href', `${data[6].url}`);
			cat8.style.backgroundImage = `url("${data[7].url}")`;
			cat8.style.backgroundSize = 'cover';
			cat8.childNodes[1].setAttribute('href', `${data[7].url}`);
			cat9.style.backgroundImage = `url("${data[8].url}")`;
			cat9.style.backgroundSize = 'cover';
			cat9.childNodes[1].setAttribute('href', `${data[8].url}`);
			cat10.style.backgroundImage = `url("${data[89].url}")`;
			cat10.style.backgroundSize = 'cover';
			cat10.childNodes[1].setAttribute('href', `${data[9].url}`);
			cat11.style.backgroundImage = `url("${data[10].url}")`;
			cat11.style.backgroundSize = 'cover';
			cat11.childNodes[1].setAttribute('href', `${data[10].url}`);
		});
});

// const swiperWeb = new Swiper('.swiper-web', {
// 	slidesPerView : 3,
// 	spaceBetween  : 30,
// 	pagination    : {
// 		el        : '.swiper-pagination',
// 		clickable : true
// 	}
// });

// Slider API

// const getImg = () => {
// 	fetch('https://api.thecatapi.com/v1/images/search?limit=10', {
// 		method  : 'GET',
// 		headers : {
// 			'Content-Type' : 'application/json',
// 			'x-api-key'    : '3c232207-6436-4896-a9bc-e2af1c20c3c6'
// 		}
// 	})
// 		.then((res) => res.json())
// 		.then((data) => {
// 			// console.log(cats.url);
// const newSlide = document.createElement('div');
// newSlide.classList.add('swiper-slide');
// const catImg = document.createElement('img');
// catImg.src = `${cats.url}`;
// newSlide.appendChild(catImg);
// slideWrapper.appendChild(newSlide);
// 		});
// };

// getImg();
