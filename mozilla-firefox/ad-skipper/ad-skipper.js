function skipAd() {
    const skipButton = document.getElementsByClassName('.ytp-skip-ad-button')[0];

    if (skipButton && skipButton.style.display !== 'none') {
        skipButton.click();
        console.log('Ad skipped!')
    }
}

setInterval(skipAd, 1000);
console.log('Youtube Ad skipper extension running!')
