function reRender(category) {
    switch (category) {
        case "Car": {
            showCar()
            break
        }
        case "Scooter": {
            showScooter()
            break
        }
        case "Motor": {
            showMotor()
            break
        }
        case "Motorbike": {
            showMotorbike()
            break
        }
    }
}

function deleteProduct(i, j, category) {
    switch (category) {
        case "Car": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayCar[i][j].getName() + "?")) {
                arrayCar[i].splice(j, 1)
            }
            break
        }
        case "Scooter": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayScooter[i][j].getName() + "?")) {
                arrayScooter[i].splice(j, 1)
            }
            break
        }
        case "Motor": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayMotor[i][j].getName() + "?")) {
                arrayMotor[i].splice(j, 1)
            }
            break
        }
        case "Motorbike": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayMotorbike[i][j].getName() + "?")) {
                arrayMotorbike[i].splice(j, 1)
            }
            break
        }
    }
    reRender(category)
}