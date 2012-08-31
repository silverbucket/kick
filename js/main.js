$(document).ready(function() {
    //$('footer a#submit_content').click(function() {
    //    console.log('intercepted submit content');
    //    return false;
    //});

    $('a#generate_code').click(function() {
        console.log('intercepted generate code');
        return false;
    });

    $("#submit_kick_form").validate({
        //set the rules for the field names
        rules: {
            title: {
                required: false
            },
            url: {
                required: true,
                url: true
            },
            kickcode: {
                required: true,
                minlength: 6
            },
        },
        //set messages to appear inline
        highlight: function(label) {
            $(label).css('border-color', 'red');
        },
        submitHandler: function(form) {
            callBack.contactForm();
        }
    });
    
});
