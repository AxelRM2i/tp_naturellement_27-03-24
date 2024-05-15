$(document).ready(function() {

    // "Fade in" de .itemBox au scrolling de la page
    $(document).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('.itemBox').css('opacity', '100%', 500);
        } else {
            $('.itemBox').css('opacity', '0%', 250);
        };
    });

        /* Actuellement, la fonction n'opère pas de transition :
            les éléments apparaissent et diparaissent, mais
            instantanément : pourquoi ? */

});