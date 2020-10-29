<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@ page import="java.io.*, java.net.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>chat app</title>
</head>
<body>


 <% 
        try{
            int character;
            Socket socket = new Socket("localhost", 8010);
            InputStream inSocket = socket.getInputStream();
            OutputStream outSocket = socket.getOutputStream();
            String str = "Hello!\n";
            byte buffer[] = str.getBytes();
            outSocket.write(buffer);
            while ((character = inSocket.read()) != -1) {
                out.print((char) character);
            }
            socket.close();
        }
        catch(java.net.ConnectException e){
        	
        	
        %>
            
        <%
        }
        %>



</body>
</html>