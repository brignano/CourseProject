let policyNumber;
let category;
let locationOfLoss;
let incidentDescription;

function storeInfo(){   //is called when the user presses the 'submit' button.
    //Grabs the values the user inputted in each field and prints them out via console log
    policyNumber = document.getElementById('policyNumberInput');
    console.log("Policy Number: "+policyNumber.value);

    categoryOfClaim = document.getElementById('categoryOfClaimInput');
    console.log("Category: "+category.value);

    locationOfLoss = document.getElementById('locationOfLossInput');
    console.log("Location of Loss: "+locationOfLoss.value);

    incidentDescription = document.getElementById('incidentDescriptionInput');
    console.log("Location of Loss: "+incidentDescription.value);
} 

function showResults() {    //is called when the user clicks the 'submit' button ONLY on the getClaim page
    //displays the results block (was previously hidden)
    document.getElementById('claimSearchResults').style.display = "block";
}
