$(document).ready(function() {

    var burgerIsActive = false;
        // Condition pour ouvrir / fermer le menu burger

    $('#burger').click(function(){
        if (burgerIsActive === false) {
            burgerIsActive = true;
            $('#burger').animate({rotate: '360deg'}, 500);
            setTimeout(function() {
                $('.menuBckgd').fadeIn(500);
                $('.navbar').fadeIn(500);
                $('#navbarUl').animate({right: '0px'}, 500);
                $('#burger').css('rotate', '0deg');
            },300);  
        } else {
            $('#burger').animate({rotate: '0deg'}, 500);
            $('.navbar').fadeOut(500);
            $('.menuBckgd').fadeOut(500);
            burgerIsActive = false;
        }
    });

    $('.menuBckgd').click(function() {
        $('#burger').animate({rotate: '0deg'}, 500);
        $('.navbar').fadeOut(500);
        $('.menuBckgd').fadeOut(500);
        burgerIsActive = false;
    });

});
