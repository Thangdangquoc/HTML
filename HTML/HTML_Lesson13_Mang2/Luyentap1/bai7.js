function bai7(){
    creatArray()
    let number = +prompt("Nhập số nguyên a")
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) {
            count+=1
        }
    }
    if (count != 0) {
        array.splice(i,1)
        array.push("0")
        document.write(array + " Nằm trong dãy")
    } else
        document.write("Không nằm trong dãy")}