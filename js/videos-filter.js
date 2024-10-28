let showB = document.getElementById("show-videos-filter");
let vblock = document.getElementById("vf-block");
showB.addEventListener('click', (e)=>{
    vblock.classList.toggle("vf-block-show");
});

let cats = document.getElementsByClassName("filter-cat");
for(let i = 0; i < cats.length; i++) {
    cats[i].addEventListener('click', (e)=>{
        e.target.classList.toggle("autor-target");
    });
}

let reset_b = document.getElementById("v-reset-filter");
let filters = document.getElementsByClassName("filter-cat");
reset_b.addEventListener('click', (e)=>{
    for(let j = 0; j < filters.length; j++) {
        filters[j].classList.remove("autor-target");
    }
});