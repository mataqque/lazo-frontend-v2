const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: false,
    pauseOnHover: false,
    margin: 20,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};