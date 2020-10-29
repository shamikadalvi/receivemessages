<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Machine Status</title>


   <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

 <link rel="stylesheet" type="text/css" href="machine.css"/>







</head>
<body>



<script>

function btnclick()
{


var element = document.getElementById("en1");
  element.classList.toggle("en1on");
}

</script>





 <div class="common"> 
 
 
  <div class="${ffs1}"  id="ffs1" ></div> 

<div class="${smartpack}" id="smartpack"></div> 


<div class="${weigher}" id="weigher"></div> 

<div class="${midpan}" id="midpan"></div> 

<div class="${gusset}" id="gusset"></div>

<div class="${inkjet}" id="inkjet"></div>

<div class="${ffs2}" id="ffs2"></div>

 <input type="button" onclick="btnclick()" class="btn2" value="CLICK" /> 


 <label>Work Order <b>${workorder}</b></label>  &nbsp; &nbsp;   <label> <font style="color:#db6318;"> <b>FFS</b></font> </label>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;   <label> <font style="color:#db6318;"> <b>Packet Count</b></font> </label> &nbsp; &nbsp;  <label><b>${packetcount}</b></label>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <label> <font style="color:#db6318;"> <b>FFS ON</b></font> </label>       
 <br>
 <br>
 <label>Password   &nbsp; &nbsp;  &nbsp; <b>${password}</b></label>   &nbsp; &nbsp; &nbsp; <label> <font style="color:#db6318;"> <b>Smart Pack</b></font> </label>
  <br>
  <br>
 <label>Date &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  <b>${thedate}</b> </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <label> <font style="color:#db6318;"> <b>Weigher</b></font> </label>
 <br>
 <br>
 <label>Month &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;   &nbsp; <b>${themonth}</b> </label>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<label> <font style="color:#db6318;"> <b>Mid Pan</b></font> </label>
  <br>
  <br>
 <label>Year &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; <b>${theyear}</b> </label>  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;<label> <font style="color:#db6318;"> <b>Gusset</b></font> </label>
  <br>
  <br>
 <label>MaxHeads &nbsp; &nbsp;   &nbsp;    <b>${maxheads}</b> </label> &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;<label> <font style="color:#db6318;"> <b>Ink Jet</b></font> </label>
  <br>
  <br>
 
 
 
  <table class="table1" border="1" >
                <tr>
                    <td>Target Wt </td>
                    <td>${targetwt}</td>
                    
                    
                     <td>Vib Time </td>
                    <td>${vibtime}</td>
                    
                    
                </tr>
                
                
                <tr>
                    <td>Low Wt </td>
                    <td>${lowwt}</td>
                    
                    
                     <td>High Wt </td>
                     <td>${highwt}</td>
                </tr>
                
                
                
                
                <tr>
                    <td>Read delay </td>
                    <td>${readdelay}</td>
                    
                    
                     <td>Pan delay </td>
                     <td>${pandelay}</td>
                </tr>
                
                <tr>
                     <td>Target Divide </td>
                    <td>${targetdivide}</td>
                    
                    
                     <td>Weigh To FFS Time </td>
                     <td>${weightoffstime}</td>
                </tr>
                
              
            </table>
 
 
 
 
  <br>
  <br>
 
 
 
  <table class="table2" border="1" >
                <tr>
                    <th  rowspan="1"   > Head</th>
                    <th  rowspan="1"   > ENABLE</th>
                    <th  rowspan="1"   > Cal Wt</th>
                    <th  rowspan="1"   > Cal Cnt</th>
                     <th  rowspan="1"   > Tare Wt</th>
                     <th  rowspan="1"   > Net Wt</th>
                      <th  rowspan="1"   >Vib</th>
                       <th  rowspan="1"   >Ready</th>
                       <th  rowspan="1"   >Comb</th>
                       <th  rowspan="1"   >Comm</th>
                    
                </tr>
                
                
             
                <tr>
                    <th>1 </th>
                  <th><div class="${en1}" id="en1"></div></th> 
                   
                     <td>${calwt1} </td>
                     <td>${calcount1}</td>
                      <td>${tarewt1}</td>
                      <td>${netwt1} </td>
                      <td>${vib1}</td>
                      <td> <div class="${ready1}" id="ready1"></div> </td>
                      <td> <div class="${comb1}" id="comb1"></div> </td>
                      <td>${comm1}</td>
                     
                </tr>
                
                
                  <tr>
                   
                    <th>2 </th>
                   <th><div class="${en2}" id="en2"></div></th> 
                     <td>${calwt2} </td>
                     <td>${calcount2}</td>
                      <td>${tarewt2}</td>
                      <td>${netwt2} </td>
                      <td>${vib2}</td>
                      <td> <div class="${ready2}" id="ready2"></div> </td>
                      <td> <div class="${comb2}" id="comb2"></div> </td>
                      <td>${comm2}</td>
                  </tr>
                
                
                
                <tr>
                   
                    <th>3 </th>
                 <td> <div class="${en3}" id="en3"></div> </td>
                   
                     <td>${calwt3} </td>
                     <td>${calcount3}</td>
                      <td>${tarewt3}</td>
                      <td>${netwt3} </td>
                      <td>${vib3}</td>
                      <td> <div class="${ready3}" id="ready3"></div> </td>
                      <td> <div class="${comb3}" id="comb3"></div> </td>
                      <td>${comm3}</td>
                  </tr>
                  
                  
                  <tr>
                   
                    <th>4 </th>
                    <td> <div class="${en4}" id="en4"></div> </td>
                   
                     <td>${calwt4} </td>
                     <td>${calcount4}</td>
                      <td>${tarewt4}</td>
                      <td>${netwt4} </td>
                      <td>${vib4}</td>
                      <td> <div class="${ready4}" id="ready4"></div> </td>
                      <td> <div class="${comb4}" id="comb4"></div> </td>
                      <td>${comm4}</td>
                  </tr>
                  
                  
                  <tr>
                   
                    <th>5 </th>
                  <td> <div class="${en5}" id="en5"></div> </td>
                   
                     <td>${calwt5} </td>
                     <td>${calcount5}</td>
                      <td>${tarewt5}</td>
                      <td>${netwt5} </td>
                      <td>${vib5}</td>
                      <td> <div class="${ready5}" id="ready5"></div> </td>
                      <td> <div class="${comb5}" id="comb5"></div> </td>
                      <td>${comm5}</td>
                  </tr>
                  
                  
                  <tr>
                    <th>6 </th>
                   <td> <div class="${en6}" id="en6"></div> </td>
                   
                     <td>${calwt6} </td>
                     <td>${calcount6}</td>
                      <td>${tarewt6}</td>
                      <td>${netwt6} </td>
                      <td>${vib6}</td>
                      <td> <div class="${ready6}" id="ready6"></div> </td>
                      <td> <div class="${comb6}" id="comb6"></div> </td>
                      <td>${comm6}</td>
                  </tr>
                  
                  
                  
                  <tr>
                   
                    <th>7 </th>
                     <td> <div class="${en7}" id="en7"></div> </td>
                   
                     <td>${calwt7} </td>
                     <td>${calcount7}</td>
                      <td>${tarewt7}</td>
                      <td>${netwt7} </td>
                      <td>${vib7}</td>
                      <td> <div class="${ready7}" id="ready7"></div> </td>
                      <td> <div class="${comb7}" id="comb7"></div> </td>
                      <td>${comm7}</td>
                  </tr>
                  
                  
                  
                  <tr>
                   
                    <th>8 </th>
                     <td> <div class="${en8}" id="en8"></div> </td>
                   
                     <td>${calwt8} </td>
                     <td>${calcount8}</td>
                      <td>${tarewt8}</td>
                      <td>${netwt8} </td>
                      <td>${vib8}</td>
                      <td> <div class="${ready8}" id="ready8"></div> </td>
                      <td> <div class="${comb8}" id="comb8"></div> </td>
                      <td>${comm8}</td>
                  </tr>
                  
                  
                  
                  <tr>
                   
                    <th>9</th>
                      <td> <div class="${en9}" id="en9"></div> </td>
                   
                     <td>${calwt9} </td>
                     <td>${calcount9}</td>
                      <td>${tarewt9}</td>
                      <td>${netwt9} </td>
                      <td>${vib9}</td>
                      <td> <div class="${ready9}" id="ready9"></div> </td>
                      <td> <div class="${comb9}" id="comb9"></div> </td>
                      <td>${comm9}</td>
                  </tr>
                  
                  
                  <tr>
                   
                    <th>10 </th>
                      <td> <div class="${en10}" id="en10"></div> </td>
                   
                     <td>${calwt10} </td>
                     <td>${calcount10}</td>
                      <td>${tarewt10}</td>
                      <td>${netwt10} </td>
                      <td>${vib10}</td>
                      <td> <div class="${ready10}" id="ready10"></div> </td>
                      <td> <div class="${comb10}" id="comb10"></div> </td>
                      <td>${comm10}</td>
                  </tr>
                  
                  
                  <tr>
                   
                    <th>11 </th>
                       <td> <div class="${en11}" id="en11"></div> </td>
                   
                     <td>${calwt11} </td>
                     <td>${calcount11}</td>
                      <td>${tarewt11}</td>
                      <td>${netwt11} </td>
                      <td>${vib11}</td>
                      <td> <div class="${ready11}" id="ready11"></div> </td>
                      <td> <div class="${comb11}" id="comb11"></div> </td>
                      <td>${comm11}</td>
                  </tr>
                  
                  
                  <tr>
                   
                    <th>12 </th>
                      <td> <div class="${en12}" id="en12"></div> </td>
                   
                     <td>${calwt12} </td>
                     <td>${calcount12}</td>
                      <td>${tarewt12}</td>
                      <td>${netwt12} </td>
                      <td>${vib12}</td>
                      <td> <div class="${ready12}" id="ready12"></div> </td>
                      <td> <div class="${comb12}" id="comb12"></div> </td>
                      <td>${comm12}</td>
                  </tr>
                  
                  
                  <tr>
                   <th>13 </th>
                    <td> <div class="${en13}" id="en13"></div> </td>
                   
                     <td>${calwt13} </td>
                     <td>${calcount13}</td>
                      <td>${tarewt13}</td>
                      <td>${netwt13} </td>
                      <td>${vib13}</td>
                      <td> <div class="${ready13}" id="ready13"></div> </td>
                      <td> <div class="${comb13}" id="comb13"></div> </td>
                      <td>${comm13}</td>
                  </tr>
                  
                  
                  <tr>
                   
                     <th>14 </th>
                     <td> <div class="${en14}" id="en14"></div> </td>
                     <td>${calwt14} </td>
                     <td>${calcount14}</td>
                      <td>${tarewt14}</td>
                       <td>${netwt14} </td>
                       <td>${vib14}</td>
                        <td> <div class="${ready14}" id="ready14"></div> </td>
                         <td> <div class="${comb14}" id="comb14"></div> </td>
                            <td>${comm14}</td>
                      
                  </tr>
                  
                  
                  
                
                
              
            </table>



 <table class="table3" border="1" >
                <tr>
                    <th>Paper Length</th>
                    <td>${paperlength}</td>
                    
                    
                     <th>Printer Delay</th>
                    <td>${printerdelay}</td>
                    
                    
                </tr>
                
                
                <tr>
                    <th>Paper Delay </th>
                    <td>${paperdelay}</td>
                    
                    
                     <th>Printer Time </th>
                     <td>${printertime}</td>
                </tr>
                
                
                
                
                <tr>
                    <th>Horizontal Time </th>
                    <td>${horizontaltime}</td>
                    
                    
                     <th>PMS delay </th>
                     <td>${pmsdelay}</td>
                </tr>
                
                <tr>
                     <th>Horizontal delay </th>
                    <td>${horizontaldelay}</td>
                    
                    
                     <th>PMS Ignore </th>
                     <td>${pmsignore}</td>
                </tr>
                
                
                
                <tr>
                     <th>Knief delay </th>
                    <td>${kniefdelay}</td>
                    
                    
                     <th>Nitrogen  delay</th>
                     <td>${nitrogendelay}</td>
                </tr>
                
                
                
                
                 <tr>
                     <th>Knief Time </th>
                    <td>${knieftime}</td>
                    
                    
                     <th>Nitrogen Time </th>
                     <td>${nitrogentime}</td>
                </tr>
                
                
                
                    <tr>
                     <th>Vertical delay </th>
                    <td>${verticaldelay}</td>
                    
                    
                     <th>Gusset delay </th>
                     <td>${gussetdelay}</td>
                </tr>
                
                
                
                  <tr>
                     <th>Vertical  Time </th>
                    <td>${verticaltime}</td>
                    
                    
                     <th>Gusset  Time </th>
                     <td>${gussettime}</td>
                </tr>
                
                
                
                
                    
                  <tr>
                     <th>Strip  Count </th>
                    <td>${stripcount}</td>
                    
                    
                     <th>Max Unwind  Time </th>
                     <td>${maxunwindtime}</td>
                </tr>
              
              
            </table>
 



               <table class="table4" border="1" >
                <tr>
                    <th>Start RPM</th>
                    <td>${startrpm}</td>
                    
                    
                     <th>Weigh to Mid Time</th>
                    <td>${weightomidtime}</td>
                    
                    
                </tr>
                
                
                <tr>
                    <th>Stop RPM </th>
                    <td>${stoprpm}</td>
                    
                    
                     <th>	Mid Pan hold Time </th>
                     <td>${midpanholdtime}</td>
                </tr>
                
                
                
                
                <tr>
                    <th>Max RPM </th>
                    <td>${maxrpm}</td>
                    
                    
                     <th>Mid Pan open counts </th>
                     <td>${midpanopencounts}</td>
                </tr>
                
                <tr>
                     <th>Accl % </th>
                    <td>${acclper}</td>
                    
                    
                     <th>Mid Pan RPM </th>
                     <td>${midpanrpm}</td>
                </tr>
                
                
                
                <tr>
                     <th>Decl % </th>
                    <td>${declper}</td>
                    
                    
                     <th>Mid Pan Mode</th>
                     <td>${midpanmode}</td>
                </tr>
                
                
                
                
               
            </table>
            
            
            
            
            
            
            
            
            <table class="table5" border="1" >
                <tr>
                    <th>Max Machine Speed</th>
                    <td>${maxmachinespeed}</td>
                    
                    
                     <th>Max Speed</th>
                    <td>${maxspeed}</td>
                    
                    
                </tr>
                
                
                <tr>
                    <th>Actual Machine Speed </th>
                    <td>${actualmachinespeed}</td>
                    
                    
                     <th>	 </th>
                     <td></td>
                </tr>
                
                
                
                
      
                
                
               
            </table>
            
            
            
            
            
   <!--         
            
            
            
  <table class="table6" border="1" >
                <tr>
                    <th>OUT 01</th>
                    <th>OUT 02</th>
                    <th>OUT 03</th>
                    <th>OUT 04</th>
                    <th>OUT 05</th>
                    <th>OUT 06</th>
                    <th>OUT 07</th>
                    <th>OUT 08</th>
                     <th>OUT 09</th>
                     <th>OUT 10</th>
                     <th>OUT 11</th>
                     <th>OUT 12</th>
                     <th>OUT 13</th>
                     <th>OUT 14</th>
                     <th>OUT 15</th>
                     <th>OUT 16</th>
                     <th>OUT 17</th>
                     <th>OUT 18</th>
                     <th>OUT 19</th>
                     <th>OUT 20</th>
                     <th>OUT 21</th>
                     <th>OUT 22</th>
                     <th>OUT 23</th>
                     <th>OUT 24</th>
                                    
                    
                </tr>
                
                
             
               <tr>
                
                
                <th><div class="${out1}" id="out1"></div></th> 
				<th><div class="${out2}" id="out2"></div></th> 
				<th><div class="${out3}" id="out3"></div></th> 
				<th><div class="${out4}" id="out4"></div></th> 
				<th><div class="${out5}" id="out5"></div></th> 
				<th><div class="${out6}" id="out6"></div></th> 
				<th><div class="${out7}" id="out7"></div></th> 
				<th><div class="${out8}" id="out8"></div></th> 
				<th><div class="${out9}" id="out9"></div></th> 
				<th><div class="${out10}" id="out10"></div></th> 
				<th><div class="${out11}" id="out11"></div></th> 
				<th><div class="${out12}" id="out12"></div></th> 
				<th><div class="${out13}" id="out13"></div></th> 
				<th><div class="${out14}" id="out14"></div></th> 
				<th><div class="${out15}" id="out15"></div></th> 
				<th><div class="${out16}" id="out16"></div></th> 
				<th><div class="${out17}" id="out17"></div></th> 
				<th><div class="${out18}" id="out18"></div></th> 
				<th><div class="${out19}" id="out19"></div></th> 
				<th><div class="${out20}" id="out20"></div></th> 
				<th><div class="${out21}" id="out21"></div></th> 
				<th><div class="${out22}" id="out22"></div></th> 
				<th><div class="${out23}" id="out23"></div></th> 
				<th><div class="${out24}" id="out24"></div></th> 
               
                  
              </tr>
                
                
              
            </table>
            
            
 
 
 
 
            
            
  <table class="table7" border="1" >
                <tr>
                    <th  rowspan="1"   >IN  01</th>
                    <th  rowspan="1"   >IN 02</th>
                    <th  rowspan="1"   >IN 03</th>
                    <th  rowspan="1"   >IN 04</th>
                    <th  rowspan="1"   >IN 05</th>
                    <th  rowspan="1"   >IN 06</th>
                    <th  rowspan="1"   >IN 07</th>
                    <th  rowspan="1"   >IN 08</th>
                     <th  rowspan="1"   >IN 09</th>
                     <th  rowspan="1"   >IN 10</th>
                     <th  rowspan="1"   >IN 11</th>
                   	 <th  rowspan="1"   >IN 12</th>
                     <th  rowspan="1"   >IN 13</th>
                     <th  rowspan="1"   >IN 14</th>
                     <th  rowspan="1"   >IN 15</th>
                     <th  rowspan="1"   >IN 16</th>
                     <th  rowspan="1"   >IN 17</th>
                     <th  rowspan="1"   >IN 18</th>
                     <th  rowspan="1"   >IN 19</th>
                     <th  rowspan="1"   >IN 20</th>
                     <th  rowspan="1"   >IN 21</th>
                     <th  rowspan="1"   >IN 22</th>
                     <th  rowspan="1"   >IN 23</th>
                     <th  rowspan="1"   >IN 24</th>
                                    
                    
                </tr>
                
                
             
               <tr>
                
                
                <th><div class="${in1}" id="in1"></div></th> 
				<th><div class="${in2}" id="in2"></div></th> 
				<th><div class="${in3}" id="in3"></div></th> 
				<th><div class="${in4}" id="in4"></div></th> 
				<th><div class="${in5}" id="in5"></div></th> 
				<th><div class="${in6}" id="in6"></div></th> 
				<th><div class="${in7}" id="in7"></div></th> 
				<th><div class="${in8}" id="in8"></div></th> 
				<th><div class="${in9}" id="in9"></div></th> 
				<th><div class="${in10}" id="in10"></div></th> 
				<th><div class="${in11}" id="in11"></div></th> 
				<th><div class="${in12}" id="in12"></div></th> 
				<th><div class="${in13}" id="in13"></div></th> 
				<th><div class="${in14}" id="in14"></div></th> 
				<th><div class="${in15}" id="in15"></div></th> 
				<th><div class="${in16}" id="in16"></div></th> 
				<th><div class="${in17}" id="in17"></div></th> 
				<th><div class="${in18}" id="in18"></div></th> 
				<th><div class="${in19}" id="in19"></div></th> 
				<th><div class="${in20}" id="in20"></div></th> 
				<th><div class="${in21}" id="in21"></div></th> 
				<th><div class="${in22}" id="in22"></div></th> 
				<th><div class="${in23}" id="in23"></div></th> 
				<th><div class="${in24}" id="in24"></div></th> 
               
                  
              </tr>
                
                
              
            </table>           
            
         -->  
         
         
         
         
         
    <table class="table6" border="1" >
             
               <tr>
                    <th  rowspan="1">    OUT 1</th>
                    <th  rowspan="1">    OUT 2</th>
                    <th  rowspan="1">    OUT 3</th>
                    <th  rowspan="1"   > OUT 4</th>
                    <th  rowspan="1"   > OUT 5</th>
                    <th  rowspan="1"   > OUT 6</th>
                    <th  rowspan="1"   > OUT 7</th>
                    <th  rowspan="1"   > OUT 8</th>
                    <th  rowspan="1"   > OUT 9</th>
                    <th  rowspan="1"   > OUT 10</th>
                    <th  rowspan="1"   > OUT 11</th>
                    <th  rowspan="1"   > OUT 12</th>
                    <th  rowspan="1"   > OUT 13</th>
                    <th  rowspan="1"   > OUT 14</th>
                    <th  rowspan="1"   > OUT 15</th>
                    <th  rowspan="1"   > OUT 16</th>
                    <th  rowspan="1"   > OUT 17</th>
                    <th  rowspan="1"   > OUT 18</th>
                    <th  rowspan="1"   > OUT 19</th>
                    <th  rowspan="1"   > OUT 20</th>
                    <th  rowspan="1"   > OUT 21</th>
                    <th  rowspan="1"   > OUT 22</th>
                    <th  rowspan="1"   > OUT 23</th>
                    <th  rowspan="1"   > OUT 24</th>
                    <th  rowspan="1"   > OUT 25</th>
                     
                </tr>
                
                
                
                  <tr>
                  
                      <th><div class="${out1}" id="out1" ></div> </th>
                      <th><div class="${out2}" id="out2"></div> </th>
                       <th><div class="${out3}" id="out3"></div> </th>
                       <th><div class="${out4}" id="out4"></div> </th>
                       <th><div class="${out5}" id="out5"></div> </th>
                      <th><div class="${out6}" id="out6" ></div> </th>
                      <th><div class="${out7}" id="out7"></div> </th>
                      <th><div class="${out8}" id="out8"></div> </th>
                      <th><div class="${out9}" id="out9"></div> </th>
                      <th><div class="${out10}" id="out10"></div> </th>
                      <th><div class="${out11}" id="out11" ></div> </th>
                      <th><div class="${out12}" id="out12"></div> </th>
                       <th><div class="${out13}" id="out13"></div> </th>
                       <th><div class="${out14}" id="out14"></div> </th>
                       <th><div class="${out15}" id="out15"></div> </th>
                      <th><div class="${out16}" id="out16" ></div> </th>
                      <th><div class="${out17}" id="out17"></div> </th>
                      <th><div class="${out18}" id="out18"></div> </th>
                      <th><div class="${out19}" id="out19"></div> </th>
                      <th><div class="${out20}" id="out20"></div> </th>
                      <th><div class="${out21}" id="out21"></div> </th>
                      <th><div class="${out22}" id="out22"></div> </th>
                      <th><div class="${out23}" id="out23"></div> </th>
                      <th><div class="${out24}" id="out24"></div> </th>
                     <th>6</th>
                 
                </tr>
                
                
             
                
              
            </table>
 
 
         
         
         
         
         
                
         
    <table class="table7" border="1" >
             
               <tr>
                    <th  rowspan="1">    IN 1</th>
                    <th  rowspan="1">    IN 2</th>
                    <th  rowspan="1">    IN 3</th>
                    <th  rowspan="1"   > IN 4</th>
                    <th  rowspan="1"   > IN 5</th>
                    <th  rowspan="1"   > IN 6</th>
                    <th  rowspan="1"   > IN 7</th>
                    <th  rowspan="1"   > IN 8</th>
                    <th  rowspan="1"   > IN 9</th>
                    <th  rowspan="1"   > IN 10</th>
                    <th  rowspan="1"   > IN 11</th>
                    <th  rowspan="1"   > IN 12</th>
                    <th  rowspan="1"   > IN 13</th>
                    <th  rowspan="1"   > IN 14</th>
                    <th  rowspan="1"   > IN 15</th>
                    <th  rowspan="1"   > IN 16</th>
                    <th  rowspan="1"   > IN 17</th>
                    <th  rowspan="1"   > IN 18</th>
                    <th  rowspan="1"   > IN 19</th>
                    <th  rowspan="1"   > IN 20</th>
                    <th  rowspan="1"   > IN 21</th>
                    <th  rowspan="1"   > IN 22</th>
                    <th  rowspan="1"   > IN 23</th>
                    <th  rowspan="1"   > IN 24</th>
                    <th  rowspan="1"   > IN 25</th>
                     
                </tr>
                
                
                
                  <tr>
                  
                      <th><div class="${in1}" id="in1" ></div> </th>
                      <th><div class="${in2}" id="in2"></div> </th>
                       <th><div class="${in3}" id="in3"></div> </th>
                       <th><div class="${in4}" id="in4"></div> </th>
                       <th><div class="${in5}" id="in5"></div> </th>
                      <th><div class="${in6}" id="in6" ></div> </th>
                      <th><div class="${in7}" id="in7"></div> </th>
                      <th><div class="${in8}" id="in8"></div> </th>
                      <th><div class="${in9}" id="in9"></div> </th>
                      <th><div class="${in10}" id="in10"></div> </th>
                      <th><div class="${in11}" id="in11" ></div> </th>
                      <th><div class="${in12}" id="in12"></div> </th>
                       <th><div class="${in13}" id="in13"></div> </th>
                       <th><div class="${in14}" id="in14"></div> </th>
                       <th><div class="${in15}" id="in15"></div> </th>
                      <th><div class="${in16}" id="in16" ></div> </th>
                      <th><div class="${in17}" id="in17"></div> </th>
                      <th><div class="${in18}" id="in18"></div> </th>
                      <th><div class="${in19}" id="in19"></div> </th>
                      <th><div class="${in20}" id="in20"></div> </th>
                      <th><div class="${in21}" id="in21"></div> </th>
                      <th><div class="${in22}" id="in22"></div> </th>
                      <th><div class="${in23}" id="in23"></div> </th>
                      <th><div class="${in24}" id="out24"></div> </th>
                     <th>7</th>
                 
                </tr>
                
                
             
                
              
            </table>
         
         
            

</div>





<form    name="form1"   id="form1" action="machine.htm" method=post>
     
     
     
</form>




<script>



function getintvalues()
   {
	
	
	var en2value=document.getElementById("en2").value;
	//alert(en2value);
	
	
	if(en2value==1)
		{
	
	
	        var element = document.getElementById("en2");
	        element.classList.toggle("en2on");
	       
	        
	
	  
		}
	
	
	
	if(en2value==0)
	{


        var element = document.getElementById("en2");
        element.classList.toggle("en2");
  
  
	}
	
	
	
	}








function load1()
{
	
	
	

	$(document).ready(function(){
	     $("#form1").submit();
	});
	  
	
	
	//getintvalues();
	
	
}








$(document).ready(function(){
    myVar = setInterval("load1()", 500);
});


    
    
    
</script>





</body>
</html>