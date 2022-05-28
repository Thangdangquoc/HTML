function hoidap1() {
    let hoidap = +prompt('Nhập số điện thoại của bạn!')
    if (!isNaN(hoidap)){
        let cauhoi = prompt("Bạn có câu hỏi gì cần giải quyết")
        alert("Cám ơn bạn đã đặt câu hỏi!")
    }else {
        alert("Bạn vui lòng điền lại số điện thoại")
    }
   alert("Xin cám ơn!")
}