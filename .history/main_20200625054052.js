//form animation
$(".contact-form")
    .find(".form-control")
    .each(function () {
        var targetItem = $(this).parent();
        if ($(this).val()) {
            $(targetItem)
                .find("label")
                .css({
                    top: "-6px"
                    , fontSize: "16px"
                    , color: "#ff512f"
                });
        }
    });
$(".contact-form")
    .find(".form-control")
    .focus(function () {
        $(this)
            .parent(".input-block")
            .addClass("focus");
        $(this)
            .parent()
            .find("label")
            .animate({
                    top: "-6px"
                    , fontSize: "16px"
                    , color: "#ff512f"
                }
                , 300
            );
    });
$(".contact-form")
    .find(".form-control")
    .blur(function () {
        if ($(this).val().length == 0) {
            $(this)
                .parent(".input-block")
                .removeClass("focus");
            $(this)
                .parent()
                .find("label")
                .animate({
                        top: "20px"
                        , fontSize: "18px"
                    }
                    , 300
                );
        }
    })


// Send Form
(function ($) {
    'use strict';
    var form = $('.contact-form'),
        message = $('.contact__msg'),
        form_data;
    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), select, textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);