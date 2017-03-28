

function setup(){
    var green = "rgb(0,255,0)";
    var red = "rgb(255,0,0)";
    var blue = "rgb(0,0,255)";
    var purple = "rgb(255,0,255)";
    
    createCanvas(600,400);
    p1 = new Pacman(300,200);
    g1 = new Ghost(35,250,green);
    g2 = new Ghost(200,200,red);
    maria = new Ghost(300,350,blue);
    budi = new Ghost(350,100,purple);
}

function draw(){
    background(0);
    p1.display();
    p1.move();
    p1.boundary();
    g1.display();
    g2.display();
    maria.display();
    budi.display();
    budi.move();
    maria.move();
    g1.move();
    g2.move();
    
}

function Pacman(x, y){
    this.x = x;
    this.y = y;
    this.radB = 30;
    this.radT = 305;
    this.rotation = 0;
    this.display = function(){
        fill(255, 255, 0);
        //ellipse(this.x, this.y, 40, 40);
        arc(this.x, this.y, 40, 40, radians(this.radB + this.rotation), radians(this.radT + this.rotation), PIE);
    };
    this.move = function (){
        if(keyIsDown(UP_ARROW)){
            this.y -= 5;
            this.rotation = 270;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.y += 5
            this.rotation = 90;
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.x += 5;
            this.rotation = 0;
        }
        if(keyIsDown(LEFT_ARROW)){
            this.x -= 5;
            this.rotation = 180;
        }
    };
    this.boundary = function(){
        if(this.x > width){
            this.x = 0;
        }
        if(this.x < 0){
            this.x = width;
        }
        if(this.y > height){
            this.y = 0;
        }
        if(this.y < 0){
            this.y = height;
        }
    };
}

function Ghost(x,y,color){
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 5;
    this.speedY = 5;
    this.display = function(){
        fill(this.color);
        //fill(250,0,0)
        ellipse(this.x, this.y, 50, 65);
        noStroke();
        rect(this.x-25, this.y, 50, 32);
        fill(0);
        triangle(this.x-25, this.y+33, this.x-16, this.y+25, this.x-8, this.y+33);
        triangle(this.x-8, this.y+33, this.x, this.y+25, this.x+8, this.y+33);
        triangle(this.x+8, this.y+33, this.x+16, this.y+25, this.x+25, this.y+33);
        fill(255);
        ellipse(this.x-10,this.y-10,15,15);
        ellipse(this.x+10,this.y-10,15,15);
        fill(0);
        ellipse(this.x-8,this.y-12,6,6);
        ellipse(this.x+12,this.y-12,6,6);
    };
    this.move = function(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x>width || this.x < 0){
            this.speedX = -this.speedX;
        }
        if(this.y>height || this.y<0){
            this.speedY = -this.speedY;
        }
    }
    
}