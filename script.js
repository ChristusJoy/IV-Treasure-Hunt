document.addEventListener('DOMContentLoaded', () => {
    const mapButtons = document.querySelectorAll('.map-button');
    const mainContainer = document.getElementById('mainContainer');

    mapButtons.forEach(button => {
        button.addEventListener('click', () => {
            const spotNumber = button.getAttribute('data-spot');
            if (spotNumber) {
                if (spotNumber === '10' || spotNumber === '11') {
                    window.location.href = 'bonus-spot.html';
                } else {
                    showSpotImage(spotNumber);
                }
            }
        });
    });

    function showSpotImage(spotNumber) {
        mainContainer.innerHTML = '';

        const spotContainer = document.createElement('div');
        spotContainer.className = 'spot-container';
        spotContainer.innerHTML = `
            <h1>Spot ${spotNumber}</h1>
            <div class="spot-image-container">
                <img src="spot${spotNumber}.png" alt="Spot ${spotNumber}" class="spot-image">
            </div>
            <button class="back-button">Back to Map</button>
        `;

        mainContainer.appendChild(spotContainer);

        const backButton = spotContainer.querySelector('.back-button');
        backButton.addEventListener('click', () => {
            window.location.reload();
        });
    }
});