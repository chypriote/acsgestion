/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* <![CDATA[ */
//jQuery('img').each(function() {
//    if (jQuery(this).attr('width') == undefined || jQuery(this).attr('width') == '') {
//        var $img = jQuery(this);
//        var wait = setInterval(function() {
//            var w = $img[0].naturalWidth,
//                h = $img[0].naturalHeight;
//            if (w && h) {
//                clearInterval(wait);
//            }
//            $img.attr('width', w);
//            $img.attr('height', h);
//        }, 30);
//
//    }
//});

var megamenu = {"effect": {"fade": {"in": {"animate": {"opacity": "show"}}, "out": {"animate": {"opacity": "hide"}}}, "slide": {"in": {"animate": {"height": "show"}, "css": {"display": "none"}}, "out": {"animate": {"height": "hide"}}}}, "fade_speed": "fast", "slide_speed": "fast", "timeout": "300"};
/* ]]> */

var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = ".tp-caption.Megaw-Headline1,.Megaw-Headline1{color:rgba(255,255,255,1.00);font-size:60px;line-height:60px;font-weight:700;font-style:normal;font-family:Montserrat;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:2px}.tp-caption.Megaw-Text,.Megaw-Text{color:rgba(255,255,255,1.00);font-size:30px;line-height:36px;font-weight:300;font-style:normal;font-family:Open Sans;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:2px}.tp-caption.Megaw-Button,.Megaw-Button{color:rgba(255,255,255,1.00);font-size:18px;line-height:18px;font-weight:400;font-style:normal;font-family:Montserrat;padding:13px 35px 13px 35px;text-decoration:none;text-align:left;background-color:transparent;border-color:rgba(255,255,255,1.00);border-style:solid;border-width:2px;border-radius:0px 0px 0px 0px}.tp-caption.Megaw-Button:hover,.Megaw-Button:hover{color:rgba(46,46,46,1.00);text-decoration:none;background-color:rgba(255,255,255,1.00);border-color:rgba(255,255,255,1.00);border-style:solid;border-width:2px;border-radius:0px 0px 0px 0px}";
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
}
else {
    var htmlDiv = document.createElement("div");
    htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
    document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}

/******************************************
 -	PREPARE PLACEHOLDER FOR SLIDER	-
 ******************************************/

var setREVStartSize = function() {
    try {
        var e = new Object, i = jQuery(window).width(), t = 9999, r = 0, n = 0, l = 0, f = 0, s = 0, h = 0;
        e.c = jQuery('#rev_slider_3_1');
        e.responsiveLevels = [1240, 1024, 778, 480];
        e.gridwidth = [1240, 1024, 778, 480];
        e.gridheight = [600, 600, 500, 400];

        e.sliderLayout = "fullscreen";
        e.fullScreenAutoWidth = 'off';
        e.fullScreenAlignForce = 'off';
        e.fullScreenOffsetContainer = '';
        e.fullScreenOffset = '';
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
            f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
        }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
            var u = (e.c.width(), jQuery(window).height());
            if (void 0 != e.fullScreenOffsetContainer) {
                var c = e.fullScreenOffsetContainer.split(",");
                if (c)
                    jQuery.each(c, function(e, i) {
                        u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                    }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
            }
            f = u
        } else
            void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
        e.c.closest(".rev_slider_wrapper").css({height: f})
    } catch (d) {
        console.log("Failure at Presize of Slider:" + d)
    }
};


setREVStartSize();
function revslider_showDoubleJqueryError(sliderID) {
    var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
    jQuery(sliderID).show().html(errorMessage);
}
var tpj = jQuery;

var revapi3;
tpj(document).ready(function() {
    if (tpj("#rev_slider_3_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_3_1");
    } else {
        revapi3 = tpj("#rev_slider_3_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "plugins/revslider/public/assets/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style: "zeus",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    }
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [600, 600, 500, 400],
            lazyType: "smart",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});	/*ready*/

var htmlDivCss = unescape(".zeus.tparrows%20%7B%0A%20%20cursor%3Apointer%3B%0A%20%20min-width%3A70px%3B%0A%20%20min-height%3A70px%3B%0A%20%20position%3Aabsolute%3B%0A%20%20display%3Ablock%3B%0A%20%20z-index%3A100%3B%0A%20%20border-radius%3A35px%3B%20%20%20%0A%20%20overflow%3Ahidden%3B%0A%20%20background%3Argba%280%2C0%2C0%2C0.10%29%3B%0A%7D%0A%0A.zeus.tparrows%3Abefore%20%7B%0A%20%20font-family%3A%20%22revicons%22%3B%0A%20%20font-size%3A20px%3B%0A%20%20color%3A%23fff%3B%0A%20%20display%3Ablock%3B%0A%20%20line-height%3A%2070px%3B%0A%20%20text-align%3A%20center%3B%20%20%20%20%0A%20%20z-index%3A2%3B%0A%20%20position%3Arelative%3B%0A%7D%0A.zeus.tparrows.tp-leftarrow%3Abefore%20%7B%0A%20%20content%3A%20%22%5Ce824%22%3B%0A%7D%0A.zeus.tparrows.tp-rightarrow%3Abefore%20%7B%0A%20%20content%3A%20%22%5Ce825%22%3B%0A%7D%0A%0A.zeus%20.tp-title-wrap%20%7B%0A%20%20background%3A%23000%3B%0A%20%20background%3Argba%280%2C0%2C0%2C0.5%29%3B%0A%20%20width%3A100%25%3B%0A%20%20height%3A100%25%3B%0A%20%20top%3A0px%3B%0A%20%20left%3A0px%3B%0A%20%20position%3Aabsolute%3B%0A%20%20opacity%3A0%3B%0A%20%20transform%3Ascale%280%29%3B%0A%20%20-webkit-transform%3Ascale%280%29%3B%0A%20%20%20transition%3A%20all%200.3s%3B%0A%20%20-webkit-transition%3Aall%200.3s%3B%0A%20%20-moz-transition%3Aall%200.3s%3B%0A%20%20%20border-radius%3A50%25%3B%0A%20%7D%0A.zeus%20.tp-arr-imgholder%20%7B%0A%20%20width%3A100%25%3B%0A%20%20height%3A100%25%3B%0A%20%20position%3Aabsolute%3B%0A%20%20top%3A0px%3B%0A%20%20left%3A0px%3B%0A%20%20background-position%3Acenter%20center%3B%0A%20%20background-size%3Acover%3B%0A%20%20border-radius%3A50%25%3B%0A%20%20transform%3AtranslateX%28-100%25%29%3B%0A%20%20-webkit-transform%3AtranslateX%28-100%25%29%3B%0A%20%20%20transition%3A%20all%200.3s%3B%0A%20%20-webkit-transition%3Aall%200.3s%3B%0A%20%20-moz-transition%3Aall%200.3s%3B%0A%0A%20%7D%0A.zeus.tp-rightarrow%20.tp-arr-imgholder%20%7B%0A%20%20%20%20transform%3AtranslateX%28100%25%29%3B%0A%20%20-webkit-transform%3AtranslateX%28100%25%29%3B%0A%20%20%20%20%20%20%7D%0A.zeus.tparrows%3Ahover%20.tp-arr-imgholder%20%7B%0A%20%20transform%3AtranslateX%280%29%3B%0A%20%20-webkit-transform%3AtranslateX%280%29%3B%0A%20%20opacity%3A1%3B%0A%7D%0A%20%20%20%20%20%20%0A.zeus.tparrows%3Ahover%20.tp-title-wrap%20%7B%0A%20%20transform%3Ascale%281%29%3B%0A%20%20-webkit-transform%3Ascale%281%29%3B%0A%20%20opacity%3A1%3B%0A%7D%0A%20%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
}
else {
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}



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
//---------------------------------

jQuery(document).ready(function() {

  if(jQuery('.portfolio-masonry').length > 0 && jQuery('.masonry-item').length > 0){

    imagesLoaded(document.querySelector('.portfolio-masonry'), function(instance) {
        jQuery('.portfolio-masonry').masonry({
            itemSelector: '.masonry-item'
        });
    });
}
if(jQuery('.grid-blog').length > 0 && jQuery('.post-cell-masonry').length > 0 ){
  imagesLoaded(document.querySelector('.grid-blog'), function(instance) {
        jQuery('.grid-blog').masonry({
            itemSelector: '.post-cell-masonry'
        });
    });
    }
});

(function($) {
    $(document).ready(function() {
        $('.content-section .testimonials-slider .testimonials-container .testimonials-each:first-child').addClass('testimonials-current');

    });

    jQuery('.image-bg ').each(function() {
        if (jQuery(this).find('>img[data-type=background]').length>0) {
            var url_img = 'url(' + jQuery(this).find('>img').attr('src') + ')'; //lấy ra giá trị của thuộc tính chú ý nha.
            jQuery(this).css("background-image", url_img);
            jQuery(this).find('>img').hide();
        }
    });
    jQuery('#footer .wrap-column .footer-column nav').parent().css('padding-bottom','80px');
    jQuery('.simplenews-subscriber-form.content form input[type=email]').attr('placeholder','Email');
    jQuery('.search-block-form form .form-actions').removeAttr('id');
    jQuery('.search-block-form form #edit-submit').removeAttr('id');
})(jQuery);