// 1. Apa itu synchronous?
/* tata cara urutan eksekusi suatu code program dengan cara mengeksekusi baris code secara urut satu persatu sesuai urutan code yang ditulis*/ 

// 2. Apa itu asynchronous?
/* Asynchronous adalah tata cara eksekusi yang hasil eksekusi atau output tidak selalu berdasarkan urutan kode, 
tetapi berdasarkan waktu proses. Eksekusi dengan asynchronous tidak akan membloking atau menunggu suatu 
perintah sampai selesai. Daripada menunggu, asynchronous akan mengeksekusi perintah selanjutnya. */

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
/* Berdasarkan sumber yaitu https://developer.mozilla.org/ dikatakan bahwa asynchronous dapat diterapkan pada browser */

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
/*
first log:  1
first log:  2
first log:  3
first log:  4
first log:  5
second log:  6
second log:  6
second log:  6
second log:  6
second log:  6
 */

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
/*terjadinya ketidak samaan hasil output dikarenakan i dideklarasi dengan menggunakan var yang sehingga i menjadi bersifat global
 dan proses second log berjalan setelah i diubah oleh proses first log*/

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// for (var i = 1; i<=5; i++) {
//     console.log("first log: ", i); // 01 - Pertama
//     setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
//   }

for (let i = 1; i<=5; i++) {
  console.log("first log: ", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}
  