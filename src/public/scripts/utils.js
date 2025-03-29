document.getElementById('show-info').addEventListener('click', () => {
    drownDown('searchinfo', 'dropdownIcon');
})



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".bar").forEach(bar => {
        const targetWidth = bar.getAttribute("data-width");
        bar.style.setProperty("--target-width", targetWidth);
        bar.classList.add("animated-bar");
    });
});



function drownDown(e, n){
    console.log("a")
    const b = document.getElementById(e);
    const u = document.getElementById(n);
    c = b.classList;
    t = u.classList;
    if(c.contains("hide")){

        c.remove("hide")
        c.add("show")
        t.add("rotate")
        t.remove('rotateBack')
    } else {
        c.remove("show")
        c.add("hide")
        t.remove("rotate")
        t.add("rotateBack")
    }
}