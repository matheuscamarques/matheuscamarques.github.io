/* consent.js */
document.addEventListener('DOMContentLoaded', function() {
    var consentBanner = document.getElementById('cookie-consent-banner');
    var acceptBtn = document.getElementById('accept-cookie-btn');
    var declineBtn = document.getElementById('decline-cookie-btn');

    // Check if consent has already been given
    if (!localStorage.getItem('cookie_consent')) {
        consentBanner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'accepted');
        consentBanner.style.display = 'none';
        // Here you can add the code to initialize cookies or tracking scripts
    });

    declineBtn.addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'declined');
        consentBanner.style.display = 'none';
        // Here you can add the code to disable cookies or tracking scripts
    });
});
