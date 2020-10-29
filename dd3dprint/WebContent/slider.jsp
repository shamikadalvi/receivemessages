<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>



 <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>slider</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

 
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">






<style>

    .displayraise1
{
   position: absolute;
    top: 20%;
    left:30%;
	width:10%;
	margin: 20px auto;
	
	background:orange;
	border:solid 10px black;
	padding: 10px;
	border-radius:10px;
	text-align: center;
	color:black;
}


.btn3
{
  position: absolute;
  top: 0%;
  left:80%;
  background-color: #4CAF50;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 8%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}





.btn4
{
  position: absolute;
  top: 10%;
  left:40%;
  background-color: #4CAF50;
  color: white;
  padding: 8px;
  margin: 5px 0;
  border: none;
  width: 5%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 12px;
}


</style>




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








</head>
<body>



 <input type="button" id="Raise1" class="btn3" value="Raise" /> 
  
 

  
<div id="shamika1">

  <input type="button" id="Submit1"       class="btn4" value="Submit" />
  <div class="displayraise1" id="slider-range-min1"> 
     
  
    
  <label for="amount1">Raise:</label>
  <input type="text" id="amount1" value="" readonly style="border:0; color:#f6931f; font-weight:bold;">

 
    
</div>


    


</div>











<script>

function Raise1()
   {
	var value1;
	 //alert("hi");
	 value1=document.getElementById("amount1").value;
	 alert(value1);
	 //alert("done");
	}
	
	
	
	
	
function load()
{

	
	$(document).ready(function()
			{
	 $("#shamika1").hide();
	   
	    
	    
	  });
	  
	  
	 

	
}


window.onload = load;
	
	
	

</script>










</body>
</html>