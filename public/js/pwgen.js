$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
    });

    $(function() {
        $('#submit').click(function(e) {
            e.preventDefault();
            var lc = $('#lowercase').attr('checked');
            var uc = $('#uppercase').attr('checked');
            var s = $('#special').attr('checked');
            var n = $('#numbers').attr('checked');
            var l = $('#length').val();
			
			
            var col_size = Math.floor(120/(parseInt(l) + 1));
            var col = 1;
			
            var i = 0;
            var password = '';
			
            while (i < (col_size * 5)) {
                password += $.password(l,lc,uc,n,s);
                if (col == col_size) {
                    password += '<br \>';
                    col = 0;
                }
                else
                {
                    password += ' ';
                }
                i++;
                col++;
            }
            $('#password').html(password);
            $('#result').show();
        });
    });

    $('#submit').click();

});