$(document).ready(function() {

    var displayPhoto = 1;
        /*  ... Conditionne les instructions au clic sur l'un des
            boutons du slider. */

    /*  Fonctions de slider (droite et gauche).
        La largeur de l'ancienne image se réduit progressivement à zéro,
        en étant "ancrée" par sa position left ou right selon le cas.
        Cela donne un effet de compression de l'ancienne image qui laisse
        place à la nouvelle, ce qui est fort rigolo.
        La nouvelle est déjà affichée dans son état final au début de
        l'animation, derrière l'ancienne grâce au jeu des z-index. */

    $('#slideBtnRight').click(function() {
        switch(displayPhoto) {
            case 1:
                $('.photo2').css('width', '1920px');
                $('.photo1').animate({width: '0px'}, 500);
                displayPhoto = 2;
                break;
            case 2:
                // .photo2 "ancrée" à gauche :
                $('.photo2').css('left', '0');
                $('.photo2').css('right', 'auto');
                setTimeout(function(){}, 5);

                $('.photo3').css('width', '1920px');
                $('.photo2').animate({width: '0px'}, 500);
                displayPhoto = 3;
                break;
            case 3:
                break;
        }
    });

    $('#slideBtnLeft').click(function() {
        switch(displayPhoto) {
            case 1:
                break;
            case 2:
                // .photo2 "ancrée" à droite :
                $('.photo2').css('left', 'auto');
                $('.photo2').css('right', '0');
                setTimeout(function(){}, 5);

                $('.photo2').css('z-index', '10');
                    // ... Pour que .photo1 apparaisse derrière .photo2
                $('.photo1').css('width', '1920px');
                $('.photo2').animate({width: '0px'}, 500);
                    // Délai avant de redonner à .photo2 son z-index habituel :
                setTimeout(function() {
                    $('.photo2').css('z-index', '2');
                }, 500);
                
                displayPhoto = 1;
                break;
            case 3:
                $('.photo3').css('z-index', '10');
                    // ... Pour que .photo2 apparaisse derrière .photo3
                $('.photo2').css('width', '1920px');
                $('.photo3').animate({width: '0px'}, 500);
                // Délai avant de redonner à .photo2 son z-index habituel :
                setTimeout(function() {
                    $('.photo3').css('z-index', '1');
                }, 500);
                
                displayPhoto = 2;
                break;
        }
    });

});
