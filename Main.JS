let policyNumber;
let category;
let locationOfLoss;
let coordinates;
let incidentDescription;

function storeInfo(){   //is called when the user presses the 'submit' button.
    //Grabs the values the user inputted in each field and prints them out via console log
    policyNumber = document.getElementById('policyNumberInput');
    console.log("Policy Number: "+policyNumber.value);

    categoryOfClaim = document.getElementById('categoryOfClaimInput');
    console.log("Category: "+category.value);

    locationOfLoss = document.getElementById('locationOfLossInput');
    console.log("Location of Loss: "+locationOfLoss.value);
    updateLocation(locationOfLoss);

    incidentDescription = document.getElementById('incidentDescriptionInput');
    console.log("Location of Loss: "+incidentDescription.value);
} 

function updateLocation(locationOfLoss){  //this will be the method to convert the location of the loss to coordinates
    //address=24%20Sussex%20Drive%20Ottawa%20ON
    //locationOfLoss will need to be parsed and ' ' characters will need to be replaced with '%20'
    //https://maps.googleapis.com/maps/api/geocode/json?locationOfLoss
    coordinates = "41.769703,-72.686981";
}

let claim = {
        "policyNumber":policyNumber, 
        "categoryOfClaim":categoryOfClaim,
        "coordinates":coordinates,
        "incidentDescription":incidentDescription,
    };
       


function showResults() {    //is called when the user clicks the 'submit' button ONLY on the getClaim page
    //displays the results block (was previously hidden)
    document.getElementById('claimSearchResults').style.display = "block";
}
