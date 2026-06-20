document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', () => {
        // Replace with your actual APK download link
        const apkUrl = 'https://github.com/fayadgamer13/Halal_Finder/releases/download/1.4.0/app-latest-1.4.0.apk';
        
        // Simple feedback for the user
        console.log("Starting download...");
        
        // Trigger the download
        window.location.href = apkUrl;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadwindowsBtn');

    downloadBtn.addEventListener('click', () => {
        // Replace with your actual APK download link
        const apkUrl = 'https://github.com/fayadgamer13/Halal_Finder/releases/download/1.4.0w/east_halalscan_installer.exe';
        
        // Simple feedback for the user
        console.log("Starting download...");
        
        // Trigger the download
        window.location.href = apkUrl;
    });
});
