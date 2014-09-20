/*  Purpose: To create a responsive slider, that changes
 * slide at a set interval. When it reaches the end of the set
 * it goes back to the first slide.
 * 
 * This project uses Hammer.js https://github.com/hammerjs/hammer.js 
 * 
 *   Additional Thoughts:
 *   Generate buttons automatically
 *   It should expand and contract without need for further coding  */


$('.bb_slider').each(function(){
    // Variables
    var timeout,                                            // Timer
     $this = $(this),                                       // Current Slider
     $group = $this.find('.bb_slide-group'),                   // Selects the slide group
     currentIndex = 0,                                         // Sets the currentIndex to 0
     buttonArray =[],                                             // Empty array to hold buttons
     $slides = $this.find('.bb_slide'),                        // Selects a slide
     $img = $this.find('.bb_slideimg');                        // Selects all the images           
     
     // Sets the width of the slide-group, by multiplying
     // the no. of slides by 100 percent
     $group.width($slides.length * 100 + "%");         
       
     // Sets the size of each image as a percentage
     $img.width( (100 / $slides.length + "%") );
    
    // The move function, that changes slide
    function move(newIndex){
       
        advance();                                                  //Starts the timer function
        
       if ($group.is(':animated') || currentIndex === newIndex) {   // Returns nothing, if the slide is changing
            return;
        }
        
         buttonArray[newIndex].addClass('active');
           buttonArray[currentIndex].removeClass('active'); //remove class from item
       
        
       /* Transformation to move the slide.
        * It works by setting a maximum(no. of slides) and a minimum(0)
        * that the newIndex number can be, this stops it from
        *  translating past the last and first slide */
       
        $group.css("transform",                                                       // Selects the Slide
        "translateX(" + Math.min(Math.max(parseInt(newIndex), 0),$slides.length - 1)  // Sets a max. and min
                      * -(100 / $slides.length) + "%)");                              // Multiplies result by 100/total no. of slides
        
        
        /* Makes sure that the currentIndex 
         * never goes beyond the maximum and min number of slides*/
        currentIndex = Math.min(Math.max(parseInt(newIndex), 0),$slides.length - 1);
        
        
        
         
        
    }
 
    // This function controls the timer that will start the
    // move() function to advance slides
    function advance(){
        
        if (timeout){                               // Checks to see if there is a timer
            
            clearTimeout(timeout);                  // If there is, stop it and
            timeout = null;                         // set it to null
            
        }
       
        timeout = setTimeout(function(){           // Starts a timer function
     
     if(currentIndex < ($slides.length - 1)){     // If not the last slide
         move(currentIndex + 1);
                                                                               
     }
     else{
         move(0);                                 // Reset
     }
        
 },3000);                                        // Every 3 seconds


    }
    
    advance();                                  // Start the slider
     
     /* Dynamically creates a button for each slider */
       $slides.each(function(index) {
        // Create a button element for the button
        var $button = $('<span class="bb_slide-btn"></span>');
        if (index === currentIndex) {            // If the index is the current item
            $button.addClass('active');          // Add the active class
        }

        $button.on('click', function () {       // On button click
            move(index);                        // Call the move function
        }).appendTo('.bb_slide-buttons');           // Add to the buttons holder
        buttonArray.push($button);              // Add it to the array

    });
     
    /* If more than one Slider exists, it should be iniitialized here*/
     
    var slider = document.getElementById('bb_slider');    // Selects the slider
    var hammertime = new Hammer(slider);               // Create a new instance of the touch plugin
   
    hammertime.on('swiperight', function () {       // On swiper ight
        move(currentIndex - 1);                       // Go previous slide
   
    });
    
    hammertime.on('swipeleft', function () {          // On swipe left
       
        move(currentIndex + 1);                       // Go to the next slide
    });
    
});


/*  Shoe slider */


$('.shoe_slider').each(function() {
    var $this = $(this),
            $slides = $this.find('.shoe_slide'),
            currentIndex = 0;


    function displayText() {



        switch (currentIndex) {
            case 0:
                $('.controls_display-text').text("Performance");
                break;

            case 1:
                $('.controls_display-text').text("Design");
                
                break;
            case 2:
                $('.controls_display-text').text("Power");
                
                break;
                
            case 3:
                $('.controls_display-text').text("Speed");
                
                break;
                
          
        }

    }


    /* Slider control buttons:The ones below the slider. 
     They control the position of the slider */
    $(".shoe_slider-controls").on("click", "li", function() {

        /* Transforms the slider based on the index of the button*/
        $(".shoe_slider-group").css("transform", "translateX(" + $(this).index() * -25 + "%)");

        /* Removes and adds the class 'currentslide' to show which slide is active */
        $(".shoe_slider-controls li").removeClass("currentslide");
        $(this).addClass("currentslide");

        /* Checks for the current Index based on the control button clicked */
        var index = $(".shoe_slider-controls li").index(this);

        /*  Sets the currentIndex to the index of the control */
        currentIndex = index;
        displayText();

    });

    /* The right arrow button */
    $('.shoe_slider-arrow_right').click(function() {

        /* Checks to make sure it is not the last slide,
         if not then it translates it right*/
        if (currentIndex < $slides.length - 1) {

            /* The transform*/
            $(".shoe_slider-group").css("transform", "translateX(" + (currentIndex + 1) * -25 + "%)");

            /* Removes the class 'currentslide'*/
            $(".shoe_slider-controls li").removeClass("currentslide");

            /* As it moves to the right we need to update the currentIndex by adding 1 */
            currentIndex += 1;
            /* It has now added one, which will mean it is going to look at the next control
             in the sequence, this is now being set to being the 'currentslide' */
            $(".shoe_slider-controls li").eq(currentIndex).addClass("currentslide");
            displayText();
        }
    });

    /* The left arrow */
    $('.shoe_slider-arrow_left').click(function() {

        /* Makes sure that when it moves backwards(left) it is not the first slide */
        if (currentIndex >= 1) {

            /* Translates the slide left based on the position of the index before it */
            $(".shoe_slider-group").css("transform", "translateX(" + (currentIndex - 1) * -25 + "%)");

            /* Removes the 'currentslide'*/
            $(".shoe_slider-controls li").removeClass("currentslide");

            /* Updates the currentIndex by removing 1(as we have now gone back)*/
            currentIndex -= 1;

            /* Agains adds the class currentslide based on the position of the currentIndex*/
            $(".shoe_slider-controls li").eq(currentIndex).addClass("currentslide");
            displayText();
        }

    });

    
});
