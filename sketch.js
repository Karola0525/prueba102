var trex, trex_running, trex_collided;
// SEXTO crear variable groundImage y ground 2 , invisibleGround
var ground, ground2, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  // SEPTIMO CARGAR IMAGEN DEL PISO
  groundImage=loadImage("ground2.png");
}


function setup() {
  createCanvas(600, 200);
  
  //crear sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //agregar escala y posición al Trex
  trex.scale = 0.5;
  trex.x = 50
  
  //PRIMERO crear sprite de suelo
  ground = createSprite(200,180,400,20);
  // 4 tamaño del sprite
  /*ground2 = createSprite(300,180,400,20);
  ground2.shapeColor = "yellow"*/
 //QUINTO llamar imagen piso Y PONER EL CODIGO PARA QUE SE MUESTRE SIMETRICAMENTE 
  ground.addImage("ground",groundImage);
  ground.x=ground.width/2;
  // OCTAVO crea suelo y poner coordenadas suelo invisible
  invisibleGround=createSprite(200,190,400,10);
  //DECIMO VOLVER EL PISO INVISIBLE
  invisibleGround.visible=false;
}

function draw() {
  background(220);
  // hacer que Trex salte al presionar la barra espaciadora

  // SEGUNDO Dar velocidad en x en el piso PERO PRIMERO POSITIVA LUEGO NEGATIVA
  ground.velocityX=-2;
  // velocidad ground 2
  //ground2.velocityX=-2;
  // TERCERO  registrar velocidad en retroceso 
  //console.log(ground.x)
  //CUARTO  ajustar suelo para que se restaure
  if(ground.x<0){
    ground.x=ground.width/2;

  }
  // NOVENO evitar que Trex caiga
  trex.collide(invisibleGround);
  // 4 poner barra de color para mostrar movimiento
 /* if(ground2.x<0){
    ground2.x=ground2.width/2;

  }*/
 
  //DOCE hacer que el Trex salte al presionar la barra espaciadora y no se valla al infinito
  if(keyDown("space") && trex.y >=100) {
    trex.velocityY = -10;   
  }
  
  trex.velocityY = trex.velocityY + 0.8;
  
 // ONCE MOSTRAR POSISION EN Y DE TREX
 console.log(trex.y)
 //evitar que el Trex caiga 

  //trex.collide(ground);
  drawSprites();
}
