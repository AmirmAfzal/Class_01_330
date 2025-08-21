
function handleSubmit() {
    const age = parseInt(document.getElementById("age").value)
    if (age > 0 && age < 13) {
        document.getElementById("message").innerText = "کودک"
    } else if (age > 13 && age < 18) {
        document.getElementById("message").innerText = "نوجوان"
    }
    else if (age > 18 && age < 30) {
        document.getElementById("message").innerText = "جوان"
    }
    else {
        document.getElementById("message").innerText = "بزرگسال"
    }
}



// if(age > 0 && age < 13){
// document.getElementById("message").innerText = "کودک"
//     } else if (age > 13 && age < 18) {
//     document.getElementById("message").innerText = "نوجوان"
// }
// else if (age > 18 && age < 30) {
//     document.getElementById("message").innerText = "جوان"
// }
// else {
//     document.getElementById("message").innerText = "بزرگسال"
// }