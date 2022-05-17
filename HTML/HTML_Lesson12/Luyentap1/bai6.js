function bai6() {
    creatArray()
    let number = +prompt("Nhập số nguyên a")
    for (let i = 0; i < array.length; i++) {
        if (number == array[i]) {
            alert(number + " Nằm trong mảng số nguyên")
        }else {
           alert( number + " Không nằm trong mảng số nguyên")
        }
    }
}