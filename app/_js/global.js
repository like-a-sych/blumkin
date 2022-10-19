//Маска для ввода
$("body").on("focusin", "input[type=tel]", (function () {
	$(this).inputmask({
		mask: ["+79999999999", "+799999999999"],
		greedy: !1
	})
}
));
//Проверка формы бутстрапом
(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();

// Чтобы не прыгал header при открытии бутсраповских модалок




$(".modal").on("show.bs.modal", function (e) {
	$("header").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
}),
	$(".modal").on("hidden.bs.modal", function (e) {
		$("header").css("padding-right", "0")
	});

$(".offcanvas").on("show.bs.offcanvas", function (e) {
	$("header").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
}), $(".offcanvas").on("hidden.bs.offcanvas", function (e) {
	$("header").css("padding-right", "0")
});

$(".offcanvas").on("show.bs.offcanvas", function (e) {
	$(".main-nav").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
}), $(".offcanvas").on("hidden.bs.offcanvas", function (e) {
	$(".main-nav").css("padding-right", "0")
});

$(".modal").on("show.bs.modal", function (e) {
	$(".main-nav").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
}),
	$(".modal").on("hidden.bs.modal", function (e) {
		$(".main-nav").css("padding-right", "0")
	});



/*--------------------Опциональные--------------------

// yandex карта
var r = 59,
	c = 19,
	n = !0;

if (setInterval(n, 1e3),
	$("#map").length) {
	ymaps.ready(init);
	function init() {
		var result = document.getElementById('result'),

			destinations = {
				'Новая орбита': [59.92406356416633, 30.350444499999984],
			},

			myMap = new ymaps.Map('map', {

				center: [59.92382254746811, 30.34936625197602],
				zoom: 18
			});
		myPlacemark2 = new ymaps.Placemark(destinations['Новая орбита'], {
			hintContent: 'Новая орбита',
			balloonContent: 'Ул. Марата, дом 47-49'
		}, {

			iconLayout: 'default#image',

			iconImageHref: 'img/placeholder.svg',
			iconColor: "red",
			iconImageSize: [80, 111],
			iconImageOffset: [-40, -10]
		});

		myPlacemark = new ymaps.Placemark(destinations['Новая орбита'], {
			hintContent: 'Новая орбита',
			balloonContent: 'Ул. Марата, дом 47-49'
		}, {

			iconLayout: 'default#image',

			iconImageHref: 'img/placeholder.svg',
			iconColor: "red",
			iconImageSize: [80, 111],
			iconImageOffset: [-40, -10]
		});

		//myPlacemark3 = new ymaps.Placemark(destinations['База //"Озёрный"'], {
		//hintContent: 'База "Озёрный"',
		//balloonContent: 'Московская область, Рузский район, 2км от д.//Старо, Руза, Московская обл., 143120'
		//}, {

		//iconLayout: 'default#image',

		//iconImageHref: 'img/section-12/placeholder.svg',
		//iconColor:"red",
		//iconImageSize:[80,111],
		//iconImageOffset:[-50,-123]
		//});


		myMap.geoObjects
			.add(myPlacemark)

		myMap.behaviors.disable('scrollZoom');

		myMap2 = new ymaps.Map('map2', {

			center: [59.92382254746811, 30.34936625197602],
			zoom: 18
		});
		myMap2.geoObjects
			.add(myPlacemark2)

		myMap2.behaviors.disable('scrollZoom');

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

			myMap.behaviors.disable('drag');
			myMap2.behaviors.disable('drag');
		}
	}
};

*/