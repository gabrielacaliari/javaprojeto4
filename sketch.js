function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("violet");
  fill("lightblue");
  textSize(60);
  textAlign(CENTER,CENTER);
  let maximo = width;
  let minimo = 0;
  let palavra = "EU AMO FÍSICA <3";
  let aparecer = map(mouseX, 0, width,1, palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 300,300);
}



