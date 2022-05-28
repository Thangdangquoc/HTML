class Hero {
    image;
    top;
    left;
    size;

    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }

    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    moveRight() {
        this.left += 50;
        console.log('ok: ' + this.left);
    }

    moveLeft() {

        this.left -=100;
        this.top = window.innerHeight
        console.log('ok: ' + this.left);
    }

    moveDown() {
        this.top += 50;
        console.log('ok: ' + this.top);
    }
    moveUp() {
        this.top -= 1000;
        console.log('ok: ' + this.top);
    }
}

let hero = new Hero('https://mtrend.vn/wp-content/uploads/2016/01/anh-con-khi-hoat-hinh.jpg', 20, 30, 200);

function start() {

    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    } else if (hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    } else if (hero.left > window.innerWidth - hero.size) {
        hero.moveLeft();
    } else if (hero.top < window.innerHeight - hero.size) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)

}
start();

