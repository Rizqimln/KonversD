const inputHari = document.getElementById('inputHari');
const btnHitung = document.getElementById('btnHitung');
const resultBox = document.getElementById('resultBox');
const dom = document.getElementById('dom');
const funImg = document.getElementById('funImg');

btnHitung.addEventListener('click', () => {
    const hari = parseInt(inputHari.value);

    if (isNaN(hari) || hari < 0) {
        alert("Mohon masukkan angka hari yang valid!");
        return;
    }

    let tahun = Math.floor(hari / 365);
    let sisaHari = hari % 365;

    let bulan = Math.floor(sisaHari / 30);
    sisaHari = sisaHari % 30;

    let minggu = Math.floor(sisaHari / 7);
    sisaHari = sisaHari % 7;

    let hasil = [];

    if (tahun !== 0) {
        hasil.push(`<strong>${tahun}</strong> tahun`);
    }
    if (bulan !== 0) {
        hasil.push(`<strong>${bulan}</strong> bulan`);
    }
    if (minggu !== 0) {
        hasil.push(`<strong>${minggu}</strong> minggu`);
    }
    if (sisaHari !== 0 || hari === 0) {
        hasil.push(`<strong>${sisaHari}</strong> hari`);
    }

    dom.innerHTML = hasil.join(', ');
    
    resultBox.classList.add('show');

    funImg.classList.remove('show');
    setTimeout(() => {
        funImg.classList.add('show');
    }, 50);
});

inputHari.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnHitung.click();
    }
});
