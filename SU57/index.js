"use strict";
// <=soal no1=>
// let kelas = ["0.Index","1","2","3","4","5.Dimas","6","7","8","9","10.Juhadi","11","12","13","14","15.David","15","16","17","18","20.Reva"];
// let angka = [];

// for (let i = 0; i < kelas.length; i++) {
//   if (kelas[i]) {
//     angka.push(kelas[i]);
//   }
// }

// console.log(angka);


// <==soal no2==>
// let bilangan = prompt(6);

// if (bilangan % 2 === 0) {
//   alert(bilangan + ' adalah bilangan genap');
// } else {
//   alert(bilangan + ' adalah bilangan ganjil');
// }


// <===soal no3===>
// let umur = prompt('Masukkan umur');

// if (umur <= 10) {
//   document.write('Anak-anak');
// } else if (umur <= 18) {
//   document.write('Remaja');
// } else if (umur <= 35) {
//   document.write('Dewasa');
// } else if (umur <= 65) {
//   document.write('Parubaya');
// } else {
//   document.write('Tua');
// }


// <====soal no4====>
// let hitungLuasPersegiPanjang = (panjang, lebar) => panjang * lebar ;

// let panjang = 10;
// let lebar = 5;
// let luasPersegiPanjang = hitungLuasPersegiPanjang(panjang, lebar);

// document.write(`panjang:${panjang},<br> lebar:${lebar},<br> luaspersegipanjang:${luasPersegiPanjang}`);

// <=====soal no 5=====>
// for (let q = 0; q <= 10; q++) {
//     for (let f = 0; f <= 10; f++) {
//       if ((q == 0 && f > 0 && f < 10) || (q < 6 && q < 10 && f == 0) || (q == 5 && f > 0 && f < 10) || (q > 5 && q > 5 && f == 9) || (q == 10 && f < 10 && f < 10)) {
//         document.write(' * ');
//       } else {
//         document.write(' _ ');
//       }
//     }
//     document.write('<br>');
//   }
  


  
  

// <======soal no6======>
// for (let i = 0; i <= 10; i++) {
//     for (let y = 0; y <= 10; y++) {
//       if (y+i==10||y==i)
    
//         {
//         document.write(' * ');
//       } else {
//         document.write(' _ ');
//       }
//     }
//     document.write('<br>');
//   }