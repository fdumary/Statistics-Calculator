//Click to enter numbers
document.getElementById("cal").onclick = function (event) {
    //Prevent submission of the form
    event.preventDefault();
    //Retrieve the input, split by commas, and convert to numbers
    var numbers = document.getElementById("numbers").value
                  .split(',')
                  .map(num => parseFloat(num.trim()))
                  .filter(num => !isNaN(num)); //Filter out any non-numeric entries
    if (numbers.length) {
        report(calculate(numbers));
    } else {
        alert("Please enter numbers separated by commas.");
    }
};

//Display results
var report = function (result) {
    //Display minimum result
    document.getElementById("minResult").innerHTML = result.min;
    //Display maximum result
    document.getElementById("maxResult").innerHTML = result.max;
    //Display average result
    document.getElementById("averageResult").innerHTML = result.average;
    //Display median result
    document.getElementById("medianResult").innerHTML = result.median;
    //Display range result
    document.getElementById("rangeResult").innerHTML = result.range;
};

//Function to perform calculations
function calculate (numbers) {
    //Sort the numbers
    numbers.sort((a, b) => a - b);
    //Find maximum
    const max = Math.max(...numbers);
    //Find minimum
    const min = Math.min(...numbers);
    //Find average
    const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    //Find median
    const median = numbers.length % 2 === 0 ?
        (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2 :
        numbers[Math.floor(numbers.length / 2)];
    //Find range
    const range = max - min;
    //Return values
    return { min, max, average, median, range };
}