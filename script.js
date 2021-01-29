const shareButton = document.querySelector('#share-button');
const returnButton = document.querySelector('#return-button');
const footerShare = document.querySelector('.footer-share');

shareButton.addEventListener('click', (e) => {
    footerShare.classList.remove('hide-share');
    footerShare.classList.add('reveal-share');
})

returnButton.addEventListener('click', () => {
    footerShare.classList.remove('reveal-share');
    footerShare.classList.add('hide-share');
})

