let links_tab = document.getElementsByClassName('l_tab');
for(let l = 0; l < links_tab.length; l++) {
    links_tab[l].addEventListener("click", (e)=>{
        const t0 = document.getElementById('articles-content').getBoundingClientRect().top + scrollY;
        const t = document.getElementById("tab"+e.target.id.slice(5)).getBoundingClientRect().top + scrollY;
        document.documentElement.scrollTop = t-t0+5;
    });
}



function checkScroll() {
    let blocks = document.querySelectorAll(".tab-block");
    let otstup = document.getElementById("articles-content").getBoundingClientRect().top + scrollY;
    
    for(let b = 0; b < blocks.length; b++) {
        let id_b = blocks[b].id.slice(3);
        let y = blocks[b].getBoundingClientRect().top;
        let link_tab = document.getElementById("l_tab"+id_b);
        if( y <= otstup && otstup < y + blocks[b].offsetHeight ) {
            link_tab.classList.add("active");
        } else {
            link_tab.classList.remove("active");
        }
    }
}

document.body.onscroll = checkScroll;
