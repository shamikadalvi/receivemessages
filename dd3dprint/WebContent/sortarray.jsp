<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Sort Array</title>




<style>

.btn1
{
  position: absolute;
  top: 0%;
  left:50%;
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



    .display1
{

    position: absolute;
    top: 0%;
    left:0%;
	width:20%;
	
	background:dodgerblue;
	
	padding: 10px;
	
	text-align: center;
	color:white;
}


</style>






</head>
<body>

hi


 <div class="display"> 
      
       <input type="button" onclick="sort()" class="btn1" value="Sort" />  
       
       
   </div>  



<div  class="display11">

<table>

<tr>
 <td><input type="text" name="number1" id="number1" value=""/> </td>
 
 </tr>
</table>
 </div>









<script>



var arr=new Array();
var array1=new Array();
var array2=new Array();
var array3=new Array();


function sort()
   {
	array1=[12,78,12,18,36,45,62,15];
	array2= bubble_Sort(array1);
	
	array3=getUnique(array2);
	
	
	
	
	alert("array is");
	alert(array3[0]);
	alert(array3[1]);
	alert(array3[2]);
	alert(array3[3]);
	alert(array3[4]);
	alert(array3[5]);
	alert(array3[6]);
	
	
	if(array3[7]==null)
		{
		
		alert("its null");
		}
	
	document.getElementById('number1').value =  array3[6];	
	}



function swap(arr, first_Index, second_Index)

{
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}


function bubble_Sort(arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}




function getUnique(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}



</script>


</body>
</html>