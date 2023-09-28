$(document).ready(
    function(){

        // Sticky nav
       $('.about-section').waypoint(
        function(direction){
            if(direction == "down"){
                $('nav').addClass('sticky');
            }else {
                $('nav').removeClass('sticky');
            }
        }, {
            offset: '600px'
            }
        )

        // Scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 700);
            event.preventDefault();
            }
        );

        // Mobile navigation
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);

                if($('.mobile-nav-icon').hasClass('fa-bars')){
                    $('.mobile-nav-icon').addClass('fa-times');
                    $('.mobile-nav-icon').removeClass('fa-bars')
                }
                else{
                    $('.mobile-nav-icon').addClass('fa-bars');
                    $('.mobile-nav-icon').removeClass('fa-times')
                }
            }
        )
    }
)

// rút gọn code
// Vào đường dẫn https://cssminifier.com/  để tối giản file css và đường dẫn https://www.toptal.com/developers/javascript-minifier 
// $(document).ready(function(){$(".about-section").waypoint(function(a){"down"==a?$("nav").addClass("sticky"):$("nav").removeClass("sticky")},{offset:"600px"}),$("a").click(function(a){$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},700),a.preventDefault()}),$(".mobile-nav-icon").click(function(){$(".main-nav").slideToggle(200),$(".mobile-nav-icon").hasClass("fa-bars")?($(".mobile-nav-icon").addClass("fa-times"),$(".mobile-nav-icon").removeClass("fa-bars")):($(".mobile-nav-icon").addClass("fa-bars"),$(".mobile-nav-icon").removeClass("fa-times"))})});