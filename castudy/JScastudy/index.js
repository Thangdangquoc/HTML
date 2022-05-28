let lisproduct = [];
let gia =[];
let soLuong= [];
displayAll();
function displayAll() {
    let str = ' <tr>\n' +
        '<td>' + lisproduct.length + ' products</td>\n' +
        '</tr>';
    for (let i = 0; i < lisproduct.length; i++) {
        str += '<tr>' +
            '<td><img src="JScastudy/Arduino_Pro_Mini_2-1024x707.jpg" height="100px"> </td>'+
            '<td><button onclick="showformEdit(' + i + ')">Edit</button></td>' +
            '<td><button onclick="deleteProduct(' + i + ')">Delete</button></td>'+
            '<td><button onclick="AddProduct(' + i + ')">Add</button></td></tr>'+
            '<tr><td><h3>' + lisproduct[i] + '</h3></td>' +
        '<td>'+'<b>'+"Giá:"+'</b>'+ gia[i]+"VNĐ"+'</td>'+
            // '<td>VNĐ</td>'
        '<td>'+'<b>'+"Số lượng:"+'</b>'+ soLuong[i]+"cái"+'</td></tr>'
    }
    document.getElementById("displayarea").innerHTML = str;
}
function addproduct() {
    let productName = document.getElementById("add").value;
    let newGia = document.getElementById("add1").value;
    let newSoLuong = document.getElementById("add2").value;
    document.getElementById("add").value = '';
    lisproduct.push(productName);
    gia.push(newGia)
    soLuong.push(newSoLuong)
    displayAll()
}
function deleteProduct(index) {
    lisproduct.splice(index, 1);
    soLuong.splice(index, 1);
    gia.splice(index, 1)
    displayAll();
}
function showformEdit(inDex){
    let str ='';
    str = '<input type="text" id="editProduct" value="'+ lisproduct[inDex] +'">' +
        '<input type="number" id="editProduct1" value="'+ gia[inDex] +'">' +
        '<input type="number" id="editProduct2" value="'+ soLuong[inDex] +'">' +
        '<button onclick="saveProduct('+ inDex +')">Save</button>';
    document.getElementById("edit").innerHTML = str;
}
function saveProduct(inDex){
    lisproduct[inDex] =document.getElementById("editProduct").value;
    document.getElementById("edit").innerHTML = '';
    displayAll()
}
