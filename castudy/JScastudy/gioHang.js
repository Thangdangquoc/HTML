let gioHang= [];
let gioGia= [];
let gioSoLuong= [];
function displayGiohang(gioHang,gioGia,gioSoLuong){
    let d = "<table>";
    d += "<tr><td><b>Tổng sản phẩm trong giỏ:</b></td></tr>"
    for (let j = 0; j < gioHang.length; j ++){
        d += "<tr>"
        d += "<td><h2>" + (j+1) + "</h2></td>"
        d += "<td><h2>" + gioHang[j] + "</h2></td>"
        d += "<td><p>"+'<b>'+"Giá:"+'</b>' + gioGia[j]+ 'VNĐ' + "</p></td>"
        d += "<td><p>"+'<b>'+"Số lượng:"+'</b>' + gioSoLuong[j]+ 'Cái' + "</p></td>"
        d += "<td><button id='1' onclick=\"remove(" + j + ")\"> Remove</button></td>"
        d += "<td><button id='1' onclick=\"eDit(" + j + ")\"> Edit</button></td>"
        d += "<td><button id='2' onclick=\"thanhtoan(" + j + ")\"> Pay</button></td></tr>"
    }
    document.getElementById("ds1").innerHTML = d;

}

displayGiohang(gioHang,gioGia,gioSoLuong)
function AddProduct(index){
    gioHang.push(lisproduct[index])
    gioGia.push(gia[index])
    gioSoLuong.push(soLuong[index])
    displayGiohang(gioHang,gioGia,gioSoLuong)
}
function remove(index){
    gioHang.splice(index, 1);
    gioGia.splice(index,1);
    gioSoLuong.splice(index,1);
    displayGiohang(gioHang,gioGia,gioSoLuong)
}
function thanhtoan(){
    alert("Bạn vui lòng nhập đủ nhận hàng bên phải màn hình")
    // let name = prompt("Họ và tên:")
    // let phone = +prompt("Số điện thoại:");
    // let address = prompt("Địa chỉ nhận hàng:");
}
function register(){
    alert("Bạn đã đăng ký thành công")
}
