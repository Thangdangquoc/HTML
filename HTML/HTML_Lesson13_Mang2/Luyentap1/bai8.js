function bai8() {
    creatArray()
array.sort(function (a,b){
    return b-a
});
    document.getElementById("tanglen").innerHTML = array
}