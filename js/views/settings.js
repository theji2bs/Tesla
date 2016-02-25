// Base router

function showSettings() {
		$( "nav" ).fadeOut('fast'); // Header
		//$( "#dash" ).fadeOut('fast'); // Header
        $( "#settings" ).fadeIn('slow');
   
}
function hideSettings() {
		
        //console.log(route);
        $( "#settings" ).fadeOut('fast');
        
			$( "nav" ).fadeIn('fast'); // Header
        
        //$( "#dash" ).fadeIn('fast'); // Header
    	
}

function lockDoor(id){
	if( ($( ".lock > ."+ id ).hasClass('lock'))){ // si l'élément possède la classe .vert
		$( ".lock > ."+ id ).removeClass("lock");
		$( ".lock > ."+ id +" > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$(".lock > ."+ id +" > .title > h2" ).html( "Unlocked" );
	}
  else{
	  	$( ".lock > ."+ id ).addClass("lock");
	  	$( ".lock > ."+ id +" > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > ."+ id +" > .title > h2" ).html( "Locked" );
  }
}

function forceLockDoor(id){

	  	$( ".lock > ."+ id ).addClass("lock");
	  	$( ".lock > ."+ id +" > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > ."+ id +" > .title > h2" ).html( "Locked" );

}

function forceUnlockDoor(id){

		$( ".lock > ."+ id ).removeClass("lock");
		$( ".lock > ."+ id +" > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$(".lock > ."+ id +" > .title > h2" ).html( "Unlocked" );

}

function roofClose(){
	$(".roof_open").fadeOut(500, function(){
		$('.roof_close').fadeIn(500);
	});
}

function roofOpen(){
	$(".roof_close").fadeOut(500, function(){
		$('.roof_open').fadeIn(500);
	});
}

$( ".roof_open" ).on( "click", function() {
	roofClose();
});
$( ".roof_close" ).on( "click", function() {
	roofOpen();
});



function lockGeneral(){
	  forceLockDoor("front");
	  forceLockDoor("right");
	  forceLockDoor("charge");
	  forceLockDoor("left");
	  forceLockDoor("back");
	  roofClose()
}

function unlockGeneral(){
	  forceUnlockDoor("front");
	  forceUnlockDoor("right");
	  forceUnlockDoor("charge");
	  forceUnlockDoor("left");
	  forceUnlockDoor("back");
	  roofOpen()
}

$(window).on('keydown', function(e){
	
	//console.log(e.keyCode);
		
		// W
		if ( e.keyCode == 87 ){
			
			lockGeneral();	
			$('.iconeU_off').fadeOut(500);
			$('.iconeU_on').fadeIn(500);
			$('.urgencyetat').removeClass("off").addClass("on");
			$('.urgencyetat').text( "ON" );	
		
		}
		


});

$( ".iconeU_off" ).on( "click", function() {
	
		$(this).fadeOut(500);
		$('.iconeU_on').fadeIn(500);
		$('.urgencyetat').removeClass("off").addClass("on");
		$('.urgencyetat').text( "ON" );

		lockGeneral()

});

$( ".iconeU_on" ).on( "click", function() {
		$(this).fadeOut(500);
		$('.iconeU_off').fadeIn(500);
		$('.urgencyetat').removeClass("on").addClass("off");
		$('.urgencyetat').text( "OFF" );

		unlockGeneral()
});

// Lock doors


 $( ".lock > .front" ).on( "click", function() {
	lockDoor("front");
});

$( ".lock > .right" ).on( "click", function() {
  lockDoor("right");
});

$( ".lock > .charge" ).on( "click", function() {
  lockDoor("charge");
});

 $( ".lock > .left" ).on( "click", function() {
  lockDoor("left");
});

 $( ".lock > .back" ).on( "click", function() {
  lockDoor("back");
});




$( ".iconeB_off" ).on( "click", function() {
	
		$(this).fadeOut(500);
		$('.iconeB_on').fadeIn(500);
		$('.blindageetat').removeClass("off").addClass("on");
		$( ".car > .car_skeleton > img" ).attr( "src", "assets/img/Car_red.svg" );
		$('.blindageetat').text( "ON" );
});

$( ".iconeB_on" ).on( "click", function() {
		$(this).fadeOut(500);
		$('.iconeB_off').fadeIn(500);
		$('.blindageetat').removeClass("on").addClass("off");
		$( ".car > .car_skeleton > img" ).attr( "src", "assets/img/Car.svg" );
		$('.blindageetat').text( "OFF" );
});


$( ".voiture" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
		$(this).attr('src', 'assets/img/Voiture.svg');
		$(".p_car").css("color", "white");
	  	hideSettings()
	}
  else{
	  	$( this ).addClass("active");
	  	$(this).attr('src', 'assets/img/VoitureBlue.svg');
	  	$(".p_car").css("color", "#00D8EF");
	  	showSettings()
  }

});

$( "#settings > .close" ).on( "click", function() {

  hideSettings()

});


// Lights controls
switchSettingsLights = 'off';
// Switch
 $( ".off" ).on( "click", function() {

 		if( $( '.lights_control > .state > ul > li[class!="off"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( "." + switchSettingsLights ).removeClass("active");
			$( this ).addClass("active");
			$( ".light_preview" ).fadeOut('fast');
			$( ".light_preview" ).fadeOut( "fast", function() {
			    $( ".light_preview" ).attr( "src", "assets/img/Light_Off.svg" );
				
			  });
			$( ".light_preview" ).fadeIn('fast');
		  	switchSettingsLights = 'off';
		  	console.log(switchSettingsLights);

		}
  
});

 $( ".parking" ).on( "click", function() {
 		if( $( '.lights_control > .state > ul > li[class!="parking"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( "." + switchSettingsLights ).removeClass("active");
			$( this ).addClass("active");
			$( ".light_preview" ).fadeOut( "fast", function() {
			    $( ".light_preview" ).attr( "src", "assets/img/Light_Parking.svg" );
				
			  });
			$( ".light_preview" ).fadeIn('fast');
		  	switchSettingsLights = 'parking';
		  	console.log(switchSettingsLights);
		}
  
});
 $( ".auto" ).on( "click", function() {
 		if( $( '.lights_control > .state > ul > li[class!="auto"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( "." + switchSettingsLights ).removeClass("active");
			$( this ).addClass("active");
			$( ".light_preview" ).fadeOut( "fast", function() {
			    $( ".light_preview" ).attr( "src", "assets/img/Light_On.svg" );
				
			  });
			$( ".light_preview" ).fadeIn('fast');
		  	switchSettingsLights = 'auto';
		  	console.log(switchSettingsLights);
		}
});

 $( ".on" ).on( "click", function() {
 		if( $( '.lights_control > .state > ul > li[class!="on"]' ).hasClass('active') ){ // si l'élément possède la classe .vert

			$( "." + switchSettingsLights ).removeClass("active");
			$( this ).addClass("active");
			$( ".light_preview" ).fadeOut( "fast", function() {
			    $( ".light_preview" ).attr( "src", "assets/img/Light_On.svg" );
			  });
			$( ".light_preview" ).fadeIn('fast');
		  	switchSettingsLights = 'on';
		  	console.log(switchSettingsLights);
		}
});






// Options
 $( ".fog" ).on( "click", function() {
  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("active");
	}
  else{
	  	$( this ).addClass("active");
  }
});

 $( ".drl" ).on( "click", function() {
  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("active");
	}
  else{
	  	$( this ).addClass("active");
  }
});

 $( ".dome" ).on( "click", function() {
  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("active");
	}
  else{
	  	$( this ).addClass("active");
  }
});

  $( ".ambient" ).on( "click", function() {
  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("active");
	}
  else{
	  	$( this ).addClass("active");
  }
});


// Menu
$( ".aside > ul > li" ).on( "click", function() {

 	$('.aside > ul > .active').removeClass('active').addClass('noactive');
 	$(this).removeClass('noactive').addClass('active');

 	if($(this).hasClass('general')){
		$('.content > ul > li').removeClass('active').addClass('noactive');
		$('.txt_general').removeClass('noactive').addClass('active');
	}
	if($(this).hasClass('driving')){
		$('.content > ul > li').removeClass('active').addClass('noactive');
		$('.txt_driving').removeClass('noactive').addClass('active');
	}
	if($(this).hasClass('display')){
		$('.content > ul > li').removeClass('active').addClass('noactive');
		$('.txt_displays').removeClass('noactive').addClass('active');
	}
	if($(this).hasClass('charging')){
		$('.content > ul > li').removeClass('active').addClass('noactive');
		$('.txt_charging').removeClass('noactive').addClass('active');
	}
});

