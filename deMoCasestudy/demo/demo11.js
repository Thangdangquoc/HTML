//dữ liệu
//list oto
new Product("BRIO", 418000000, "../image/car1.png", "Car")
let car1 = new Product("BRIO", 418000000, "../image/car1.png", "Car")
let car2 = new Product("CITY", 559000000, "../image/car2.png", "Car")
let car3 = new Product("CIVIC", 729000000, "../image/car3.png", "Car")
let car4 = new Product("HR-V", 786000000, "../image/car4.png", "Car")
let car5 = new Product("CR-V", 983000000, "../image/car5.png", "Car")
let car6 = new Product("ACCORD", 1319000000, "../image/car6.png", "Car")
let arrayCar = [[car1, car2, car3], [car4, car5, car6]];

//list xe ga
new Product("SH 150i",71000000,"../image/xega1.png",  "Scooter")
let scooter1 = new Product("SH 150i",71000000,"../image/xega1.png",  "Scooter")
let scooter2 = new Product("PCX 150",56500000,"../image/xega2.png",  "Scooter")
let scooter3 = new Product("AirBlade 125",41200000,"../image/xega3.png",  "Scooter")
let scooter4 = new Product("Vision",30000000,"../image/xega4.png",  "Scooter")
let scooter5 = new Product("Lead",38000000,"../image/xega5.png",  "Scooter")
let scooter6 = new Product("PCX Hybrid",90000000,"../image/xega6.png",  "Scooter")
let arrayScooter = [[scooter1, scooter2, scooter3], [scooter4, scooter5, scooter6]];

//list xe số

let motor1 = new Product("CBR1000RR", 678000000, "../image/xemoto1.png", "Motor");
let motor2 = new Product("CBR1000RR", 678000000, "../image/xemoto2.png", "Motor");
let motor3 = new Product("CBR1000RR", 678000000, "../image/xemoto3.png", "Motor");
let motor4 = new Product("CBR1000RR", 678000000, "../image/xemoto4.png", "Motor");
let motor5 = new Product("CBR1000RR", 678000000, "../image/xemoto5.png", "Motor");
let arrayMotor = [[motor1, motor2, motor3], [motor4, motor5]];

//list xe moto

let motorbike1 = new Product( "Future 125FI",30200000, "../image/xeso1.png", "Motorbike");
let motorbike2 = new Product( "Blade",18800000, "../image/xeso2.png", "Motorbike");
let motorbike3 = new Product( "Wave Alpha",17800000, "../image/xeso3.png", "Motorbike");
let motorbike4 = new Product( "Wave RSX FI",21700000, "../image/xeso4.png", "Motorbike");
let arrayMotorbike = [[motorbike1, motorbike2, motorbike3], [motorbike4]];

//hàm tạo list
function showElement(array) {
    let content = "<table>";
    for (let i = 0; i < array.length; i++) {
        content += "<tr>";
        for (let j = 0; j < array[i].length; j++) {
            content += "<td>"
            content += "<img  alt='Lỗi' src=" + array[i][j].image + ">"
            content += "<h2>" + array[i][j].name + "</h2>"
            content += "<p>Giá: " + array[i][j].price + " VND</p>"
            if (!checkAdmin()) {
                content += "<button onclick='renderEdit(\"Cập nhật\");editProduct(" + i + "," + j + ',\"' + array[i][j].getCategory() + '"' + ")'>&nbsp;Sửa&nbsp;</button>" + "&emsp;"
                content += "<button onclick='deleteProduct(" + i + "," + j + ',\"' + array[i][j].getCategory() + '"' + ")'>&nbsp;Xóa&nbsp;</button>"
            }
            content += "</td>"
        }
        content += "<tr>"
    }
    content += "</table>"
    document.getElementById("displayElement").innerHTML = content
}

function showCar() {
    showElement(arrayCar)
}

function showScooter() {
    showElement(arrayScooter)
}

function showMotor() {
    showElement(arrayMotor)
}

function showMotorbike() {
    showElement(arrayMotorbike)
}

//kiểm tra xem đã đăng nhập admin hay chưa?
function checkAdmin() {
    let username = localStorage.getItem("username")
    let data = ""
    if (username === null) {
        data += "<div id='admin'><a href='login.html'>Đăng nhập</a></div>"
        document.getElementById("header").innerHTML = data
        return true;
    } else {
        data += "<div id='admin'><p>Tài khoản: " + username + "</p>" +
            "<a onclick='logout()' href='index.html'>Đăng xuất</a></div>"
        document.getElementById("header").innerHTML = data
        return false;
    }
}

function logout() {
    localStorage.clear()
}



