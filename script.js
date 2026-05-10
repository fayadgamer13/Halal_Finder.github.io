document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', () => {
        // Replace with your actual APK download link
        const apkUrl = 'https://github.com/fayadgamer13/Halal_Finder/releases/download/1.0.1/app-debug.apk';
        
        // Simple feedback for the user
        console.log("Starting download...");
        
        // Trigger the download
        window.location.href = apkUrl;
    });
});