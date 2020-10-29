<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>slider</title>


<style>

output { 
   position: absolute;
    top: 20%;
    left:0%;
	width:30%;
  background-image: linear-gradient(#444444, #999999);
  width: 40px; 
  height: 30px; 
  text-align: center; 
  color: white; 
  border-radius: 10px; 
  display: inline-block; 
  font: bold 15px/30px Georgia;
  bottom: 175%;
  left: 0;
}
output:after { 
  content: "";
    position: absolute;
    top: 20%;
    left:0%;
	width:30%;
  width: 0;
  height: 0;
  border-top: 10px solid #999999;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  margin-top: -1px;
}





    .raise1
{

    position: absolute;
    top: 20%;
    left:0%;
	width:20%;
	
	background:orange;
	
	padding: 10px;
	
	text-align: center;
	color:white;
}







    .raisehide1
{

    position: absolute;
    top: 20%;
    left:0%;
	width:20%;
	
	background:green;
	
	padding: 10px;
	
	text-align: center;
	color:white;
}



.btn3
{
  position: absolute;
  top: 0%;
  left:80%;
  background-color: #4CAF50;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 8%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}


</style>

</head>
<body>








<div id="raise1" class="raise1">
<input type="range" name="foo" min="0" max="100">
<br>
<br>
<output for="foo" onforminput="value = foo.valueAsNumber;"></output>

</div>




<script>




function modifyOffset() {
    var el, newPoint, newPlace, offset, siblings, k;
    width    = this.offsetWidth;
    newPoint = (this.value - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"));
    offset   = -1;
    if (newPoint < 0) { newPlace = 0;  }
    else if (newPoint > 1) { newPlace = width; }
    else { newPlace = width * newPoint + offset; offset -= newPoint;}
    siblings = this.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
        sibling = siblings[i];
        if (sibling.id == this.id) { k = true; }
        if ((k == true) && (sibling.nodeName == "OUTPUT")) {
            outputTag = sibling;
        }
    }
    outputTag.style.left       = newPlace + "px";
    outputTag.style.marginLeft = offset + "%";
    outputTag.innerHTML        = this.value;
    
    
    document.getElementById("amount1").value=500;
    
    var amountplayer1= document.getElementById("amount1").value;
    var percentage1= outputTag.innerHTML ;
    
    
    
    document.getElementById("foo1").value= Math.floor((amountplayer1*percentage1)/100) ;
    var raiseamount1=Math.floor((amountplayer1*percentage1)/100);
    var newamountplayer1=  amountplayer1-raiseamount1;
    
    document.getElementById("amount1").value=newamountplayer1;
   
   
}

function modifyInputs() {
    
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].getAttribute("type") == "range") {
            inputs[i].onchange = modifyOffset;

            // the following taken from http://stackoverflow.com/questions/2856513/trigger-onchange-event-manually
            if ("fireEvent" in inputs[i]) {
                inputs[i].fireEvent("onchange");
            } else {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                inputs[i].dispatchEvent(evt);
            }
        }
    }
}


modifyInputs();



</script>

</body>
</html>