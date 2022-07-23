const imc = (peso, altura) => {
  // let peso = 60;
  // let altura = 1.70;

  let calculo = () => {
    return peso / (altura * altura);
  };

  let estado = () => {
    console.log(calculo())
    if (calculo() < 18.5) {
      return 0;
    } else if (calculo() >= 18.5 && calculo() < 25) {
      return 1;
    } else if (calculo() >= 25 && calculo() < 30) {
      return 2;
    } else if (calculo() > 30) {
      return 3;
    }
  };

  return { calculo, estado };
};
