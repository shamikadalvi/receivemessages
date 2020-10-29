<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>dd3dprint</title>





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





.dropbtn {
  position: absolute;
  top: 10%;
  left: 70%;
  
 background-color: #393184;
  color: white;
  font-size: 14px;
  padding: 12px  20px;
  width: 130px;
  border-color: black;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  
}


.dropbtn1 {
  position: absolute;
  top: 10%;
  left: 85%;
  
 background-color: #393184;
  color: white;
  font-size: 14px;
  padding: 12px  20px;
  width: 130px;
  border-color: black;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  
}





.dropbtn:hover, .dropbtn:focus {
  background-color: #393184;
}



.dropbtn1:hover, .dropbtn1:focus {
  background-color: #393184;
}



.dropdown-content {

position: absolute;
  top: 20%;
  left: 70%;
  
  display: none;
  position: absolute;
  background-color: #f1f1f1;
   width: 130px;
  overflow: auto;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0);
  z-index: 1;
}









.dropdown-content a {
  color: black;
  padding: 12px 12px;
  text-decoration: none;
  display: block;
}





.dropdown a:hover {background-color: #ddd;}



.show {display: block;}


</style>


</head>
<body>



<div class="container">
  
 <img src="Page.jpg">
 

  <button onclick="myFunction()" class="dropbtn"><b>Services</b></button>
  <div id="myDropdown" class="dropdown-content">
    <a href="index28.jsp">ENGINEERING</a>
    <a href="#CONSUMER.htm">CONSUMER</a>
    <a href="#MEDICAL.htm">MEDICAL</a>
  </div>




 
       <button  onclick="window.location.href = 'index50.jsp';"  class="dropbtn1">Contact us</button> 
    
 
</div>





<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}






</script>



</body>
</html>