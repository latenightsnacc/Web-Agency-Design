document.getElementById('portoflio-btn').addEventListener('click', () => {
    document.getElementById('menu-modal').style.display = 'none';
} );

//form animation using JQuery
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


// Display phone input box

document.getElementById('phone-btn').addEventListener('click', () => {
    if(document.getElementById('phone-input').style.display === 'none'){
        document.getElementById('phone-input').style.display = 'block';
        document.getElementById('phone-btn').style.display = 'none';
    } else {
        document.getElementById('phone-input').style.display = 'none';
        document.getElementById('phone-btn').style.display = 'block';
    }
});
// Form submission
$(function() {
    // Get the form.
    var form = $('#email-form');

    // Get the messages div.
    var formMessages = $('#form-msg');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('alert-danger');
            $(formMessages).addClass('alert-success');
        
            // Set the message text.
            $(formMessages).text(response);
        
            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#subject').val('');
            $('#phone').val('');
            $('#message').val('');
        }).fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('alert-success');
            $(formMessages).addClass('alert-danger');
        
            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

    
});