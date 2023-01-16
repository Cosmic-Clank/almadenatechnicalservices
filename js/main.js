$(function () {

    $("#clients .owl-carousel").owlCarousel({
        loop: true,
        items: 5,
        margin: 40,
        nav: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $("#testimonials .owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        margin: 40,
        nav: true,
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
});