let array1
let array2
function creatArray() {
    let a = +prompt("Nhập vào số phần tử của mảng a: ")
    array1 = new Array(a)
    for (let i = 0; i < array1.length; i++) {
        array1[i] = prompt("Nhập vào phần tử thứ " + (i + 1))
    }
    let b = +prompt("Nhập vào số phần tử của mảng b: ")
    array2 = new Array(b)
    for (let j = 0; j < array2.length; j++) {
        array2[j] = prompt("Nhập vào phần tử thứ " + (j + 1))
    }
}