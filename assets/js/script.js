function setUpMobileMenu() {
    const hamburger = document.querySelector('[data-js-id="hamburger"]');
    const closeBtn = document.querySelector('[data-js-id="mobile-menu-close"]');
    const mobileMenu = document.querySelector('[data-js-id="mobile-menu"]');
    const backDrop = document.querySelector('[data-js-id="backdrop"]');

    backDrop.style.display = "none";
    mobileMenu.style.right = "-90vw";

    function toggleMenu(open) {
        if(open) {
            console.log('here');
            mobileMenu.style.right = "0vw";
            backDrop.style.display = "block";
            document.body.style.overflowY = "hidden";
        } else {
            mobileMenu.style.right = "-90vw";
            backDrop.style.display = "none";
            document.body.style.overflowY = "auto";
        }
    }

    hamburger.addEventListener("click", () => {
        toggleMenu(true);
    });

    closeBtn.addEventListener("click", () => {
        toggleMenu(false);
    });

    backDrop.addEventListener("click", () => {
        toggleMenu(false);
    });
}

function setUpAnimationOnScroll() {
    const elements = [
      document.querySelector('[data-js-id="feature-1"]'),
      document.querySelector('[data-js-id="feature-2"]'),
      document.querySelector('[data-js-id="feature-3"]'),
      document.querySelector('[data-js-id="feature-4"]'),
    ];

    elements.forEach(element => {
        element.classList.add("fadeIn-setup");
    });

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("fadeIn");
                observer.unobserve(entry.target);
            }
        });
    }

    const animateOnScrollObserver = new IntersectionObserver(callback, {
        rootMargin: "-150px",
    });
    elements.forEach(element => {
        animateOnScrollObserver.observe(element);
    });
}

function setUpOSDetection() {
    const userAgent = window.navigator?.userAgent;
    const platform = window.navigator?.userAgentData?.platform || window.navigator.platform;
    const mac = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windows = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const ios = ['iPhone', 'iPad', 'iPod'];

    let os = null;
    let isMobile = false;

    if (mac.indexOf(platform) !== -1) {
        os = 'Mac';
    } else if (ios.indexOf(platform) !== -1) {
        os = 'iOS';
        isMobile = true;
    } else if (windows.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
        isMobile = true;
    } else if (/Linux/.test(platform)) {
        os = 'Linux';
    }

    const platformElements = document.querySelectorAll('[data-download-platform]');

    platformElements.forEach(element => {
        let text = "";

        if(isMobile) {
            if(os === "Android") {
                text = "Download from Google Play";
            } else if(os === "iOS") {
                text = "Download from App Store";
            }
        } else {
            text = `Download for ${os}`;
        }

        element.textContent = text;
    })

}

function main() {
    setUpMobileMenu();
    setUpAnimationOnScroll();
    setUpOSDetection();
}

document.addEventListener("DOMContentLoaded", main);