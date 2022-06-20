$('#reviewCarrousel').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: $('#reviewDots'),
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

