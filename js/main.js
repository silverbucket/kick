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
        submitHandler: function(form) {
            console.log('submition validation passed');
            return false;
        }
    });
    
});
