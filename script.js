const inputData = document.querySelector(".inputtext");
const translateBtn = document.querySelector(".translatebtn");
const translateData = document.querySelector(".output");

translateBtn.addEventListener("click", () => {
  const API = `https://api.funtranslations.com/translate/klingon.json?text=${inputData.value}`;
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      translateData.innerHTML = data.contents.translated;
    })
    .catch((err) => {
      alert("Something went error. Try again Later");
      console.log(err);
    });
});
