



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

    s.innerHTML = payload


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


addListeners('.clickBar', '#009879', ['T', 'E', "ST"], [["Lora", [["Test", "Data", "Real"]]]])