/*
Copyright (c) 2017 
------------------------------------------------------------------
[Master Javascript]

Project:	Wedding Photographer Responsive Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var landingpage = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- Wedding Photographer Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.Menu_bar();
            this.Slider();
            this.SubmitForms();
            this.Map();
            this.Gallery();
            this.Sorting();
            this.Portfolio();
            this.Testimonial();
            this.Partners();
            this.Wow();
            this.Progressbar();
            this.Datepicker();
            this.Counter();
            this.MailFunction();



        },

        /*-------------- Wedding Photographer Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/


        //menu
        Menu_bar: function() {
            var counter = 0;
            $('.cr_menu_btn').click(function() {
                if (counter == '0') {
                    $('.cr_menu_wrapper').addClass('cr_main_menu_hide');
                    $(this).children().removeAttr('class');
                    $(this).children().attr('class', 'glyphicon glyphicon-align-justify');
                    counter++;
                } else {
                    $('.cr_menu_wrapper').removeClass('cr_main_menu_hide');
                    $(this).children().removeAttr('class');
                    $(this).children().attr('class', 'glyphicon glyphicon-align-justify');
                    counter--;
                }
            });
        },
        //banner slider
        Slider: function() {
            if ($(".wp_banner_wrapper").length) {
                var tpj = jQuery;
                var revapi1078;
                tpj(document).ready(function() {
                    if (tpj("#rev_slider_1078_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_1078_1");
                    } else {
                        revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "plugins/revolution/js",
                            sliderLayout: "fullscreen",
                            dottedOverlay: "none",
                            delay: 9000,
                            navigation: {
                                keyboardNavigation: "off",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                mouseScrollReverse: "default",
                                onHoverStop: "off",
                                touch: {
                                    touchenabled: "on",
                                    swipe_threshold: 75,
                                    swipe_min_touches: 1,
                                    swipe_direction: "horizontal",
                                    drag_block_vertical: false
                                },
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
                                },
                                bullets: {
                                    enable: false,
                                    hide_onmobile: true,
                                    hide_under: 600,
                                    style: "metis",
                                    hide_onleave: true,
                                    hide_delay: 200,
                                    hide_delay_mobile: 1200,
                                    direction: "horizontal",
                                    h_align: "center",
                                    v_align: "bottom",
                                    h_offset: 0,
                                    v_offset: 30,
                                    space: 5,
                                    tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                                }
                            },
                            viewPort: {
                                enable: true,
                                outof: "pause",
                                visible_area: "80%",
                                presize: false
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            //gridheight:[600,600,500,400],
                            lazyType: "none",
                            parallax: {
                                type: "mouse",
                                origo: "slidercenter",
                                speed: 2000,
                                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
                                type: "mouse",
                            },
                            shadow: 0,
                            spinner: "off",
                            stopLoop: "off",
                            stopAfterLoops: -1,
                            stopAtSlide: -1,
                            shuffle: "off",
                            autoHeight: "off",
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

                }); /*ready*/
            }
        },
        //Submit Form

        SubmitForms: function() {
            $("body").on("click", ".ed_submit", function(e) {
                e.preventDefault();
                var parent_form = $(this).parent();
                var from_email = parent_form.find("#contact_form_from_email").val();
                var to_email = parent_form.find("#contact_form_to_email").val();
                if (from_email == "" || from_email == undefined) {
                    from_email = to_email;
                }
                var data_object = {};
                var i = 0;
                parent_form.children(".form_input_app_div").children(".pc_input_section").each(function() {
                    var id = $('.form-control', this).attr("id");
                    id = id.replace("-", " ");
                    data_object[i] = {}
                    data_object[i]["id"] = id;
                    data_object[i]["value"] = $('.form-control', this).val();
                    i++;
                });
                if (from_email != undefined && from_email != "" && to_email != undefined && to_email != "") {
                    $.ajax({
                        type: "post",
                        url: "sendMail.php",
                        dataType: "text",
                        data: {
                            "from_email": from_email,
                            "to_email": to_email,
                            "data_object": data_object
                        },
                        success: function(data) {
                            alert("sent successfully.");
                        }
                    });
                }
            });
        },
        //Map
        Map: function() {
            if ($(".ed_map").length) {
                $(".ed_map").each(function(index) {
                    var id = $(this).attr("id");
                    var address = $(this).attr("data-address");
                    $(this).googleMap({
                        scrollwheel: true
                    });
                    $(this).addMarker({
                        //coords: [22.9622672, 76.05079490000003] // for using lat long for marker
                        address: "address"
                    });
                });
            }


        },
        //Date picker
        Date: function() {
            $('.hse_datepicker').datetimepicker({
                format: 'MM/dd/YYYY'
            });
        },
        //team gallery
        Gallery: function() {
            if ($('.wp_team_inner').length > 0) {
                $('.wp_team_inner').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    removalDelay: 300,
                    mainClass: 'mfp-with-zoom',
                    gallery: {
                        enabled: true
                    },
                });
            }

            //portfolio

            $('.gal_img').magnificPopup({
                type: 'image',
                mainClass: 'mfp-with-zoom',
                removalDelay: 300,
                gallery: {
                    enabled: true
                },
            });

        },

        // Portfolio Sorting
        Sorting: function() {
            if ($('.wp_gallery_list ul li a').length > 0) {
                $(".wp_gallery_list ul li a").on("click", function(e) {
                    e.preventDefault();
                });
                $('#portfolio').mixItUp();

            }
        },

        //portfolio gallery
        Portfolio: function() {
            if ($('.wp_port_inner').length) {
                $('.wp_port_inner').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    mainClass: 'mfp-with-zoom',
                    gallery: {
                        enabled: true
                    },
                });
            }
        },

        //Testimonial Slider
        Testimonial: function() {
            if ($('.ed_slider').length > 0) {
                $(".ed_slider").owlCarousel({
                    navigation: true,
                    loop: true,
                    items: 2,
                    autoplay: false,
                    dots: false,
                    nav: false,
                    animateOut: 'fadeOut',
                    animateIn: 'flipInX',
                    smartSpeed: 600,
                    margin: 30,
                    singleItem: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 2
                        }
                    }

                });
            }
        },

        //Client Slider
        Partners: function() {
            if ($('.client_slider').length > 0) {
                $(".client_slider").owlCarousel({
                    navigation: true,
                    loop: true,
                    items: 5,
                    autoplay: true,
                    dots: false,
                    nav: false,
                    animateOut: 'fadeOut',
                    animateIn: 'flipInX',
                    smartSpeed: 600,
                    margin: 30,
                    singleItem: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 4
                        },
                        1000: {
                            items: 5
                        }
                    }

                });
            }
        },
        //Wow js
        Wow: function() {
            new WOW().init();


        },
        //skill progress bar
        Progressbar: function() {
            if ($(".panel_bar .bar").length > 0) {
                $(".panel_bar .bar").appear(function() {
                    $('.progress_bar .panel_bar .bar').each(function(key, bar) {
                        var percentage = $(this).attr('data-percentage');
                        var digit = $(this).parents('.panel_bar').prev('.bar_title').children("span");
                        $(this).animate({
                            'width': percentage + '%'
                        }, 2000);
                        digit.text(percentage + '%');
                        digit.animate({
                            right: '0',
                            'opacity': 1,
                        }, 2000);
                    })
                });
            }
        },
        //Datepicker
        Datepicker: function() {
            if ($(".datepicker").length > 0) {
                $(".datepicker").datepicker({
                    dateFormat: "dd-mm-yy"
                });
            }
        },
        // Counter
        Counter: function() {
            if ($('.wp_counter_box').length > 0) {
                $('.wp_counter_box').appear(function() {
                    $('.count-no').countTo();
                });
            }
        },
        //contact mail
        MailFunction: function() {
            //help mail function	
            $('.submit_frm').on('click', function() {
                var u_name = $('#name').val();
                var u_email = $('#email').val();
                var u_phone = $('#number').val();
                var u_date = $('#date').val();
                var u_msg = $('#message').val();

                $.ajax({
                    type: "POST",
                    url: "contactmail.php",
                    data: {
                        'username': u_name,
                        'useremail': u_email,
                        'userphone': u_phone,
                        'userdate': u_date,
                        'user_msg': u_msg,
                    },
                    success: function(msg) {
                        var full_msg = msg.split("#");
                        if (full_msg[0] == '1') {
                            $('#name').val("");
                            $('#email').val("");
                            $('#number').val("");
                            $('#date').val("");
                            $('#message').val("");
                            $('#err_msg').html(full_msg[1]);
                        } else {
                            $('#name').val(u_name);
                            $('#email').val(u_email);
                            $('#number').val(u_phone);
                            $('#date').val(u_phone);
                            $('#message').val(u_msg);
                            $('#err_msg').html(full_msg[1]);
                        }
                    }
                });
            });
        }



    };

    $(document).ready(function() {
        landingpage.init();
    });



})(jQuery);