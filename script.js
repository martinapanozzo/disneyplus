var header= document.getElementById('header');

window.addEventListener('scroll',()=>
{
    var scroll = window.scrollY
    if(scroll > 10){
        header.style.backgroundColor= '#060B76';
    } else {
        header.style.backgroundColor= '#transparent';
    }
})

$(document).ready(function() {
    $('#myCarousel').carousel({
	    interval: 10000
	})
});