let showButton = document.getElementById("show-sidebar");
let bodySidebar = document.getElementById("articles-sidebar");
let sidebarTop = document.getElementById("sidebarTop");
let sidebarBottom = document.getElementById("sidebarBottom");

showButton.addEventListener('click', function() {
    bodySidebar.classList.toggle("art-side-on");
    bodySidebar.classList.toggle("art-side-off");

})