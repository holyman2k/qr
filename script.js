var size = 256;
var defaultText = "Enter your message here";

$(function() {
    $('#textField').focus();    
    $('#btn-download').css("display", "none");
})

$(function(){
        $('#textField').on('input propertychange paste', function () {
        var text = $(this).val()
        if (text.length == 0) {
            $('#qrcode').children().remove();
            $('#btn-download').css("display", "none");
        } else {
            $('#qrcode').children().remove();
            $('#btn-download').css("display", "block");
            $('#qrcode').qrcode({
                text: text,
                width: size,
                height: size,
            });
            var canvas = $('#qrcode > canvas')[0];
            $('#btn-download').attr("href", canvas.toDataURL("image/png"));
        }
    });
})

	
