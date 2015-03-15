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
  sql: "select * order by G asc",
  chunkSize: 10
});

$('.bar2').click(function() {
    $('#runninglow').animate({
      left: "0px"
    }, 200);
    /*
    $('#').animate({
      left: "285px"
    }, 200); 
    */
  });
