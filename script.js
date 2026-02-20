function calculateAge() {

    let dobValue = document.getElementById("dob").value;
    let result = document.getElementById("ageResult");

    if (!dobValue) {
        result.innerHTML = "Select your birth date";
        return;
    }

    let birthDate = new Date(dobValue);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML =
        "Age: " + years + " Years " + months + " Months " + days + " Days";
}

function calculatePercentage() {
    let total = parseFloat(document.getElementById("total").value);
    let obtained = parseFloat(document.getElementById("obtained").value);
    let result = document.getElementById("percentResult");

    if (isNaN(total) || isNaN(obtained) || total === 0) {
        result.innerHTML = "Enter valid values";
        return;
    }

    let percent = (obtained / total) * 100;
    result.innerHTML = "Percentage: " + percent.toFixed(2) + "%";
}

function calculateEMI() {
    let P = parseFloat(document.getElementById("loan").value);
    let R = parseFloat(document.getElementById("rate").value) / 1200;
    let N = parseFloat(document.getElementById("months").value);
    let result = document.getElementById("emiResult");

    if (isNaN(P) || isNaN(R) || isNaN(N)) {
        result.innerHTML = "Enter valid values";
        return;
    }

    let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    result.innerHTML = "EMI: " + EMI.toFixed(2);
}

function calculateGST() {
    let amount = parseFloat(document.getElementById("amount").value);
    let gst = parseFloat(document.getElementById("gst").value);
    let result = document.getElementById("gstResult");

    if (isNaN(amount) || isNaN(gst)) {
        result.innerHTML = "Enter valid values";
        return;
    }

    let total = amount + (amount * (gst / 100));
    result.innerHTML = "Total with GST: " + total;
}

function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let result = document.getElementById("bmiResult");

    if (isNaN(weight) || isNaN(height) || height === 0) {
        result.innerHTML = "Enter valid values";
        return;
    }

    let bmi = weight / (height * height);
    result.innerHTML = "BMI: " + bmi.toFixed(2);
}