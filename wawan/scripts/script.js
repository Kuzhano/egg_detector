const readtelur = document.querySelector(".readtelur");
const readsuhu = document.querySelector(".readsuhu");
const readcahaya = document.querySelector(".readcahaya");
const kipas = document.querySelector(".kipas");
const lampu = document.querySelector(".lampu");



// const db = firebase.database();
// const hasilref = db.ref('Hasil_Pembacaan').on('value', handleSuccess, handleError);

firebase.database().ref('Hasil_Pembacaan').on("value", (snap) => {

    // hasil.innerHTML += (`
    //         <div>Kelembaban: ${snap.val().kelembapan}</div>
    //         <div>Suhu: ${snap.val().suhu}</div>
    //         <br>
    //     `);

    // hasil.innerHTML = snap.numChildren();
    readtelur.innerHTML = '';
    readsuhu.innerHTML = '';
    readcahaya.innerHTML = '';
    kipas.innerHTML = '';
    lampu.innerHTML = '';



    snap.forEach((user) => {
        const cahaya = user.val().cahaya;
        const suhu = user.val().suhu;
        const ultrasonic = user.val().ultrasonic;

        readcahaya.innerHTML = (`${cahaya} Lux`);
        readsuhu.innerHTML = (`${suhu} °C`);
        readtelur.innerHTML = (`${ultrasonic}`);

        if (suhu > 35) {
            kipas.style.color = 'rgb(0, 208, 76)';
            kipas.innerHTML = "KIPAS NYALA";
        } else {
            kipas.innerHTML = "KIPAS MATI";
        }

        if (cahaya < 500) {
            lampu.style.color = 'rgb(0, 208, 76)';
            lampu.innerHTML = "LAMPU NYALA";
        } else {
            lampu.innerHTML = "LAMPU MATI";
        }
    });
});