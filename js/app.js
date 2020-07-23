$(function () {

    var leftElements = $('.panel-positive').find('.list-element');
    var listGood = $('.list-good');
    var listPositive = $('.list-positive');

    leftElements.on('click', function () {
        if ($(this).parent().hasClass('list-positive')) {
            listGood.append(this);
        } else {
            listPositive.append(this);
        }
    });

    var rightElements = $('.panel-negative').find('.list-element');
    var listBad = $('.list-bad');
    var listNegative = $('.list-negative');

    rightElements.on('click', function () {
        if ($(this).parent().hasClass('list-negative')) {
            listBad.append(this);
        } else {
            listNegative.append(this);
        }
    });
});