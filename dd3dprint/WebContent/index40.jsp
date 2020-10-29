<!DOCTYPE html>
<html>
<head>

<meta name="viewport" content="width=device-width, initial-scale=1">



<style>


<style>
.container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.container img {
  width: 100%;
  height: auto;
}





.dropbtn {
  position: absolute;
  top: 10%;
  left: 80%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
 background-color: #393184;
  color: white;
  font-size: 30px;
  padding: 12px 24px;
  border-color: black;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  
}

.container .btn:hover {
  background-color: black;
}


.dropbtn:hover, .dropbtn:focus {
  background-color: #393184;
}




.dropdown-content {

position: absolute;
  top: 25%;
  left: 79%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  width: 115px;
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
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</div>


</body>



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









</html>