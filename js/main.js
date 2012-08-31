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
        highlight: function(label) {
            $(label).css('border-color', 'rgba(246, 20, 29, .3)');
        },
        success: function(label) {
            $(label).css('border-color', 'rgba(20, 246, 20, .3)');
        },
        submitHandler: function(form) {
            console.log('form submittion passed validation');
            return false;
        }
    });
    
});
