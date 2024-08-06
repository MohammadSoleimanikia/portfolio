const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const page = document.querySelector('#page');

burger.addEventListener('click', () => {
    if (menu.classList.contains('mobileNavShow')) {
        menu.classList.remove('mobileNavShow');       
    } else {
        menu.classList.add('mobileNavShow');
    }
});

const contents = document.querySelectorAll('.content');

// Function to check if the device is mobile

function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}
// Loop through all elements with the class "content"
contents.forEach(content => {
    // only works on desktop with mouse hover
    if (!isMobile()) {
        // For desktop users, show content on hover
        content.addEventListener('pointerenter', () => {
            content.classList.add('showContent');
        });

        content.addEventListener('pointerleave', () => {
            content.classList.remove('showContent');
        });
    } else {
        // For mobile devices, always show content
        content.classList.add('showContent');
    }
});