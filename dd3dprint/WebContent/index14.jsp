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
.tab1 {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab1 button {
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
.tabcontent1 {
  display: none;
  padding: 6px 12px;
  border: 0px solid #ccc;
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

<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {box-sizing: border-box}
body {font-family: "Lato", sans-serif;}

/* Style the tab */
.tab {
  float: left;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 30%;
  height: 300px;
}

/* Style the buttons inside the tab */
.tab button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current "tab button" class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  float: left;
  padding: 0px 12px;
  border: 0px solid #ccc;
  width: 70%;
  border-left: none;
  height: 300px;
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

<div class="tab1">
  <button class="tablinks1" onclick="openCity1(event, 'Home')" id="defaultOpen1">HOME</button>
  <button class="tablinks1" onclick="openCity1(event, 'Signin')">SIGN IN</button>
  <button class="tablinks1" onclick="openCity1(event, 'FACTS')">FACTS</button>
</div>

<div id="Home" class="tabcontent1">


  <!--  
  <img src="insta.jpg" width="300" height="700" align="right">
 
 -->

<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">London</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
  <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
</div>

<div id="London" class="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p> 
</div>

<div id="Tokyo" class="tabcontent">
  <h3>Tokyo</h3>
  <p>Tokyo is the capital of Japan.</p>
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
    
  
  
</div>

<div id="Signin" class="tabcontent1">
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

<div id="FACTS" class="tabcontent1">
  <h3></h3>
  <center>
  
  
  <ul>
  
  <li>The <i>Rubik's cube </i> invented by <i>Eron Rubik</i> took over a <b>month</b> to solve it </li>
  <li>There are <b>4.3X10^19</b> possible permutations on a <b>Rubik's cube</b></li>
  <li><b>5.8 %</b> of the <b><i>world</i>population can solve a Rubik's cube</b></li>
  <li>The <b>world record</b>to solve a Rubik's cube is single<b><i>3.47 secs</i> by Yushen Du </b></li>
  <li>The <b>world record</b>to solve a Rubik's cube is average<b><i>5.69 secs</i> by Feliks Zemdegs </b></li>
  <li>The largest cube ever built is <b>33 X 33 X 33</b></li>
  <li>If a standard cube is scrambled for every permutation it would stretch for <b>260 light years</b> </li>
  <li>The world record set by a <b>bot</b> to solve the Rubik's cube is <b>0.637 secs</b><li>
  <li>The world's largest Rubik's cube measures <b>1.67 M in length</b> </li>
  <li>The world's smallest Rubik's cube measures <b>5.6 mm in length</b> </li>
  <li>There are more ways to scramble a <b>7x7</b> than atoms in the known <b>universe</b></li>
  
  <li>All the competitions and Regulations are governed by <b>World Cubing Association</b></li>
  
  </ul>
  
  <br>
  <p>

   Please visit web site <b>www.worldcubingassociation.org</b> for more information 
  </p>
  </center>
  
</div>

<script>
function openCity1(evt, cityName) {
  var i, tabcontent1, tablinks1;
  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }
  tablinks1 = document.getElementsByClassName("tablinks1");
  for (i = 0; i < tablinks1.length; i++) {
    tablinks1[i].className = tablinks1[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen1" and click on it
document.getElementById("defaultOpen1").click();
</script>




</body>
</html>