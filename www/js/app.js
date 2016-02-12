/*var mas = [
    {name:"LOl"}, {name:"Lel"}
    
    
];*/

(function(){ 
var app = angular.module('starter', ['ionic']);
    
 
    
   
    
    app.controller("MyCtrl", function($scope){
        $scope.exit = function(){
            ionic.Platform.exitApp();
        };
        
        $scope.update = function()        
        { window.location= "index.html";
         
        };
        
        $scope.bt_connect = function(id)
        {
         bluetoothSerial.connect(id, function(id){
            
             window.location= "main.html"
         },
            function(error){
             console.log(error);
                             
             }
         );
        };
        
    setTimeout(function(){
            bluetoothSerial.write( "ATZ\r\nATE0\r\nATL0\r\nATS0\r\nATH0\r\n", function(){
              console.log("Success");
          }, function(){
            console.log("BUG!");  
          });
            
            
        }, 100);
    
       $scope.writeData = setInterval( function(data){
           
           console.log("Worked!");
         
           
           
           //rpm
           setTimeout(function(){ 
          bluetoothSerial.write( "010C\r\n", function(){
              console.log("Success");
          }, function(){
            console.log("BUG!");  
          });  
            }, 500);
           
             setTimeout(function(){
                 bluetoothSerial.read(function (data) { localStorage.setItem('RPMvalue', data); 
                                                    
                                                       console.log(data);   }, 
                                function(error){
               console.log(error);
           })
                 ;}, 700);
           
           
           
           
           
           
           
           
           
           
           //SPEED
           setTimeout(function(){ 
                
                bluetoothSerial.write( "010D\r\n" , function(){
              console.log("Success");
          }, function(){
            console.log("BUG!");  
          });  
           }, 1300);
                     
           
            setTimeout(function(){
                 bluetoothSerial.read(function (data) { localStorage.setItem('Speed', data); 
                                                    
                                                       console.log(data);   }, 
                                function(error){
               console.log(error);
           })
                 ;}, 1500);
           
           
           
           
           
           
           
           
           
           
           
           //MAFF
             setTimeout(function(){ 
          bluetoothSerial.write( "0110\r\n", function(){
              console.log("Success");
          }, function(){
            console.log("BUG!");  
          });  
            }, 2000);
           
             setTimeout(function(){
                 bluetoothSerial.read(function (data) { localStorage.setItem('MAFF', data); 
                                                    
                                                       console.log(data);   }, 
                                function(error){
               console.log(error);
           })
                 ;}, 2200);
           
           
           
           
           
           
           
           
           
           //ERROR
              setTimeout(function(){ 
          bluetoothSerial.write( "03\r\n", function(){
              console.log("Success");
          }, function(){
            console.log("BUG!");  
          });  
            },2700);
           
             setTimeout(function(){
                 bluetoothSerial.read(function (data) {
                     console.log(data);
                     if(data ==">03")
                         {
                             localStorage.setItem('Error', ">03 00 00 00 00 00 00 00"); 
                         }
                     else
                         {
                     localStorage.setItem('Error', data); 
                         }
                                                    
                                                       console.log(data);   }, 
                                function(error){
               console.log(error);
           })
                 ;}, 2900);
           
           
        }, 3200);
        
        
        
        
          var mas = localStorage.results ? JSON.parse(localStorage.results) : [];
                $scope.arr = mas;
      


                             
            
        });
    
    
        
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
          

  bluetoothSerial.list(function(results) {
            angular.forEach(results, function(device){
                console.log(results);
            localStorage.results = JSON.stringify(results);
                
            });
            },
            function(error) {
                console.log(error);
            }
        );
      
      
      
      
  })  ;
});
  
    
}());


