$( document ).ready(function(){
    var random=Math.floor(Math.random()*101+19);
    
    
    $('.randomNumber').text(random);
    
    var num1= Math.floor(Math.random()*11+1);
    var num2= Math.floor(Math.random()*11+1);
    var num3= Math.floor(Math.random()*11+1);
    var num4= Math.floor(Math.random()*11+1);
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('.numberWins').text(wins);
  $('.numberLosses').text(losses);
  
  function reset(){
        random=Math.floor(Math.random()*101+19);
        console.log(random)
        $('.randomNumber').text(random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        
        userTotal= 0;
        $('.total').text(userTotal);
        } 
 
    
  function winer(){
    
    wins++; 
    $('.numberWins').text(wins);
    setTimeout(function(){
        alert("You won!")
        reset();
    },50)
  }
  
  function loser(){
    
  
    losses++;
    $('.numberLosses').text(losses);
    setTimeout(function(){
        alert("You lose!")
        reset();
    },50)
  }
  
    $('#im1').on('click', function(){
      userTotal = userTotal + num1;
      console.log( userTotal);
      $('.total').text(userTotal); 
            
          if (userTotal == random){
            winer();
          }
          else if ( userTotal > random){
            loser();
          }   
          else if(userTotal<random){
            
            }
    })  
    $('#im2').on ('click', function(){
      userTotal = userTotal + num2;
      console.log(userTotal);
      $('.total').text(userTotal);
         
          if (userTotal == random){
            
            winer();
          }
          else if ( userTotal > random){
            loser();
          } 
          else if(userTotal<random){
          
          }
    })  
    $('#im3').on ('click', function(){
      userTotal = userTotal + num3;
      console.log(userTotal);
      $('.total').text(userTotal);
       
            if (userTotal == random){ 
            winer();
          }
          else if ( userTotal > random){
            loser();
          } 
          else if(userTotal<random){
            
            }
    })  
    $('#im4').on ('click', function(){
      userTotal = userTotal + num4;
      console.log (userTotal);
      $('.total').text(userTotal); 
        
            if (userTotal == random){
            winer();
          }
          else if ( userTotal > random){
            loser();
          }
          else if(userTotal<random){
            
            }

    });   
  }); 