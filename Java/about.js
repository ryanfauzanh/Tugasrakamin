console.log("about rakamin");

let nilaiAcak = [];
for (let i = 1; i <= 100; i++) {
  let nilai = Math.floor(Math.random() * 20);
  nilaiAcak.push(nilai);
}
console.log([nilaiAcak.length]);
console.log(nilaiAcak);
