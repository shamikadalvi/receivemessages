<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Engineering</title>

<style>
.contactus {
  position: absolute;
  top : 60%
  left: 10%;
  
  
 
 
  
  text-align: center;
  
}

</style>




<style>
.factory {
 
  position: absolute;
  top: 68%;
  left: 50%;
  

  
 
  text-align: center;
  
  
  color: #393184;
  font-size: 16px;
 
 
  
  
  
}



.address {
 
  position: absolute;
  top: 80%;
  left: 50%;
  

  
 
  text-align: center;
  
  
  color: black;
  font-size: 12px;
 
 
  
  
  
}

</style>





<style>.mapouter{position:relative;text-align:right;height:400px;width: 100%;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:100%;}</style>




<style>

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


.form-control {
	  position: relative;
	  text-align: center;
	  font-size: 16px;
	  height: auto;
	  padding: 10px;
		@include box-sizing(border-box);

		&:focus {
		  z-index: 2;
		}
	}

</style>











</head>
<body>


<div class="mapouter">
<center>
<div class="gmap_canvas"><iframe width="1000" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=tirupati%20industrial%20estate&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

</div>
</center>
</div>




<div class="factory">


        <h1><b>Factory Address</b></h1>
     

</div>

<div class="address">


   <h1>DD3DPrints</h1>
       
      
   <h2>   202,Tirupati Industrial Estate,</h2>
   <h2>   Subhash Nagar ,  Bhandup West,</h2>
    <h2>  Mumbai: 40078,Maharashtra,India </h2>
    <h2>   </h2>
    <h2>  Email : info@dd3dprint.com </h2>
    <h2>  Mobile: 7738684624 </h2>
    
    
    
    

  


</div>

<div class="contactus">





        <h1></h1>
        <form method="post" action="contactServlet.htm" >
            <table border="0">
                <tr>
                   
                  
                   <td>  <input type="text" class="form-control" name="name" placeholder="Name" required="" autofocus=""  size="60"/> </td>
                </tr>
               
               <tr>
              
               </tr>
              
               <tr>
              
               </tr>
               
                <tr>
              
               </tr>
              
                
                
                 <tr>
                    
                    <td>  <input type="text" class="form-control" name="company" placeholder="Company" required="" autofocus=""  size="60"/> </td>
          
                </tr>
                
                 <tr>
              
               </tr>
               
                <tr>
              
               </tr>
               
                <tr>
              
               </tr>
                
                
                 <tr>
                   
                   
                     <td>  <input type="text" class="form-control" name="emailid" placeholder="Email" required="" autofocus=""  size="60"/> </td>
                </tr>
                
              
               <tr>
              
               </tr>
               
                <tr>
              
               </tr>
               
                <tr>
              
               </tr>
                 
                 <tr>
                   
                   
                     <td>  <input type="text" class="form-control" name="phone" placeholder="Phone" required="" autofocus=""  size="60"/> </td>
          
                </tr>
                
                
                 
               <tr>
              
               </tr>
               
                <tr>
              
               </tr>
               
                <tr>
              
               </tr>
                 
                
                
                
                
                <tr>
                
                  <td>  <input type="text" class="form-control" name="address" placeholder="Address" required="" autofocus=""  size="60" /> </td>
                
                </tr>
                   
                      <tr>
              
               </tr>
               
                <tr>
              
               </tr>
               
                <tr>
              
               </tr>
						                
              <tr>
               
                  
                   <td><textarea   class="form-control"   placeholder="Comments.." required="" autofocus="" rows="4" cols="58" name="questions">Questions..
                     </textarea></td> 
                  <!--    <td>  <input type="text" class="form-control" name="address" placeholder="Address" required="" autofocus=""  size="60" /> </td>
                
                 
                 
                       <td>  <input type="text" class="form-control" name="comment" placeholder="Comments.." required="" autofocus=""  size="60" /> </td>
                -->
                </tr>
               
              
                 <tr>
              
               </tr>
               
                <tr>
              
               </tr>
               
                <tr>
              
               </tr>
                
               
                <tr>
                    <td colspan="2">
                        <button class="btn btn-lg btn-primary btn-block" type="submit">CONTACT US</button>   
                    </td>
                </tr>
            </table>
        </form>
   

</div>

















</body>
</html>