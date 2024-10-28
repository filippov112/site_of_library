let videos = document.getElementsByClassName("vmf-click");
for(let i = 0; i < videos.length; i++) {
    videos[i].addEventListener('click', (e)=>{
        let id_c = e.target.id.substring(2, e.target.id.indexOf("-"));
        let id_l = e.target.id.substring(e.target.id.indexOf("-")+1);
        console.log(id_c+" "+id_l);
        let fr = document.getElementById("vf"+id_c+"-"+id_l);
        let fr_block = document.getElementById("vsb-"+id_c);
        let fr_title = document.getElementById("vcvt-"+id_c);
        let fr_frame = document.getElementById("vff-"+id_c);

        fr_title.textContent = fr.title;
        fr_frame.setAttribute("src", fr.getAttribute("src")+"?enablejsapi=1");
        fr_block.classList.add("show_video");
    });
}

let closeBtns = document.getElementsByClassName("vsb-close");
for(let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', (e)=>{
        let id_c = e.target.id.substring(5);
        let fr_block = document.getElementById("vsb-"+id_c);
        fr_block.classList.remove("show_video");
        document.getElementById('vff-'+id_c).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
}