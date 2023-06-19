function checkSpeed(Speed) {
    var resultContainer = documentgetElementById("result-container");

    if (Speed < 70) {
        resultContainer.innerHTML="Okay";
    } else if (Speed >= 70 && Speed <= 82) {
        resultContainer.innerHTML="Points:2";
    } else if (Speed > 82) {
        const points = Math.floor((Speed - 70)/5);
        if (points >= 12) {
            resultContainer.innerHTML="License Suspended";
        } else {
            resultContainer.innerHTML="Points:"+ points;
        }
    }

}

function handleFormSubmit(event) {
    event.preventDefault();
    const SpeedInput = documentgetElementById(Speed-input);
    const Speed = parseInt(SpeedInput.value);
    checkSpeed(Speed);
}