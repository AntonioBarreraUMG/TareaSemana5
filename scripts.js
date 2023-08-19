// Ejercico 1
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const calcularBmi = document.getElementById("calcular-bmi");
const resultadoBmi = document.getElementById("resultado-bmi");

function bmi(peso, altura) {
  const bmi = peso / (altura * altura);
  if (bmi < 18.5) {
    return "Bajo de peso";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Sobrepeso";
  } else {
    return "Obeso";
  }
}

calcularBmi.addEventListener("click", e => {
  e.preventDefault();
  const pesoValue = parseInt(peso.value);
  const alturaValue = parseInt(altura.value);
  const bmiValue = bmi(pesoValue, alturaValue);
  resultadoBmi.innerHTML = bmiValue;
  peso.value = "";
  altura.value = "";
});

// Ejercicio 2
const likesCantidad = document.getElementById("likes");
const calcularLikes = document.getElementById("calcular-likes");
const resultadoLikes = document.getElementById("resultado-likes");

const likes = cantidad => {
  if (cantidad > 1000) {
    return Math.floor(cantidad / 1000) + "K";
  } else if (cantidad > 1000000) {
    return Math.floor(cantidad / 1000000) + "M";
  } else {
    return cantidad;
  }
};

calcularLikes.addEventListener("click", e => {
  e.preventDefault();
  const likesCantidadValue = parseInt(likesCantidad.value);
  const likesValue = likes(likesCantidadValue);
  resultadoLikes.innerHTML = likesValue;
  likesCantidad.value = "";
});

// Ejercicio 3
const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");
const validarDatos = document.getElementById("validar-datos");
const resultadoValidacion = document.getElementById("resultado-validacion");

const validar = (usuario, contrasena) => {
  if (usuario === "admin" && contrasena === "123456") {
    return "Bienvenido";
  } else {
    return "Datos incorrectos";
  }
};

validarDatos.addEventListener("click", e => {
  e.preventDefault();
  const usuarioValue = usuario.value;
  const contrasenaValue = contrasena.value;
  const validacion = validar(usuarioValue, contrasenaValue);
  resultadoValidacion.innerHTML = validacion;
  usuario.value = "";
  contrasena.value = "";
});


// Ejercicio 4
const edad = document.getElementById("edad");
const ingresos = document.getElementById("ingresos");
const calcularImpuestos = document.getElementById("calcular-impuestos");
const resultadoImpuestos = document.getElementById("resultado-impuestos");

const impuestos = (edad, ingresos) => {
  if (edad >= 18 && ingresos >= 1000) {
    return ingresos * 0.4;
  } else {
    return 0;
  }
};

calcularImpuestos.addEventListener("click", e => {
  e.preventDefault();
  const edadValue = parseInt(edad.value);
  const ingresosValue = parseInt(ingresos.value);
  const impuestosValue = impuestos(edadValue, ingresosValue);
  resultadoImpuestos.innerHTML = impuestosValue;
  edad.value = "";
  ingresos.value = "";
});

// Ejercicio 5
const arregloImprimir = document.getElementById("arreglo-imprimir");
const imprimirArreglo = document.getElementById("imprimir-arreglo");
const resultadoArregloImprimir = document.getElementById("resultado-arreglo-imprimir");

const imprimir = arreglo => {
  let resultado = "";
  for (let i = 0; i < arreglo.length; i++) {
    resultado += `<li>${arreglo[i]}</li>`;
  }
  return resultado;
};

imprimirArreglo.addEventListener("click", e => {
  e.preventDefault();
  const arregloImprimirValue = arregloImprimir.value;
  const arreglo = arregloImprimirValue.split(",");
  const resultado = imprimir(arreglo);
  resultadoArregloImprimir.innerHTML = resultado;
  arregloImprimir.value = "";
});

// Ejercicio 6
const texto = document.getElementById("texto");
const caracter = document.getElementById("caracter");
const calcularCaracteres = document.getElementById("calcular-caracteres");
const resultadoCaracteres = document.getElementById("resultado-caracteres");

const caracteres = (texto, caracter) => {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === caracter) {
      contador++;
    }
  }
  return contador;
};

calcularCaracteres.addEventListener("click", e => {
  e.preventDefault();
  const textoValue = texto.value;
  const caracterValue = caracter.value;
  const caracteresValue = caracteres(textoValue, caracterValue);
  resultadoCaracteres.innerHTML = caracteresValue;
  texto.value = "";
  caracter.value = "";
});

// Ejercicio 7
const arregloSumar = document.getElementById("arreglo-sumar");
const sumarArreglo = document.getElementById("sumar-arreglo");
const resultadoArregloSumar = document.getElementById("resultado-arreglo-sumar");

const sumar = arreglo => {
  let resultado = 0;
  for (let i = 0; i < arreglo.length; i++) {
    resultado += parseInt(arreglo[i], 10);
  }
  return resultado;
};

sumarArreglo.addEventListener("click", e => {
  e.preventDefault();
  const arregloSumarValue = arregloSumar.value;
  const arreglo = arregloSumarValue.split(",");
  const resultado = sumar(arreglo);
  resultadoArregloSumar.innerHTML = resultado;
  arregloSumar.value = "";
});


// Ejercicio 8
const arregloMutiplicar = document.getElementById("arreglo-multiplicar");
const multiplicarArreglo = document.getElementById("multiplicar-arreglo");
const resultadoArregloMultiplicar = document.getElementById("resultado-arreglo-multiplicar");

const multiplicar = arreglo => {
  let resultado = 1;
  for (let i = 0; i < arreglo.length; i++) {
    resultado *= parseInt(arreglo[i], 10);
  }
  return resultado;
};

multiplicarArreglo.addEventListener("click", e => {
  e.preventDefault();
  const arregloMultiplicarValue = arregloMutiplicar.value;
  const arreglo = arregloMultiplicarValue.split(",");
  const resultado = multiplicar(arreglo);
  resultadoArregloMultiplicar.innerHTML = resultado;
  arregloMutiplicar.value = "";
});

// Ejercicio 9
const arregloSumarRango = document.getElementById("arreglo-sumar-rango");
const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const sumarRangoArreglo = document.getElementById("sumar-rango-arreglo");
const resultadoArregloSumarRango = document.getElementById("resultado-arreglo-sumar-rango");

const sumarRango = (arreglo, inicio, fin) => {
  let resultado = 0;
  for (let i = inicio; i <= fin; i++) {
    resultado += parseInt(arreglo[i], 10);
  }
  return resultado;
};

sumarRangoArreglo.addEventListener("click", e => {
  e.preventDefault();
  const arregloSumarRangoValue = arregloSumarRango.value;
  const arreglo = arregloSumarRangoValue.split(",");
  const inicioValue = parseInt(inicio.value);
  const finValue = parseInt(fin.value);
  const resultado = sumarRango(arreglo, inicioValue, finValue);
  resultadoArregloSumarRango.innerHTML = resultado;
  arregloSumarRango.value = "";
  inicio.value = "";
  fin.value = "";
});

// Ejercicio 10
const arregloMaximo = document.getElementById("arreglo-maximo");
const encontrarMaximo = document.getElementById("encontrar-maximo");
const resultadoArregloMaximo = document.getElementById("resultado-arreglo-maximo");

const maximo = arreglo => {
  let maximo = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
      maximo = arreglo[i];
    }
  }
  return maximo;
  // return Math.max(...arreglo);
};

encontrarMaximo.addEventListener("click", e => {
  e.preventDefault();
  const arregloMaximoValue = arregloMaximo.value;
  const arreglo = arregloMaximoValue.split(",");
  const resultado = maximo(arreglo);
  resultadoArregloMaximo.innerHTML = resultado;
  arregloMaximo.value = "";
});
