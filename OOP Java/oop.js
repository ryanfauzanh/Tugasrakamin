//Property

// class polygon {
//   constructor(age) {
//     this.name = "polygon";
//     this.age = "age";
//   }
// }
// const poly1 = new polygon(23);
// console.log(poly1.name);
// console.log(poly1.age);

//static

// class staticWithStaticMethod {
//   static staticProperty = "vallue";
//   static staticMethod() {
//     return "static method has been called";
//   }
//   static {
//     console.log("Class static initialization block called");
//   }
// }
// console.log(staticWithStaticMethod.staticProperty);
// console.log(staticWithStaticMethod.staticMethod());

//polymorphism macam bentuk textbox

// class Mobil {
//   constructor(produsen) {
//     this.produsen = produsen;
//   }
//   tempat() {
//     return "lokasi" + this.produsen + "memiliki 20 cabang di makassar";
//   }
// }

// class Motor extends Mobil {
//   //mewariskan class yang ada di awal
//   constructor(produsen) {
//     super(produsen); //mengisi constructor yang dibuat sebelumnya
//   }
//   lokasi() {
//     return "lokasi " + this.produsen + " memiliki 10 cabang di makassar";
//   }
// }

// const honda = new Motor("Honda");
// console.log(honda.tempat());

//notes: untuk memanggil method yang pertama perlu undefined method yang terakhir

//inheritance

// class Mobil {
//   constructor(merek, cc, harga) {
//     this.merek = merek;
//     this.cc = cc;
//     this.harga = harga;
//   }
//   penjualan() {
//     console.log(
//       "penjualan dengan cc " +
//         this.cc +
//         " adalah penjualan terbanyak dan mereknya adalah " +
//         this.merek
//     );
//   }
// }

// class Motor extends Mobil {
//   //mewariskan class yang ada di awal
//   constructor(merek, cc, harga, warna, panjang) {
//     super(merek, cc, harga); //mengisi constructor yang dibuat sebelumnya
//     this.warna = warna;
//     this.panjang = panjang;
//   }
// }

// const honda = new Motor("beat", 125, 11000000, "merah", 200);
// console.log(honda.merek);
// console.log(honda.cc);
// console.log(honda.harga);
// console.log(honda.warna);
// console.log(honda.panjang);
// honda.penjualan();

//encapsulasy untuk membatasi akses langsung ke inti

// function produk(nama, harga) {
//   //kata kunci public
//   var diskon = 40 / 100;
//   this.nama_pub = nama;
//   this.harga_pub = harga;

//   //var untuk privasi
//   var nama_pri = nama;
//   var harga_pri = harga;

//   this.detail_pub = function () {
//     return "nama " + nama + " harga " + (harga - harga * diskon);
//   };

//   function detail_pri() {
//     return "nama " + nama + " harga " + harga;
//   }
// }

// const tranksaksi = new produk("dominic br", 4000);
// console.log(tranksaksi.harga_pub);
// console.log(tranksaksi.nama_pri);
// tranksaksi.diskon = 100 / 100;
// console.log(tranksaksi.detail_pub());

// // console.log(tranksaksi.detail_pri());

// //Abstraction membbuat class atau method yang bersifat abstract

// class Person {
//   constructor(name) {
//     if (this.constructor === Person) {
//       throw new Error("tidak boleh menggunakan kelas abstract");
//     }
//     this.name = name;
//   }
//   greet() {
//     throw new Error("method abstrack belum di eksekusi");
//   }
// }

// class Teacher extends Person {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
//   // greet() {
//   //   console.log("hello bang nama saya " + this.name);
//   // }
// }

// const informatics = new Teacher("ryan", 30);
// informatics.greet();
// const student = new Person("nabila");
// console.log(informatics.name);
// console.log(student.age);

// class nilairandom{
//   constructor(iniLibraryInduk){
//   this.iniLibraryInduk = iniLibraryInduk
// }
// }
// let nilairandom = [];
// for (let i = 1; i <= 100; i++) {
//   let nilai = Math.floor(Math.random() * 50);
//   nilairandom.push(nilai);

// }

// console.log([nilairandom.length]);
// console.log(nilairandom);
// const library = new library()
// console.log()

// class RandomNumberArray {
//   constructor(length, maxValue) {
//     this.array = [];
//     this.length = length;
//     this.maxValue = maxValue;
//   }

//   generateRandomArray() {
//     for (let i = 0; i < this.length; i++) {
//       let nilai = Math.floor(Math.random() * this.maxValue);
//       this.array.push(nilai);
//     }
//   }
//   generateRandomNilai() {
//     for (let i = 0; i < nilairandom.length; i++) {
//       if (i % 2 === 0) {
//         angkaGenap.push(nilairandom[i]);
//       } else {
//         angkaGanjil.push(nilairandom[i]);
//       }
//     }
//   }

//   getLength() {
//     return this.array.length;
//   }

//   getArray() {
//     return this.array;
//   }
// }

// class angkaRandomGanjil extends RandomNumberArray {
//   constructor(length, maxValue, angkaGanjil, angkaGenap) {
//     super(length, maxValue);
//     this.angkaGanjil = [];
//     this.angkaGenap = [];
//   }
//   getGanjil() {
//     return this.angkaGanjil;
//   }

//   getGenap() {
//     return this.angkaGenap;
//   }
// }

// const randomGenap = new angkaRandomGanjil();
// randomGenap.getGanjil();

// // Membuat objek dari kelas RandomNumberArray
// const randomArray = new RandomNumberArray(2, 50);

// // Menghasilkan array dengan nilai acak
// randomArray.generateRandomArray();

// // Mendapatkan panjang array
// const length = randomArray.getLength();
// console.log(`Panjang Array: ${length}`);

// // Mendapatkan isi array
// const array = randomArray.getArray();
// console.log("Isi Array:", array);

// const angkaGenap = [];
// const angkaGanjil = [];
// for (let i = 0; i < nilairandom.length; i++) {
//   if (i % 2 === 0) {
//     angkaGenap.push(nilairandom[i]);
//   } else {
//     angkaGanjil.push(nilairandom[i]);
//   }
// }
// console.log("angka genap:", angkaGenap);
// console.log([angkaGenap.length]);
// console.log("angka ganjil:", angkaGanjil);
// console.log([angkaGanjil.length]);

class RandomNumberArray {
  constructor(length, maxValue) {
    this.array = [];
    this.length = length;
    this.maxValue = maxValue;
  }

  generateRandomArray() {
    for (let i = 0; i < this.length; i++) {
      let nilai = Math.floor(Math.random() * this.maxValue);
      this.array.push(nilai);
    }
  }

  generateRandomNilai() {
    const angkaGanjil = [];
    const angkaGenap = [];
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] % 2 === 0) {
        angkaGenap.push(this.array[i]);
      } else {
        angkaGanjil.push(this.array[i]);
      }
    }
    return { angkaGanjil, angkaGenap };
  }

  getLength() {
    return this.array.length;
  }

  getArray() {
    return this.array;
  }
}

class AngkaRandomGanjil extends RandomNumberArray {
  constructor(length, maxValue) {
    super(length, maxValue);
  }

  getGanjilDanGenap() {
    this.generateRandomArray();
    return this.generateRandomNilai();
    return;
  }
}

const randomGenap = new AngkaRandomGanjil(50, 50);
const { angkaGanjil, angkaGenap } = randomGenap.getGanjilDanGenap();

console.log("Angka Ganjil:", angkaGanjil);
console.log("Angka Genap:", angkaGenap);
