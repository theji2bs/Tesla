var i1=0;
$( ".siege1" ).on( "click", function() {

	if($(".cerclebox1 > .c1").hasClass('noactive') && $(".cerclebox1 > .c2").hasClass('noactive') && $(".cerclebox1 > .c3").hasClass('noactive') && i1==0 ){
		$(".cerclebox1 > .c1").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox1 > .c1").hasClass('active') && $(".cerclebox1 > .c2").hasClass('noactive') && $(".cerclebox1 > .c3").hasClass('noactive') && i1==0){
		$(".cerclebox1 > .c2").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox1 > .c1").hasClass('active') && $(".cerclebox1 > .c2").hasClass('active') && $(".cerclebox1 > .c3").hasClass('noactive') && i1==0){
		$(".cerclebox1 > .c3").removeClass('noactive').addClass('active');
		i1=1;
	}
	else if($(".cerclebox1 > .c1").hasClass('active') && $(".cerclebox1 > .c2").hasClass('active') && $(".cerclebox1 > .c3").hasClass('active')){
		$(".cerclebox1 > .c3").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox1 > .c1").hasClass('active') && $(".cerclebox1 > .c2").hasClass('active') && $(".cerclebox1 > .c3").hasClass('noactive')){
		$(".cerclebox1 > .c2").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox1 > .c1").hasClass('active') && $(".cerclebox1 > .c2").hasClass('noactive') && $(".cerclebox1 > .c3").hasClass('noactive')){
		$(".cerclebox1 > .c1").removeClass('active').addClass('noactive');
		i1=0;
	}
});

var i2=0;
$( ".siege2" ).on( "click", function() {

	if($(".cerclebox3 > .c1").hasClass('noactive') && $(".cerclebox3 > .c2").hasClass('noactive') && $(".cerclebox3 > .c3").hasClass('noactive') && i2==0 ){
		$(".cerclebox3 > .c1").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox3 > .c1").hasClass('active') && $(".cerclebox3 > .c2").hasClass('noactive') && $(".cerclebox3 > .c3").hasClass('noactive') && i2==0){
		$(".cerclebox3 > .c2").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox3 > .c1").hasClass('active') && $(".cerclebox3 > .c2").hasClass('active') && $(".cerclebox3 > .c3").hasClass('noactive') && i2==0){
		$(".cerclebox3 > .c3").removeClass('noactive').addClass('active');
		i2=1;
	}
	else if($(".cerclebox3 > .c1").hasClass('active') && $(".cerclebox3 > .c2").hasClass('active') && $(".cerclebox3 > .c3").hasClass('active')){
		$(".cerclebox3 > .c3").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox3 > .c1").hasClass('active') && $(".cerclebox3 > .c2").hasClass('active') && $(".cerclebox3 > .c3").hasClass('noactive')){
		$(".cerclebox3 > .c2").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox3 > .c1").hasClass('active') && $(".cerclebox3 > .c2").hasClass('noactive') && $(".cerclebox3 > .c3").hasClass('noactive')){
		$(".cerclebox3 > .c1").removeClass('active').addClass('noactive');
		i2=0;
	}
});


var i3=0;
$( ".ventilation" ).on( "click", function() {

	if($(".cerclebox2 > .c1").hasClass('noactive') && $(".cerclebox2 > .c2").hasClass('noactive') && $(".cerclebox2 > .c3").hasClass('noactive') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive') && i3==0 ){
		$(".cerclebox2 > .c1").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('noactive') && $(".cerclebox2 > .c3").hasClass('noactive') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive') && i3==0){
		$(".cerclebox2 > .c2").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('noactive') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive') && i3==0){
		$(".cerclebox2 > .c3").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('active') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive') && i3==0){
		$(".cerclebox2 > .c4").removeClass('noactive').addClass('active');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('active') && $(".cerclebox2 > .c4").hasClass('active') && $(".cerclebox2 > .c5").hasClass('noactive') && i3==0){
		$(".cerclebox2 > .c5").removeClass('noactive').addClass('active');
		i3=1;
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('active' )&& $(".cerclebox2 > .c4").hasClass('active') && $(".cerclebox2 > .c5").hasClass('active')){
		$(".cerclebox2 > .c5").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('active') && $(".cerclebox2 > .c4").hasClass('active') && $(".cerclebox2 > .c5").hasClass('noactive')){
		$(".cerclebox2 > .c4").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('active') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive')){
		$(".cerclebox2 > .c3").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('active') && $(".cerclebox2 > .c3").hasClass('noactive') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive')){
		$(".cerclebox2 > .c2").removeClass('active').addClass('noactive');
	}
	else if($(".cerclebox2 > .c1").hasClass('active') && $(".cerclebox2 > .c2").hasClass('noactive') && $(".cerclebox2 > .c3").hasClass('noactive') && $(".cerclebox2 > .c4").hasClass('noactive') && $(".cerclebox2 > .c5").hasClass('noactive')){
		$(".cerclebox2 > .c1").removeClass('active').addClass('noactive');
		i3=0;
	}
});


$( ".syncblanc" ).on( "click", function() {
	$(this).fadeOut(500);
	$(".syncblue").fadeIn(500);
	$(".p_sync").css("color", "#00D8EF");
});

$( ".syncblue" ).on( "click", function() {
	$(this).fadeOut(500);
	$(".syncblanc").fadeIn(500);
	$(".p_sync").css("color", "white");
});



