function validateSyntax() {
    let input = document.getElementById('petInput').value;
    
    /* testing the format input */
    let format = /^pet_\d{4}[a-zA-Z]+$/;

     /* Testing the input string against the format input required */
    let result;
    if (format.test(input)) {
        result = "Valid Syntax";
    } else {
        result = "Invalid Syntax";
    }

    /*  Displaying the results in the 'result' element */
    document.getElementById('result').innerText = result;
}

