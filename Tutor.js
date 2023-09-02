let kota = "makassar";
console.log(kota);
let nilai1 = 8;
let nilai2 = 5;
let total = nilai1 * nilai2;
console.log(total);
nilai1 = "0";
nilai2 = "11";
nilai3 = true;
total = nilai1 + nilai2 + nilai3;
console.log(total);

let IPK = 2.5;

let grade = IPK > 3.5 ? "cumlaude" : IPK >= 3 && IPK <= 3.5 ? "BAIK" : "CUKUP";

console.log(grade);

const a = 3;

const b = -2;

console.log(a > 0 || b > 0);

function checkStateOfWater(temperature) {
  if (temperature >= -100 && temperature <= 0) {
    return "Beku";
  } else if (temperature >= 1 && temperature <= 100) {
    return "Cair";
  } else if (temperature >= 101 && temperature <= 500) {
    return "Uap";
  } else {
    return "Tidak Terdefinisi";
  }
}
