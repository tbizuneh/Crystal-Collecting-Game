$( document ).ready(function(){
    var random=Math.floor(Math.random()*101+19)
    
    $('.randomNumber').text(random);
    
    var n1= Math.floor(Math.random()*11+1)
    var n2= Math.floor(Math.random()*11+1)
    var n3= Math.floor(Math.random()*11+1)
    var n4= Math.floor(Math.random()*11+1)
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('.numberWins').text(wins);
  $('.numberLosses').text(losses);
  
  function reset(){
        random=Math.floor(Math.random()*101+19);
        console.log(random)
        $('.randomNumber').text(random);
        n1= Math.floor(Math.random()*11+1);
        n2= Math.floor(Math.random()*11+1);
        n3= Math.floor(Math.random()*11+1);
        n4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('.total').text(userTotal);
        } 
  
  function winer(){
  alert("You won!");
    wins++; 
    $('.numberWins').text(wins);
    reset();
  }
  
  function loser(){
  alert ("You lose!");
    losses++;
    $('.numberLosses').text(losses);
    reset()
  }
  
    $('#im1').on('click', function(){
      userTotal = userTotal + n1;
      console.log("New userTotal= " + userTotal);
      $('.total').text(userTotal); 
            
          if (userTotal == random){
            winer();
          }
          else if ( userTotal > random){
            loser();
          }   
    })  
    $('#im2').on ('click', function(){
      userTotal = userTotal + n2;
      console.log("New userTotal= " + userTotal);
      $('.total').text(userTotal); 
          if (userTotal == random){
            winer();
          }
          else if ( userTotal > random){
            loser();
          } 
    })  
    $('#im3').on ('click', function(){
      userTotal = userTotal + n3;
      console.log("New userTotal= " + userTotal);
      $('.total').text(userTotal);
  
            if (userTotal == random){
            winer();
          }
          else if ( userTotal > random){
            loser();
          } 
    })  
    $('#im4').on ('click', function(){
      userTotal = userTotal + n4;
      console.log("New userTotal= " + userTotal);
      $('.total').text(userTotal); 
        
            if (userTotal == random){
            winer();
          }
          else if ( userTotal > random){
            loser();
          }
    });   
  }); 