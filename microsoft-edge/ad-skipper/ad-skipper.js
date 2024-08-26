function skipAd() {
    const skipButton = document.querySelector('.ytp-skip-ad-button');

    if (skipButton && skipButton.style.display !== 'none') {
        skipButton.click();
        console.log('Ad skipped!')
    }
}

setInterval(skipAd, 1000);
console.log('Youtube Ad skipper extension running!')
