// Base router

function showSettings() {
		$( "nav" ).fadeOut('fast'); // Header
		$( "#dash" ).fadeOut('fast'); // Header
        $( "#settings" ).fadeIn('slow');




        
}
function hideSettings() {
		$( "#settings" ).fadeOut('fast');
		$( "nav" ).fadeIn('fast'); // Header
		$( "#dash" ).fadeIn('fast'); // Header
        
    	
}

$( ".voiture" ).on( "click", function() {

  if( $( this ).hasClass('active') ){ // si l'élément possède la classe .vert

		$( this ).removeClass("active");
	  	hideSettings()
	}
  else{
	  	$( this ).addClass("active");
	  	showSettings()
	  	route = '#settings';
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

// Lock doors
 $( ".lock > .front" ).on( "click", function() {
  if( $( this ).hasClass('lock') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("lock");
		$( ".lock > .front > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$( ".lock > .front > .title > h2").html( "Unlocked" );
	}
  else{
	  	$( this ).addClass("lock");
	  	$( ".lock > .front > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > .front > .title > h2" ).html( "Locked" );
  }
});

$( ".lock > .right" ).on( "click", function() {
  if( $( this ).hasClass('lock') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("lock");
		$( ".lock > .right > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$(".lock > .right > .title > h2" ).html( "Unlocked" );
	}
  else{
	  	$( this ).addClass("lock");
	  	$( ".lock > .right > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > .right > .title > h2" ).html( "Locked" );
  }
});

 $( ".lock > .left" ).on( "click", function() {
  if( $( this ).hasClass('lock') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("lock");
		$( ".lock > .left > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$(".lock > .left > .title > h2" ).html( "Unlocked" );
	}
  else{
	  	$( this ).addClass("lock");
	  	$( ".lock > .left > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > .left > .title > h2" ).html( "Locked" );
  }
});

 $( ".lock > .back" ).on( "click", function() {
  if( $( this ).hasClass('lock') ){ // si l'élément possède la classe .vert
		$( this ).removeClass("lock");
		$( ".lock > .back > .icon > img" ).attr( "src", "assets/img/Deverrouillage.svg" );
		$(".lock > .back > .title > h2" ).html( "Unlocked" );
	}
  else{
	  	$( this ).addClass("lock");
	  	$( ".lock > .back > .icon > img" ).attr( "src", "assets/img/Verrouillage.svg" );
	  	$(".lock > .back > .title > h2" ).html( "Locked" );
  }
});

/*
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
*/


// Menu
 /*$( ".on" ).on( "click", function() {
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
});*/

