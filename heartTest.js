function preload(){
    fullHeart = loadImage('fullHeart.png');
    halfHeart = loadImage('halfHeart.png');
    threeQuartHeart = loadImage('34Heart.png');
    oneQuartHeart = loadImage('14Heart.png');
}

function setup(){
    createCanvas(1000, 800);
}

function heart(health){
    if(health > 8){ //definite first 2 hearts, determine third heart 
        image(fullHeart, 0, 30, 50, 50);
        image(fullHeart, 60, 30, 50, 50);
        quarters(health, 8, 120);
        
    } else if(health > 4){ //definite first heart, third heart gone, determine second heart
        image(fullHeart, 0, 30, 50, 50);
        quarters(health, 4, 60);
        
    } else if(health > 0){ //second and third heart gone, determine first heart
        quarters(health, 0, 0);

    } else { //health is 0
        console.log("player is dead");
    }

}
function quarters(health, num, x){ //passes health variable, num is health of definite hearts, x is x pos
    if(health - num == 1){
        image(oneQuartHeart, x, 30, 50, 50);
    } else if(health - num == 2){
        image(halfHeart, x, 30, 50, 50);
    } else if(health - num  == 3){
        image(threeQuartHeart, x, 30, 50, 50);
    } else if(health - num == 4){
        image(fullHeart, x, 30, 50, 50);
    }

}