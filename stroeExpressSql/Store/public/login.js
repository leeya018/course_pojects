


$(document).ready(function () {
    $('#loginForm').submit(function () {
        var authData = {
            'userName': $('input[name=userName]').val(),
            'password': $('input[name=password]').val()
        }

        $.ajax({
            url: '/loginAuth',
            type: 'POST',
            data: authData,
            dataType: 'json', // this the type I am expecting to get from the server
            success: function (data) {
                if (data.status == 200) {
                    window.location.href = data.redirect;
                } else {
                    $('#errMsg').text('wrong pass, please try again');
                }
            },
            error: function (err) {
                $('#errMsg').text(err, msg);
            }
        })


    });
})