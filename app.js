$(document).ready(function () {
    
    // toglle menu and display exit
    $('.menuExit').click(function () { 
      
        $('.mainNav').hide();
    });

    $('.hamburger').click(function (e) { 
        e.preventDefault();
     $('.mainNav').css('display', 'flex');
    });
});