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
var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=0';
//Data ANalysis
var myDataAnalysis = "https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=1813653491";
//Inventory
var myInventory = "https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=1116642020";
//Purchased
var myPurchase = "https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=201486995";

// real sheet => https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=0
// testing sheet => https://docs.google.com/spreadsheet/ccc?key=1G2xjX66QgIro6B9yV3A9E5CNINHYAp2gFjrXnfOdjHw#gid=0


// Load Sales Floor
$('#statistics').sheetrock({
  url: mySpreadsheet,
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
  url: myDataAnalysis,
  rowHandler: formatRows
});
/*
$('#runing_low').sheetrock({
  url: mySpreadsheet,
  sql: "select * order by C asc",
  chunkSize: 10
});
*/

/* FORMAT ROWS HAS TO DO IT'S THING AFTER SHEETS IS LOADED!*/
var formatRows = function (options) {

  var columnNumber = 3;
  var threshhold = 5;

  $('tr', options.target).each(function (i, el) {

    var $tableRow = $el;
    var amount = $('td:nth-child(' + columnNumber + ')', $tableRow).text();

    if (parseInt(amount) <= threshhold) {
      $tableRow.addClass('warning');
    }

  });

};

//Click tab => new spreadsheet
$('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.tab1').click(function() {
    $('#statistics').animate({
      left: "-285px"
    }, 200);

    $('#Inventory').animate({
      left: "0px"
    }, 200);
    
    $('#DataAnalysis').animate({
      left: "-2000px"
      
    }, 200);
    
    $('#Purchase').animate({
      left: "-2000px"
    }, 200);
  
    
  });





