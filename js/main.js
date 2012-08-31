$(document).ready(function() {

    navMenu.toggle('home');

    $("a#link-submit").click(function() {
        navMenu.toggle('submit');
        //pageTracker._trackPageview('/submit');
        return false;
    }); 

    $("a#link-home").click(function() {
        navMenu.toggle('home');
        //pageTracker._trackPageview('/submit');
        return false;
    });

    $('a#generate_code').click(function() {
        console.log('intercepted generate code');
        return false;
    });


    $("form#view_kick_form").validate({
        //set the rules for the field names
        rules: {
            kick_code: {
                minlength: 6
            },
        },
        //set messages to appear inline
        messages: {
            kick_code: ""
        },
        submitHandler: function(form) {
            console.log('form submittion passed validation');
            return false;
        }
    });

    $("form#submit_kick_form").validate({
        //set the rules for the field names
        rules: {
            kick_code: {
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


var navMenu = {
    toggle: function(page) {
        var pages = ['home', 'submit'];

        for ( var i = 0; i < pages.length; i++ ) {
            if ( pages[i] != page ) {
                $("a#link-"+pages[i]).removeClass('selected');
                $("section#"+pages[i]).hide();
            }
        }
        
        // fade in page content
        $("section#"+page+"").fadeIn('fast');
        $("a#link-"+page+"").addClass('selected');
        
    }
}