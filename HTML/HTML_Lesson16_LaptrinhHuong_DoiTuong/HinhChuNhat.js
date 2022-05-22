class Rectangle
{
    height;
    width;
    constructor(height,width) {
    this.height = height;
    this.width = width;
}
getHeight() {
    return this.height;
}
getWidth() {
    return this.width
}setHeight(height){
        this.height = height
}setWidth(width){
        this.width = width
}    getArea() {
    return this.width * this.height;
}

    getPerimeter() {
        return (this.width + this.height) * 2;
    }}
let myRectangle = new Rectangle(50,150);
let width = myRectangle.getWidth();
let height = myRectangle.getHeight();
let area = myRectangle.getArea(); // 12.566370614359172
let perimeter = myRectangle.getPerimeter(); // 12.566370614359172
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, width, height)
document.getElementById("demo1").innerHTML ="Chu vi: " + perimeter + "; Diện tích: " + area;
