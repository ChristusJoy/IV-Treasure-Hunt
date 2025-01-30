document.addEventListener('DOMContentLoaded', () => {
    const spotNumber = new URLSearchParams(window.location.search).get('spot') || 
                       window.location.pathname.match(/spot(\d+)\.html/)[1];
    
    document.getElementById('spotNumber').textContent = spotNumber;
    
    const spotImage = document.getElementById('spotImage');
    spotImage.src = `spot${spotNumber}.png`;
    spotImage.alt = `Spot ${spotNumber} Image`;
});