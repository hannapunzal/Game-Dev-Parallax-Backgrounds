const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.height = 600;
var input = document.querySelector('input');
let gameSpeed = 2;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'version-two/layers/layer1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'version-two/layers/layer2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'version-two/layers/layer3v1.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'sportyboy.jpeg';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer-5.png';

class Layer {
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 1200;
        this.height = 600;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if(this.x <= -this.width){
            this.x = this.width + this.x2 - this.speed;
        }
        if(this.x2 <= -this.width){
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }
    draw()
    {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

const layer1 = new Layer(backgroundLayer1, 0.2);
const layer2 = new Layer(backgroundLayer2, 0.4);
const layer3 = new Layer(backgroundLayer3, 0.3);
//const layer4 = new Layer(backgroundLayer4, 0.8);
//const layer5 = new Layer(backgroundLayer5, 1);

const gameObjects = [layer1, layer2, layer3];

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    layer3.update();
    layer3.draw();
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    }
    );
    requestAnimationFrame(animate);
};
animate();

const slider = document.getElementById("slider");
slider.value = gameSpeed;
const showGameSpeed = document.getElementById("showGameSpeed");
showGameSpeed.innerHTML = gameSpeed;
slider.addEventListener("change", function (e) {
  gameSpeed = e.target.value;
  showGameSpeed.innerHTML = e.target.value;
});

var input = document.querySelector('input');
const colors = ['#AB78FF', '#FF9393', '#78A6FF', '#FF78F2', '#78FFDF']

input.oninput = (e) => {
    let color = colors[Math.floor(Math.random() * colors.length)]
    input.style.borderColor = color
    input.style.boxShadow = `0px 0px 5px 5px ${color}`
    input.style.color = color
    if (input.value == '') {
        input.style.borderColor = '#fff'
        input.style.boxShadow = `0px 0px 100px 5px #fff`
        input.style.color = '#fff'
    }
}