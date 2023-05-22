$(document).ready(function() {
    $('.page').on('mouseenter touchstart', function() {
        if($('.toggle-input').is(':checked')) {
            $('.page').each(function(i){
                $(this).click(function(event){
                    var x = event.pageX;
                    var y = event.pageY;
                    
                    var nextPage = i + 1;
                    if (nextPage >= $('.page').length){
                        nextPage = 0;
                    }
                    
                    $('.page:eq('+ nextPage +')').css('z-index', parseInt($(this).css('z-index')) + 1);
                    $('.page:eq('+ nextPage +')').css('clip-path', 'circle(0% at '+ x +'px '+ y +'px)');
                    
                    anime({
                        targets: $('.page')[nextPage],
                        update: function(anim) {
                        $('.page:eq('+ nextPage +')').css('clip-path', 'circle('+ (anim.progress*2) +'% at '+ x +'px '+ y +'px)');
                        }
                    });
                });
            });
            $('.toggle-off').removeClass('active');
            $('.toggle-on').addClass('active');
        } else {
            $('.page').unbind('click').click(function(event){
                
            });
            $('.toggle-off').addClass('active');
            $('.toggle-on').removeClass('active');
        }
    });
});
