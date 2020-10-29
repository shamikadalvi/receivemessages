<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>MACHINE DATA</title>
</head>
<body>


<pre>
<label><i>  Target  Weight       <b> ${TargetWeight}</b></i></label>
<br>
<label><i> Vibrating Speed        <b>${VibSpeed}</b></i></label>
<br>
<label><i>  Calibration Weight1   <b>${CalWeight1}</b></i></label>
<br>
<label><i> Calibration Weight2    <b>${CalWeight2}</b></i></label>
<br>
<label><i>  Calibration Weight3    <b>${CalWeight3}</b></i></label>
<br>
<label><i> Calibration Weight4     <b>${CalWeight4}</b></i></label>
<br>
<label><i>  Calibration Weight5    <b>${CalWeight5}</b></i></label>



</pre>


<form    name="form1"   id="form1" action="machine.htm" method=post>
     
     
     
</form>




<script>



function load()
{
	
	
	

	$(document).ready(function(){
	     $("#form1").submit();
	});
	  
	
}


window.onload = load;


</script>



 

</body>
</html>