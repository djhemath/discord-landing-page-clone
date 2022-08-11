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

function main() {
    setUpMobileMenu();
}

document.addEventListener("DOMContentLoaded", main);