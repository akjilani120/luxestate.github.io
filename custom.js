jQuery(document).ready(function( $ ) {
    $('.company-statistics-section').waypoint(function(direction){
        if(direction=='down'){
         $('.nav-div').addClass('sticky')
        }else{
         $('.nav-div').removeClass('sticky')
        }
    })
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    })
});