
import $ from 'jquery';

export default function () {
    $(document).ready(function () {
        $('.gal-item').click(function (e) {
            e.preventDefault();
            if($(this).hasClass('big-size')){
                $('.overlay').fadeOut(400);
                $(this).removeClass('big-size')
            }else {
                $(this).addClass('big-size');
                $('.overlay').fadeIn(400);
            }
        });

        $('.overlay').click(function (e) {
            $('.overlay').fadeOut(400);
            $('.big-size').removeClass('big-size');
        })
    })
}
