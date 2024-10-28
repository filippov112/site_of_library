let showButton = document.getElementById("show-sidebar");
let bodySidebar = document.getElementById("book-sidebar");


showButton.addEventListener('click', function() {
    bodySidebar.classList.toggle("book-side-on");
    bodySidebar.classList.toggle("book-side-off");
});

let list_f = document.querySelectorAll(".show-filter-block");
for(let f = 0; f < list_f.length; f++) {
    list_f[f].addEventListener('click', function(e) {
        let b = document.getElementById('block-f'+e.target.id.slice(6));
        b.classList.toggle('filter-open');
    });
}

let inps = document.querySelectorAll(".filter-2");
for(let i = 0; i < inps.length; i++) {
    inps[i].addEventListener("change", function(e) {
        let l = document.getElementById("filter-range-year-label-"+e.target.id.slice(18));
        l.value = e.target.value;
    });
}

let in_n = document.querySelectorAll(".filter-2-input");
for(let i = 0; i < in_n.length; i++) {
    in_n[i].addEventListener("change", function(e) {
        let l = document.getElementById("filter-range-year-"+e.target.id.slice(24));
        l.value = e.target.value;
    });
}

let reset_b = document.getElementById("reset-filter");
reset_b.addEventListener('click', (e)=>{
    for(let i = 1; i<6; i++) {
        let filters = document.getElementsByClassName("filter-"+String(i));
        for(let j = 0; j < filters.length; j++) {
            filters[j].value = '';
            filters[j].checked = false;
            if(filters[j].id === "filter-lang-key-1") {
                filters[j].checked = true;
            }
            filters[j].classList.remove("autor-target");
        }

    }
});

let autors = document.getElementsByClassName("filter-autor");
for(let i = 0; i < autors.length; i++) {
    autors[i].addEventListener('click', (e)=>{
        e.target.classList.toggle("autor-target");
    });
}