function validateSyntax() {
    let input = document.getElementById('petInput').value;
    
    /* testing the format input */
    let formatInput = /^pet_\d{4}[a-zA-Z]+$/;

     /* Testing the input string against the format input required */
    
    if (formatInput.test(input)) {
        result = "Valid Syntax";
    } else {
        result = "Invalid Syntax";
    }

    /*  Displaying the results in the 'result' element */
    document.getElementById('result').innerText = result;
}

/* application of tenanory operator */

/* function validateSyntax(){
    let input = document.getElementById("petInput").value;
    let formatInput = /^pet_\d{4}[a-zA-Z]+$/; 
    let results= format.test(input) ? "valid sytntax" : "invalid syntax";

    results=document.getElementById("result").innerText;

} */