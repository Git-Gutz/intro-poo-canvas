const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */

canvasOOP.height = "200"; //window_height;
canvasOOP.width = "300"; //window_width;

canvasRandom.height = "200";
canvasRandom.width = "300";

canvasMultiple.height = "200";
canvasMultiple.width = "300";

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

class Circle {
  //Carga los valores predeterminados del objeto
  constructor(x, y, radius, color, text, backcolor,textColor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textColor = textColor;
  }

  //Método para renderizar el objeto
  draw(context) {
    //Rellena el objeto
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false); //Flase quiere decir que va en sentido anti ohrario
    context.fillStyle = this.backcolor;
    context.fill();

    //Dibuja la línea del objeto
    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    //Dibuja el texto al centro del objeto
    context.textAlign = "center"; //justificacion del texto en horizontal
    context.textBaseline = "middle";//justificación del texto en vertical
    context.font = "bold 20px cursive";// fuente, negritas, 20 pixeles cursiva
    context.fillStyle = this.textColor;//color de relleno
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, "red", "Tec", "rgb(66, 135, 245)","rgb(66, 245, 66)");
miCirculo.draw(ctx);


// --- LIENZO 2: Un círculo aleatorio que no se sale de sus coordenadas ---
let maxRadius = Math.min(canvasRandom.width, canvasRandom.height) / 2; 
let randomRadius = Math.floor(Math.random() * (maxRadius - 20) + 20);

// Restricción de coordenadas basada en el radio
let randomX = Math.random() * (canvasRandom.width - (randomRadius * 2)) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - (randomRadius * 2)) + randomRadius;

let miCirculoRandom = new Circle(randomX, randomY, randomRadius, "green", "Tec", "rgb(83, 186, 52)", "rgb(255, 230, 0)");
miCirculoRandom.draw(ctxRandom);

let MacCircles = 10;
let arrayCircle = [];

for (let i = 0; i < MacCircles; i++) {
  // 1. Definimos un radio mínimo y un máximo deseado
  let minRadius = 15;
  let maxRadius = 50; 
  
  // 2. Medida de seguridad: El radio nunca puede ser mayor a la mitad del lienzo
  let limiteAbsoluto = Math.min(canvasMultiple.width, canvasMultiple.height) / 2;
  if (maxRadius > limiteAbsoluto) {
    maxRadius = limiteAbsoluto;
  }

  // 3. Generamos el radio aleatorio con los nuevos límites
  let randomRadius = Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius;
  
  // 4. Calculamos X e Y (tu lógica aquí es perfecta para evitar que se salgan)
  let randomX = Math.random() * (canvasMultiple.width - (randomRadius * 2)) + randomRadius;
  let randomY = Math.random() * (canvasMultiple.height - (randomRadius * 2)) + randomRadius;

  // Generamos un color aleatorio vibrante
  let randomHue = Math.floor(Math.random() * 361);
  let randomFillColor = `hsl(${randomHue}, 70%, 50%)`; 
  let randomStrokeColor = `hsl(${randomHue}, 70%, 30%)`; 

  // Instanciamos el círculo
  let miCirculoMultiple = new Circle(
    randomX, 
    randomY, 
    randomRadius, 
    randomFillColor, 
    i + 1, 
    randomStrokeColor, 
    "white"
  );

  arrayCircle.push(miCirculoMultiple);
  arrayCircle[i].draw(ctxMultiple);
}