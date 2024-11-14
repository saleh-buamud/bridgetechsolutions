document.addEventListener('DOMContentLoaded', function () {
    // عمل "active" للروابط في النافبار
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // عمل "active" للروابط في الفوتر
    var footerLinks = document.querySelectorAll('.footer .nav-link');
    
    footerLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            footerLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

  document.addEventListener('DOMContentLoaded', function() {
        var toggler = document.querySelector('.navbar-toggler');
        var barsIcon = toggler.querySelector('.fa-bars');
        var timesIcon = toggler.querySelector('.fa-times');

        toggler.addEventListener('click', function() {
            if (toggler.classList.contains('collapsed')) {
                barsIcon.classList.remove('d-none');
                timesIcon.classList.add('d-none');
            } else {
                barsIcon.classList.add('d-none');
                timesIcon.classList.remove('d-none');
            }
        });
    });
