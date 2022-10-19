$(".quiz-variants__variant").click((function () {
	if ($(this).parent().parent().find($("input:checked")).length > 0) {
		$(this).closest(".step.active").next().addClass("active"),
			$(this).closest(".step.active").removeClass("active");
		var t = $(this).closest(".quiz").find(".prg1 .line").attr("data-left");
		$(this).closest(".quiz").find(".prg1 .line").css("left", -1 * (parseInt(t) - 20) + "%"),
			$(this).closest(".quiz").find(".prg1 .line").attr("data-left", parseInt(t) - 20);
		var e = $(this).closest(".quiz").find(".current-step").html();
		$(this).parent().closest(".quiz").find(".current-step").html(e - 1),
			2 == e && ($(this).closest(".quiz").find(".progress-text").html("Все готово. <strong>Остался последний шаг</strong>"),
				$(this).closest(".section-5").find("._container").addClass("quiz-finish")),
			2 == e ? $(this).closest(".quiz").find(".rp-rule__span").html("вопрос") : 3 == e || 4 == e || 5 == e ? $(this).closest(".quiz").find(".rp-rule__span").html("вопроса") : $(this).closest(".quiz").find(".rp-rule__span").html("вопросов")
	}
}
)),
	$(".quiz-variants__skip").click((function () {
		$(this).closest(".quiz").find(".step.active").next().addClass("active"),
			$(this).closest(".step.active").removeClass("active");
		$(this).data("step");
		var t = $(this).closest(".quiz").find(".prg1 .line").attr("data-left");
		$(this).closest(".quiz").find(".prg1 .line").css("left", -1 * (parseInt(t) - 25) + "%"),
			$(this).closest(".quiz").find(".prg1 .line").attr("data-left", parseInt(t) - 25);
		$(".current-step").html()
	}
	)),
	$(".quiz-variants__prev").click((function () {
		$(this).closest(".quiz").find(".step.active").prev().addClass("active"),
			$(this).closest(".step.active").removeClass("active");
		$(this).data("step");
		var t = $(this).closest(".quiz").find(".prg1 .line").attr("data-left");
		$(this).closest(".quiz").find(".prg1 .line").css("left", -1 * (parseInt(t) + 25) + "%"),
			$(this).closest(".quiz").find(".prg1 .line").attr("data-left", parseInt(t) + 25);
		var e = $(".current-step").html();
		e = $(this).closest(".quiz").find(".current-step").html();
		$(this).parent().closest(".quiz").find(".current-step").html(parseInt(e) + 1),
			2 == e && ($(this).closest(".quiz").find(".progress-text").html("Все готово. <strong>Остался последний шаг</strong>"),
				$(this).closest(".section-9__container").addClass("quiz-finish")),
			2 == e ? $(this).closest(".quiz-section").find(".rp-rule__span").html("вопрос") : 3 == e || 4 == e || 5 == e ? $(this).closest(".quiz-section").find(".rp-rule__span").html("вопроса") : $(this).closest(".quiz-section").find(".rp-rule__span").html("вопросов")
	}
	)),
	$(".variant2").click((function () {
		$(this).find("input").prop("checked") ? $(this).addClass("active22") : $(this).removeClass("active22")
	}
	));
var popoverTriggerList, popoverList = (popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))).map((function (t) {
	return new bootstrap.Popover(t)
}
));
popoverList = (popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))).map((function (t) {
	return new bootstrap.Popover(t)
}
)),
	$("body").on("click", (function (t) {
		$('[data-bs-toggle="popover"]').each((function () {
			$(this).is(t.target) || 0 !== $(this).has(t.target).length || 0 !== $(".popover").has(t.target).length || $(this).popover("hide")
		}
		))
	}
	));

