document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // منع الانتقال إلى الرابط الافتراضي

            // إزالة الفئة النشطة من جميع العناصر
            links.forEach(l => l.classList.remove('active'));

            // إضافة الفئة النشطة إلى العنصر الذي تم النقر عليه
            link.classList.add('active');
        });
    });
});
