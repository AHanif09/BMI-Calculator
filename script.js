function getData() {
    let berat = document.getElementById('weight').value
    let tinggi = document.getElementById('height').value

    return {berat, tinggi}
}

function countData(Data) {
    return Data.berat/((Data.tinggi/100)**2)
}

function submit() {
    let hasilHitung = countData(getData())
    let hasil = hasilHitung.toFixed(2)
    if (hasil < 18.5) {
        return (result.innerHTML = "Your BMI is " + hasil +" which means You are Underweight")
    } else if (hasil >= 18.5 && hasil <= 24.9) {
        return (result.innerHTML = "Your BMI is " + hasil +" which means You are Normal")
    } else if (hasil >= 25 && hasil <= 29.9) {
        return (result.innerHTML = "Your BMI is " + hasil +" which means You are Overweight")
    } else {
        return (result.innerHTML = "Your BMI is " + hasil +" which means You are Obesity")
    }
}

let submitData = document.getElementById('submit')
    submitData.addEventListener("click", (event) => {
    event.preventDefault();
    submit();
    });