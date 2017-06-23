(function ($) {
                
    // Navigation scrolls
    $(".navbar-nav li a").on('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({				
            scrollTop: $($anchor.attr('href')).offset().top				
        }, 1500, 'easeInOutExpo');
        
        event.preventDefault();
        }
    });
    
    // Add smooth scrolling to all links in navbar
    $("a.mouse-hover, a.get-quote").on('click', function(event) {
      var hash = this.hash;
      if( hash ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500, 'easeInOutExpo');
      }
    });

    $(".text-border").mouseenter(function(){
      $(".text-border").css('border', '8px solid #FCD309');
    });
    $(".text-border").mouseleave(function(){
      $(".text-border").css('border', '5px solid #5FCF80');
    });

    $(".text-border1").mouseenter(function(){
      $(".text-border1").css('border', '8px solid #FCD309');
    });
    $(".text-border1").mouseleave(function(){
      $(".text-border1").css('border', '5px solid #5FCF80');
    });

    $(".text-border2").mouseenter(function(){
      $(".text-border2").css('border', '8px solid #FCD309');
    });
    $(".text-border2").mouseleave(function(){
      $(".text-border2").css('border', '5px solid #5FCF80');
    });

    $(".text-border3").mouseenter(function(){
      $(".text-border3").css('border', '8px solid #FCD309');
    });
    $(".text-border3").mouseleave(function(){
      $(".text-border3").css('border', '5px solid #5FCF80');
    });
})(jQuery);