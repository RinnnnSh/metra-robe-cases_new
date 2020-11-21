$(document).ready(function () {


  console.log('Hi');


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
      responsive: {
        // "740": {
        //   fixedWidth: 380
        // },
        "1300": {
          items: 2,
          fixedWidth: 560
        }
      }
    });
  }


  $('.pic__item').click(function () {
    var industryVideo = $(this).attr('data-video');
    $.fancybox.open({
      type: "inline",
      src: ".modal__container[data-video='" + industryVideo + "']"
    });
  })


})
