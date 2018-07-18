import $ from 'jquery';

export default function() {
    $(document).ready(function () {
        $('#contacts').click(function (event) {
            event.preventDefault();
                $(this).closest('.main-nav__drop-down-list').fadeOut(100);
                $(this).closest('.main-nav__nav-item').removeClass('isDown');
            $('.overlay').fadeIn(400,
                function () {
                    $('.popup')
                        .css('display', 'block')
                        .animate({opacity: 1, top: '50%'}, 200);
                });
        });

        $('.header__close, .overlay').click(function () {
            $('.popup').animate({opacity: 0, top: '45%'}, 200,
                    function () {
                        $(this).css('display', 'none');
                        $('.overlay').fadeOut(400);
                    }
                );
        });


        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 27) {
                $('.popup')
                .animate({opacity: 0, top: '45%'}, 200,
                    function () {
                        $(this).css('display', 'none');
                        $('.overlay').fadeOut(400);
                    }
                );
            }
        });
        /* let inputsTel = $('#mask');
        Inputmask({
            'mask': '+7(999) 999-99-99',
            showMaskOnHover: false
        }).mask(inputsTel);
        */
    });
}
