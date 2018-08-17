/*--------------------------
----------------------------
🆂🆃🅰🅲🅺 🆂🅻🅸🅳🅴🆁
🅱🆈: 🅳🅸🅿🅴🆂🅷 🆃🅷🅰🅿🅰

Version: 1.9.0
  Author: Dipesh Thapa
 Website: http://dpes.com.np/
    Docs: https://github.com/dpesofficial/stack-slider
    Repo: https://github.com/dpesofficial/stack-slider
----------------------------
--------------------------*/
	  	(function ( $ ) {

	  		$.fn.stack_slider = function( options ) {

	  	 		// Sldier core functions
	  	 		function detect_active(){
	  	 		  			// get active
	  	 		  			var get_active = $("#dp-slider .dp_item:first-child").data("class");
	  	 		  			$("#dp-dots li").removeClass("active");
	  	 		  			$("#dp-dots li[data-class="+ get_active +"]").addClass("active");
	  	 		  		}
	  	 		  		$("#dp-next").click(function(){
	  	 		  			var total = $(".dp_item").length;
	  	 		  			$("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
	  	 		  			$.each($('.dp_item'), function (index, dp_item) {
	  	 		  				$(dp_item).attr('data-position', index + 1);
	  	 		  			});
	  	 		  			detect_active();

	  	 		  		});

	  	 		  		$("#dp-prev").click(function(){
	  	 		  			var total = $(".dp_item").length;
	  	 		  			$("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
	  	 		  			$.each($('.dp_item'), function (index, dp_item) {
	  	 		  				$(dp_item).attr('data-position', index + 1);
	  	 		  			});

	  	 		  			detect_active();
	  	 		  		});

	  	 		  		$("#dp-dots li").click(function(){
	  	 		  			$("#dp-dots li").removeClass("active");
	  	 		  			$(this).addClass("active");
	  	 		  			var get_slide = $(this).attr('data-class');
	  	 		  			console.log(get_slide);
	  	 		  			$("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
	  	 		  			$.each($('.dp_item'), function (index, dp_item) {
	  	 		  				$(dp_item).attr('data-position', index + 1);
	  	 		  			});
	  	 		  		});


	  	 		  		$("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
	  	 		  			var get_slide = $(this).attr('data-class');
	  	 		  			console.log(get_slide);
	  	 		  			$("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
	  	 		  			$.each($('.dp_item'), function (index, dp_item) {
	  	 		  				$(dp_item).attr('data-position', index + 1);
	  	 		  			});

	  	 		  			detect_active();
	  	 		  		});	

	  	 		  		// Drag
	  	 		  		$.fn.swipe = function( callback ) {
	  	 		  			var touchDown = false,
	  	 		  			originalPosition = null,
	  	 		  			$el = jQuery( this );

	  	 		  			function swipeInfo( event ) {

	  	 		  				var x = event.originalEvent.pageX,
	  	 		  				y = event.originalEvent.pageY,
	  	 		  				dx;

	  	 		  				dx = ( x > originalPosition.x ) ? "right" : "left";


	  	 		  				return {
	  	 		  					direction: {
	  	 		  						x: dx
	  	 		  					},
	  	 		  					offset: {
	  	 		  						x: x - originalPosition.x
	  	 		  					}
	  	 		  				};
	  	 		  			}

	  	 		  			$el.on( "touchstart mousedown", function ( event ) {
	  	 		  				touchDown = true;
	  	 		  				originalPosition = {
	  	 		  					x: event.originalEvent.pageX,
	  	 		  					y: event.originalEvent.pageY
	  	 		  				};
	  	 		  			} );

	  	 		  			$el.on( "touchend mouseup", function () {
	  	 		  				touchDown = false;
	  	 		  				originalPosition = null;
	  	 		  				flag = true;
	  	 		  			} );

	  	 		  			$el.on( "touchmove mousemove", function ( event ) {
	  	 		  				if ( !touchDown ) { return;}
	  	 		  				var info = swipeInfo( event );
	  	 		  				callback( info.direction, info.offset );

	  	 		  			} );

	  	 		  			return true;
	  	 		  		};

	  	 		  		// disabel image drag
	  	 		  		$('#slider img').on('dragstart', function(event) { event.preventDefault(); });

	  	 		  		

	  	 		  		// Slider Methods
			  	        // This is the easiest way to have default options.
			  	        var settings = $.extend({
			  	            // These are the defaults.
			  	            color: "transparent",
			  	            background: "transparent",
			  	            autoPlay: true,
			  	            autoPlaySpeed: 3000,
			  	            dots: true,
			  	            arrows: true,
							drag: true,
							direction: "horizontal"
			  	        }, options );

			  	     	// dots
			  	     	if( settings.dots !== true){
			  	     		$("#dp-dots").hide();
			  	     	}
			  	     	// drag
			  	     	if( settings.drag == true){
			  	     		// trigger next prev on drag
			  	     		var flag = true;
			  	     		jQuery(".dp_item").swipe(function( direction, offset ) {
			  	     			if( offset.x > 30 && flag ){
			  	     				flag = false;
			  	     				$("#dp-next").click();
			  	     			}
			  	     			if( offset.x < -30 && flag ){
			  	     				flag = false;
			  	     				$("#dp-prev").click();
			  	     			}
			  	     		});
			  	     	}
			  	     	// arrows
			  	     	if( settings.arrows !== true){
			  	     		$("#dp-next, #dp-prev").hide();
			  	     	}
			  	        // slider autoplay			  	        
			  	        if( settings.autoPlay == true){
			  	        	setInterval(function(){  
			  	        		$("#dp-next").click();
			  	        	 }, settings.autoPlaySpeed);
			  	        }
						
						//slider direction
						if (settings.direction == "vertical") {
							$(".dp-wrap").addClass("vertical");
						}

			  	        // stack_slider the collection based on the settings variable.
			  	        return this.css({
			  	        	color: settings.color,
			  	        	background: settings.background
			  	        });



			  	    };

			  	}( jQuery ));