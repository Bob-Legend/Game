var player, playerImage;
var car, carImage;
var police, policeImage;
var house, house1Image, house2Image, house3Image, house4Image, house5Image, house6Image, house7Image, house8Image;
var badGuy, badGuyImage;
var park, parkImage;
var truck, truck1Image, truck2Image, truck3Image;
var road, roadImage;
var money, moneyImage
var moneyRobbed = 0;

function preload(){
    playerImage = loadAnimation("images/Runner-1.png", "images/Runner-2.png");
    moneyImage = loadImage("images/cash.png")
    carImage = loadImage("images/car1.jpg");
    policeImage = loadImage("images/police.jpg");
    house1Image = loadImage("images/house1.jpg");
    house2Image = loadImage("images/house2.jpg");
    house3Image = loadImage("images/house3.jpg");
    house4Image = loadImage("images/house4.jpg");
    house5Image = loadImage("images/house5.jpg");
    house6Image = loadImage("images/house6.jpg");
    house7Image = loadImage("images/house7.jpg");
    house8Image = loadImage("images/house8.jpg");
    parkImage = loadImage("images/park.jpg");
    truck1Image = loadImage("images/truck1.png");
    truck2Image = loadImage("images/truck2.jpg");
    truck3Image = loadImage("images/truck3.png");
    badGuyImage = loadImage("images/badGuy_updated1.jpg");
    roadImage = loadImage("images/track.jpg");
}

function setup(){
    road = createSprite(displayWidth/2,-displayHeight*4,displayWidth, displayHeight*10000);
    road.addImage(roadImage);
    road.scale = 2;
    player = createSprite(100, 200, 10, 10);
    player.addAnimation("running", playerImage);
    player.visible = false;
    player.scale = 0.05;
    car = createSprite(250, 350, 10, 10);
    car.addImage(carImage);
    car.scale = 0.5;
    police = createSprite(car.x, car.y+300, car.width, car.height);
    police.addImage(policeImage);
    police.scale = 0.5;
    police.visible = true;
    badGuy = createSprite(50,150, 10, 10);
    badGuy.addImage(badGuyImage);
    badGuy.visible = false;
    badGuy.scale = 0.5;
    park = createSprite(400,400, 10, 10);
    park.addImage(parkImage);
    park.visible = false;
    truck1 = createSprite(700,100, 10, 10);
    truck1.addImage(truck1Image);
    truck1.scale = 0.5;
    truck1.visible = false;
    truck2 = createSprite(300,240, 10, 10);
    truck2.addImage(truck2Image);
    truck2.visible = false;
    truck3 = createSprite(300,240, 10, 10);
    truck3.addImage(truck3Image);
    truck3.visible = false;
    money = createSprite(50, 100, 10, 10);
    money.addImage(moneyImage);
    money.scale = 0.08;
    money.visible = false;
    
    house1 = createSprite(-50,240, 10, 10);
    house1.addImage(house1Image);
    house1.visible = false;
    house2 = createSprite(-50,240, 10, 10);
    house2.addImage(house2Image);
    house2.visible = false;
    house3 = createSprite(-50,240, 10, 10);
    house3.addImage(house3Image);
    house3.visible = false;
    house4 = createSprite(-50,240, 10, 10);
    house4.addImage(house4Image);
    house4.visible = false;
    house5 = createSprite(-50,240, 10, 10);
    house5.addImage(house5Image);
    house5.visible = false;
    house6 = createSprite(-50,240, 10, 10);
    house6.addImage(house6Image);
    house6.visible = false;
    house7 = createSprite(-50,240, 10, 10);
    house7.addImage(house7Image);
    house7.visible = false;
    house8 = createSprite(-50,240, 10, 10);
    house8.addImage(house8Image);
    house8.visible = false;

    //road.visible = false;
    
    

    car.depth = road.depth+1;
    

}

function draw(){
    createCanvas(displayWidth-20,displayHeight-30);
    console.log(displayHeight);

        if(keyIsDown(UP_ARROW)){
            car.y = car.y-0.000001;
            police.y = police.y-0.000001;
            road.y = road.y +100;
            house1.y = house1.y +50;
            house2.y = house2.y +50;
            house3.y = house3.y +50;
            house4.y = house4.y +50;
            house5.y = house5.y +50;
            house6.y = house6.y +50;
            house7.y = house7.y +50;
            house8.y = house8.y +50;
    
        };
    
        if(keyIsDown(LEFT_ARROW)){
            car.x = car.x-10;
            police.x = police.x-10;
        }
        if(keyIsDown(RIGHT_ARROW)){
            car.x = car.x+10;
            police.x = police.x+10;
        }   
        if(player.isTouching(money)){
            money.lifetime = 0;
            moneyRobbed+=100
        }
    
        if(road.y > 600){
            road.y = height/2;
        }
        camera.position.x = displayWidth/2;
        camera.position.y = car.y;
    
        player.x = mouseX;
        player.y = mouseY;
        
     
    
    
    
        if(player.isTouching(badGuy)){
            moneyRobbed = 0;
        }
        drawSprites();
        textSize(20);
        fill("white");
        text("MoneyRobbed: "+ moneyRobbed, 800, 50)
        // image(roadImage,0,-displayHeight*4,displayWidth, displayHeight*5);
         if(frameCount % 200 === 0){
        var rand = Math.round(random(1,8));
        //console.log(rand);
            switch(rand){
            case 1: 
            house = new House(50, -50, house1);
            console.log(house.depth);
            console.log(road.depth);
            house.depth = car.depth;
            house.display();
            break;
            case 2:
            house = new House(50, -50, house2);
            console.log(house.depth);
            console.log(road.depth);
            house.depth = car.depth;
            house.display();
            break;
            case 3:
            house = new House(50, -50, house3);
            console.log(house.depth);
            console.log(road.depth);
            house.depth = car.depth;
            house.display();
            break;
            case 4: 
            house = new House(50, -50, house4);
            console.log(house.depth);
            console.log(road.depth);
            house.depth = car.depth;
            house.display();
            break;
            case 5: 
            house = new House(50, -50, house5);
            console.log(house.depth);
            console.log(road.depth);
            house.depth = car.depth;
            house.display();
            break;
            case 6: 
            house = new House(50, -50, house6);
            house.depth = car.depth;
            house.display();
            break;
            case 7: 
            house = new House(50, -50, house7);
            house.depth = car.depth;
            house.display();
            break;
            case 8: 
            house = new House(50, -50, house8);
            house.depth = car.depth;
            house.display();
            break;

            default:
                break;
        }

}
    
}
   
    

