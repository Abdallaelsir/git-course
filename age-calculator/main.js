let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")

let dateNow = new Date()






function calculate() {
    let days = dateNow.getDate() - input1.value 
    let months = dateNow.getMonth() - input2.value + 1
    let years = dateNow.getFullYear() - input3.value

    if (days >= 0 ) {
        document.getElementById("days").innerHTML = days
    } else {
        months = months - 1
        days = 22 - input1.value  + 30
        document.getElementById("days").innerHTML = days
    }
    if (months >= 0 ) {
        document.getElementById("months").innerHTML = months
    } else {
        years = years - 1
        months = 8 - input2.value  + 12
        document.getElementById("months").innerHTML = months
    }

    document.getElementById("years").innerHTML = years

  
}
