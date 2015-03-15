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
var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=1G2xjX66QgIro6B9yV3A9E5CNINHYAp2gFjrXnfOdjHw#gid=0';

// real sheet => https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=0
// testing sheet => https://docs.google.com/spreadsheet/ccc?key=1G2xjX66QgIro6B9yV3A9E5CNINHYAp2gFjrXnfOdjHw#gid=0

// Load an entire sheet.
$('#statistics').sheetrock({
  url: mySpreadsheet
});

$('#runing_low').sheetrock({
  url: mySpreadsheet,
  sql: "select * order by C asc",
  chunkSize: 10
});

