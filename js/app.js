/*
 UScan Technologies RFID Management System v0.1.0
 Simplistic, elegant, and efficient RFID Management System
 uscantechnologies.com
 License: Attribution-NonCommercial-ShareAlike 4.0 International
 
*/

/* doesn't work 
$(document).ready(function() {
  $('.bar2').click(function() {
      $(".tablez").animate({
        left: "-500px"
      }, 200);
    });
});// end ready

*/


// Define spreadsheet URL.
//Sales Floor
var mySalesFloor = 'https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=0';
//Data Analysis
var myDataAnalysis = "https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=1813653491";
//Inventory
var myInventory = "https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=1116642020";
//Purchased
var myPurchase = "https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=201486995";

// real sheet => https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=0
// testing sheet => https://docs.google.com/spreadsheet/ccc?key=1G2xjX66QgIro6B9yV3A9E5CNINHYAp2gFjrXnfOdjHw#gid=0

/* FORMAT ROWS HAS TO DO IT'S THING AFTER SHEETS IS LOADED!*/

var threshold = 5;

var formatRows = function (row) {
    console.log(row); 
    if (row.cells.Amount < threshold) {
        return "<tr class='warning'><td>" + row.cells.Amount + "</td></tr>";
    }
    return "<tr><td>" + row.cells.Amount + "</td></tr>";
    return "<tr><td>" + row.column + "</td></tr>";
};

// Load Sales Floor
$('#SalesFloor').sheetrock({
  url: mySalesFloor,
  rowHandler: formatRows
});

//Load Data Analysis
$('#DataAnalysis').sheetrock({
  url: myDataAnalysis,
  rowHandler: formatRows
});

//Load Inventory
$('#Inventory').sheetrock({
  url: myInventory,
  rowHandler: formatRows
});

//Load Purchase
$('#Purchase').sheetrock({
  url: myPurchase,
  rowHandler: formatRows
});
/*
$('#runing_low').sheetrock({
  url: mySpreadsheet,
  sql: "select * order by C asc",
  chunkSize: 10
});
*/




/* bar clicking stuff */

$('#bar1').click(function() {
    $('#Inventory').fadeIn();
    $('#SalesFloor').slideUp();
    /*$('#DataAnalysis').slideUp(); */
    $('#Purchase').slideUp();
});

$('#bar2').click(function() {
    $('#SalesFloor').fadeIn();
    $('#Inventory').slideUp();
    /*$('#DataAnalysis').slideUp(); */
    $('#Purchase').slideUp();
});

$('#bar3').click(function() {
    $('#Purchase').fadeIn();
    $('#Inventory').slideUp();
    /*$('#DataAnalysis').slideUp();*/
    $('#SalesFloor').slideUp();
});

$('#bar4').click(function() {
    /*$('#DataAnalysis').fadeIn(); */
    $('#Inventory').fadeIn();
    $('#Purchase').fadeIn();
    $('#SalesFloor').fadeIn();
});

/*
$('#bar5').click(function() {
    $('#DataAnalysis').fadeIn();
    $('#Inventory').slideUp();
    $('#Purchase').slideUp();
    $('#SalesFloor').slideUp();
});
*/


