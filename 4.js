// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
/*for (var i = 1; i <= 10; i++) {
    printTable(i);
    console.log("");
}

function printTable(n) {
    for (var i = 1; i <= 10; i++) {
        var row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}*/

//Another away

for (var i = 1; i <= 10; i++) {
    
    for (var j = 1; j <= 10; j++) {
        var row = i + " * " + j + " = " + i * j;
        console.log(row);
    }
    console.log("");
}


    
