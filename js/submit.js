$(document).ready(function() {

    $('a#generate_code').click(function() {
        console.log('intercepted generate code');
        return false;
    });

    $("#submit_kick_form").validate({
        //set the rules for the field names
        rules: {
            kick_title: {
                required: false
            },
            kick_url: {
                required: true,
                url: true
            },
            kick_code: {
                required: true,
                minlength: 6
            },
        },
        //set messages to appear inline
        messages: {
            kick_title: "",
            kick_url: "",
            kick_code: ""
        },
        submitHandler: function(form) {
            console.log('form submittion passed validation');
            return false;
        }
    });
    
});
