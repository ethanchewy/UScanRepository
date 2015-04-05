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
var thresholdColName = "Amount";

var formatRows = function (row) {
    var header = "<tr>",
        footer = "</tr>";

    var html = "";
    for (var key in row.cells) {
        var cellHtml;
        if (key == thresholdColName && row.cells[key] < threshold) {
            header = "<tr class='warning'>";
        }
        html += "<td>" + row.cells[key] + "</td>";;
    }
    return header + html + footer;
};

/* Thank You Michael => http://jsfiddle.net/qb26phrv/2/ */
// Method that takes a spreadsheet URL and loads it into the provided jQuery element.
function load(url, el) {
    el.sheetrock({
      url: url,
      resetStatus: true,
      rowHandler: formatRows 
    });
}

// Method that clears out the provided jQuery element and loads a spreadsheet back in.
function reload(url, el) {
    el.empty();
    load(url, el);
}

// Provides click functionality to the reload link.
//ADD RELOAD TAB IN HTML SOON
$('#reloadLink').click(function() {
    reload(sheet, $('#exampleTable'));
});

// Sets a timer that will call the reload method on our second table every 15 seconds.
setInterval(function() {
    reload(myInventory, $('#Inventory'));
    reload(mySalesFloor, $('#SalesFloor'));
    reload(myDataAnalysis, $('#DataAnalysis'));
    
    reload(myPurchase, $('#Purchase'));
}, 15000);




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

// Load Sales Floor
$('#SalesFloor').sheetrock({
  url: mySalesFloor,
  rowHandler: formatRows,
  sql:"select B,C,D,E,F,G,H,I,J"
});

//Load Purchase
$('#Purchase').sheetrock({
  url: myPurchase,
  rowHandler: formatRows,
  sql:"select B,C,D,E,F,G,H,I,J"
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


