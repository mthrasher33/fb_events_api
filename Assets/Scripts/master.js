$(document).ready(function(){

		console.log($(window).scrollTop());



	//move mobile menu on scroll
	 window.onscroll = function(e){
	 	//var el = $('div.fixedContainer');
	 	//var el2 = $('div.mobileMenu');

		
	 	// var scrollTop = $(window).scrollTop();
	 	// var elementOffset = el.offset().top;
	 	// console.log("Element offset: " + elementOffset);
	 	// console.log("scrollTop: " + scrollTop );

	 //	var currentLocation = el.css("top").slice(0, -2);
	 //	console.log("currentlocation: " + currentLocation);

	//hide mobile menu on scroll
	$('.mobileMenu').removeClass('visible');
	$('div.fixedContainer').css('right', '0px');
	$('div.logo').addClass('SPIN');

	//hide read more divs on scroll
	if($('.readMore.mobile')){
		$('div.readMore.mobile').remove()
		$('div.icon-minus').removeClass('active');
		$('div.icon-minus').addClass('icon-plus');
		$('div.icon-minus').removeClass('icon-minus');
	}
	// 	var newLocation = currentLocation - distance + 30;
	 //prevents logo from being moved higher than where it started
	 // if (scrollTop < 425){
	 // 	el.css('background-color', 'var(--yellow)');
	 // 	el2.css('background-color', 'var(--yellow');
	 // }
	 // else if($(window).scrollTop() >= 425 && $(window).scrollTop() < 675){
	 // 		el.css('background-color', 'var(--lightgray)');
	 // 			 	el2.css('background-color', 'var(--lightgray');	 }
	 
	 // else if (scrollTop >= 675 && scrollTop <= 923) {
	 // 		el.css('background-color', 'var(--lightgray)');
	 // 			 	el2.css('background-color', 'var(--lightgray');
	 // 	}

	 // else if (scrollTop > 924 && scrollTop < 1175){
	 // 	el.css('background-color', 'var(--orange)');
	 // 		 	el2.css('background-color', 'var(--orange');
	 // } else {
	 // 	el.css('background-color', 'var(--red)');
	 // 		 	el2.css('background-color', 'var(--red');
	 // }
	 // }
	}

	 var windowHeight = $('div.container.main').height();

	 //activate mobile menu on swipe left
	 // $('body').scrollLeft(function(){
		// 	//event.stopPropagation();
		// 	if ($('div.logo').hasClass('SPIN')){
		// 	$('div.logo').removeClass('SPIN');
		// 	$('div.mobileMenu').addClass('visible');
		// 	$('div.fixedContainer').css('right', '130px');
		// 	$('div.mobileMenu').css('height', windowHeight + 'px');
	 // 		}
	 // 	});

	//activate mobile menu on click
	$('div.fixedContainer').click(function(){
			event.stopPropagation();
		if ($('div.logo').hasClass('SPIN')){
			$('div.logo').removeClass('SPIN');
			$('div.mobileMenu').addClass('visible');
			$('div.fixedContainer').css('right', '130px');
				 $('div.mobileMenu').css('height', windowHeight + 'px');

		} else {
			$('div.logo').addClass('SPIN');
			$('div.mobileMenu').removeClass('visible');
			$('div.fixedContainer').css('right', '0px');
		}

	});


	//clicking the minus icon
	$('div.icon.visible-xs.hidden-sm.icon-minus').click(function(){
				alert('true')

			if($(this).parent().hasClass('one')){
				$('div.readMore.mobile.one').css('height', '0px');
				$('div.readMore.mobile.one').css('top', '0px');
				$(this).removeClass('icon-minus');
				$(this).addClass('icon-plus');
			}
			console.log($(this).parent());
		});


	$('div.icon.icon-plus').click(function(){
		var parentColor = $(this).parent().css("background-color");
		 	//$(this).
			$(this).removeClass('icon-plus');
			$(this).addClass('icon-minus');
	
			if($(this).parent().hasClass('one')){
				
				 $('.readMore.mobile.one').css('height', '150px');
				var neighborColor = $(this).parent().css("background-color");
				$(this).parent().next().css('color', neighborColor);
			} 
			else if ($(this).parent().hasClass('two')){
				
				$(this).parent().after("<div class='readMore mobile visible-xs hidden-sm-* col-xs-12'><p>See what&#39;s in production.</p><span class='subP'><a href='http://www.findmeacomrade.com'>Comrades! </a> | <a href='#''>Newsletters </a>| <a href='#''>Marvin Windows</a> </span></div>");
					var neighborColor = $(this).parent().css("background-color");
				$(this).parent().next().css('color', neighborColor);

			} else {
				
				$(this).parent().after("<div class='readMore mobile visible-xs hidden-sm-* col-xs-12'><p>Let&#39;s make something!</p><span class='subP'><a href='#'>Apps </a> | <a href='#''>Websites </a>| <a href='#''>Blogs</a> </span></div>");
							var neighborColor = $(this).parent().css("background-color");
				$(this).parent().next().css('color', neighborColor);

			}
		});


		
		

	$('div.icon.icon-facebook').click(function(){
		window.location.href= "https://www.facebook.com/matt.thrasher2";
	});

	$('div.icon.icon-linkedin').click(function(){
		window.location.href= "https://www.linkedin.com/in/matthew-thrasher-9778a220";
	});

	$('div.icon.icon-twitter-alt').click(function(){
		window.location.href= "https://twitter.com/mthrasher33";
	});
	
	$('div.icon.icon-github-alt').click(function(){
		window.location.href= "https://github.com/mthrasher33";
	});

	$('div.icon.icon-google').click(function(){
		window.location.href= "https://plus.google.com/+MatthewThrasher";
	});

	$('div.icon.icon-youtube-alt').click(function(){
		window.location.href= "https://www.youtube.com/channel/UCWs-6daFbyfhAbA9Ajsz0Tw";
	});


	$(document).mousemove(function(event){
		var currentmousePos = { x: -1, y: -1};
		currentmousePos.x = event.pageX;
		currentmousePos.y = event.pageY;

		//console.log(currentmousePos);

		if (currentmousePos.x < 500 || currentmousePos.y > 500) {
			//console.log('hey');
			$('.navMenu').removeClass('ACTIVE');
			$('.navMenu').children().children().removeClass('ACTIVELINK');
			$('.navMenu').removeClass('triangle1');
						$('.navMenu').removeClass('triangle2');
			$('.navMenu').removeClass('triangle3');
			$('.navMenu').removeClass('triangle4');
			$('.navMenu').removeClass('triangle5');


		}
	});


	$('.mobileMenu').click(function(){
		event.stopPropagation();
	});


$('html').click(function(){
	//hide mobile menu
	$('.mobileMenu').removeClass('visible');
	$('div.fixedContainer').css('right', '0px');
	$('div.logo').addClass('SPIN');

	//hide nav menu
	$('.navMenu').removeClass('ACTIVE');
	$('.navMenu').children().children().removeClass('ACTIVELINK');
	$('.navMenu').removeClass('triangle1');
	$('.navMenu').removeClass('triangle2');
	$('.navMenu').removeClass('triangle3');
	$('.navMenu').removeClass('triangle4');
	$('.navMenu').removeClass('triangle5');

});





$('.widget').hover(function(){

	var width = $(window).width();

	if(width > 767){

		var parentColor = $(this).css("background-color");
		$(this).children('.iconCircle').css('background-color', parentColor);
		$(this).children('.iconCircle').css('color', 'white');
		$(this).children('.iconCircle').css('text-shadow', '2px 2px #000000');
		$(this).children("h2").css('color', parentColor);
		$(this).children("h2").css('text-shadow', '2px 2px #000000');
		$(this).children(".readMore").css('visibility', 'visible');
		$(this).children(".readMore").css('color', parentColor);
			
			//only expand the text if we're on a larger screen
			if(width>991){
				$(this).children("h2").css('font-size', '29px');
				$(this).children("h2").css('letter-spacing', '2px');
			}
		}


	}, function(){
			$(this).children('.iconCircle').css('background-color', '');
			$(this).children('.iconCircle').css('color', '');
			$(this).children("h2").css('color', '');
			$(this).children("h2").css('font-size', '');
			$(this).children("h2").css('letter-spacing', '');
			$(this).children("h2").css('text-shadow', '');				
			$(this).children(".readMore").css('visibility', '');
			$(this).children('.iconCircle').css('text-shadow', '');
		});


$('.navTitle').click(function(){
	event.stopPropagation();
var navMenu = $('.navMenu');
	
	if (navMenu.hasClass('ACTIVE')){
		navMenu.removeClass('ACTIVE');
		navMenu.removeClass('triangle1');
		navMenu.removeClass('triangle2');
		navMenu.removeClass('triangle3');
		navMenu.removeClass('triangle4');
		navMenu.removeClass('triangle5');

navMenu.children().children().removeClass('ACTIVELINK');




	} else {
	
	navMenu.addClass('ACTIVE');
	navMenu.children().children().removeClass('ACTIVELINK'); //precaution


		$('.navMenu li.n1').click(function(){
			if ($(this).parent().hasClass('triangle1')){

			} else {
				$(this).parent().removeClass('triangle2');
								$(this).parent().removeClass('triangle3');
				$(this).parent().removeClass('triangle4');
				$(this).parent().removeClass('triangle5');

				$(this).parent().addClass('triangle1');
			}
		});

		$('.navMenu li.n2').click(function(){
			if ($(this).parent().hasClass('triangle2')){

			} else {

				$(this).parent().removeClass('triangle1');
								$(this).parent().removeClass('triangle3');
				$(this).parent().removeClass('triangle4');
				$(this).parent().removeClass('triangle5');

				$(this).parent().addClass('triangle2');
			}
		});

				$('.navMenu li.n3').click(function(){
			if ($(this).parent().hasClass('triangle3')){

			} else {

								$(this).parent().removeClass('triangle2');
								$(this).parent().removeClass('triangle1');
				$(this).parent().removeClass('triangle4');
				$(this).parent().removeClass('triangle5');
				$(this).parent().addClass('triangle3');
			}
		});

						$('.navMenu li.n4').click(function(){
			if ($(this).parent().hasClass('triangle4')){

			} else {
								$(this).parent().removeClass('triangle2');
								$(this).parent().removeClass('triangle3');
				$(this).parent().removeClass('triangle1');
				$(this).parent().removeClass('triangle5');
				$(this).parent().addClass('triangle4');
			}
		});

		$('.navMenu li.n5').click(function(){
			if ($(this).parent().hasClass('triangle5')){

			} else {
								$(this).parent().removeClass('triangle2');
								$(this).parent().removeClass('triangle3');
				$(this).parent().removeClass('triangle4');
				$(this).parent().removeClass('triangle1');
				$(this).parent().addClass('triangle5');
			}
		});
		
}
});



$('.navMenu li').click(function(){
	event.stopPropagation();



$(this).parent().children().children().removeClass('ACTIVELINK');
	
		$(this).children().addClass('ACTIVELINK');

		

});





$('.topNav .navTitle').click(function(){
	var topNav = $('.topNav');
//	console.log($(this).parents())

	if (topNav.hasClass('ACTIVE')){
			//		console.log(	$(this).parent('.topNav'));
					console.log($(this).parent());


					$(this).parent('.topNav').attr("class", "col-sm-5.col-lg-3.topNav");
										console.log($(this).parent());


	}
});



 $('.topNav').click(function(){
 	var menuIcon = $('.logo');
 	var menu = $('.navMenu')

 	if(menuIcon.hasClass('SPIN')){
 		menuIcon.removeClass('SPIN');
 		// menu.css('visibility', 'visible');

 		// $('.navMenu li').css("visibility", "visible");
 		 		// $('.navMenu li').addClass("FLIPDOWN");


 		//menu.getElementsByTagName("li").addClass("greenBackground");

 	} else {
 		menuIcon.addClass('SPIN');
 		// menu.css('visibility', 'hidden');

 		// $('.navMenu li').css("visibility", "hidden");
 		 		 		// $('.navMenu li').removeClass("FLIPDOWN");

 	}
 	//$('.icon.icon-settings').removeClass('SPIN');
	//$(this).children('.icon.icon-settings').css(' -webkit-transform', 'rotate(90deg)');
	//$(this).children('.icon.icon-settings').addClass('SPIN');
	//console.log($(this).children('.icon.icon-settings'));
	//setTimeout($(this).children('icon.icon-settings').removeClass('SPIN'), 800);

 });

});//close document.ready

