 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);


function closeSucessPopup() {
	document.getElementById('successPopup').style.display = 'none';
}

// Example function to trigger popup after form submission
function handleSubmit(event) {
	event.preventDefault(); // Prevent the default form submission
	showPopup(); // Show the popup
	setTimeout(closePopup, 3000); // Auto-close the popup after 5 seconds
}


function showFailurePopup() {
	document.getElementById('failurePopup').style.display = 'block';
	
	// Automatically close the popup after 2 seconds
	setTimeout(closeFailurePopup, 3000);
}

// Close the popup
function closeFailurePopup() {
	document.getElementById('failurePopup').style.display = 'none';
}

function showRateLimitPopup() {
	document.getElementById('rateLimitPopup').style.display = 'block';
	
	// Automatically close the popup after 2 seconds
	setTimeout(closePopup, 2000);
}

// Close the popup
function closeRateLimitPopup() {
	document.getElementById('rateLimitPopup').style.display = 'none';
}

        // Show the loading popup
function showLoadingPopup() {
    document.getElementById('loadingPopup').style.display = 'block';
}

        // Close the loading popup
function closeLoadingPopup() {
    document.getElementById('loadingPopup').style.display = 'none';
}

document.getElementById('mailSubmitForm').addEventListener('submit', function(event) {
	document.getElementById('loadingPopup').style.display = 'block';
	event.preventDefault(); // Prevent default form submission
	
	var formData = new FormData(this); // Create FormData object
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
	console.log("json"	, json);
fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
			document.getElementById('loadingPopup').style.display = 'none';

			document.getElementById('successPopup').style.display = 'block';
			setTimeout(closeSucessPopup, 4000);

            } else {
				document.getElementById('loadingPopup').style.display = 'none';
			document.getElementById('failurePopup').style.display = 'block';
			setTimeout(closeRateLimitPopup, 4000);
            }
        })
        .catch(error => {
            console.log(error);
		document.getElementById('loadingPopup').style.display = 'none';
		document.getElementById('failurePopup').style.display = 'block';
		setTimeout(closeFailurePopup, 4000);
        })
        .then(function() {
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
	
	// var xhr = new XMLHttpRequest();
	
	// xhr.open('POST', 'https://api.web3forms.com/submit', true);
	
	// xhr.onload = function () {
	// 	document.getElementById('loadingPopup').style.display = 'none';
	// 	if (xhr.status == 200) {
	// 		document.getElementById('loadingPopup').style.display = 'none';

	// 		document.getElementById('successPopup').style.display = 'block';
	// 		setTimeout(closeSucessPopup, 4000);

	// 	} 
	// 	else if(xhr.status == 429) {
	// 		document.getElementById('rateLimitPopup').style.display = 'block';
	// 		setTimeout(closeFailurePopup, 4000);
	// 	}		
	// 	else {
	// 		document.getElementById('failurePopup').style.display = 'block';
	// 		setTimeout(closeRateLimitPopup, 4000);
	// 	}
	// };
	// xhr.onerror = function () {
	// 	document.getElementById('loadingPopup').style.display = 'none';
	// 	document.getElementById('failurePopup').style.display = 'block';
	// 	setTimeout(closeFailurePopup, 4000);
	// };
	// xhr.send(formData);
});