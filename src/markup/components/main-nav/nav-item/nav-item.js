
import $ from 'jquery';

export default function () {
    $(document).ready(function () {
        $('.main-nav__nav-item').click(function (event) {
            $('.main-nav__nav-item').each(function () {
                $(this).find('.main-nav__drop-down-list').fadeOut(100);
                $(this).removeClass('isDown');
            });

            $(this).addClass('isDown');
            $(this).find('.main-nav__drop-down-list').fadeIn("slow");
            event.stopPropagation();
        });

        $(document).click(function (e) {
            if (e.target !== $('.main-nav__nav-item')) {
                e.preventDefault();
                $('.main-nav__nav-item').each(function () {
                    $(this).find('.main-nav__drop-down-list').fadeOut(100);
                    $(this).removeClass('isDown');
                });
            }
        });

        $('.main-nav__menu-trigger').click(function () {
            $('.main-nav').slideToggle(100);
            $(window).resize(function () {
            })
        })


    })
}
