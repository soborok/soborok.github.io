$(document).ready(function() {
    $('p').click(function() { 
        $('.language').css('background','#E6E6DC');
        $('.description').hide();
    });
    
    $('.language').click(function() {
        $('.language').css('background','#E6E6DC');
        $('.description').hide();
        
        $(this).css('background','#81A594');

   	    var second_class = ($(this).attr('class').split(' ')[1]);
   	    $('div.' + second_class).show();
    }); 
});