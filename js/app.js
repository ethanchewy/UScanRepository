// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=0';

// Load an entire sheet.
$('#statistics').sheetrock({
  url: mySpreadsheet
});

$('#statistics').sheetrock({
  url: mySpreadsheet,
  sql: "select * where E = 'Both' order by L desc",
  chunkSize: 10
});

