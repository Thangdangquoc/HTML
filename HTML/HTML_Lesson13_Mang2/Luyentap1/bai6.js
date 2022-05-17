function bai6() {
    creatArray()
    let number = +prompt("Nhập số nguyên a")
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) {
            count+=1
        }
    }
    if (count != 0) {
        alert(number + " Nằm trong mảng số nguyên")
    } else
        alert(number + " Không nằm trong mảng số nguyên")}