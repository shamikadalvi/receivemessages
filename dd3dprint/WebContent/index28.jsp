<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Engineering</title>

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

<center>
        <h1></h1>
        <form method="post" action="FileuploadServlet.htm" enctype="multipart/form-data">
            <table border="0">
                <tr>
                   
                     <td>  <input type="text" class="form-control" name="firstname" placeholder="First Name" required="" autofocus=""  size="60"/> </td>
                </tr>
                   
          
               
               
               
                 <tr>
                    <td ></td>
                    <td></td>
                 </tr>
            
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                 
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                 
                 
                
                 <tr>
                   
                   
                      <td>  <input type="text" class="form-control" name="lastname" placeholder="Last Name" required="" autofocus=""  size="60"/> </td>
          
                </tr>
                
                
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>  
                 
                 
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                 
                 
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                
                 <tr>
                   
                    
                       <tr>
                   
                   
                      <td>  <input type="text" class="form-control" name="emailid" placeholder="Email" required="" autofocus=""  size="60"/> </td>
          
                </tr>
                
          
                </tr>
                
              
              
                   <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                 
                 
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                 
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                
                 <tr>
                   
                      <td>  <input type="text" class="form-control" name="phone" placeholder="Phone" required="" autofocus=""  size="60"/> </td>
          
                </tr>
                
               <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                 
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                 
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                
                <tr>
                
               
                <td>
                     <b>Materials   </b>
                     <select id="material" name="material">
                     <option value="PLA">  PLA  </option>
                     <option value="ABS">  ABS  </option>
                   
                    
                     </select>
                
                </td>
              </tr>  
                
               
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                 
                
                 <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                 
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                
                
                
              <tr>
               
                    <td><textarea   class="form-control"    rows="4" cols="58" name="comments">Colors and additional information here..
                     </textarea></td> 
                  
                     
                </tr>
               
               
                 <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                 
                 
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                 
                  <tr>
                    <td ></td>
                    <td></td>
                 </tr>
                
                <tr>
               
                    
                    <td><b>Upload Files </b><input type="file" name="files"  class="form-control" /></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button class="btn btn-lg btn-primary btn-block" type="submit">UPLOAD</button>   
                    </td>
                </tr>
            </table>
        </form>
    </center>



</body>
</html>