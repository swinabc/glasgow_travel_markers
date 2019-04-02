$(document).ready(function() {
    $("#test1,#test2,#test3,#test4").hide();
    $("#test0").click(function(){
        $("#test1,#test2,#test3,#test4").slideToggle();
    });
});