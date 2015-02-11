$(document).ready(function() {
	$('.btnadditem').click(function() {
		var input = $('input[name="inputfield"]').val();
		$(".ullist").append('<li><p class="status"></p><p class="item">' + input + '</p><p class="delete"></p</li>');
		$(".inputfield").val("");
		$('.reset').css("display", "initial");
	});

	$(document).on("click", ".status", function() {
		$(this).toggleClass("check");
		$(this).siblings(".item").toggleClass("line");
	});

	$(document).on("click", ".delete", function() {
		$(this).closest("li").remove();
	});

	$(document).on("click", ".reset", function() {
		$(this).fadeTo("slow",0);	
		$("li").fadeTo("slow",0);		
	});

	$(".frequentitem").click(function() {
		var freqitem = $(this).html() 
		$(".ullist").append('<li><p class="status"></p><p class="item">' + freqitem + '</p><p class="delete"></p</li>');
		$(this).fadeTo("slow",0);
		$('.reset').css("display", "initial");
	});
});