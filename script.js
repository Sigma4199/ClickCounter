$(function() {
  $("#counter").fadeOut(0);
  $("#reset").fadeOut(0);
 

  setTimeout(function(){
    $("#counter").fadeIn();
    $("#reset").fadeIn();
  }, 2000);
  
  
  $("#counter").click(function() {
    var value = +$(this).text();
    value++;
    $(this).text("" + value);
  });

  $("#reset").click(function() {
    $("#counter").fadeOut();
    $("#reset").fadeOut();
    
    setTimeout(function(){
      $("#counter").fadeIn();
      $("#reset").fadeIn();
    }, 500);
    
    
    setTimeout(function(){
    value = 0;
    $(counter).text("" + value);
    }, 500);
    
    
  });
});
