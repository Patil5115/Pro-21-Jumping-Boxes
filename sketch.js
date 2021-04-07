var music;
var surface1,surface2,surface3,surface4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
createCanvas(800,600);
    
    surface1 = createSprite(750,30,150,20);
    surface1.shapeColor= "green";
    surface2 = createSprite(750,100,150,20);
    surface2.shapeColor= "red";
    surface3 = createSprite(30,750,150,20);
    surface3.shapeColor= "blue";
    surface4 = createSprite(750,30,150,20);
    surface4.shapeColor= "yellow";
    //create 4 different surfaces
  


    //create box sprite and give velocity

}

function draw() {
    background(rgb(0,0,0));
    //create edgeSprite
    
    



    //add condition to check if box touching surface and make it box

drawSprites();
}
