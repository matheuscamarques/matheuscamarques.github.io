/* consent.js */
document.addEventListener('DOMContentLoaded', function() {
    var consentBanner = document.getElementById('cookie-consent-banner');
    var acceptBtn = document.getElementById('accept-cookie-btn');
    var declineBtn = document.getElementById('decline-cookie-btn');

    // Check localStorage for existing consent and update GA accordingly
    var existingConsent = localStorage.getItem('cookie_consent');
    if (existingConsent === 'accepted') {
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
            });
        }
        consentBanner.style.display = 'none';
    } else if (existingConsent === 'declined') {
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
            });
        }
        consentBanner.style.display = 'none';
    } else {
        // If no consent found, display banner for user to make a choice
        consentBanner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'accepted');
        consentBanner.style.display = 'none';
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
            });
            gtag('event', 'cookie_consent_accepted', {
                'event_category': 'cookie_consent',
                'event_label': 'user_accepted'
            });
        }
    });

    declineBtn.addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'declined');
        consentBanner.style.display = 'none';
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
            });
            gtag('event', 'cookie_consent_declined', {
                'event_category': 'cookie_consent',
                'event_label': 'user_declined'
            });
        }
    });
});
