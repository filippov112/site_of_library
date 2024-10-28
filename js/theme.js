function changeStyle(dark, light) {
    let temp1 = getComputedStyle(document.documentElement).getPropertyValue(light);
    let temp2 = getComputedStyle(document.documentElement).getPropertyValue(dark);
    document.documentElement.style.setProperty(light, temp2);
    document.documentElement.style.setProperty(dark, temp1);
}

function changeTheme(event, a = false) {
    var elem = document.querySelector(".theme-switch-label");
    elem.classList.toggle("bi-moon-fill");
    elem.classList.toggle("bi-sun-fill");
    changeStyle('--color-text','--light--color-text');
    changeStyle('--color-text-revert','--light--color-text-revert');
    changeStyle('--color-show-sidebar','--light--color-show-sidebar');
    changeStyle('--color-bg','--light--color-bg');
    changeStyle('--color-bg2','--light--color-bg2');
    changeStyle('--color-input','--light--color-input');
    changeStyle('--color-after-header-link','--light--color-after-header-link');
    changeStyle('--color-card-link','--light--color-card-link');
    changeStyle('--color-vk-button','--light--color-vk-button');
    changeStyle('--color-vk-button-bg','--light--color-vk-button-bg');
    changeStyle('--color-header-btn-border','--light--color-header-btn-border');
    changeStyle('--background-header','--light--background-header');
    changeStyle('--color-book-card','--light--color-book-card');
    changeStyle('--color-card-title','--light--color-card-title');
    changeStyle('--color-ft-str','--light--color-ft-str');
    changeStyle('--color-ft-str-hv','--light--color-ft-str-hv');
    
    if (!a) {
        localStorage.setItem('lightTheme', String((Number(localStorage.getItem('lightTheme'))+1)%2));
    }
}