function bai7(){
    creatArray()
    let number = +prompt("Nhập số nguyên a")
    let count = 0
    let iValue
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) {
            count+=1
            iValue = i
        }
    }
    if (count != 0) {
        array.splice(iValue,1)
        array.push("0")
        document.write(array + " Nằm trong dãy")
    } else
        document.write("Không nằm trong dãy")}
//------//
// if (count !=0){
// for (iValue=0;iValue< array.length;iValue++){
//     array.splice(iValue,1)
//     array.push("0")
// }document.write(array + " Nằm trong dãy")}else
// { document.write("Khong nam trong")}
