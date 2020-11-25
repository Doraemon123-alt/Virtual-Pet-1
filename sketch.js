var dog
var happyDog
var dogHappy
var database
var  foods
var foodStock
function preload()
{
  //load images here
  happyDog=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  var dog=createSprite(250,250,10,10)
  dog.addImage(happyDog)
  dog.scale=0.2

  

  database=firebase.database()

  foodStock=database.ref('Food')
foodStock.on("value",readStock)

  
}


function draw() {  
  background(46,138,87)
  
  drawSprites();
  //add styles here
  textSize(20)
  fill("yellow")
  stroke("yellow")
  text("Food Remaining:"+foodStock(),200,200)

}

function readStock(data)
{

foods=data.val()
}



function writeStock(x)
{

  if(x<=0)
  {
x=0
}
else
{
x=x-1

}

database.ref('/').update

Food:x



}

if(KeyWentDown(UP_ARROW))
{

  writeStock(foods)
  dog.addImage(dogHappy)



}


