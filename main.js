const canvas = document.getElementById('canvas');

canvas.height = 500;
canvas.width = 500;
canvas.style.border = '1px solid red';

const c = canvas.getContext('2d');


class Rect {
    constructor(c, config) {
        this.ctx = c;
        this.x = config.x;
        this.y = config.y;
        this.width = config.w;
        this.height = config.h;
        this.mx = 0;
        this.my = 0;
        this.direction = 1;
        this.moveX = config.moveX || false;
        this.moveY = config.moveY || false;
        this.moveBoth = config.moveBoth || false;
        this.color = config.color || 'black';

    }

    updatePosition() {

        this.mx += 1 * this.direction;
        this.my += 1 * this.direction;

        if (this.x + 20 > canvas.width || this.y + 20 > canvas.height) {
            this.direction = -1;
        }
        if (this.x < 0 || this.y < 0) {
            this.direction = 1;
        }

        if (this.moveBoth) {
            this.x = this.mx;
            this.y = this.my;
        }

        if (this.moveX) {
            this.x = this.mx;

        }

        if (this.moveY) {
            this.y = this.my;
        }


    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const rect1 = new Rect(c, { x: 20, y: 20, w: 20, h: 20, moveBoth: true, color: 'red' });
const rect2 = new Rect(c, { x: 250, y: 20, w: 20, h: 20, moveY: true, color: 'green' });
const rect3 = new Rect(c, { x: 20, y: 250, w: 20, h: 20, moveX: true, color: 'blue' });


function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    rect1.updatePosition();
    rect1.draw();

    rect2.updatePosition();
    rect2.draw();

    rect3.updatePosition();
    rect3.draw();
    requestAnimationFrame(animate);
}

animate();


