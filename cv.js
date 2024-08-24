document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    // Thay đổi màu nền khi nhấp chuột vào phần tử
    container.addEventListener('click', function() {
        container.classList.toggle('color-change');
    });

    // Thay đổi màu nền sau một khoảng thời gian tự động (ví dụ: mỗi 5 giây)
    setInterval(function() {
        container.classList.toggle('color-change');
    }, 5000);
});
