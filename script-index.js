   window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            var navbar = document.getElementById("navbar");
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                navbar.classList.add("navbar-scrolled");
            } else {
                navbar.classList.remove("navbar-scrolled");
            }
        }
        document.addEventListener("DOMContentLoaded", function () {
                let currentUrl = window.location.href;
                let navLinks = document.querySelectorAll(".navbar .nav-link, .footer .nav-link");

                navLinks.forEach(function (link) {
                    if (currentUrl.includes(link.href)) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            });