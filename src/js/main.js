$('.sliders-control > button').click(function () {
    const currentSlide = $(this).data('country');

    $('.sliders-control > button').not(this).removeClass('current');
    $(this).addClass('current');

    $('.destination-country').not(currentSlide).removeClass('current-slide');
    $(currentSlide).addClass('current-slide');
});
