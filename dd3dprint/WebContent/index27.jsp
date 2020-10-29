<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>dd3dprints</title>

<meta name="viewport" content="width=device-width, initial-scale=1">
<style>


.dropbtn {
  position: relative; 
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  font-size: 20px;
  border: none;
  object-fit:cover;  
}



.dropbtn1 {
  background-color: white;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  object-fit:cover;  
}



.dropdown {
  position: absolute;
  display: inline-block;
  object-fit:cover;  
 
 
}







.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>



<style type="text/css">


body{ margin:0px }
div#middle{ min-width:150px; }
div#middle{ float:right;}


div#bottom{ clear:left; background:#666; height:200px; }



</style>




</head>
<body>




<!--  



-->
<div id="middle">
 <button class="dropbtn">CONTACT US</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
  
</div>

<div  id="middle" >
  <button class="dropbtn">GALLERY</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>


<div  id="middle" >
  <button class="dropbtn">SERVICES</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

</body>
</html>