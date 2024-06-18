
function kalorieRechner() {
    event.preventDefault();
    
    let heightInput = Number(document.getElementById("size").value);
    console.log(heightInput);
    let ageInput = Number(document.getElementById("age").value);
    console.log(ageInput);
    let weightInput = Number(document.getElementById("weight").value);
    console.log(weightInput);


   
    let radioGroupMW = document.querySelector("input[name='gender']:checked").value;
    let grundUmsatzElement = document.getElementById("Grundumsatz");
    let gesamtumsatzElement = document.getElementById("Gesamtumsatz");
    let palValue = Number(document.getElementById("pal").value);

    

    
    if (heightInput !== 0 && ageInput !== 0 && weightInput !== 0) {
        if (radioGroupMW === "Weiblich") {
            let metRate = (655.1 + (9.6 * weightInput) + (1.8 * heightInput) - (4.7 * ageInput));
            let klJoGrund = metRate * 4.1868;
            let palRezult = metRate * palValue;
            let klJoGesamt = palRezult * 4.1868;
     
            grundUmsatzElement.innerHTML = `Grundumsatz: &nbsp; ${metRate.toFixed(2)}   &nbsp;&nbsp;&nbsp;&nbsp;      ${klJoGrund.toFixed(2)}`;
            gesamtumsatzElement.innerHTML = `Gesamtumsatz: ${palRezult.toFixed(2)}   &nbsp;&nbsp;&nbsp;&nbsp;    ${klJoGesamt.toFixed(2)}`

        }
        else {
            let metRate = (66.47 + (13.7 * weightInput) + (5 * heightInput) - (6.8 * ageInput));
            let klJoGrund = metRate * 4.1868;
            let palRezult = metRate * palValue;
            let klJoGesamt = palRezult * 4.1868;
       
            grundUmsatzElement.innerHTML = `Grundumsatz: &nbsp; ${metRate.toFixed(2)}     &nbsp;&nbsp;&nbsp;&nbsp;     ${klJoGrund.toFixed(2)}`;
            gesamtumsatzElement.innerHTML = `Gesamtumsatz: ${palRezult.toFixed(2)}  &nbsp;&nbsp;&nbsp;&nbsp;      ${klJoGesamt.toFixed(2)}`
         
        }
    } else {
        grundUmsatzElement.innerHTML = "Um Kalorien zu berechnen, geben Sie bitte Ihre Daten ein ";
        gesamtumsatzElement.innerHTML = "";
     }
        
}
