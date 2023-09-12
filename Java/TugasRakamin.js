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

function checkFuelType(vehicleType, engineCC) {
  if (vehicleType === "plat kuning" || vehicleType === "motor") {
    return "BBM subsidi";
  } else if (engineCC < 1500) {
    return "PERTAMAX";
  } else {
    return "PERTAMAX turbo";
  }
}

// Contoh penggunaan
const cekTekananAir = -50;
console.log(
  `Kondisi air pada suhu ${cekTekananAir} adalah ${checkStateOfWater(
    cekTekananAir
  )}`
);

const vehicleType = "plat kuning";
const engineCC = 1250;
console.log(
  `Jenis bahan bakar untuk kendaraan dengan tipe ${vehicleType} dan CC ${engineCC} adalah ${checkFuelType(
    vehicleType,
    engineCC
  )}`
);
