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
        
        buttonArray[currentIndex].removeClass('active'); //remove class from item
        buttonArray[newIndex].addClass('active');
        
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
        var $button = $('<button type ="button" class="bb_slide-btn">&bull;</button>');
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

