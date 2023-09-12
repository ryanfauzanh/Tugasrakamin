let proses = 1000;

const download = new Promise((resolve, reject) => {
  if (proses > 80) {
    resolve("task mendekati selesai");
  } else {
    reject("task gagal di eksekusi");
  }
});

download.then((result) => {
  console.log(result);
});

download.catch((error) => {
  console.log(error);
});

const firstProses = new Promise((resolve, reject) => {
  resolve("0%");
});
const secondProses = new Promise((resolve, reject) => {
  resolve("50%");
});
const lastProses = new Promise((resolve, reject) => {
  resolve("100%");
});

Promise.all([firstProses, secondProses, lastProses]).then((result) => {
  console.log(result);
});

//proses promise chaining

let statue = 0;
const belajar = new Promise((result, reject) => {
  statue += 30;
  result(statue);
});

belajar
  .then((result) => {
    console.log("statue sudah " + result + "%");
    return result + 30;
  })
  .then((result) => {
    console.log("statuse sudah " + result + "%");
    return result + 30;
  })
  .then((result) => {
    console.log("statuse sudah " + result + "%");
    return result + 30;
  })
  .then((result) => {
    console.log("status sudah " + result + "%");
    if (result >= 100) {
      console.log("belajar telah usai");
    }
  });

const startPlayGame = (nama) => {
  return new Promise((result, reject) => {
    result(" start a game from " + nama + " now");
  });
};

let nama1 = "google";
let nama2 = "mozilla";
let nama3 = "microsoft";

Promise.all([
  startPlayGame(nama1),
  startPlayGame(nama2),
  startPlayGame(nama3),
]).then((result) => {
  for (let game of result) {
    console.log(game);
  }
  console.log("main sudah selesai");
});

//membuat asynchronus kembali normal

async function startGame(nama) {
  let status = await startPlayGame(nama);
  console.log("async await" + status);
}

startGame(nama1);
