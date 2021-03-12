$(
    function () {
        function nextImage () {
            var imgActive = $('.images img.active');
            imgActive.removeClass('active');
            if ( imgActive.hasClass('last') == true ) {
                $('.images img.first').addClass('active');
            } else {
                imgActive.next().addClass('active');
            }
        }
        
        function prevImage () {
            var imgActive = $('.images img.active');
            imgActive.removeClass('active');
            if ( imgActive.hasClass('first') == true ) {
                $('.images img.last').addClass('active');
            } else {
                imgActive.prev().addClass('active');
            }
        }

        var next = $('.next');
        var prev = $('.prev');

        next.click(
            function() {
                nextImage();
            } 
        );

        prev.click(
            function() {
            } 
        );








    }
);
