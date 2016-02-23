//RPM
setInterval(function(){
      
   var a = localStorage.getItem('RPMvalue');
        var b = a.split(' ');



          var c = [b[2],b[3]].join('');
       //var d = hexx+c;
          var e = parseInt(c, 16);
        var f = e/4;

           document.getElementById("rpm_hex").innerHTML = localStorage.getItem('RPMvalue');
      document.getElementById("rpm").innerHTML = f;
     
    
    document.getElementById("rpm_command").innerHTML = c;

      
      
  },1000); 


//FUEL

setInterval(function(){
      
    var a = localStorage.getItem('Speed');
    var b = a.split(' ');
    var m  = b.length;
      var c =  b[3];
      var e = parseInt(c, 16);
    
    
    
    
  var aff = localStorage.getItem('MAFF');
    var bff = aff.split(' ');
    var mff  = bff.length;
    
    var zff = bff[3];
    var cff =  bff[4];
    
   
      var first = parseInt(zff, 16);
    var second = parseInt(cff, 16);
    
  var maf = (((first*256)+second) / 100);
      
var result = (e * 7.718/maf);
      
    
      document.getElementById("fuel").innerHTML = result;
       document.getElementById("MAFF").innerHTML = localStorage.getItem('MAFF');
     document.getElementById("Speed").innerHTML = localStorage.getItem('Speed');
      
      
      
      
  },1000); 

//ERROR
setInterval(function(){
      
   
       var a = localStorage.getItem('Error');
    
    var b = a.split(' ');
    var m  = b.length;
    
    if(m<7)
        {
            var result = "Everything OK!";
        }
    
    else
        {
           var c = [b[2],b[3]].join(''); 
            var d = c.split('');
            var e = d[0];
            var p;
            switch (e) 
            {
                    
  case "0":
   p = "P0";
    break;
                    
    case "1":
   p = "P1";
    break;

    case "2":
   p = "P2";
    break;
                    
    case "3":
   p = "P3";
    break;
                    
                case "4":
   p = "C0";
    break;
                    
                case "5":
   p = "C1";
    break;
                    
                case "6":
   p = "C2";
    break;
                    
                case "7":
   p = "C3";
    break;
                    
                case "8":
   p = "B0";
    break;
                    
                case "9":
   p = "B1";
    break;
                    
                case "A":
   p = "B2";
    break;
                    
                case "B":
   p = "B3";
    break;
                    
                case "C":
   p = "U0";
    break;
                    
                case "D":
   p = "U1";
    break;
                    
                case "E":
   p = "U2";
    break;
                    
                case "F":
   p = "U3";
    break;
                           
        }
            
            var code = [d[1],d[2],d[3]].join('');
            var result = p+code;
          console.log(result);
            
            
        }
      
   

      
      

      
      document.getElementById("Error_hex").innerHTML = localStorage.getItem('Error');
      
      document.getElementById("error").innerHTML = result;
      
      
      
  },1000); 

