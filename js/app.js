// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=0AlRp2ieP7izLdGFNOERTZW0xLVpROFc3X3FJQ2tSb2c#gid=0';

// Load an entire sheet.
$('#statistics').sheetrock({
  url: mySpreadsheet
});
