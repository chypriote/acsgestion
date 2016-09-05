(function($) {
    "use strict";
    jQuery(document).ready(function() {

        var show_menu = false;
        var toggle = true;

        //show top bar
        jQuery('#top-bar-open').click(function() {
            jQuery(this).parent().find('#top-bar').slideToggle();
        });


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

        jQuery('.mega-menu-item-type-custom').each(function() {
            if (jQuery(this).find('.mega-sub-menu').length != 0) {
                jQuery(this).children('a').attr('href', null)
            }
        });

        // Carousel partenaires
        jQuery('.logo-client').owlCarousel({
            items: 8,
            autoPlay: true
        })

        function getRounded(value) {
            return Math.round(value * 100) / 100;
        }

        jQuery('#calcul-mensualites').submit(function(e) {
            e.preventDefault();

            var montant = jQuery('#montant').val();
            var ans = jQuery('#duree').val();
            var taux = jQuery('#taux-interet').val();
            var txasur = jQuery('#taux-assurance').val();
            var mois = ans * 12;

            var result = (montant * taux / 12) / (1 - Math.pow(1 + (taux / 12), (mois * -1)));
            var mens_assurance = montant * txasur / 12;

            jQuery('#result').html(getRounded(result));
            jQuery('#assurance').html(getRounded(mens_assurance));
            jQuery('#total-cost').html(getRounded(result + mens_assurance * mois));
            jQuery('#total-assurance').html(getRounded(mens_assurance * mois));
            jQuery('.second-form').slideDown();
        })


    });

})(jQuery);

