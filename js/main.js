$(function () {



    $("#testimonials .owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        margin: 40,
        nav: false,
        center: true,
    });

    $(window).scroll(function () {
        if ($("header").offset().top > 50) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });

    // Navbar hamburger logic
    $(".hamburger").click(function () {
        $("header .nav-list").toggleClass("active");
    });


    // Numbers countup effect
    const countingNumbers = document.querySelectorAll(".numbers .number h3[data-value]");
    let interval = 2000;
    const countingOptions = {
        threshold: 0,
        rootMargin: "0% 0% -10% 0%"
    };
    const countingOnScroll = new IntersectionObserver(function (entries, countingOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                let startValue = 0;
                let endValue = parseInt(entry.target.getAttribute("data-value"));
                let duration = Math.floor(interval / endValue);
                let counter = setInterval(function () {
                    startValue++;
                    entry.target.innerHTML = startValue;
                    if (startValue === endValue) {
                        clearInterval(counter);
                    }
                }, duration);
                countingOnScroll.unobserve(entry.target);
            };
        });
    }, countingOptions);

    countingNumbers.forEach(countingNumber => {
        countingOnScroll.observe(countingNumber);
    });

    // Scroll animations
    const transitions = document.querySelectorAll(".transition");
    const transitionOptions = {
        threshold: 0,
        rootMargin: "0% 0% -10% 0%"
    };
    const transitionOnScroll = new IntersectionObserver(function (entries, transitionOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("transition-active");
                countingOnScroll.unobserve(entry.target);
            };
        });
    }, transitionOptions);

    transitions.forEach(transition => {
        transitionOnScroll.observe(transition);
    });

    // Services hover effect
    $("#services .card").hover(function () {
        $(this).find("p").toggleClass("visible");
        $(this).find("h3").toggleClass("hidden");
        $(this).find(".service-overlay").toggleClass("darker");
        $(this).find("img").toggleClass("hovered");
    });

    // Portfolio isotope filter
    var $container = $('#gallery .images');
    $container.isotope({
        filter: '.1',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('#gallery .categories a').click(function () {
        $('.categories .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    // Nivo Lightbox 
    // $('#gallery .item a').nivoLightbox({
    //     effect: 'slideDown',
    //     keyboardNav: true,
    // });


    // Slick slider
    $('#clients .logos-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        // swipeToSlide: true,
        dots: true,
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
