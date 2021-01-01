function preload (){

var ball = loadImage ("polygon.png");





}
function setup(){


}

function draw(){

    canvas (500, 500);
    background("white");

    

     //level two

     block8 = new Block(330, 235, 30, 40);
     block9 = new Block(360, 235, 30, 40);
     block10 = new Block(390, 235, 30, 40);
     block11 = new Block(420, 235, 30, 40);
     block12 = new Block(450, 2325, 30, 40);

     //level 3
     block13 = new Block(360, 195, 30, 40);
     block14 = new Block(390, 195, 30, 40);
     block15 = new Block(34200, 195, 30, 40);

     //top
     block16 = new Block(390, 195, 30, 40);





    ball.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

}