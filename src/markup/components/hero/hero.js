import $ from 'jquery';

export default function () {
    $(document).ready(function (e) {
        $('.item-header').click(function (e) {
            $(this).parent().find('.left-menu__sub-list').slideToggle();
            $(this).toggleClass('drop-down');
            e.stopPropagation();
        })
    })
}
