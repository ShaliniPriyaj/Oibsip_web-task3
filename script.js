function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("temperatureInput").value);
    const unit = document.getElementById("unitSelector").value;
    let convertedCelsius, convertedFahrenheit, convertedKelvin;

    if (isNaN(inputTemperature)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    switch (unit) {
        case "celsius":
            convertedCelsius = '';
            convertedFahrenheit = (inputTemperature * 9/5) + 32;
            convertedKelvin = inputTemperature + 273.15;
            break;
        case "fahrenheit":
            convertedCelsius = (inputTemperature - 32) * 5/9;
            convertedFahrenheit = '';
            convertedKelvin = (inputTemperature - 32) * 5/9 + 273.15;
            break;
        case "kelvin":
            convertedCelsius = inputTemperature - 273.15;
            convertedFahrenheit = (inputTemperature - 273.15) * 9/5 + 32;
            convertedKelvin = '';
            break;
        default:
            break;
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>${inputTemperature.toFixed(2)} ${unit} is:</p>
        ${convertedCelsius !== '' ? `<p>${convertedCelsius.toFixed(2)} Celsius</p>` : ''}
        ${convertedFahrenheit !== '' ? `<p>${convertedFahrenheit.toFixed(2)} Fahrenheit</p>` : ''}
        ${convertedKelvin !== '' ? `<p>${convertedKelvin.toFixed(2)} Kelvin</p>` : ''}
    `;
}
