
$('#container').click(function() {
	$('.line-1, .line-2, .line-3').toggleClass('is-clicked');
});

function changeBodyClass(event) {

  // Log
  console.log('Clicked on toggle menu class');

  // Prevent default event (clicking a link)
  //event.preventDefault();

  // Toggle body class
  $('#container').toggleClass('mobile-menu-visible');

}

/*
**  Bind events
*/
$('nav a').on('click', changeBodyClass);



// $(document).ready(function(){
//   if ( $('#container').hasClass('mobile-menu-visible') ) {
//     $('#menuContainer').addClass('is-clicked');
//   }
// 	else{
// 		( $('#menuContainer').removeClass('is-clicked') );
// 	}
// });
