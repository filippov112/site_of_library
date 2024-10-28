document.body.onload = ()=>{
    // theme
    if (localStorage.getItem('lightTheme') === '1') {
        changeTheme(null, a = true);
    }
    const chbox = document.querySelector('.theme-switch'); 
    chbox.addEventListener('click',changeTheme);

    // max width
    document.documentElement.style.setProperty("--max-width", document.documentElement.clientWidth);
}