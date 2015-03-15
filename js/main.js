var main = function() {
 $('.bar2').click(function() {
    $("table table-condensed table-striped").animate({
      left: "0px"
    }, 200);

    $("table table-condensed table-striped").animate({
      left: "285px"
    }, 200);
  });
  
};
$(document).ready(main);
