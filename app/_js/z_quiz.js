//quiz
$(".quiz").on("click", ".next-step", function () {
	if ($(this).parent().find($("input:checked")).length > 0) {
		$(".step.active").next().addClass("active"), $(this).parent().removeClass("active");
		var e = $(this).data("step");
		$(".step-side.active").removeClass("active"), $(".sidebar").find('*[data-step="' + e + '"]').addClass("active");
		var t = $(".prg1 .line").attr("data-left");
		$(".prg1 .line").css("left", -1 * (parseInt(t) - 20) + "%"), $(".prg1 .line").attr("data-left", parseInt(t) - 20);
		var i = $(".current-step").html();
		$('.current-step').html(i - 1);
	}
}), $(".quiz-variants__variant").click(function () {

	if ($(this).find($("input:checked")).length > 0) {
		$(this).parent().parent().parent().parent().find(".step.active").next().addClass("active"),
			$(this).parent().parent().parent().removeClass("active");
		var e = $(this).data("step"),
			t = $(this).data("m");
		s = $('.quiz').top;
		$("body,html").animate({
			scrollTop: s
		}, 1e3);
		var i = $(this).parent().parent().parent().parent().parent().parent().find(".prg1 .line").attr("data-left");
		$(this).parent().parent().parent().parent().parent().parent().find(".prg1 .line").css("left", -1 * (parseInt(i) - 20) + "%"),
			$(this).parent().parent().parent().parent().parent().parent().find(".prg1 .line").attr("data-left", parseInt(i) - 20);
		var a = $(this).parent().parent().parent().parent().parent().parent().find(".current-step").html();
		$(this).parent().parent().parent().parent().parent().parent().find('.current-step').html(a - 1);
		if ("step5" == e) {
			$(this).parent().parent().parent().parent().parent().parent().find('.progress-text').html('Все готово. <strong>Остался последний шаг</strong>');
			$(this).parent().parent().parent().parent().parent().parent().find('.progress-text').addClass('final-step');
			$(this).parent().parent().parent().parent().parent().parent().parent().addClass("step5active");
		};
		if (a == 2) { $(this).closest(".quiz-inner").find('.rp-rule__span').html('вопрос') } else
			if (a == 3 || a == 4 || a == 5) { $(this).closest(".quiz-inner").find('.rp-rule__span').html('вопроса') } else {
				$(this).closest(".quiz-inner").find('.rp-rule__span').html('вопросов')
			}
	}
});

//Кнопки "пропустить" и "назад"

$(".quiz-variants__skip").click((function () {
	$(this).parent().parent().parent().parent().find(".step.active").next().addClass("active"),
		$(this).parent().parent().parent().removeClass("active");

	var e = $(this).data("step");

	var t = $(this).parent().parent().parent().parent().find(".prg1 .line").attr("data-left");
	$(this).parent().parent().parent().parent().find(".prg1 .line").css("left", -1 * (parseInt(t) - 25) + "%"),
		$(this).parent().parent().parent().parent().find(".prg1 .line").attr("data-left", parseInt(t) - 25);
	var a = $(".current-step").html();
	$(".current-step").html(a - 1),
		"step6" == e && ($(".progress-text").html("Все готово. Остался последний шаг"),
			$(".progress-line").addClass("final-step"),
			$(this).parent().parent().parent().addClass("step6active"))
})),

	$(".quiz-variants__prev").click((function () {
		$(this).parent().parent().parent().parent().find(".step.active").prev().addClass("active"),
			$(this).parent().parent().parent().removeClass("active");

		var e = $(this).data("step");

		var t = $(this).parent().parent().parent().parent().find(".prg1 .line").attr("data-left");

		$(this).parent().parent().parent().parent().find(".prg1 .line").css("left", -1 * (parseInt(t) + 25) + "%"),
			$(this).parent().parent().parent().parent().find(".prg1 .line").attr("data-left", parseInt(t) + 25);
		var a = $(".current-step").html();

		$(".current-step").html(Number(a) + Number(1)),
			"step6" == e && ($(".progress-text").html("Все готово. <strong>Остался последний шаг</strong>"),
				$(".progress-line").addClass("final-step"),
				$(this).parent().parent().parent().parent().parent().addClass("step6active"))
	}));



//всплывающая подскака на бутсрапе

var popoverTriggerList, popoverList = (popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))).map((function (e) {
	return new bootstrap.Popover(e)
}
));
popoverList = (popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))).map((function (e) {
	return new bootstrap.Popover(e)
}
));
$("body").on("click", (function (e) {
	$('[data-bs-toggle="popover"]').each((function () {
		$(this).is(e.target) || 0 !== $(this).has(e.target).length || 0 !== $(".popover").has(e.target).length || $(this).popover("hide")
	}
	))
}
));


//таймер для квиза


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
initializeClock('countdown', deadline);
initializeClock('countdown2', deadline);


