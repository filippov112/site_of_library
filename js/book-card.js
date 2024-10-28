let cards = document.querySelectorAll(".book-card-img");
let descs = document.querySelectorAll(".book-card");
for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', (e)=>{
        let desc = document.getElementById("card-desc-" + String(e.target.id.slice(5)));
        desc.classList.add("book-card-active");
    });
 
}
for(let i = 0; i < descs.length; i++) {
    descs[i].addEventListener('mouseover', (e)=>{
        if(e.target.id.slice(3).match(/^\d+$/g)) {
            let desc = document.getElementById("card-desc-" + String(e.target.id.slice(3)));
            if(desc.classList.contains("book-card-active"))
                desc.classList.remove("book-card-active");
        }
    });
}