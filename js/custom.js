

$(document).ready(function(){
    new WOW().init();
    
    var height = $('#header').outerHeight();

    $(window).scroll(function() {
        if($(this).scrollTop() > 0)
        {
            $('#header').addClass("fixedHeader");
            
        }
        else if($(this).scrollTop() <= height)
        {
             $('#header').removeClass("fixedHeader");
            
        }     
    });



    $('#main').css('margin-top',height + 'px');









        var menu = new MmenuLight(
            document.querySelector( '#navigation' ),
            '(max-width: 1024px)'
        );

        var navigator = menu.navigation({
                selectedClass: 'Selected',
                slidingSubmenus: true,
                theme: 'dark',
                title: 'Menu'
        });

        var drawer = menu.offcanvas({
             position: 'left'
        });


        document.querySelector( '#menuToggler' ).addEventListener( 'click', evnt => {
            evnt.preventDefault();
            drawer.open();
        });
});