let gioHang= [];
let gioGia= [];
let gioSoLuong= [];
function displayGiohang(gioHang,gioGia){
    let d = "<table>";
    d += "<tr><td>Product's Name</td><td>Quantity</td><td>Price</td><td>Action</td></tr>"
    for (let j = 0; j < gioHang.length; j ++){
        d += "<tr>"
        d+= '<img src="../JScastudy/Arduino_Pro_Mini_2-1024x707.jpg" height="100px" />'
        d += "<td><h2>" + gioHang[j] + "</h2></td>"
        d += "<td><p>Price: " + gioGia[j] + "</p></td>"
        // d += "<td><p>Giá: " + gioHang[j] + " VND</p></td>"
        d += "<td><button id='1' onclick=\"remove(" + (j +1) + ")\"> Remove</button></td></tr>"
    }
    // console.log(d)
    document.getElementById("ds1").innerHTML = d

}

displayGiohang(gioHang,gioGia)
function addCart(index){
    gioHang.push(matHang[index])
    gioGia.push(gia[index])
    // gio.push(gia[index])
    displayGiohang(gioHang,gioGia)
}
function remove(index){
    gioHang.splice(index, 1);
    // gioGia.splice(index,1);
    displayGiohang(gioHang,gioGia)
}
function thanhtoan(){
    alert("Bạn vui lòng nhập thông tin")
    let name = prompt("Họ và tên:")
    let phone = +prompt("Số điện thoại:");
    let address = prompt("Địa chỉ nhận hàng:");
}
