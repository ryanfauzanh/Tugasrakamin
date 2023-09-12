// console.log("hi Brother");

// setTimeout(function () {
//   console.log("time is defined");
// }, 3000);

// console.log("dont mind");

// const notify = () => {
//   console.log("task done");
// };

// const download = (url, callback) => {
//   console.log(`downloading from ${url}....`);

//   callback();
// };

// const url = "contoh.com";
// download(url, notify);

// nested callback
// const download = (url, callback) => {
//   console.log(`downloading from ${url}....`);
//   callback();
// };
// const url1 = "contoh1.com";
// const url2 = "contoh2.com";
// const url3 = "contoh3.com";
// const url4 = "contoh4.com";

// download(url1, function () {
//   download(url2, function () {
//     download(url3, function () {
//       download(url4, function () {
//         console.log("task sudah dijalankan");
//       });
//     });
//   });
// });

const anime = () => {
  console.log("sedang dimainkan");
};

const startAnime = (hero, callbackKarakter) => {
  console.log("play aniime " + hero + " now");
  callbackKarakter();
};

let hero = "naruto";
let hero1 = "boruto";
let hero2 = "blue lock";

startAnime(hero, function () {
  startAnime(hero1, function () {
    startAnime(hero2, function () {
      console.log("sudah waktunya selesai");
    });
  });
});
