// var main = function() {
//     $('.ide').click(function() { 
//     	console.log("you clicked div.ide");
//         $(this).next('.description').hide();
//     });
// }
// $(document).ready(main);


$(document).ready(function() {
   $('.ide').click(function() {
   	// alert("you clicked div.ide");
   	// $(this).toggle(1000);
   	$('.description').hide();
    $(this).next('.description').show();
   }); 
});
