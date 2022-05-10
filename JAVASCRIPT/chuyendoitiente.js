function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;

    if (FromC == "VNĐ" && To == "USD") {
        Result = "Result:" + (Amount / 23000) + "$";
    } else if (FromC == "USD" && To == "VNĐ") {
        Result = "Result:" + (Amount * 23000) + "Đ";
    } else if (FromC == "VNĐ") {

        Result = "Result" + Amount + "Đ";
    } else{
        Result = "Result" + Amount + "$";
    }


    document.getElementById("Result").innerHTML = Result;
}
// function ChangeMoney() {
//     let Amount = document.getElementById("Amount").value;
//     let FromC = document.getElementById("From").value;
//     let To = document.getElementById("To").value;
//     let Result;
//
//
//     if (FromC == "USD" && To == "VND") {
//         Result = "Result: " + (Amount * 23000) + " Đ";
//     }
//     else if (FromC == "VND"&& To =="USD"){
//         Result = "Result: "+ (Amount / 23000) + " $";
//     }
//     else if (FromC == "VND") {
//         Result = "Result: " + Amount + " Đ"
//     } else {
//         Result = "Result: " + Amount + " $"
//     }
//
//     document.getElementById("Result").innerHTML = Result;
// }
