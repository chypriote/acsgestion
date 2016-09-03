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

    });

})(jQuery);

