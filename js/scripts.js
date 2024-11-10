jQuery(document).ready(function($){

    

    $(window).on('scroll', function (event) {

        var scrollValue = $(window).scrollTop();

        if (scrollValue > 70) {

            $('header').addClass('affix');

        } else {

            $('header').removeClass('affix');

        }

    });



    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {

		return new bootstrap.Tooltip(tooltipTriggerEl);

	})



    function toggleDropdown(e) {

        console.log("Hover");

        const _d = $(e.target).closest('.dropdown'), _m = $('.dropdown-menu', _d);

        setTimeout(function () {

            const shouldOpen = e.type !== 'click' && _d.is(':hover');

            _m.toggleClass('show', shouldOpen);

            _d.toggleClass('show', shouldOpen);

            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);

        }, e.type === 'mouseleave' ? 50 : 0);

    }

    /*

    * Only go to the link when dropdown is already open (if the dropdown is a link)

    */

    $('.navbar ul.navbar-nav > .dropdown > a[href]').click(function () {

        var dropdown = $(this).next('.dropdown-menu');

        /*

        * The dropdown can be non-existent

        * The dropdown can be already open by css

        * (for instance display: block from a custom :hover setting) 

        * or a "show" class on the element which also sets a display: block;

        */

        if (dropdown.length == 0 || $(dropdown).css('display') !== 'none') {

            if (this.href) {

                location.href = this.href;

            }

        }

    });

    $('body').on('mouseenter mouseleave', '.dropdown', toggleDropdown).on('click', '.dropdown-menu a', toggleDropdown);

    if($('#typed').length){

        var typed = new Typed('#typed', {

            stringsElement: '#typed-strings',

            loop : true,

            typeSpeed: 100

        });

    }



    $("a.scroll-down").on('click', function(event) {



    // Make sure this.hash has a value before overriding default behavior

    if (this.hash !== "") {

        // Prevent default anchor click behavior

        event.preventDefault();

    

        // Store hash

        var hash = this.hash;

    

        // Using jQuery's animate() method to add smooth page scroll

        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

        $('html, body').animate({

        scrollTop: $(hash).offset().top

        }, 800, function(){

    

        // Add hash (#) to URL when done scrolling (default click behavior)

        window.location.hash = hash;

        });

    } // End if

    });



    //Rellax

    //var rellax = new Rellax('.rellax');



    AOS.init({

        disable: function() {

          var maxWidth = 800;

          return window.innerWidth < maxWidth;

        }

    });

})

// Initialize each block on page load (front end).
jQuery(document).ready(function($){
    $('.owl-carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        margin:15,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
});

