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

    var images = ['https://albanylawtech.files.wordpress.com/2011/03/class.jpg', 'https://www.robosapi.com/assets/images/workshops/web-designing/web-designing-course-details.jpg'
    , 'http://media.zzpservicedesk.nl/cad7e4c8f165a65b44bdf172210766e1.jpg', 'http://kepran.com/wp-content/uploads/2016/03/Web-Application-Development.jpg'];
    var random_img = images[Math.floor(Math.random() * images.length)];
    console.log(random_img);
    console.log('url("GeekHaven-WebD/img/' + random_img+ '") no-repeat center top');

    $(".banner").css('background', 'url('+random_img+') no-repeat center top');

    var colors = ['#FCD309', '#f6546a', '#0000ff', '#f42a04', '#d0a0ff', '#ff8000', '#FC9100'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    var random_color1 = colors[Math.floor(Math.random() * colors.length)];

    $('.navbar-default, .navbar-brand, .fea i, .icon-box i').css('color', random_color1);

    $(".text-border").css('border', '5px solid'+ random_color1 +'');
    $(".text-border1").css('border', '5px solid'+ random_color1 +'');
    $(".text-border2").css('border', '5px solid'+ random_color1 +'');
    $(".text-border3").css('border', '5px solid'+ random_color1 +'');

    $(".text-border").mouseenter(function(){
      $(".text-border").css('border', '8px solid'+ random_color +'');
    });
    $(".text-border").mouseleave(function(){
      $(".text-border").css('border', '5px solid'+ random_color1 +'');
    });

    $(".text-border1").mouseenter(function(){
      $(".text-border1").css('border', '8px solid'+ random_color +'');
    });
    $(".text-border1").mouseleave(function(){
      $(".text-border1").css('border', '5px solid'+ random_color1 +'');
    });

    $(".text-border2").mouseenter(function(){
      $(".text-border2").css('border', '8px solid'+ random_color +'');
    });
    $(".text-border2").mouseleave(function(){
      $(".text-border2").css('border', '5px solid'+ random_color1 +'');
    });

    $(".text-border3").mouseenter(function(){
      $(".text-border3").css('border', '8px solid'+ random_color +'');
    });
    $(".text-border3").mouseleave(function(){
      $(".text-border3").css('border', '5px solid'+ random_color1 +'');
    });
})(jQuery);
