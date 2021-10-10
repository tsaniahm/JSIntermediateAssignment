//NO 1
// const obj = {
//     fun1: function() {
//       console.log("fun1", this);
//     },
//     fun2: () => {
//       console.log("fun2", this);
//     }
//   };
  
//   obj.fun1();
//   obj.fun2();

// ANALISA:
/* Yang terjadi saat dijalankan adalah adalah pemanggilan object.fun1() akan menghasilkan 
output  fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }, sedangkan pemanggilan object.fun2() akan menghasilkan fun2 {} 
alias this tidak dapat memanggil sehingga isinya kosong, hal ini tentu saja membuat fun1 dan fun2 hasilnya berbeda, dan mengapa
bisa berbeda hasilnya adalah dikarenakan fun2 menggunakan arrow function yang tidak bisa digunakan sebagai sebuah method dan this juga tidak support dengan
arrow functions, sedangkan traditional function seperti pada fun1 dapat digunakan sebagai method dan this juga support untuk digunakan 
pada function ini
*/

//NO 2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
/*Encapsulation adalah pilar pada OOP dimana digunakan untuk membatasi akses secara langsung
ke properti atau method dari suatu object, Pilar OOP ini dibutuhkan untuk membatasi agar akses dari luar sehingga tidak dapat mengubah-ubah isi 
yang sudah ditetapkan didalam properti atau method suatu object*/
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
/*Abstraction adalah pilar pada OOP yang digunakan ketika kita ingin untuk menyembunyikan detail tertentu
dari suatu object atau method dan hanya menampilkan fungsionalitas atau fitur yang
penting dari object tadi*/
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
/*Inheritance adalah konsep OOP dimana Class mewariskan properti dan method nya ke class lainnya atau child lainnya. Pilar ini kita butuhkan
ketika ada behavior yang sama yang kita butuhkan, sehingga kita tidak perlu menuliskan ulang code tetapi bisa mewarisi atau mendapatkan dari
Class lain sebagai superclassnya */
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
/*Polymorphism adalah kemampuan untuk memiliki banyak bentuk, pada konsep OOP artinya bahwa method
yang diwariskan dapat diubah dengan berhaviour yang berbeda sesuai dengan child class yang dibuat, pilar ini kita butuhkan ketika kita
menginginkan suatu method melakukan hal secara fleksible dan bisa kita ubah isi methodnya, misal kita ingin melakukan output sapaan kepada Sania
dan Sonia, maka dapat digunakan method yang sama dengan isi format sapaan yg sama tetapi bisa fleksible nama yg dipanggil,
contoh "Halo ${nama]" => "Halo sania" untuk sania dan  "Halo Sonia" untuk Sonia*/

//NO 3 DONE
// class Phone { 
//     constructor(brand, storage, ram){
//         this.brand = brand;
//         this.storage = storage;
//         this.ram = ram;
//     }

//     getBrandName(){
//         return this.brand
//     }

//     setBrandName(lala){
//         this.brand = lala
//         return this.lala
//     }

//     printSpecification(){
//         return `Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`
//     }

//     setSpecification(storage, ram){
//         this.storage = storage
//         this.ram = ram;
//         return `Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`
//     }
// }

// const phone = new Phone("Skilvul Mobile co", 64, 4);

// console.log(phone.getBrandName());
// phone.setBrandName("SM.co")
// console.log(phone.getBrandName());

// console.log(phone.printSpecification());
// phone.setSpecification(32, 2);
// console.log(phone.printSpecification());

//NO 4
class Student {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
      this.courseOfferings = [];
    }
    
    takeNewCourse(courses) { 
      courses.decreaseQuota()
      return this.courseOfferings.push(courses)
    }
    
    takeATest() {}
    
    courseAttendance(course) {
      for(let i = 0; i< this.courseOfferings.length; i++){
        if(course == this.courseOfferings[i]){
          return 1
        }
      }
     }
  }
  
  class CourseOffering { 
      constructor(course, grade,attendance ){
          this.course = course
          this.grade = grade
          this.attendance  = attendance
      }
   }
  
  class Course { 
      constructor(subject, quota, attendance){
        this.subject = subject
        this.quota = quota
        this.attendance = attendance
      }
      
      getSubject(){
          return this.subject
      }

      getAttendance(){
        return this.attendance
      }

      decreaseQuota(){
        return this.quota - 1
      }
    }
  
  
  const biology = new Course("biology", 10, 3);
  const physics = new Course("physics", 10, 2);
  
  const johnWatson = new Student("john watson", "male");
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);
 