(function($) {
    "use strict";
    jQuery(document).ready(function() {

        var show_menu = false;
        var toggle = true;

        //highlight current mega menu
        var mega_menu_item = jQuery('.mega-menu-item-has-children').find('.mega-sub-menu').find('.current-menu-item');
        if (mega_menu_item.length > 0) {
            var abc = mega_menu_item.parent().parent().parent().parent().parent().addClass('mega-current-menu-ancestor');
        }

        //show toggle menu
        jQuery('#toggle-menu-button').click(function() {
            jQuery(this).parent().find('.toggle-menu').slideToggle(200);
        });

        jQuery(window).resize(function() {
            var windows_height = jQuery(this).outerWidth();
            if (windows_height > 740) {
                jQuery('.toggle-menu').fadeOut(200);
            }
        });



        jQuery('#back_top').click(function() {
            jQuery('html, body').animate({scrollTop: 0}, 'normal');
            return false;
        });
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() !== 0) {
                jQuery('#back_top').fadeIn();
            } else {
                jQuery('#back_top').fadeOut();
            }
        });
        if (jQuery(window).scrollTop() !== 0) {
            jQuery('#back_top').show();
        } else {
            jQuery('#back_top').hide();
        }

        jQuery('#block-togglemenu').find('> ul > li').each(function() {
            if (jQuery(this).find('ul').length != 0) {
                jQuery(this).children('a').attr('href', null);
                jQuery(this).addClass('toggle-submenu');
                jQuery(this).children('ul').css('display', 'none');

                jQuery(this).on('click', function() {
                    jQuery('#block-togglemenu').find('.open').not(jQuery(this)).removeClass('open').find('> ul').slideUp();
                    jQuery(this).toggleClass('open');
                    jQuery(this).children('ul').slideToggle();
                })
            }
        });

        jQuery('.mega-menu-item-type-custom').each(function() {
            if (jQuery(this).find('.mega-sub-menu').length != 0) {
                jQuery(this).children('a').attr('href', null);
            }
        });

        // Carousel partenaires
        jQuery('.logo-client').owlCarousel({
            items: 8,
            autoPlay: 3000
        });


        function numberWithSpaces(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/ /g,"").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            return parts.join(".");
        }
        function getRounded(value) {
            return numberWithSpaces((Math.round(value * 100) / 100));
        }
        jQuery('#montant').on("keyup", function() {
            $(this).val(numberWithSpaces($(this).val()))
        });

        jQuery('#calcul-mensualites').submit(function(e) {
            e.preventDefault();

            var montant = parseFloat(jQuery('#montant').val().replace(/ /g,""));
            var ans = jQuery('#duree').val();
            var taux = jQuery('#taux-interet').val();
            var txasur = jQuery('#taux-assurance').val();
            var mois = ans * 12;

            taux = taux / 100;
            var pow = Math.pow(1 + (taux / 12), -1 * mois);

            var result = (montant * taux / 12) / (1 - pow);

            var mens_assurance = montant * txasur / 12 / 100;
            var total_assurance = mens_assurance * mois;

            jQuery('#result').html(getRounded(result) + ' €');
            jQuery('#assurance').html(getRounded(mens_assurance) + ' €');
            jQuery('#total-assurance').html(getRounded(total_assurance) + ' €');
            jQuery('#total-cost').html(getRounded(montant + total_assurance) + ' €');
            jQuery('.second-form').slideDown();
        })


    });

})(jQuery);

window.initMap = function () {
    var map = new google.maps.Map(document.getElementById('google-map'), {
        center: {lat: 48.872646, lng: 2.330584},
        zoom: 16,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(48.872646, 2.330584),
        title:"ACS Gestion Privée",
        map: map
    });
};

function slide() {
    var activeElement = jQuery('.acs-slider-slides li.active');
    activeElement.animate({
        'right': '0',
        'opacity': '1'
    }, 500).delay(3000).animate({
        'opacity': '0',
        'left': '100%'
    }, 500, function() {
        var nextActiveElement = activeElement.next('li');
        if (nextActiveElement.length < 1) {
            nextActiveElement = jQuery('.acs-slider-slides li').first();
        }
        nextActiveElement.addClass('active');
        activeElement.removeClass('active');
        activeElement.css('left', '0');
        activeElement.css('right', '100%');
        slide();
    });
}

slide();
