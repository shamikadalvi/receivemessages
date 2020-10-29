<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<html>
<head>
<title>Shopping cart</title>
<style>
* { font-size: 12px; font-family: Verdana }
input { border: 1px solid #ccc }
</style>
</head>
<body>

<jsp:declaration>
java.util.Enumeration parms;
java.util.Enumeration values;
</jsp:declaration>

<jsp:scriptlet>
parms = request.getParameterNames();
values = request.getParameterNames();


while(parms.hasMoreElements()) {
    String name = (String) parms.nextElement();
    String value = (String) values.nextElement();
    session.setAttribute(name, value);
}

</jsp:scriptlet>


<img src="images/Cofee.png" onclick="document.location='index30.jsp'">
<img src="images/Shirt.png" onclick="document.location='remove.jsp'">
<img src="images/cart.png" onclick="document.location='cart.jsp'">


<h2>Add to shopping cart</h2>

<form method="get" action="index30.jsp">

<table>
<tr>
<td><input type="checkbox" <% if (session.getAttribute("scissors") != null) 
out.print("checked"); %> name="scissors"></td>
<td>Scissors</td>
</tr>
<tr>
<td><input type="checkbox" <% if (session.getAttribute("book") != null)
 out.print("checked"); %> name="book"></td>
<td>Book</td>
</tr>
<tr>
<td><input type="checkbox" <% if (session.getAttribute("pen") != null)
 out.print("checked"); %> name="pen"></td>
<td>Pen</td>
</tr>
<tr>
<td><input type="checkbox" <% if (session.getAttribute("bottle") != null)
 out.print("checked"); %> name="bottle"></td>
<td>Bottle</td>
<td>10 Rs</td>
<td><img src="Images/cart.png"></td>
</tr>
<tr>
<td><input type="checkbox" <% if (session.getAttribute("glass") != null)
out.print("checked"); %> name="glass"></td>
<td>Glass</td>
</tr>
</table>
<br><br>
<input type="submit" value="submit">
</form>


</body>
</html>
</html>