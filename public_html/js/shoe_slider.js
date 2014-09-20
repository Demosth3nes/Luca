$('.shoe_slider').each(function() {
    var $this = $(this),
            $slides = $this.find('.slide'),
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

