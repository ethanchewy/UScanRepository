var main = function() {
 $('.bar2').click(function() {
    $("tablez").animate({
      left: "0px"
    }, 200);

    $("tablez").animate({
      left: "285px"
    }, 200);
  });
  
};
$(document).ready(main);
