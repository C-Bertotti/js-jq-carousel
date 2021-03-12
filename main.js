$(
    function () {
        //funzioni immagini
        function nextImage () {
            var imgActive = $('.images img.active');
            imgActive.removeClass('active');
            if ( imgActive.hasClass('last') == true  ) {
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

        //funzioni bullet
        function nextBullet () {
            var bulletActive = $('.nav i.active');
            bulletActive.removeClass('active');
            if ( bulletActive.hasClass('last') == true  ) {
                $('.nav i.first').addClass('active');
            } else {
                bulletActive.next().addClass('active');
            }
        }
        
        function prevBullet () {
            var bulletActive = $('.nav i.active');
            bulletActive.removeClass('active');
            if ( bulletActive.hasClass('first') == true ) {
                $('.nav i.last').addClass('active');
            } else {
                bulletActive.prev().addClass('active');
            }
        }

        //azioni immagini
        var next = $('.next');
        var prev = $('.prev');

        next.click(
            function() {
                nextImage();
                nextBullet();
            } 
        );

        prev.click(
            function() {
                prevImage();
                prevBullet();
            } 
        );

        //funzioni bullet/img
        //se clicco su un bullet ad esso viene applicata la classe active 
        // al bottone viene attribuita una posizione nella lista alla quale corrisponde l'immagine alla quale viene data active.
        var bullet = $('.nav i.fas.fa-circle');
        bullet.click(
            function () {
                bullet.removeClass('active');
                var img = $('.images img');
                var imgIndex = bullet.index($(this));
                $(this).addClass('active');
                img.removeClass('active');
                img.eq(imgIndex).addClass('active');                  
            }
        );




    }
);
