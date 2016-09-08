jQuery(window).scroll(function() {
    if (jQuery(document).width() > 760) {
        var main_menu_top = jQuery('#header').find('.main-menu').offset().top + 100;
        if (jQuery(this).scrollTop() > main_menu_top) {
            jQuery('#scroll-header').slideDown(100);
        } else {
            jQuery('#scroll-header').slideUp(100);
        }
    }
});

jQuery(window).resize(function() { //restore scroll header
    if (jQuery(document).width() > 760) {


        var main_menu_top = jQuery('#header').find('.main-menu').offset().top + 100;
        if (jQuery(this).scrollTop() > main_menu_top) {
            jQuery('#scroll-header').slideDown(100);
        } else {
            jQuery('#scroll-header').slideUp(100);
        }
    } else {

        jQuery('#scroll-header').slideUp(100);
    }
});

(function($) {
    jQuery('.image-bg ').each(function() {
        if (jQuery(this).find('>img[data-type=background]').length>0) {
            var url_img = 'url(' + jQuery(this).find('>img').attr('src') + ')'; //lấy ra giá trị của thuộc tính chú ý nha.
            jQuery(this).css("background-image", url_img);
            jQuery(this).find('>img').hide();
        }
    });
    jQuery('.search-block-form form .form-actions').removeAttr('id');
    jQuery('.search-block-form form #edit-submit').removeAttr('id');
})(jQuery);