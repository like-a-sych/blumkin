$(".socs__soc").click(function () {
	$(".socs__soc").removeClass("active"),
		$(this).addClass("active"),
		$(this).parent().parent().find(".sposob").val($(this).data("sposob"));
});

$(".callback-modal__soc").click(function () {
	$(".callback-modal__soc").removeClass("active"),
		$(this).addClass("active"),
		$(this).parent().parent().find(".sposob1").val($(this).data("sposob1"));
});

$(".callback-modal__time").click(function () {
	$(".callback-modal__time").removeClass("active"),
		$(this).addClass("active"),
		$(this).parent().parent().find(".sposob2").val($(this).data("sposob2"));
});

$(".now").click(function () {
	$(".timeCollapse").removeClass("show")
});

//$(".callback-modal__socials").on("click", ".callback-modal__soc", function () {
//	$(".callback-modal__soc").removeClass("active"),
//		$(this).addClass("active"),
//		$(this).closest(".callback-modal__socials").find(".sposob1").val($(this).data("sposob1"));

//});

$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	arrows: false,
	centerMode: false,
	focusOnSelect: true,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1182,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				variableWidth: false,
			}
		},

		{
			breakpoint: 767.98,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				variableWidth: false,
			}
		},
	]
});

$('.slider-nav__nextslide').click(function () {
	$('.slider-for').slick('slickNext');
});

$('.slider-nav1__nextslide').click(function () {
	$('.slider-for1').slick('slickNext');
});

$('.slider-for1').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav1'
});
$('.slider-nav1').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-for1',
	dots: false,
	arrows: false,
	centerMode: false,
	focusOnSelect: true,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1182,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				variableWidth: false,
			}
		},

		{
			breakpoint: 767.98,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				variableWidth: false,
			}
		},
	]
});

$('.reviewfor').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.reviewslider__itemnav'
});
$('.reviewslider__itemnav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.reviewfor',
	dots: false,
	arrows: false,
	centerMode: false,
	focusOnSelect: true,
	vertical: true,
	responsive: [
		{
			breakpoint: 991.98,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				vertical: false,
			}
		},
		{
			breakpoint: 767.98,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				vertical: false,
			}
		},
		{
			breakpoint: 479.98,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				vertical: false,
			}
		},
	]
});


$('.reviewfor__reivew').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
});




$('.reviewfor_button._main-btn').click(function (e) {
	//e.preventDefault(); 
	$('.reviewfor__reivew').slick('slickNext');
});

$('.reviewfor_button._secondary-btn').click(function (e) {
	//e.preventDefault(); 
	$('.reviewfor__reivew').slick('slickPrev');
});

var r = 59,
	c = 19,
	n = !0;
if ($("#map").length > 0) {
	ymaps.ready(init);

	function init() {
		var result = document.getElementById('result'), // РґР»СЏ РѕС‚Р»Р°РґРєРё
			// РІ СЌС‚РѕР№ РІРµСЂСЃРёРё РєРѕРѕСЂРґРёРЅР°С‚С‹ РїСЂРѕСЃС‚Рѕ СЌР»РµРјРµРЅС‚С‹ РјР°СЃСЃРёРІР° (Рё РѕРЅРё РїРѕРјРµРЅСЏРЅС‹ РјРµСЃС‚Р°РјРё)
			destinations = {
				'Доктор Блюмкин': [55.68183356905483, 37.494511999999986],
				'РљСЂР°СЃРЅРѕРґР°СЂ': [45.00169557458517, 39.0337575],
			},
			// РЎРѕР·РґР°РЅРёРµ СЌРєР·РµРјРїР»СЏСЂР° РєР°СЂС‚С‹ Рё РµРіРѕ РїСЂРёРІСЏР·РєР° Рє РєРѕРЅС‚РµР№РЅРµСЂСѓ СЃ
			// Р·Р°РґР°РЅРЅС‹Рј id ("map").
			myMap = new ymaps.Map('map', {
				// РџСЂРё РёРЅРёС†РёР°Р»РёР·Р°С†РёРё РєР°СЂС‚С‹ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ РЅСѓР¶РЅРѕ СѓРєР°Р·Р°С‚СЊ
				// РµС‘ С†РµРЅС‚СЂ Рё РєРѕСЌС„С„РёС†РёРµРЅС‚ РјР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёСЏ.
				center: [55.68180932206274, 37.49542395106506], // РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі
				zoom: 17
			});
		/*myMap2 = new ymaps.Map('map2', {
				// РџСЂРё РёРЅРёС†РёР°Р»РёР·Р°С†РёРё РєР°СЂС‚С‹ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ РЅСѓР¶РЅРѕ СѓРєР°Р·Р°С‚СЊ
				// РµС‘ С†РµРЅС‚СЂ Рё РєРѕСЌС„С„РёС†РёРµРЅС‚ РјР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёСЏ.
				center: [55.68180932206274, 37.49542395106506], // РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі
				zoom: 17
		});

		myPlacemark2 = new ymaps.Placemark(destinations['РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі'], {
				hintContent: 'Москва, Метро Проспект Вернадского ул. Удальцова, д.30',
				balloonContent: 'Москва, Метро Проспект Вернадского ул. Удальцова, д.30'
		}, {
				// РћРїС†РёРё.
				// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
				iconLayout: 'default#image',
				// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
				iconImageHref: 'img/placeholder.png',
				iconColor: "red",
				iconImageSize: [173, 57],
				iconImageOffset: [-90, -73]
		});*/
		myPlacemark = new ymaps.Placemark(destinations['Доктор Блюмкин'], {
			hintContent: 'Москва, Метро Проспект Вернадского ул. Удальцова, д.30',
			balloonContent: 'Москва, Метро Проспект Вернадского ул. Удальцова, д.30'
		}, {
			// РћРїС†РёРё.
			// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
			iconLayout: 'default#image',
			// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
			iconImageHref: 'img/placeholder.png',
			iconColor: "red",
			iconImageSize: [173, 57],
			iconImageOffset: [-90, -73]
		});
		// РІСЃРµ РѕРє
		myMap.geoObjects
			.add(myPlacemark);
		if (typeof myPlacemark2 !== "undefined") {
			myMap.geoObjects
				.add(myPlacemark2);
		}
		/*myMap2.geoObjects
				.add(myPlacemark)
				.add(myPlacemark2);*/
		result.textContent = 'map init';
		myMap.behaviors.disable('scrollZoom');
		/*myMap2.behaviors.disable('scrollZoom');*/
		//РЅР° РјРѕР±РёР»СЊРЅС‹С… СѓСЃС‚СЂРѕР№СЃС‚РІР°С…... (РїСЂРѕРІРµСЂСЏРµРј РїРѕ userAgent Р±СЂР°СѓР·РµСЂР°)
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			//... РѕС‚РєР»СЋС‡Р°РµРј РїРµСЂРµС‚Р°СЃРєРёРІР°РЅРёРµ РєР°СЂС‚С‹
			myMap.behaviors.disable('drag');
			/*myMap2.behaviors.disable('drag');*/
		}
		// РєСѓРґР° СЃРєР°РєР°С‚СЊ
		function clickGoto() {
			// РіРѕСЂРѕРґ
			var pos = this.getAttribute('data-goto'); // РёР»Рё this.getAttribute('title')
			result.textContent = pos;
			// РїРµСЂРµС…РѕРґРёРј РїРѕ РєРѕРѕСЂРґРёРЅР°С‚Р°Рј
			myMap.panTo(destinations[pos], {
				flying: 1
			});
			return false;
		}
		// РЅР°РІРµС€РёРІР°РµРј РѕР±СЂР°Р±РѕС‚С‡РёРєРё
		var col = document.getElementsByClassName('goto');
		for (var i = 0, n = col.length; i < n; ++i) {
			col[i].onclick = clickGoto;
			result.textContent = result.textContent + ' ' + i;
		}
	}
}

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 25);
	var minutes = Math.floor((t / 1000 / 60) % 20);
	return {
		'total': t,
		'minutes': minutes,
		'seconds': seconds
	};
}
function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
	function updateClock() {
		var t = getTimeRemaining(endtime);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown3', deadline);




