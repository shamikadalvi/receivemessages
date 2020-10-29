<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>


<title>Play Poker</title>
 
  
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <link rel="stylesheet" type="text/css" href="game.css"/>
   <script src="app1.js" type="text/javascript"></script>
 


 



 
 


<script>

$( function() {
	  $( "#slider-range-min1" ).slider({
	    range: "min",
	    value: 5,
	    min: 0,
	    max: 500,
	    slide: function( event, ui ) {
	      $( "#amount1" ).val( ui.value );
	    }
	  });
	  $( "#amount1" ).val( $( "#slider-range-min1" ).slider( "value" ) );
	} );


</script>

	
 <script>

 

$(document).ready(function()
		{
  $("#Submit1").click(function()
{
    $("#shamika1").hide();
    Raise1();
    
    
  });
  
  
  $("#Raise1").click(function(){
    $("#shamika1").show();
     
    
    
  });
});



</script>







<script>

$( function() {
	  $( "#slider-range-min2" ).slider({
	    range: "min",
	    value: 5,
	    min: 0,
	    max: 500,
	    slide: function( event, ui ) {
	      $( "#amount2" ).val( ui.value );
	    }
	  });
	  $( "#amount2" ).val( $( "#slider-range-min2" ).slider( "value" ) );
	} );


</script>


 <script>

 

$(document).ready(function()
		{
  $("#Submit2").click(function()
{
    $("#shamika2").hide();
    Raise2();
    
    
  });
  
  
  $("#Raise2").click(function(){
    $("#shamika2").show();
     
    
    
  });
});



</script>






<script>


$( function() {
	  $( "#slider-range-min3" ).slider({
	    range: "min",
	    value: 5,
	    min: 0,
	    max: 500,
	    slide: function( event, ui ) {
	      $( "#amount3" ).val( ui.value );
	    }
	  });
	  $( "#amount3" ).val( $( "#slider-range-min3" ).slider( "value" ) );
	} );


</script>


 <script>

 

$(document).ready(function()
		{
  $("#Submit3").click(function()
{
    $("#shamika3").hide();
    Raise3();
    
    
  });
  
  
  $("#Raise3").click(function(){
    $("#shamika3").show();
     
    
    
  });
});



</script>



<script>


$( function() {
	  $( "#slider-range-min4" ).slider({
	    range: "min",
	    value: 5,
	    min: 0,
	    max: 500,
	    slide: function( event, ui ) {
	      $( "#amount4" ).val( ui.value );
	    }
	  });
	  $( "#amount4" ).val( $( "#slider-range-min4" ).slider( "value" ) );
	} );


</script>


 <script>

 

$(document).ready(function()
		{
  $("#Submit4").click(function()
{
    $("#shamika4").hide();
    Raise4();
    
    
  });
  
  
  $("#Raise4").click(function(){
    $("#shamika4").show();
     
    
    
  });
});



</script>


<script>



$( function() {
	  $( "#slider-range-min5" ).slider({
	    range: "min",
	    value: 5,
	    min: 0,
	    max: 500,
	    slide: function( event, ui ) {
	      $( "#amount5" ).val( ui.value );
	    }
	  });
	  $( "#amount5" ).val( $( "#slider-range-min5" ).slider( "value" ) );
	} );


</script>


 <script>

 

$(document).ready(function()
		{
  $("#Submit5").click(function()
{
    $("#shamika5").hide();
    Raise5();
    
    
  });
  
  
  $("#Raise5").click(function(){
    $("#shamika5").show();
     
    
    
  });
});



</script>




</head>
<body>





 <div id="shamika1">

  <input type="button" id="Submit1"   class="btnraisehide1" value="Submit" /> 
  <div class="displayraise1" id="slider-range-min1"> 
     
  <p>
  <label for="amount1"></label>
  <input type="text" id="amount1" value="" readonly style="border:0; color:dodgerblue; font-weight:bold;">
  </p>
 
    
</div>


    


</div>
        



 <div id="shamika2">

  <input type="button" id="Submit2"   class="btnraisehide2" value="Submit" /> 
  <div class="displayraise2" id="slider-range-min2"> 
     
   <p>
  <label for="amount2"></label>
  <input type="text" id="amount2" value="" readonly style="border:0; color:red; font-weight:bold;">
  </p>
 
    
</div>


    


</div>
       
       
       
         

 <div id="shamika3">

 
  <input type="button" id="Submit3"   class="btnraisehide3" value="Submit" /> 
  <div class="displayraise3" id="slider-range-min3"> 
     
  <p>
  <label for="amount3"></label>
  <input type="text" id="amount3" value="" readonly style="border:0; color:green; font-weight:bold;">
 </p>
 
    
</div>


    


</div>
              






 <div id="shamika4">

  <input type="button" id="Submit4"   class="btnraisehide4" value="Submit" /> 
  <div class="displayraise4" id="slider-range-min4"> 
     
 <p> 
  <label for="amount4"></label>
 <input type="text" id="amount4" value="" readonly style="border:0; color:orange; font-weight:bold;">
</p>
 
    
</div>


    


</div>
       




 <div id="shamika5">

  <input type="button" id="Submit5"   class="btnraisehide5" value="Submit" /> 
  <div class="displayraise5" id="slider-range-min5"> 
     
 <p> 
  <label for="amount5"></label>
  <input type="text" id="amount5" value="" readonly style="border:0; color:purple; font-weight:bold;">
</p>
 
    
</div>


    


</div>
       

   


 
      <div class="display"> 
      
       <input type="button" onclick="distribute()" class="btn1" value="Shuffel" />  
       
       <input type="button" onclick="call()" class="btn2" value="Call" /> 
          
          <input type="button" onclick="start()" class="btn3" value="Final Call" />     
        
        
          <input type="button" onclick="finalshow()" class="btn4" value="SHOW" />    
           
           
            <input type="button" onclick="fold1()" class="btnfold1" value="FOLD" />   
            
             <input type="button" onclick="fold2()" class="btnfold2" value="FOLD" />   
             
              <input type="button" onclick="fold3()" class="btnfold3" value="FOLD" />   
              
               <input type="button" onclick="fold4()" class="btnfold4" value="FOLD" />   
              
              
          <input type="button" onclick="fold5()" class="btnfold5" value="FOLD" />    
          
          <input type="button" id="Raise1" class="btnraiseshow1" value="Raise" /> 
          
            <input type="button" id="Raise2" class="btnraiseshow2" value="Raise" /> 
         
           
          
           <input type="button" id="Raise3" class="btnraiseshow3" value="Raise" />
           
            <input type="button" id="Raise4" class="btnraiseshow4" value="Raise" />
            
             <input type="button" id="Raise5" class="btnraiseshow5" value="Raise" />
          
          
          
          
            <input type="button" id="check1" class="btncheck1" value="Check" />
            
              <input type="button" id="call1"   onclick="call1()" class="btncall1" value="Call" />
          
          
            <input type="button" id="check2" class="btncheck2" value="Check" />
            
              <input type="button" id="call2"   onclick="call2()" class="btncall2" value="Call" />
              
              
              <input type="button" id="check3" class="btncheck3" value="Check" />
            
              <input type="button" id="call3" onclick="call3()"class="btncall3" value="Call" />
              
              
              <input type="button" id="check4" class="btncheck4" value="Check" />
            
              <input type="button" id="call4"   onclick="call4()"   class="btncall4" value="Call" />
              
              <input type="button" id="check5" class="btncheck5" value="Check" />
            
              <input type="button" id="call5"    onclick="call5()" class="btncall5" value="Call" />
          
          
          
          <div id="cash1" class="cash1"> 
         
          
          </div>
          
          
           <div id="cash2" class="cash2"> 
         
          
          </div>
          
          
          
          
           <div id="cash3" class="cash3"> 
         
          
          </div>
          
          
          
           <div id="cash4" class="cash4"> 
         
          
          </div>
          
          
          
           <div id="cash5" class="cash5"> 
         
          
          </div>
          
          
             <div id="displaytotalfinal"> 
          
          
            </div>
          
          
          
          
        
        <div   id="distribute" class=displaystart>
   
   
         
            
         </div>    
          
          
        </div>  
        
 
 
     <div  class="callcard">
     
              <table>
      
        
        <tr>
       
       <td><input type="hidden" name="number111" id="number111" value=""/> </td>
     
      <td><input type="hidden" name="color111" id="color111" value=""/> </td>
      
      
      
       </tr>
       
       
        <tr>
       <td><input type="hidden" name="number112" id="number112" value=""/> </td>
     
      <td><input type="hidden" name="color112" id="color112" value=""/> </td>
    
      
      
      
       </tr>
       
       
         <tr>
       <td><input type="hidden" name="number113" id="number113" value=""/> </td>
     
      <td><input type="hidden" name="color113" id="color113" value=""/> </td>
    
      
      
      
       </tr>
       
         <tr>
       <td><input type="hidden" name="number114" id="number114" value=""/> </td>
     
      <td><input type="hidden" name="color114" id="color114" value=""/> </td>
    
      
      
      
       </tr>
       
       
         <tr>
       <td><input type="hidden" name="number115" id="number115" value=""/> </td>
     
      <td><input type="hidden" name="color115" id="color115" value=""/> </td>
    
      
      
      
       </tr>
       
       
      
       
       
         <tr>
       
       <td><input type="hidden" name="number1" id="number1" value=""/> </td>
     
      <td><input type="hidden" name="color1" id="color1" value=""/> </td>
      
      
      
       </tr>
       
       
           <tr>
       
       <td><input type="hidden" name="number11" id="number11" value=""/> </td>
     
      <td><input type="hidden" name="color11" id="color11" value=""/> </td>
      
      
      
       </tr>
       
       
         <tr>
       
       <td><input type="hidden" name="number2" id="number2" value=""/> </td>
     
      <td><input type="hidden" name="color2" id="color2" value=""/> </td>
      
      
      
       </tr>
       
       
       
          
         <tr>
       
       <td><input type="hidden" name="number22" id="number22" value=""/> </td>
     
      <td><input type="hidden" name="color22" id="color22" value=""/> </td>
      
      
      
       </tr>
       
       
       
         <tr>
       
       <td><input type="hidden" name="number3" id="number3" value=""/> </td>
     
      <td><input type="hidden" name="color3" id="color3" value=""/> </td>
      
      
      
       </tr>
       
       
       
       
          
         <tr>
       
       <td><input type="hidden" name="number33" id="number33" value=""/> </td>
     
      <td><input type="hidden" name="color33" id="color33" value=""/> </td>
      
      
      
       </tr>
       
          <tr>
       
       <td><input type="hidden" name="number4" id="number4" value=""/> </td>
     
      <td><input type="hidden" name="color4" id="color4" value=""/> </td>
      
      
      
       </tr>
       
       
       
          
         <tr>
       
       <td><input type="hidden" name="number44" id="number44" value=""/> </td>
     
      <td><input type="hidden" name="color44" id="color44" value=""/> </td>
      
      
      
       </tr>
       
          <tr>
       
       <td><input type="hidden" name="number5" id="number5" value=""/> </td>
     
      <td><input type="hidden" name="color5" id="color5" value=""/> </td>
      
      
      
       </tr>
       
       
       
          
         <tr>
       
       <td><input type="hidden" name="number55" id="number55" value=""/> </td>
     
      <td><input type="hidden" name="color55" id="color55" value=""/> </td>
      
      
      
       </tr>
       
   </table>
   
     </div>
 
 
 
 
          <div>
        <table>
            <tr>
        
       <td><input type="hidden" name="playeris"  value=${playername}  id="playeris"/> </td>
      </tr>
      
      
          <tr>
        
       <td><input type="hidden" name="flagis"  value=${flagname}  id="flagis"/> </td>
      </tr>
      
      
      
         <tr>
        
       <td><input type="hidden" name="yourname"  value=${yourname}  id="yourname"/> </td>
      </tr>
      
      
      
     </table>
      
      
        
        
      </div>
 
 
        
        <br>
          
          <div id="display1" class="display1">  
            
          
      <!--    
          
        <table>
       <tr>
       
        <th><b>PLAYER</b></th>
         <th><b>1</b></th>
        </tr>
        
        
        <tr>
        
       <td><input type="hidden" name="number1" id="number1" value=""/> </td>
     
      <td><input type="hidden" name="color1" id="color1" value=""/> </td>
      
      
      
       </tr>
       
       
        <tr>
       <td><input type="hidden" name="number11" id="number11" value=""/> </td>
     
      <td><input type="hidden" name="color11" id="color11" value=""/> </td>
      
      
      
       </tr>
       
       
       
   </table>
   
   
   -->
    
   
   </div>
   
   
   <br>
  
  
  
   <div id ="display2" class="display2"> 
   
   <!--  
        <table>
       <tr>
       
       
        <th><b>PLAYER</b></th>
         <th><b>2</b></th>
        </tr>
        
        <tr>
       
       
       
       
       <td><input type="hidden" name="number2" id="number2" value=""/> </td>
     
      <td><input type="hidden" name="color2" id="color2" value=""/> </td>
      
      
      
       </tr>
       
       
        <tr>
       <td><input type="hidden" name="number22" id="number22" value=""/> </td>
     
      <td><input type="hidden" name="color22" id="color22" value=""/> </td>
      
      
      
       </tr>
   </table>
   
   --> 
   </div>
   
   
   <br>
       <div id ="display3" class="display3">
       
       <!--    
        <table>
       <tr>
       
       
        <th><b>PLAYER</b></th>
         <th><b>3</b></th>
        </tr>
        
        <tr>
       
       
       
       
       <td><input type="hidden" name="number3" id="number3" value=""/> </td>
     
      <td><input type="hidden" name="color3" id="color3" value=""/> </td>
      
      
      
       </tr>
       
       
        <tr>
       <td><input type="hidden" name="number33" id="number33" value=""/> </td>
     
      <td><input type="hidden" name="color33" id="color33" value=""/> </td>
      
      
      
       </tr>
   </table>
   
   -->
   </div>
   
   <br>
       <div    id="display4"    class="display4">


<!--  
        <table>
       <tr>
       
       
       
        <th><b>PLAYER</b></th>
         <th><b>4</b></th>
        </tr>
        
        <tr>
       
       
       
       
       <td><input type="hidden" name="number4" id="number4" value=""/> </td>
     
      <td><input type="hidden" name="color4" id="color4" value=""/> </td>
      
      
      
       </tr>
       
       
        <tr>
        
      
        
       <td><input type="hidden" name="number44" id="number44" value=""/> </td>
     
      <td><input type="hidden" name="color44" id="color44" value=""/> </td>
      
      
      
       </tr>
   </table>
   
   --> 
   </div>
   
   <br>
       <div id ="display5"  class="display5">  
       
  
       
          
       <!--       
        
        <table>
       <tr>
       
        <th><b>PLAYER</b></th>
         <th><b>5</b></th>
        </tr>
        
        <tr>
       
       <td><input type="hidden" name="number5" id="number5" value=""/> </td>
     
      <td><input type="hidden" name="color5" id="color5" value=""/> </td>
      
      
      
       </tr>
       
       
        <tr>
       <td><input type="hidden" name="number55" id="number55" value=""/> </td>
     
      <td><input type="hidden" name="color55" id="color55" value=""/> </td>
      
      
      
       </tr>
   </table>
   
  
   -->
   
 
   
   </div>
   
   
   
   
  
   <div id="fold1" class="display11"> </div>
   <div id="fold2" class="display22"> </div>
   <div id="fold3" class="display33"> </div>
   <div id="fold4" class="display44"> </div>
  <div id="fold5" class="display55"> </div>
  
  
   
  
  
   
   
  
   
  <div  class="displaywinner">
<!--  
<table>

<tr>
 <td><input type="hidden" name="winner1" id="winner1" value=""/> </td>
 
 </tr>
 
<tr>
 <td><input type="hidden" name="winner2" id="winner2" value=""/> </td>
 
 </tr>
 
 <tr>
 <td><input type="hidden" name="winner3" id="winner3" value=""/> </td>
 
 </tr>
 
 <tr>
 <td><input type="hidden" name="winner4" id="winner4" value=""/> </td>
 
 </tr>
 
 <tr>
 <td><input type="hidden" name="winner5" id="winner5" value=""/> </td>
 
 </tr> 
 
 
</table>

-->


<div id="winner1"> </div>
<div id="winner2"> </div>
<div id="winner3"> </div>
<div id="winner4"> </div>
<div id="winner5"> </div>





 </div>
    
  
    
           
            
 
 
              
    
   <body> 
   </html>