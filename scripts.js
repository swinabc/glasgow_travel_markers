    function initMap() {
             
             var options = {
               zoom:6,
               center:{lat:57.068574,lng:-4.349972}
             };

             var map = new google.maps.Map(document.getElementById('map'), options);


             var marker = new google.maps.Marker({
               position:{lat:55.864125,lng:-4.254217},
               map:map
             });


           }
console.log("hello");