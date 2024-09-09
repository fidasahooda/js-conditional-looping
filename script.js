document.getElementById('submitBtn').onclick = function() {
    const number = parseInt(document.getElementById("userInput").value);


    if (isNaN(number) || number < 0 || number > 1000000) {
        document.getElementById("result").innerHTML = "Invalid number";
    } else {
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            sum += i;
        }
        document.getElementById("result").innerHTML = `Sum of numbers up to ${number} is ${sum}`;
    }
}
