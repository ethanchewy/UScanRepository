/*function getData(mySpreadsheet, sqlQuery) {
		$("#dataTable").tablesorter( {theme: 'bootstrap'} );
		$('#dataTable').sheetrock({
				url: mySpreadsheet,
				sql: sqlQuery,
				loading: $("#ajax-loader"),
				userCallback: updateSort
		});		
}

// updateData is not used in this demo, but you can use it to add rows asynchronously
function updateData(mySpreadsheet, sqlQuery) {
		$('#dataTable').sheetrock({
				url: mySpreadsheet,
				sql:sqlQuery,
				chunkSize: 10,
				loading: $("#ajax-loader"),
				headersOff: true,
				rowGroups: false,
				userCallback: updateSort
		});
}

function enableDefaultSort() {
		$('#resetSort').removeClass('disabled');
		$('#resetSort').click(function(){defaultSort();});
}

function disableDefaultSort() {
	$('#resetSort').addClass('disabled');
	$('#resetSort').click(function(){return false;});
}

function defaultSort(){
		var defaultSort = [ [0,0] ];
		$("#dataTable").trigger("update");
		$("#dataTable").trigger("sorton", [defaultSort]);
		disableDefaultSort();
}

function clearFilters(){
	//$('.tablesorter-filter').val('');
	var filters= [];
	$.tablesorter.setFilters( $('#dataTable'), filters, true );
	$('#clearFilters').addClass('disabled');
}

function updateSort(options){
		options.target.tablesorter({
				theme: 'bootstrap',
				widthFixed: true,
				widgets: ["filter"],
				widgetOptions: {
						ignoreCase: true,
						filter_columnFilters: true,
						filter_startsWith: false,
						filter_searchDelay: 100,
						filter_hideFilters: false
				}
			});
		options.target.trigger("update");
		
		// register handlers only AFTER table has been drawn
		$('tr.tablesorter-headerRow').click(
			function(){enableDefaultSort();}
		);
		$('.tablesorter-filter').keydown(function(){
			$('#clearFilters').click(function(){clearFilters();});
			$('#clearFilters').removeClass('disabled');
		});
} */


// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=11x3_5BinmTr4sxeH4TiQrgvwp6OPKmERSOSuFrTPTH4#gid=0';

// Load an entire sheet.
$('#statistics').sheetrock({
  url: mySpreadsheet
});
