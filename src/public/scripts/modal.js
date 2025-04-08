



function showModal(e, d, h, c, p) {
    const t = document.getElementById(e);
    const k = t.querySelector('#modalHeader');
    k.classList.remove("bg");
    k.classList.add(`bg-[${d}]`);
    k.querySelector('h2').innerHTML = p


    s = t.querySelector('#modalData')
    s.innerHTML = '';


    const payload = []

    const row = `
    <div class="w-full mt-2">
    <div class=" grid grid-cols-3 text-center font-bold">
    <a href="#" id="legendone">${h[0]}</a>
    <span id="legendtwo">${h[1]}</span>
    <span id="legendthree">${h[2]}</span>
    </div>
    </div>
    `

    payload.push(row)
    c.forEach(element => {
        const row = `
                    <div class="py-2 grid grid-cols-3 text-center hover:bg-[#dedfe3] group transition">
                        <a href="#" class="group-hover:text-[#009879]">${element[0]}</a>
                        <span class="group-hover:text-[#009879]">${element[1]}</span>
                        <span class="group-hover:text-[#009879]">${element[2]}</span>
                    </div>
                    `
        payload.push(row)
    });
    s.innerHTML = payload.join("")


    // Show modal
    t.classList.remove("hidden")
    t.classList.add("flex")
}



function addListeners(e, c, h, d){
    a = document.querySelectorAll(e);

    
    a.forEach((r) => {
        l = []
        d.forEach((row) => {
            if (row[0] = r.innerHTML){
                l = row[1]
            }
        })
        r.addEventListener("click", () => {
            showModal('modal', c, h, l, `Details for ${r.innerText}`)
        })
    });
}

function closeModal(e, t, i, y){
    if(t){
        if(i !== y){
            return
        }
    }
    const r = document.getElementById(e).classList.add('hidden')
}



document.getElementById('modal').addEventListener('click', (event) => {
        closeModal('modal', true, event.originalTarget.id, 'modal')
})

document.getElementById('closeModalBtn').addEventListener('click', () => {
    closeModal('modal')
})

addListeners('.clickBar', '#009879', ['T', 'E', "ST"], [["Lora", [["Test", "Data", "Real"]]]])



document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (e) => {
        var buttonId = e.target.id;
        console.log(buttonId);
        document.getElementById('modal-container').classList = [buttonId];
        document.querySelector('body').classList.add('modal-active')
    });
});

document.getElementById('modal-container').addEventListener("click", (e) => {
    console.log("haaa");
    e.target.classList.add("out");
    document.querySelector('body').classList.remove('modal-active');
});