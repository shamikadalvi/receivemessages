<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Shopping cart</title>
<style>
* { font-size: 12px; font-family: Verdana }
</style>
</head>
<body>


<img src="images/Cofee.png" onclick="document.location='index30.jsp'">
<img src="Images/Shirt.png" onclick="document.location='remove.jsp'">
<img src="Images/cart.png" onclick="document.location='cart.jsp'">



<h2>The shopping cart</h2>

<jsp:scriptlet><![CDATA[ 
java.util.Enumeration content = session.getAttributeNames();

while (content.hasMoreElements()) {
    out.println(content.nextElement());
    out.println("<br>");
}

 ]]></jsp:scriptlet>

</body>
</html>