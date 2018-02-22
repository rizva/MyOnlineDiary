var layout = {

    
    /*Function for switching between login page and registration page*/
    switchBetweenLoginAndRegistration: function () {

        console.log("switch called");
        $('#login-form-link').click(function (e) {
            $("#login-form").delay(50).fadeIn(50);
            $("#register-form").fadeOut(50);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function (e) {
            $("#register-form").delay(50).fadeIn(50);
            $("#login-form").fadeOut(50);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        layout.formRegistration();
        layout.formLogin();
    },

    formRegistration: function () {

        $("#username-register,#email,#password-register,#confirm-password").focus(function () {

                if ($(this).val() == "") {
                    $(this).css("border", "1px solid red");
                    $(this).css("box-shadow", "0 0 10px #ff3333");
                    $(this).css("outline", "0 none");

                }
                $(this).keyup(function () {
                    if ($(this).val() != "") {
                        $(this).css("border", "1px solid green");
                        $(this).css("box-shadow", "0 0 10px  #66ff66");
                        $(this).css("outline", "0 none");
                        ta = $(this).val();

                    } else {
                        $(this).css("border", "1px solid red");
                        $(this).css("box-shadow", "0 0 10px #ff3333");
                        $(this).css("outline", "0 none");
                    }
                });
        });
        $("input").blur(function () {
            if ($(this).val() == "") {
                $(this).css("border", "");
                $(this).css("box-shadow", "");
                $(this).css("outline", "0 none");
            }

        });
    },

    formLogin: function () {
        $("#username-login,#password-login").focus(function () {

            if ($(this).val() == "") {
                $(this).css("border", "1px solid red");
                $(this).css("box-shadow", "0 0 10px #ff3333");
                $(this).css("outline", "0 none");

            }
            $(this).keyup(function () {
                if ($(this).val() != "") {
                    $(this).css("border", "1px solid green");
                    $(this).css("box-shadow", "0 0 10px  #66ff66");
                    $(this).css("outline", "0 none");
                    ta = $(this).val();

                } else {
                    $(this).css("border", "1px solid red");
                    $(this).css("box-shadow", "0 0 10px #ff3333");
                    $(this).css("outline", "0 none");
                }
            });
        });
        $("input").blur(function () {
            if ($(this).val() == "") {
                $(this).css("border", "");
                $(this).css("box-shadow", "");
                $(this).css("outline", "0 none");
            }

        });
    }

};