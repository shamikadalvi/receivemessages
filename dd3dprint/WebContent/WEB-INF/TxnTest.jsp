<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <%@page import="java.util.*" %>  
<%
 	Random randomGenerator = new Random();
	int randomInt = randomGenerator.nextInt(1000000);
 %>
 
 
 
 
 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Merchant Check Out Page</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="GENERATOR" content="Evrsoft First Page">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<style>
body {
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
}

* {
  box-sizing: border-box;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: #4CAF50;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #45a049;
}

a {
  color: #2196F3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>

</head>
<body>

<div>

	<center>
	<h2><i><b></b></i></h2>
	</center>
	<!--  
	<form method="post" action="dummy45.htm">
		<table border="2">
			<tbody>
				<tr>
					<th>S.No</th>
					<th>Label</th>
					<th>Value</th>
				</tr>
				<tr>
					<td>1</td>
					<td><label>ORDER_ID</label></td>
					<td><input id="ORDER_ID" tabindex="1" maxlength="20" size="20"
						name="ORDER_ID" autocomplete="off"
						value="ORDS_<%= randomInt %>">
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td><label>CUSTID</label></td>
					<td><input id="CUST_ID" tabindex="2" maxlength="30" size="12" name="CUST_ID" autocomplete="off" value="CUST001"></td>
				</tr>
				<tr>
					<td>3</td>
					<td><label>INDUSTRY_TYPE_ID</label></td>
					<td><input id="INDUSTRY_TYPE_ID" tabindex="4" maxlength="12" size="12" name="INDUSTRY_TYPE_ID" autocomplete="off" value="Retail"></td>
				</tr>
				<tr>
					<td>4</td>
					<td><label>Channel</label></td>
					<td><input id="CHANNEL_ID" tabindex="4" maxlength="12"
						size="12" name="CHANNEL_ID" autocomplete="off" value="WEB">
					</td>
				</tr>
				<tr>
					<td>5</td>
					<td><label>txnAmount</label></td>
					
					
					
					
					<td><input title="TXN_AMOUNT" tabindex="10"
						type="hidden" name="TXN_AMOUNT"
						value=${transcation} >
						${transcation}
						
					</td>
					
					
					
					
				</tr>
				<tr>
					
					
				</tr>
			</tbody>
		</table>
		* - Mandatory Fields
		
		<input value="CheckOut" type="submit"	onclick="">
		
	</form>
	
	-->
	
	<div class="row">
	<div class="col-75">
    <div class="container">
	
	<form  method="post" action="dummy45.htm">
		
		

					<input id="ORDER_ID"  type="hidden" 
						name="ORDER_ID" autocomplete="off"
						value="ORDS_<%= randomInt %>">
				
					<input id="CUST_ID" type="hidden"   name="CUST_ID" autocomplete="off" value="CUST001">
				
					
					<input id="INDUSTRY_TYPE_ID"  type="hidden"  name="INDUSTRY_TYPE_ID" autocomplete="off" value="Retail">
				
					<input id="CHANNEL_ID"  type="hidden"  name="CHANNEL_ID" autocomplete="off" value="WEB">
					
					
					<input title="TXN_AMOUNT"
						type="hidden" name="TXN_AMOUNT"
						value=${transcation} >
		
		
		
		
		    <div class="row">
          <div class="col-50">
          <center>
            <label><i>Total Amount  ${transcation} RS</i></label>
            <br>
            <label><i></i></label>
            </center>
		</div>
		</div>
		
		
		
					
				
					
					
			
	
	 <!-- 	
		
					
	<br>			
  <input type="text"  name="fullname" placeholder="FULLNAME" required="" autofocus="" />
  <br>
  <input type="text"  name="emailid" placeholder="EMAIL ADDRESS" required="" autofocus="" />
  <br>
  <input type="text" name="phonenum" placeholder="PHONE NUMBER" required="" autofocus="" />
  <br>
 <input type="text" 
 name="address" placeholder="ADDRESS" required="" autofocus="" />
  <br>
  			
			
 
   <input type="hidden" name="TXN_AMOUNT" value=${transcation} > AMOUNT IS ${transcation}
			
						
 
   
		<input value="CheckOut" type="submit"	onclick="">
		
		  -->  
	   <br>
		 <input type="submit"  onclick=""  value="Continue to checkout" class="btn">
		 
		
		
	</form>
	</div>
	</div>
	</div>
</body>
</html>