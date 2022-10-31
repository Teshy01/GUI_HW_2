document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('table').addEventListener("submit", function(event) {
        event.preventDefault();
        validateRows();
    });
});


function validateRows(){

    var minRow = parseInt(document.getElementById("minRow").value);
    var maxRow = parseInt(document.getElementById("maxRow").value);
    var minCol = parseInt(document.getElementById("minCol").value);
    var maxCol = parseInt(document.getElementById("maxCol").value);

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
        var text = "Error, minRow has no value";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(isNaN(maxRow)){
        var text = "Error, maxRow has no value";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(isNaN(minCol)){
        var text = "Error, minCol has no value";
        document.getElementById("error").innerHTML = text;
        return false;
    }
    else if(isNaN(maxCol)){
        var text = "Error, maxCol has no value";
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
        var text = "Table has printed!";
        document.getElementById("error").innerHTML = text;
        removeOldTable();
        multTable(minRow, maxRow, minCol, maxCol);
    }
}

function removeOldTable() {

    var oldTable = document.getElementById("placeholder");
    var newPlaceHolder = document.createElement('div');
    newPlaceHolder.setAttribute("id","placeholder");
    oldTable.replaceWith(newPlaceHolder);
}

function multTable(minRow, maxRow, minCol, maxCol){

    var body = document.getElementById("placeholder");
    var table = document.createElement('TABLE');
    var tblB = document.createElement('TBODY');
    table.appendChild(tblB);

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
    body.appendChild(table);
}