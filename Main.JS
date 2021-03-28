let policyNumber;
let category;
let locationOfLoss;
let incidentDescription;

function storeInfo(){   //gets the values the user inputted and prints them out via console log
    policyNumber = document.getElementById('policyNumberInput');
    console.log("Policy Number: "+policyNumber.value);

    categoryOfClaim = document.getElementById('categoryOfClaimInput');
    console.log("Category: "+category.value);

    locationOfLoss = document.getElementById('locationOfLossInput');
    console.log("Location of Loss: "+locationOfLoss.value);

    incidentDescription = document.getElementById('incidentDescriptionInput');
    console.log("Location of Loss: "+incidentDescription.value);
} 

function showResults() {
   document.getElementById('claimSearchResults').style.display = "block";
}
