// document.addEventListener('DOMContentLoaded', function () {
//     // عمل "active" للروابط في النافبار
//     var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
//     navLinks.forEach(function (link) {
//         link.addEventListener('click', function () {
//             navLinks.forEach(function (link) {
//                 link.classList.remove('active');
//             });
//             this.classList.add('active'); document.addEventListener("DOMContentLoaded", function () {
                let currentUrl = window.location.href;
                let navLinks = document.querySelectorAll(".navbar .nav-link, .footer .nav-link");

                navLinks.forEach(function (link) {
                    if (currentUrl.includes(link.href)) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            
//         });
//     });

//     // عمل "active" للروابط في الفوتر
//     var footerLinks = document.querySelectorAll('.footer .nav-link');
    
//     footerLinks.forEach(function (link) {
//         link.addEventListener('click', function () {
//             footerLinks.forEach(function (link) {
//                 link.classList.remove('active');
//             });
//             this.classList.add('active');
//         });
//     });
// });

 