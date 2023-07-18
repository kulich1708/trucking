
//меню бургер
$('.burger-menu').click(function (event) {
	$('.menu').toggleClass('_active')
	$('body').toggleClass('_lock')
})
// Плавная прокрутка к якорям
$(document).ready(function () {
	$(".menu__body").on("click", "a", function (event) {
		// закрытие бургер при клике на ссылку
		$('.menu').removeClass('_active')
		$('body').removeClass('_lock')
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top}, 1500);
	});
});
$(window).resize(function () {
	if (document.documentElement.clientWidth > 479.98) {
		$('.menu').removeClass('_active')
		$('body').removeClass('_lock')
	}
});
const swiper = new Swiper('.swiper', {
	speed: 400,
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	grabCursor: true,
});