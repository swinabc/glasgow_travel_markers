    function initMap() {
             
             var options = {
               zoom:6,
               center:{lat:57.068574,lng:-4.349972}
             };

             var map = new google.maps.Map(document.getElementById('map'), options);


            //  var marker = new google.maps.Marker({
            //   position:{lat:55.864125,lng:-4.254217},/*{lat:55.953414,lng:-3.188287},*/
            //   map:map
            //  });
               
            //   var infoWindow = new google.maps.InfoWindow({
            //       content:'<h3>Glasgow</h3>'
            //   });
               
            //   marker.addListener('click', function(){
            //       infoWindow.open(map, marker);
            //   });
            addMarker({lat:55.864125,lng:-4.254217});
            addMarker({lat:55.953414,lng:-3.188287}); 
            addMarker({lat:56.4620,lng:-2.9707}); 
            addMarker({lat:57.1497,lng:-2.0943}); 
            
            function addMarker(coords){
                var marker = new google.maps.Marker({
                position:coords,
                map:map
                    });
                 }
             }
/*{lat:55.864125,lng:-4.254217},{lat:55.953414,lng:-3.188287},*/

           
console.log("hello");