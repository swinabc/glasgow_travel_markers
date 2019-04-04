$(document).ready(function() {
    
    $("#glasgowMobile,#edinburgeMobile,#aberdeenMobile,#dundeeMobile,#map2,#map3,#map4,#map5").hide();
    
    $("#locations").click(function(){
        $("#glasgowMobile,#edinburgeMobile,#aberdeenMobile,#dundeeMobile").slideToggle();
    });
    $("#glasgowMobile,.glasgow").click(function(){
        $("#map2").slideToggle();
        $("#map1,#map3,#map4,#map5").hide();
    });
    $("#edinburgeMobile,.edinburge").click(function(){
        $("#map3").slideToggle();
        $("#map1,#map2,#map4,#map5").hide();
    });
    $("#dundeeMobile,.dundee").click(function(){
        $("#map4").slideToggle();
        $("#map1,#map3,#map2,#map5").hide();
    });
    $("#aberdeenMobile,.aberdeen").click(function(){
        $("#map5").slideToggle();
        $("#map1,#map3,#map4,#map2").hide();
    });
});