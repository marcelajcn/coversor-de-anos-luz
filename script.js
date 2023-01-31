var nome = prompt(
    "Olá! Seja bem vindo ao Conversor Anos Luz.\n \nPor favor, digite o seu nome"
  );
  var distancia = prompt(
    "Olá " +
      nome +
      "! \n \nDigite abaixo a distância em ANOS-LUZ, para saber o seu correspondente em QUILÔMETROS! ex: [XX.XX - nao use vírgulas ;) ]"
  );
  var valorDoAnoLuz = 7461000000000;
  var valorConvertido = valorDoAnoLuz * distancia;
  valorConvertido = valorConvertido.toFixed(2);
  
  alert(
    nome +
      ", a distância aproximada de " +
      distancia +
      " Anos-Luz é de:\n \n" +
      valorConvertido +
      " km"
  );
  