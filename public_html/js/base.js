$(document).ready(function (){
   
    /* Nav Panel Toggle*/
    $(".nav-toggle").click(function(){
       $(".nav-panel").slideToggle("slow");
        
    });
 
$(".nav_information").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#information").offset().top - 64)
    }, 1000);
});

$(".nav_presentation").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#shoe_presentation").offset().top - 64)
    }, 1000);
});

$(".nav_joinus").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#joinus").offset().top - 64)
    }, 1000);
});

$(".arrow_up").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#header").offset().top)
    }, 1000);
});
   
  



 /* Media Queries*/
    var queryMedium = Modernizr.mq("(min-width: 41.07em)");

       if (queryMedium) {

        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_freeway-x640.jpg']").attr("src", "graphics/jumbotron/basketball_freeway-x1600.jpg");
        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_humanitz-x640.jpg']").attr("src", "graphics/jumbotron/basketball_humanitz-x1600.jpg");
        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_republica-x640.jpg']").attr("src", "graphics/jumbotron/basketball_republica-x1600.jpg");
        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_top-x640.jpg']").attr("src", "graphics/jumbotron/basketball_top-x1600.jpg");
        
   
    } else {

        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_freeway-x1600.jpg']").attr("src", "graphics/jumbotron/basketball_freeway-x640.jpg");
        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_humanitz-x1600.jpg']").attr("src", "graphics/jumbotron/basketball_humanitz-x640.jpg");
        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_republica-x1600.jpg']").attr("src", "graphics/jumbotron/basketball_republica-x640.jpg");
        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_top-x1600.jpg']").attr("src", "graphics/jumbotron/basketball_top-x640.jpg");
    
    }
    
    var query_small = Modernizr.mq("(min-width: 31.25em)");

       if (query_small) {

       
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe1x218.png']").attr("src", "graphics/shoe_slider/shoe1x640.png");
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe2x218.png']").attr("src", "graphics/shoe_slider/shoe2x640.png");
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe3x218.png']").attr("src", "graphics/shoe_slider/shoe3x640.png");
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe4x218.png']").attr("src", "graphics/shoe_slider/shoe4x640.png");
        
    } else {
       
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe1x640.png']").attr("src", "graphics/shoe_slider/shoe1x218.png");
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe2x640.png']").attr("src", "graphics/shoe_slider/shoe2x218.png");
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe3x640.png']").attr("src", "graphics/shoe_slider/shoe3x218.png");
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe4x640.png']").attr("src", "graphics/shoe_slider/shoe4x218.png");
    }
});
$(window).resize(function () {

        var queryMedium = Modernizr.mq("(min-width: 41.07em)");
     if (queryMedium) {

        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_freeway-x640.jpg']").attr("src", "graphics/jumbotron/basketball_freeway-x1600.jpg");
        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_humanitz-x640.jpg']").attr("src", "graphics/jumbotron/basketball_humanitz-x1600.jpg");
        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_republica-x640.jpg']").attr("src", "graphics/jumbotron/basketball_republica-x1600.jpg");
        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_top-x640.jpg']").attr("src", "graphics/jumbotron/basketball_top-x1600.jpg");
  
    } else {

        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_freeway-x1600.jpg']").attr("src", "graphics/jumbotron/basketball_freeway-x640.jpg");
        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_humanitz-x1600.jpg']").attr("src", "graphics/jumbotron/basketball_humanitz-x640.jpg");
        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_republica-x1600.jpg']").attr("src", "graphics/jumbotron/basketball_republica-x640.jpg");
        $(".bb_slideimg[src = 'graphics/jumbotron/basketball_top-x1600.jpg']").attr("src", "graphics/jumbotron/basketball_top-x640.jpg");
        
     
    }
    
      var querySmall = Modernizr.mq("(min-width: 31.25em)");
     if (querySmall) {

        $(".shoe_slide[src = 'graphics/shoe_slider/shoe1x218.png']").attr("src", "graphics/shoe_slider/shoe1x640.png");
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe2x218.png']").attr("src", "graphics/shoe_slider/shoe2x640.png");
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe3x218.png']").attr("src", "graphics/shoe_slider/shoe3x640.png");
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe4x218.png']").attr("src", "graphics/shoe_slider/shoe4x640.png");
        
    } else {
       
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe1x640.png']").attr("src", "graphics/shoe_slider/shoe1x218.png");
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe2x640.png']").attr("src", "graphics/shoe_slider/shoe2x218.png");
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe3x640.png']").attr("src", "graphics/shoe_slider/shoe3x218.png");
        $(".shoe_slide[src = 'graphics/shoe_slider/shoe4x640.png']").attr("src", "graphics/shoe_slider/shoe4x218.png");
    }
});





       