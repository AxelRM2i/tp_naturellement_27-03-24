$(document).ready(function() {

    // $('.photo1').click(function() {
    //     console.log('Clic sur Photo1');
    //     $('.displayer').addClass('getPhoto1');
    //     // $('.lightbox').animate({display: 'block'}, 500);
    //     $('.lightbox').css('display', 'block');
    // });

    $('.photo1').click(function() {
        $('.displayer').html('<img src="images/pic1.jpg" alt="Papillons"/>');
        $('.lightbox').fadeIn(500);
    });

    $('.photo2').click(function() {
        $('.displayer').html('<img src="images/pic7.jpg" alt="Forêt"/>');
        $('.lightbox').fadeIn(500);
    });

    $('.photo3').click(function() {
        $('.displayer').html('<img src="images/pic8.jpg" alt="Pré"/>');
        $('.lightbox').fadeIn(500);
    });
    

    // Fermeture de la lightbox.
    $('.close').click(function() {
        $('.lightbox').fadeOut(500);
    });

    /* Pour la version smartphone, on prévoit la fermeture de la
    lightbox également en cliquant sur l'image */
    $('.displayer').click(function() {
        $('.lightbox').fadeOut(500);
    });
});
