$(document).ready(function () {

  if ($('div').is('.pic__slider')) {
    var picSlider = tns({
      container: '.pic__slider',
      items: 1,
      loop: false,
      controls: true,
      controlsText: ["", ""],
      nav: false,
      mouseDrag: false,
      speed: 500,
      fixedWidth: false,
      items: 2,
      fixedWidth: 420
    });
  }


  $('.pic__item').click(function () {
    var pics = $(this).attr('data-pic');
    $(this).fancybox({
      type: "inline",
      src: ".modal__container[data-pic='" + pics + "']"
    });
  })
})
