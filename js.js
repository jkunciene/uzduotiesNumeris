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
const button= document.getElementById('button')
button.addEventListener('click', getRandom)

function getRandom() {
    console.log("funkcijos vidus");
    return Math.floor(Math.random() * 10) + 1;
}
