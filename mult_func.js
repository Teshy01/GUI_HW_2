/*
Name: Hritesh Rajanagan
Contact Information: hritesh_rajanagan@student.uml.edu
*/

// event listener allows table to stay on screen rather than refresh off
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('table').addEventListener("submit", function(event) {
        event.preventDefault();
        validateRows();
    });
});


//function validate rows, checks input and then prints errors if needed
function validateRows(){

    //parses ints from form into int variables
    var minRow = parseInt(document.getElementById("minRow").value);
    var maxRow = parseInt(document.getElementById("maxRow").value);
    var minCol = parseInt(document.getElementById("minCol").value);
    var maxCol = parseInt(document.getElementById("maxCol").value);

    //if else statement to check inputted inputs!
    if(maxRow < minRow){
        var text = "Error, minRow > maxRow";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(maxCol < minCol){
        var text = "Error, minCol > maxCol";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(isNaN(minRow)){
        var text = "Error, minRow has an invalid value";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(isNaN(maxRow)){
        var text = "Error, maxRow has an invalid value";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(isNaN(minCol)){
        var text = "Error, minCol has an invalid value";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(isNaN(maxCol)){
        var text = "Error, maxCol has an invalid value";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(minRow  > 50 || minRow < -50){
        var text = "Error, minRow must be greater than -50 but less than 50";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(maxRow  > 50 || maxRow < -50){
        var text = "Error, maxRow must be greater than -50 but less than 50";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(minCol  > 50 || minCol < -50){
        var text = "Error, minCol must be greater than -50 but less than 50";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(maxCol  > 50 || maxCol < -50){
        var text = "Error, maxCol must be greater than -50 but less than 50";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else {
        //function call for mult_table (table print mechanism)
        //function call for clearing previous table (since we print it out)
        var text = "Table has printed!";
        document.getElementById("error").innerHTML = text;
        removeOldTable();
        multTable(minRow, maxRow, minCol, maxCol);
    }
}

function removeOldTable() {

    //gets placeholder id, and replaces it with empty placeholder
    var oldTable = document.getElementById("placeholder");
    var newPlaceHolder = document.createElement('div');
    newPlaceHolder.setAttribute("id","placeholder");
    oldTable.replaceWith(newPlaceHolder);
}

function multTable(minRow, maxRow, minCol, maxCol){

    //creating elements for table
    var body = document.getElementById("placeholder");
    var table = document.createElement('TABLE');
    var tblB = document.createElement('TBODY');
    table.appendChild(tblB);

    //for loop to print the table
    for (var i = minRow; i <= maxRow + 1; i++) {
        var tr = document.createElement('TR');
        tblB.appendChild(tr);
        for (var j = minCol; j <= maxCol + 1; j++) {
            var td = document.createElement('TD');            
            if (i == minRow && j == minCol){
               td.style.visibility = 'hidden';
               td.style.border = "none";
            } else if (j == minCol) {
               td.innerHTML = i-1;
            } else if(i == minRow) {
               td.innerHTML = j-1;
            } else {
               td.innerHTML =  (i-1) * (j-1);
            }
            tr.appendChild(td);
        }
    }
    //append table onto body
    body.appendChild(table);
}

/* CITATION:

This following youtube video helped me decipher the ideology behind the mult_table function:

https://www.youtube.com/watch?v=KsRnddegee0&ab_channel=HenrikRosqvist

This following stack overflow link helped me with the refresh issue i had:

https://stackoverflow.com/questions/49075769/addeventlistener-for-domcontentloaded-is-not-working

*/