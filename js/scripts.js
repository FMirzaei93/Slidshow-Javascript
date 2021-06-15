$(document).ready(function() {

    let imgWidth = $('#slider ul li img').width();
    var active_element = $('div#slider ul li.active-li');

    $('img#arrow_right').on('click', function(event) {

        if (active_element.next().length != 0) {
            active_element.animate({ 'margin-left': `-${imgWidth}` }, 'slow');
            active_element.removeClass('active-li');
            active_element.next().addClass('active-li');
            active_element = active_element.next();
        }
    });

    $('img#arrow_left').on('click', function(event) {

        if (active_element.prev().length != 0) {
            active_element.prev().animate({ 'margin-left': '0px' }, 'slow');
            active_element.removeClass('active-li');
            active_element.prev().addClass('active-li');
            active_element = active_element.prev();
        }
    });

})