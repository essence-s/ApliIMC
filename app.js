let posicionCuadro = document.querySelectorAll(".cuadro");

let textIMC = document.querySelectorAll(".imcRe");

posicionCuadro.forEach((pCua) => {
  pCua.style.display = "none";
});

formuCAl.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!(peso.value == "" && altura.value == "")) {
    secfir.style.display = "none";
    secResult.style.display = "block";

    let { calculo, estado } = imc(peso.value, altura.value);

    textIMC.forEach((re) => {
      re.innerHTML = Number.parseFloat(calculo()).toFixed(2);
    });

    posicionCuadro.forEach((pCua) => {
      pCua.style.display = "none";
    });

    posicionCuadro[estado()].style.display = "block";
  }
});

regresobtn.addEventListener("click", function () {
  secfir.style.display = "block";
  secResult.style.display = "none";
});
