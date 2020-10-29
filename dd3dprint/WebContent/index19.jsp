<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>TABS</title>



<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial;}

/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;



@import "bourbon";

body {
	background: #eee !important;	
}

.wrapper {	
	margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);  

  .form-signin-heading,
	.checkbox {
	  margin-bottom: 30px;
	}

	.checkbox {
	  font-weight: normal;
	}

	.form-control {
	  position: relative;
	  font-size: 16px;
	  height: auto;
	  padding: 10px;
		@include box-sizing(border-box);

		&:focus {
		  z-index: 2;
		}
	}

	input[type="text"] {
	  margin-bottom: -1px;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	input[type="password"] {
	  margin-bottom: 20px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}
}



</style>





</head>






<body>
<br>
<br>
<center>
<p><i>CUBING AND ELECTRONICS STARTS HERE</i></p>
</center>
<br>
<br>

<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">HOME</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">SIGN IN</button>
  <button class="tablinks" onclick="openCity(event, 'Tokyo')">FACTS</button>
</div>

<div id="London" class="tabcontent">

  <h3></h3>
  <p>HOME PAGE</p>
  <img src="insta.jpg" width="300" height="700">
  
  
  
</div>

<div id="Paris" class="tabcontent">
<center>
  <h3></h3>
  <p>SIGN IN PAGE</p> 
  
  <div class="wrapper">
  
<form class="form-signin"  action="dummy2.htm" method="post">
 <h2 class="form-signin-heading">LOGIN</h2>
  <input type="text" class="form-control" name="user_name" placeholder="Email Address" required="" autofocus="" />
  <br>
      <input type="password" class="form-control" name="password" placeholder="Password" required=""/>      
      <label class="checkbox">
      <br>
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
      </label>
      <br>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
    </form>
   
  </div>

 


<h1>OR</h1>

<form class="form-signin" action="dummy3.htm" method="post">
 <h2 class="form-signin-heading">SIGN IN</h2>
  <input type="text" class="form-control" name="firstname" placeholder="FIRST NAME" required="" autofocus="" />
  <br>
  <input type="text" class="form-control" name="lastname" placeholder="LAST NAME" required="" autofocus="" />
  <br>
  <input type="text" class="form-control" name="user_name" placeholder="EMAIL ADDRESS" required="" autofocus="" />
  <br>
  <input type="password" class="form-control" name="password" placeholder="PASSWORD" required="" autofocus="" />
  <br>
     
     
      <button class="btn btn-lg btn-primary btn-block" type="submit">SIGN IN</button>   
    </form>
  </center>
</div>

<div id="Tokyo" class="tabcontent">
  <h3></h3>
  <p>FACTS PAGE</p>
</div>

<script>
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>




</body>
</html>