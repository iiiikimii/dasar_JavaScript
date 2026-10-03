// Tugas 1
alert ("Input Ukuran Persegi Panjang dan Hitunglah Luasnya");

while (true) {
    let panjang = prompt("Masukkan Panjang Persegi Panjang");
    let lebar = prompt("Masukkan Lebar Persegi Panjang");

    let luas = panjang * lebar;

    let jawaban = prompt("Masukkan jawaban anda");

    if(jawaban == luas) {
        alert("Jawaban anda benar");
    } else {
        alert("Jawaban anda salah");
    }

    let repeat = confirm("Apakah anda ingin mengulang?");
    if(repeat == false) {
        break;
    }
}

// Tugas 2
let myArray = [20, 21, 22, 23, 24, 25];
let result = 0;
document.write("<h3>Penjumlahan Seluruh Elemen Array</h3>");
document.write("<p>Array : " + myArray.toString() + "</p>");

for (let i = 0; i < myArray.length; i++) {
    result += myArray[i];
}

document.write("<p>Hasil Penjumlahan : " + result + "</p>");

// Tugas 3
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = 0;

let genap = [];
let ganjil = [];

document.write("<h3>Pemisahan Bilangan Ganjil dan Genap</h3>");
document.write("<p>Diketahui Array : " + arr.toString() + "</p>");

while (x < arr.length) {
    if(arr[x] % 2 == 0) {
        genap.push(arr[x]);
    } else {
        ganjil.push(arr[x]);
    }
    x++;
}

document.write("<h3>Hasil Pemisahan</h3>");
document.write("<p>Genap : " + genap.toString() + "</p>");
document.write("<p>Ganjil : " + ganjil.toString() + "</p>");

//Tugas 4
switch (new Date().getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Where are you living!?");
}