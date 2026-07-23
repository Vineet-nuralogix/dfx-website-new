var APP_CONFIG = {
    // Point IDs to hide from the results page entirely.
    excludePoints: [
        "HEIGHT",
        "WEIGHT",
        "WAIST_CIRCUM"
    ],
    videos: [
        "assets/videos/Anura-MagicMirror.mp4",
        "assets/videos/SHAQHD-1080p.mp4"
    ],
    qrCodeResults: {
        // Set to true to show a Share button on the results screen that generates a QR code.
        enabled: true,
        // URL base for the QR code. The encoded results (?r=), measurement ID (?mid=), and
        // standalone flag (?standalone=1) are appended automatically.
        // Leave empty to use the current page's own URL
        url: "https://vineet-nuralogix.github.io/dfx-website-new/wellness-microsite/"
    }
};
