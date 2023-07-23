let info = document.getElementById('info');
let mobilee = document.getElementById('mobile')
let larguraJanela = window.innerWidth;
const bMobile = document.getElementById('bMobile')


if (larguraJanela >= 900) {
    mobilee.style.display = 'none'
}

else if (larguraJanela <= 500) {
    info.style.display = 'none'
}

function mobile() {
    bMobile.classList.remove('hidden')
    mobilee.display = 'none'
}

function back() {
   bMobile.classList.add('hidden')
}