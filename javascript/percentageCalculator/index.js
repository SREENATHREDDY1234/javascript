function percentage_calculator() {
    let x = parseInt(document.getElementById('total-classes').value, 10);
    let y = parseInt(document.getElementById('total-attend').value, 10);
    let z = parseFloat(document.getElementById('percentage').value);

    if (isNaN(x) || isNaN(y) || isNaN(z) || x <= 0 || y < 0 || z <= 0) {
        document.getElementById("classes").textContent = "Please enter valid inputs.";
        document.getElementById("weeks").textContent = "";
        return;
    }

    let p = (y / x) * 100;

    if (p < z) {
        // Calculate the number of classes needed to meet the desired percentage
        let requiredClasses = ((z / 100) * x - y) / ((100 - z) / 100);
        requiredClasses = Math.round(requiredClasses); // Rounding to the nearest integer
        let requiredWeeks = Math.round(requiredClasses / 22); // Rounding to the nearest integer
        document.getElementById("classes").textContent = "You need to attend " + requiredClasses + " more classes.";
        document.getElementById("weeks").textContent = "That's " + requiredWeeks + " weeks.";
    } else {
        // Calculate how many more classes the student can miss and still maintain the desired percentage
        let maxAbsentClasses = ((y * 100) - (z * x)) / z;
        maxAbsentClasses = Math.round(maxAbsentClasses); // Rounding to the nearest integer
        document.getElementById("classes").textContent = "You have already achieved the desired percentage.";
        document.getElementById("weeks").textContent = "You can be absent for " + maxAbsentClasses + " more classes.";
    }
}



