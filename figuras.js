// Código del cuadrdo

console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm.`);
const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm.`);
const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrada}cm².`);
console.groupEnd();
// Código del triángulo

console.group("Triangulo");
const ladotrianguloUno = 6;
const ladotrianguloDos = 6;
const trianguloBase = 4;

console.log(
  `Los lados del triángulo miden: ${ladotrianguloUno}cm, ${ladotrianguloDos}cm y ${trianguloBase}cm.`
);

const trianguloAltura = 5.5;
console.log(`La altura del triangulo es: ${trianguloAltura}cm.`);
const perimetroTriangulo = ladotrianguloUno + ladotrianguloDos + trianguloBase;
console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm.`);
const areaTriangulo = (trianguloBase * trianguloAltura) / 2;
console.log(`El área del triangulo es: ${areaTriangulo}cm².`);
console.groupEnd();

// Código del circulo
console.group("Circulo");
const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo}cm.`);
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es: ${diametroCirculo}cm.`);
const pi = Math.PI;
console.log(`PI es: ${pi}`);
const perimetroCirculo = diametroCirculo * pi;
console.log(`El perimetro del circulo es: ${perimetroCirculo}cm.`);
const areaCirculo = pi * (radioCirculo * radioCirculo);
console.log(`El área del circulo es: ${areaCirculo}cm².`);
console.groupEnd();
