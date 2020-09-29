// 1 sushi
// 2 modernist
// 3 allrounder
// 4 imagenatyve
// 5 lifestyle
// 6 axit
// 7 paul lapkin
// 8 uniquetech
// 9 pink shoes
// 10 platform debesys
// 11 the band
// 12 new season looks
// 13
console.log("labas");
const mygtukas= document.getElementById('mygtukas');
mygtukas.addEventListener('click', gaukSkaiciu);
const vietaPrintinimui = document.getElementById('kur')

function gaukSkaiciu() {
    console.log('funkcijos vidus');
    const lentele = document.getElementById('slepti');
    lentele.style.display = "block";

    const reiksme= parseInt(document.getElementById('kiekis').value)
    console.log(reiksme);
   for(let i=0; i<reiksme; i++){
        const eilute = document.createElement('tr');
        vietaPrintinimui.appendChild(eilute);

        const stulpelis1 = document.createElement('td');
        let skaicius =  Math.floor(Math.random() * 10) + 1;
        stulpelis1.textContent = skaicius;
        eilute.appendChild(stulpelis1);
        const stulpelis2 = document.createElement('input');
        eilute.appendChild(stulpelis2);


    }

};


