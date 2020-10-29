<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>


<%@page import="model.Login_Model" %>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<jsp:useBean id="obj_Login_Bean" class="bean.Login_Bean"></jsp:useBean>
<jsp:setProperty property="*" name="obj_Login_Bean"/>

<% 


System.out.println(obj_Login_Bean.getUser_name());
System.out.println(obj_Login_Bean.getPassword());
Login_Model obj_Login_model=new Login_Model();
boolean flag=obj_Login_model.check_user_name(obj_Login_Bean);


if(flag)
	
{
	
	System.out.println(flag+"login successful");
}

else
{
	System.out.println(flag+"login failed");
	session.setAttribute("Login failed","user or password is wrong");
	
	%>
	
	
	<script type="javascript/text">
      window.location.href="http://localhost:8083/Login_Project/index.jsp";
	
	</script>

<% 
} 

%>


</body>
</html>