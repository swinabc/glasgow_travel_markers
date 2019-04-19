$(document).ready(function() {
    
    $("#glasgowMobile,#edinburgeMobile,#aberdeenMobile,#dundeeMobile,#glasgowMap,#edinburgeMap,#dundeeMap,#aberdeenMap,#return").hide();
    
    $("#locations").click(function(){
        $("#locations").hide();
        $("#return").show();
        $("#glasgowMobile,#edinburgeMobile,#aberdeenMobile,#dundeeMobile").slideToggle();
    });
    $("#return").click(function(){
        $("#locations").toggle();
        $("#locationsMap").slideDown();
        $("#glasgowMobile,#edinburgeMobile,#aberdeenMobile,#dundeeMobile,#return").slideToggle();
        $("#glasgowMap,#edinburgeMap,#dundeeMap,#aberdeenMap").hide();
    });
    $("#glasgowMobile,.glasgow").click(function(){
        $("#glasgowMap").slideDown();
        $("#locationsMap,#edinburgeMap,#dundeeMap,#aberdeenMap").hide();
    });
    $("#edinburgeMobile,.edinburge").click(function(){
        $("#edinburgeMap").slideDown();
        $("#locationsMap,#glasgowMap,#dundeeMap,#aberdeenMap").hide();
    });
    $("#dundeeMobile,.dundee").click(function(){
        $("#dundeeMap").slideDown();
        $("#locationsMap,#glasgowMap,#edinburgeMap,#aberdeenMap").hide();
    });
    $("#aberdeenMobile,.aberdeen").click(function(){
        $("#aberdeenMap").slideDown();
        $("#locationsMap,#glasgowMap,#edinburgeMap,#dundeeMap").hide();
    });
    // ---------------------------------------------------------------------------------------------------promo ---------------------------------------------------------------------------
    // ("#hotelsID,#landmarksID,#bars_nightclubsID,#restaurantsID").hide();
    
    $("#promotionBar").click(function() {
        ("#hotelsID,#landmarksID,#bars_nightclubsID,#restaurantsID").show();
    });

});














/*    var hotelVar;
    
    button = document.querySelector('.hotels');

    function addListener(element, type, callback) {
        if (element.addEventListener) element.addEventListener(type, callback);
        else if (element.attachEvent) element.attachEvent('on' + type, callback);
    }

    addListener(button, 'click', function() {
        alert('Hi!');
    });*/