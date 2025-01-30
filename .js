document.addEventListener('DOMContentLoaded', () => {
    const mapButtons = document.querySelectorAll('.map-button');

    mapButtons.forEach(button => {
        button.addEventListener('click', () => {
            const link = button.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
});