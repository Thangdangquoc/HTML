let matHang = [];
let gia = [];
let soLuong = []

// let matHangArr
function hienThi(matHang, gia, soLuong) {
    let s = "<table>";
    for (let i = 0; i < matHang.length; i++) {
        s += "<td>"
        s += '<img src="../JScastudy/Arduino_Pro_Mini_2-1024x707.jpg" height="100px" />'
        s += "<h2>" + matHang[i] + "</h2>"
        s += "<h3>" + gia[i] + "</h3>"
        s +=  + soLuong[i] + "<b>"+'Cái'+"</b>"

        s = s + "<button onclick=\"edit(" + i + ")\"> Edit</button>\n" +
            "<button onclick=\"xoa(" + i + ")\">Delete</button>\n" + "<button onclick=\"addCart(" + i + ")\">+Cart</button>\n" + "<br>";
    }

    console.log(s)
    document.getElementById("ds").innerHTML = s
}


function add() {
    let newMatHang = document.getElementById("them").value
    let newGia = document.getElementById("them1").value
    let newSoLuong = document.getElementById("them2").value
    matHang.push(newMatHang);
    gia.push(newGia)
    soLuong.push(newSoLuong)

    hienThi(matHang, gia, soLuong);
}

function edit(index) {
    let newMatHang = prompt("Nhập tên mặt hàng thay thế: ");
    let newGia = prompt("Nhập tên mặt hàng thay thế: ");
    let newSoLuong = prompt("Số lượng")
    matHang[index] = newMatHang;
    gia[index] = newGia;
    soLuong[index] = newSoLuong;
    hienThi(matHang, gia, soLuong);
    // let name = document.getElementById("name").value;
    // let price = document.getElementById("price").value;
    // let image = document.getElementById("image").value;

}

function xoa(index) {
    matHang.splice(index, 1);
    hienThi(matHang, gia, soLuong);
}
hienThi(matHang, gia, soLuong);
function register(){
    alert("Bạn đã đăng ký thành công")
    remove(index)
}

// displayAdd();
// function displayAdd() {
//     let d = ' <tr>\n' +
//         '<td>' + gioHang.length + ' products</td>\n' +
//         '</tr>';
//     for (let j = 0; j < gioHang.length; j++) {
//         d += '<tr>' +
//             // '<td><img src="JScastudy/Arduino_Pro_Mini_2-1024x707.jpg" height="100px"> </td>'+
//             // '<td><button onclick="showformEdit(' + i + ')">Edit</button></td>' +
//             // '<td><button onclick="deleteProduct(' + i + ')">Delete</button></td>'+
//
//             '<td><h2>' + gioHang[j] + '</h2></td>' +
//             '<td><h3>'+"Giá:"+ gioGia[j]+"VNĐ"+'</h3></td>'+
//             '<td><h3>'+"Số lượng:"+ gioSoLuong[j]+"cái"+'</h3></td>' +
//             '<td><button onclick="rEmove(' + j + ')">Remove</button></td></tr>'
//
//     }
//     document.getElementById("ds1").innerHTML = d;
// }
// function AddProduct(index){
//     gioHang.push(lisproduct[index])
//     gioGia.push(gia[index])
//     gioSoLuong.push(soLuong[index])
//     displayAdd()
// }
//
// function rEmove(index) {
//     gioHang.splice(index, 1);
//     gioGia.splice(index,1);
//     gioSoLuong.splice(index,1);
//     displayAdd();
// }