<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>switch</title>





 <link rel = "icon" href = "Logo.png" 
        type = "image/x-icon">

<style>

<style>
.container {
  position:absolute;
  
  min-width: 250px;
}

.container img {
 position:absolute;
  width: 100%;
 
}


.btn {

  position: absolute;
  top: 40%;
  left:50%;
  background-color: #4CAF50;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 50%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}



.dropbtn {
  position: absolute;
  top: 10%;
  left: 50%;
 
 background-color: #393184;
  color: white;
  font-size: 14px;
  padding: 20px  20px;
  width: 130px;
  border-color: black;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  
}


.dropbtn2 {
  position: absolute;
  top: 10%;
  left: 75%;
  
 background-color: #e8e10e;
  color: black;
  font-size: 14px;
  padding: 20px  20px;
  width: 130px;
  
  border-color: black;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
 
  
}

.dropbtn3 {
  position: absolute;
  top: 10%;
  left: 75%;
  
 background-color: #d91431;
  color: black;
  font-size: 14px;
  padding: 20px  20px;
  width: 130px;
  
  border-color: black;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  
}




.dropbtn:hover, .dropbtn:focus {
  background-color: #393184;
}






.mystyle {
  width: 100%;
  padding: 25px;
  background-color: coral;
  color: white;
  font-size: 25px;
  box-sizing: border-box;
}












</style>


</head>
<body>



<div class="container">
  
<!--   <img src="Page.jpg">
 

  <button onclick="myFunction()" class="dropbtn"><b>SWITCH</b></button>  -->
  
  
    <form  action="dummy200.htm" method="post">
  <table>
       <tr>
       <td><input type="hidden" name="number" id="number" value="0"/> </td>
     
      
       </tr>

      <tr>
      <td>
      <input type="button" onclick="myFunction()" class="dropbtn" value="SWITCH" />
      </td>
      </tr>
    
     </table>
     <br>
     
       <button class="btn" type="submit">SAVE</button>   
    
</form>
   
   
   
 <div   id ="myDropdown2" class=dropbtn2>

  <b>LED</b>
  
</div>


 
     
    
 
</div>





<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	
	 var element = document.getElementById("myDropdown2");
	   element.classList.toggle("dropbtn3");
	   
	   var value = parseInt(document.getElementById('number').value, 10);
	    value = isNaN(value) ? 0 : value;
	    value++;
	    document.getElementById('number').value = value;
}

// Close the dropdown if the user clicks outside of it

/*
window.onclick = function(event) 

{
	document.getElementsByClassName("dropbtn2");
}

*/




</script>


</body>
</html>