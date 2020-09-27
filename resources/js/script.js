$(document).ready(function() {

    /*for the sticky navigation */

    $('.js--section-features').waypoint(function(direction){
        if(direction=="down") {
            $('nav').addClass('sticky');
        }
        
        else{
            $('nav').removeClass('sticky');
        }
   } /* , {
   offset: '65px;'
   } */);

    /*Scroll on button */
    
    $('.js--scroll-to-plans').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); /* when we click that                                 js--scroll-to-plans then it animates and scrolls to the top of js--section-plans with a                           speed of 1000milliseconds  thats 1 sec...*/ 
    });
    
    $('.js--scroll-to-start').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 500); /* when we click that                                 js--scroll-to-start then it animates and scrolls to the top of js--section-features with                         a speed of 500 milliseconds  thats 0.5 sec...*/ 
    });
    
    
    /*Scroll on navigation*/
    
    $('.nav1').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); /* when we click that                                 nav1 then it animates and scrolls to the top of js--section-features with a speed of                           1000milliseconds  thats 1 sec...*/ 
    });

    $('.nav2').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000); 
    });
    
    $('.nav3').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-cities').offset().top}, 1000); 
    });
    
    $('.nav4').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    

    /*Animations on scroll*/
    
    /*   %%%%%%%%%%%%%%%%%%%%%%%%%%  NOT WORKING  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
    
    $('.js--wp-1').waypoint(function(direction){
       $('.js--wp-1').addClass('.animated fadeIn');
    })
    
    */
    
    /*Mobile nav*/
    /*
    $('.js--nav-icon').click(function() {
        var nav1 = $('.js--main-nav');
        nav1.slideToggle(200);
     
    });
    
    */
});






