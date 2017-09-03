// // var divs = document.getElementsByClassName('city-feature');

// // for (i=1;i<divs.length;i++){
// // 		if(i==2 || i==5||i==8||i==11){
// // 			divs[i].style.color='red';
// // 			// divs[i].style.borderBottom="2px solid #cf6d17";
// // 			divs[i].addEventListener('mouseover',function(){
// // 				this.style.borderBottom="2px solid #cf6d17";
				 
// 			//   divs[i].addEventListener('mouseleave',function(e){
// 			// 	this.style.color="blue"
// 			// })
// 				  console.log(e);
// 		   // setTimeout(function(e) {
// 		   //    e.style.borderBottom= "none";
// 		   //  }, 500);


// 			});
			 
// 	}
	
// }
// 
// sticky navigation
$(document).ready(function() {
	
	$('h1').click(function(){
		$(this).css('color','blue');
	});
});
$('#scroll').waypoint(function(direction){
	if(direction =='down'){
		$('nav').addClass(('sticky'));
	}else{
		$('nav').removeClass(('sticky'));
	}
},{
	 offset: '240px'
});

// scroll buttons
$('#btn1').click(function(){
	$('html,body').animate({scrollTop : $('#plans').offset().top},1000);
});
$('#btn2').click(function(){
	$('html,body').animate({scrollTop : $('#scroll').offset().top},1000);
});

// navigation scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// animation on scroll

$('#wp-1-animate').waypoint(function(direction){
	$('#wp-1-animate').addClass('animated slideInUp');
},{
	 offset: '50%'
});

$('#wp-2-animate').waypoint(function(direction){
	$('#wp-2-animate').addClass('animated fadeInUp');
},{
	 offset: '50%'
});
$('#wp-3-animate').waypoint(function(direction){
	$('#wp-3-animate').addClass('animated fadeIn');
},{
	 offset: '50%'
});
$('.wp-4-animate').waypoint(function(direction){
	$('.wp-4-animate').addClass('animated pulse');
},{
	 offset: '50%'
});