var main = function() {
    $('.dot').click(function() {
        // var currentDot = $('active-dot');
        // var currentSlide = $('active-slide');

        var listIndex = $(this).index();  //zero base index
        var nextSlide;

        $('.slide').each(function(index, element) {
            if (index === listIndex) {
               nextSlide = $(this);            
           }
        });

        $('.dot').removeClass('active-dot');
        $(this).addClass('active-dot');
        $('.slide').fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
    });
}

$(document).ready(main);