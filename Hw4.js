//Buatlah 100 nilai random (1 sampai 50) pada 1 array
let nilairandom = [];
for (let i = 1; i <= 100; i++) {
  let nilai = Math.floor(Math.random() * 50);
  nilairandom.push(nilai);
}
console.log([nilairandom.length]);
console.log(nilairandom);

// pecah bilangan ganjil genap
const angkaGenap = [];
const angkaGanjil = [];
for (let i = 0; i < nilairandom.length; i++) {
  if (i % 2 === 0) {
    angkaGenap.push(nilairandom[i]);
  } else {
    angkaGanjil.push(nilairandom[i]);
  }
}
console.log("angka genap:", angkaGenap);
console.log([angkaGenap.length]);
console.log("angka ganjil:", angkaGanjil);
console.log([angkaGanjil.length]);

//min, max, total, rata-rata
function minimal(arr) {
  let minValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
}

function maksimal(arr) {
  let maxValue = arr[0];
  for (let i = 1; i > arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

function total(arr) {
  let nilai = 0;
  for (i = 0; i < arr.length; i++) {
    nilai += arr[i];
  }
  return nilai;
}

function rataRata(arr) {
  let nilai = 0;
  for (i = 0; i < arr.length; i++) {
    nilai += arr[i];
  }
  return total(arr) / arr.length;
}

console.log("min di angka genap:", minimal(angkaGenap));
console.log("min di angka ganjil:", minimal(angkaGanjil));

console.log("max di angka genap:", maksimal(angkaGenap));
console.log("max di angka ganjil:", maksimal(angkaGanjil));

console.log("total dari angka genap:", total(angkaGenap));
console.log("total dari angka ganjil:", total(angkaGanjil));

console.log("rata rata dari angka genap:", rataRata(angkaGenap));
console.log("rata rata dari angka ganjil:", rataRata(angkaGanjil));

// perbandingan
console.log("perbandingan:");

if (minimal(angkaGenap) > minimal(angkaGanjil))
  console.log("- nilai min dari angka genap > angka ganjil:");
else {
  console.log("- nilai min dari angka genap < angka ganjil");
}

if (maksimal(angkaGenap) > maksimal(angkaGanjil))
  console.log("- nilai max dari angka genap > angka ganjil:");
else {
  console.log("- nilai max dari angka genap < angka ganjil");
}

if (total(angkaGenap) > total(angkaGanjil))
  console.log("- nilai total dari angka genap > angka ganjil:");
else {
  console.log("- niali total dari angka genap < angka ganjil");
}

if (rataRata(angkaGenap) > rataRata(angkaGanjil))
  console.log("- nilai rata-rata dari angka genap > angka ganjil:");
else {
  console.log("- nilai rata-rata dari angka genap < angka ganjil");
}
