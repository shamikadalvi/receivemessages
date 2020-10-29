<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
 <style>
 
    .deck
{
	width:50%;
	margin: 20px auto;
	background:dodgerblue;
	border:solid 10px black;
	padding: 10px;
	border-radius:10px;
	text-align: center;
	color:white;
}




  .distribute
{
	width:50%;
	
	background:green;
	
	padding: 10px;
	
	text-align: center;
	color:white;
}




    .displaystart
{


   position: absolute;
    top: 30%;
    left:50%;
	width:45%;
	margin: 60px auto;
	background:purple;
	border:solid 20px black;
	padding: 10px;
	border-radius:20px;
	text-align: center;
	color:white;
}




    .displayfinal
{
   position: absolute;
    top: 30%;
    left:50%;
	width:45%;
	margin: 60px auto;
	
	background:dodgerblue;
	border:solid 20px black;
	padding: 10px;
	border-radius:20px;
	text-align: center;
	color:white;
}






    .display1
{
	width:20%;
	
	background:dodgerblue;
	
	padding: 10px;
	
	text-align: center;
	color:white;
}

    .display2
{
	width:20%;
	
	background:red;
	
	padding: 10px;
	
	text-align: center;
	color:white;
}

    .display3
{
	width:20%;
	
	background:green;
	
	padding: 10px;
	
	text-align: center;
	color:white;
}


    .display4
{
	width:20%;
	
	background:orange;
	
	padding: 10px;
	
	text-align: center;
	color:white;
}


    .display5
{
	width:20%;
	
	background:purple;
	
	padding: 10px;
	
	text-align: center;
	color:white;
}




   .displayfinal1
{
   position: absolute;
    top: 1%;
    left:0%;
	width:20%;
	margin: 20px auto;
	
	background:dodgerblue;
	border:solid 10px black;
	padding: 10px;
	border-radius:10px;
	text-align: center;
	color:white;
}


    .displayfinal2
{
   position: absolute;
    top: 30%;
    left:0%;
	width:20%;
	margin: 20px auto;
	
	background:red;
	border:solid 10px black;
	padding: 10px;
	border-radius:10px;
	text-align: center;
	color:white;
}



    .displayfinal3
{
   position: absolute;
    top: 60%;
    left:0%;
	width:20%;
	margin: 20px auto;
	
	background:green;
	border:solid 10px black;
	padding: 10px;
	border-radius:10px;
	text-align: center;
	color:white;
}



    .displayfinal4
{
   position: absolute;
    top: 90%;
    left:0%;
	width:20%;
	margin: 20px auto;
	
	background:orange;
	border:solid 10px black;
	padding: 10px;
	border-radius:10px;
	text-align: center;
	color:white;
}


    .displayfinal5
{
   position: absolute;
    top: 120%;
    left:0%;
	width:20%;
	margin: 20px auto;
	
	background:purple;
	border:solid 10px black;
	padding: 10px;
	border-radius:10px;
	text-align: center;
	color:white;
}



.card
{
	padding: 10px;
	border: solid 1px #808080;
	background-color: white;
	display: inline-block;
	border-radius: 10px;
	font-size: 14pt;
	text-align: center;
	color:black;
	margin: 3px;
}

.btn
{

    position: absolute;
    top: 9%;
    left:50%;
	background:white;
	padding: 10px 20px;
	border-radius:30px;
	margin: 10px;
	display:inline-block;
}


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
  width: 10%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}


.btn2
{
  position: absolute;
  top: 0%;
  left:65%;
  background-color: #4CAF50;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 10%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
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
  width: 10%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}


.card .value{
	font-size:15pt;
	font-family: sans-serif;
}

.card .suit
{
	background-image: url('card.png');
	height: 100px;
	width: 90px;
}

.card .diamonds
{
	background-position-y: 100px;
}

.card .hearts
{
	background-position-x: 90px;
}

.card .clubs
{
	background-position-x:90px;
	background-position-y:100px;
}
 
</style>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
 
      <div class="display"> 
      
       <input type="button" onclick="distribute()" class="btn1" value="Shuffel" />  
       
       <input type="button" onclick="call()" class="btn2" value="Call" /> 
          
          <input type="button" onclick="start()" class="btn3" value="Final Call" />     
          
              
        
        <div   id="distribute" class=displaystart>
          
            
         </div>    
          
          
        </div>  
        
 
 
          <div>
        <table>
            <tr>
        
       <td><input type="hidden" name="playeris"  value=${playername}  id="playeris"/> </td>
      </tr>
      
      
          <tr>
        
       <td><input type="hidden" name="flagis"  value=${flagname}  id="flagis"/> </td>
      </tr>
      
      
     </table>
      
      
        
        
      </div>
 
 
        
        <br>
          
          <div id="display1" class="display1">  
          
          
        
          
        <table>
       <tr>
       
        <th><b>PLAYER</b></th>
         <th><b>1</b></th>
        </tr>
        
        
        <tr>
        
       <td><input type="hidden" name="number1" id="number1" value=""/> </td>
     
      <td><input type="hidden" name="color1" id="color1" value=""/> </td>
      
      
      
       </tr>
       
       
        <tr>
       <td><input type="hidden" name="number11" id="number11" value=""/> </td>
     
      <td><input type="hidden" name="color11" id="color11" value=""/> </td>
      
      
      
       </tr>
       
       
       
   </table>
   
   
   
    
   
   </div>
   
   
   <br>
  
  
  
   <div id ="display2" class="display2">  
        <table>
       <tr>
       
       
        <th><b>PLAYER</b></th>
         <th><b>3</b></th>
        </tr>
        
        <tr>
       
       
       
       
       <td><input type="hidden" name="number2" id="number2" value=""/> </td>
     
      <td><input type="hidden" name="color2" id="color2" value=""/> </td>
      
      
      
       </tr>
       
       
        <tr>
       <td><input type="hidden" name="number22" id="number22" value=""/> </td>
     
      <td><input type="hidden" name="color22" id="color22" value=""/> </td>
      
      
      
       </tr>
   </table>
   </div>
   
   
   <br>
       <div id ="display3" class="display3">  
        <table>
       <tr>
       
       
        <th><b>PLAYER</b></th>
         <th><b>3</b></th>
        </tr>
        
        <tr>
       
       
       
       
       <td><input type="hidden" name="number3" id="number3" value=""/> </td>
     
      <td><input type="hidden" name="color3" id="color3" value=""/> </td>
      
      
      
       </tr>
       
       
        <tr>
       <td><input type="hidden" name="number33" id="number33" value=""/> </td>
     
      <td><input type="hidden" name="color33" id="color33" value=""/> </td>
      
      
      
       </tr>
   </table>
   </div>
   
   <br>
       <div    id="display4"    class="display4">  
        <table>
       <tr>
       
       
       
        <th><b>PLAYER</b></th>
         <th><b>4</b></th>
        </tr>
        
        <tr>
       
       
       
       
       <td><input type="hidden" name="number4" id="number4" value=""/> </td>
     
      <td><input type="hidden" name="color4" id="color4" value=""/> </td>
      
      
      
       </tr>
       
       
        <tr>
        
      
        
       <td><input type="hidden" name="number44" id="number44" value=""/> </td>
     
      <td><input type="hidden" name="color44" id="color44" value=""/> </td>
      
      
      
       </tr>
   </table>
   </div>
   
   <br>
       <div id ="display5" class="display5">  
       
       
   
          
            
        
        <table>
       <tr>
       
        <th><b>PLAYER</b></th>
         <th><b>5</b></th>
        </tr>
        
        <tr>
       
       <td><input type="hidden" name="number5" id="number5" value=""/> </td>
     
      <td><input type="hidden" name="color5" id="color5" value=""/> </td>
      
      
      
       </tr>
       
       
        <tr>
       <td><input type="hidden" name="number55" id="number55" value=""/> </td>
     
      <td><input type="hidden" name="color55" id="color55" value=""/> </td>
      
      
      
       </tr>
   </table>
   </div>
   
   
   <br>
   
    
    
  
   
           
            
 
 
              
    
    
    <script>
    
   
    
    
    var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suits = ["diamonds", "hearts", "spades", "clubs"];
    var deck = new Array();
    var deck1 = new Array();
    
    function getDeck()
    {
    	var deck = new Array();

    	for(var i = 0; i < suits.length; i++)
    	{
    		for(var x = 0; x < cards.length; x++)
    		{
    			var card = {Value: cards[x], Suit: suits[i]};
    			deck.push(card);
    		}
    	}

    	return deck;
    }

    
    
    
    
   
    
    
    function shuffle()
    {
    	// for 1000 turns
    	// switch the values of two random cards
    	for (var i = 0; i < 200; i++)
    	{
    		var location1 = Math.floor((Math.random() * deck.length));
    		var location2 = Math.floor((Math.random() * deck.length));
    		var tmp = deck[location1];

    		deck[location1] = deck[location2];
    		deck[location2] = tmp;
    	}

    	renderDeck();
    }
    
    function shuffle1()
    {
    	// for 1000 turns
    	// switch the values of two random cards
    	for (var i = 0; i < 200; i++)
    	{
    		var location1 = Math.floor((Math.random() * deck1.length));
    		var location2 = Math.floor((Math.random() * deck1.length));
    		var tmp1 = deck1[location1];

    		deck1[location1] = deck1[location2];
    		deck1[location2] = tmp1;
    		 
    	}

    	
    }
    

    function distribute()
    {
    	
    	
    	var findplayer=document.getElementById("playeris").value;
    	
    	
    	
    	
    
         
       
         
         deck1=getDeck();
         shuffle1();
       
         
         
       
        
        
        
        if(findplayer=="PLAYER1")
        
        {
        renderDeck11();
        
        }
        
        
       
        
        
        
        if(findplayer=="PLAYER2")
            
        {
        renderDeck22();
        
        }
        
        
        if(findplayer=="PLAYER3")
            
        {
        renderDeck33();
        
        }
        
        
        
        
        if(findplayer=="PLAYER4")
            
        {
        renderDeck44();
        
        }
        
        
      if(findplayer=="PLAYER5")
            
        {
        renderDeck55();
        
        }
         
    	 
    	
    }
    
    
    function call()
    {
    	
    	 renderDeck1();
    	
    }
    
    
    
    function start()
    {
    	
    	
    	renderDeck2();
    	//alert("start");
    }
    
    
    

    function renderDeck()
    {
    	document.getElementById('deck').innerHTML = '';
    	for(var i = 0; i < deck.length; i++)
    	{
    		var card = document.createElement("div");
    		var value = document.createElement("div");
    		var suit = document.createElement("div");
    		card.className = "card";
    		value.className = "value";
    		suit.className = "suit " + deck[i].Suit;

    		value.innerHTML = deck[i].Value;
    		card.appendChild(value);
    		card.appendChild(suit);

    		document.getElementById("deck").appendChild(card);
    	}
    }
    
    
    
    
    function renderDeck1()
    {
    	var card;
    	var value;
    	var suit;
    	
    	
    	 var element = document.getElementById("distribute");
  	   element.classList.toggle("displayfinal");
    	
    	document.getElementById('distribute').innerHTML = '';
    	for(var i = 10; i < 13; i++)
    	{
    		 card = document.createElement("div");
    		 value = document.createElement("div");
    		 suit = document.createElement("div");
    		card.className = "card";
    		value.className = "value";
    		suit.className = "suit " + deck1[i].Suit;

    		value.innerHTML = deck1[i].Value;
    		card.appendChild(value);
    		card.appendChild(suit);

    		document.getElementById("distribute").appendChild(card);
    		
    		
    		
    		
    		
    		 
    		 
    		 
    		 //document.getElementById("player1").value=  deck1[1].appendChild(value);
    		 
    		 
    		 
    	}
    	
    	
    	
    	 document.getElementById('number1').value =  deck1[0].Value;
		 document.getElementById('color1').value =  deck1[0].Suit;
		 
		 document.getElementById('number11').value =  deck1[1].Value;
		 document.getElementById('color11').value =  deck1[1].Suit; 
		 
		 
		 
		 
		 document.getElementById('number2').value =  deck1[2].Value;
		 document.getElementById('color2').value =  deck1[2].Suit;
		 
		 document.getElementById('number22').value =  deck1[3].Value;
		 document.getElementById('color22').value =  deck1[3].Suit;
		 
		 
		 document.getElementById('number3').value =  deck1[4].Value;
		 document.getElementById('color3').value =  deck1[4].Suit;
		 
		 document.getElementById('number33').value =  deck1[5].Value;
		 document.getElementById('color33').value =  deck1[5].Suit;
		 
		 
		 document.getElementById('number4').value =  deck1[6].Value;
		 document.getElementById('color4').value =  deck1[6].Suit;
		 
		 document.getElementById('number44').value =  deck1[7].Value;
		 document.getElementById('color44').value =  deck1[7].Suit;
		 
		 
		 
		 document.getElementById('number5').value =  deck1[8].Value;
		 document.getElementById('color5').value =  deck1[8].Suit;
		 
		 document.getElementById('number55').value =  deck1[9].Value;
		 document.getElementById('color55').value =  deck1[9].Suit; 
    	
    
    	
    }

    
    
    function renderDeck2()
    {
    	var card;
    	var value;
    	var suit;
    	
    	
    	 var element = document.getElementById("distribute");
  	   element.classList.toggle("displayfinal");
    	
    	document.getElementById('distribute').innerHTML = '';
    	for(var i = 10; i < 15; i++)
    	{
    		 card = document.createElement("div");
    		 value = document.createElement("div");
    		 suit = document.createElement("div");
    		card.className = "card";
    		value.className = "value";
    		suit.className = "suit " + deck1[i].Suit;

    		value.innerHTML = deck1[i].Value;
    		card.appendChild(value);
    		card.appendChild(suit);

    		document.getElementById("distribute").appendChild(card);
    		
    		
    		
    		
    		
    		 
    		 
    		 
    		 //document.getElementById("player1").value=  deck1[1].appendChild(value);
    		 
    		 
    		 
    	}
    	
    }
    	
    	
    
    
    
    

    function renderDeck55()
    {
    	var card;
    	var value;
    	var suit;
    	
    	
    	document.getElementById('display5').innerHTML = '';
    	
    	for(var i = 8; i < 10; i++)
    	{
    		 card = document.createElement("div");
    		 value = document.createElement("div");
    		 suit = document.createElement("div");
    		card.className = "card";
    		value.className = "value";
    		suit.className = "suit " + deck1[i].Suit;

    		value.innerHTML = deck1[i].Value;
    		card.appendChild(value);
    		card.appendChild(suit);

    		document.getElementById("display5").appendChild(card);
    		
    		
    		
    		
    		
    		 
    		 
    		 
    		 //document.getElementById("player1").value=  deck1[1].appendChild(value);
    		 
    		 
    		 
    	}
    	
    }
    	
    
    function renderDeck44()
    {
    	var card;
    	var value;
    	var suit;
    	
    	
    	document.getElementById('display4').innerHTML = '';
    	
    	for(var i = 6; i < 8; i++)
    	{
    		 card = document.createElement("div");
    		 value = document.createElement("div");
    		 suit = document.createElement("div");
    		card.className = "card";
    		value.className = "value";
    		suit.className = "suit " + deck1[i].Suit;

    		value.innerHTML = deck1[i].Value;
    		card.appendChild(value);
    		card.appendChild(suit);

    		document.getElementById("display4").appendChild(card);
    		
    		
    		
    		
    		
    		 
    		 
    		 
    		 //document.getElementById("player1").value=  deck1[1].appendChild(value);
    		 
    		 
    		 
    	}
    	
    }

    
    
    
    
    
    
    function renderDeck33()
    {
    	var card;
    	var value;
    	var suit;
    	
    	
    	document.getElementById('display3').innerHTML = '';   	
    	
    	for(var i = 4; i < 6; i++)
    	{
    		 card = document.createElement("div");
    		 value = document.createElement("div");
    		 suit = document.createElement("div");
    		card.className = "card";
    		value.className = "value";
    		suit.className = "suit " + deck1[i].Suit;

    		value.innerHTML = deck1[i].Value;
    		card.appendChild(value);
    		card.appendChild(suit);

    		document.getElementById("display3").appendChild(card);
    		
    		
    		
    		
    		
    		 
    		 
    		 
    		 //document.getElementById("player1").value=  deck1[1].appendChild(value);
    		 
    		 
    		 
    	}
    	
    }

    
    
    
    
    
    function renderDeck22()
    {
    	var card;
    	var value;
    	var suit;
    	
    	 
    	document.getElementById('display2').innerHTML = '';   	
    	
    
    	for(var i = 2; i < 4; i++)
    	{
    		 card = document.createElement("div");
    		 value = document.createElement("div");
    		 suit = document.createElement("div");
    		card.className = "card";
    		value.className = "value";
    		suit.className = "suit " + deck1[i].Suit;

    		value.innerHTML = deck1[i].Value;
    		card.appendChild(value);
    		card.appendChild(suit);

    		document.getElementById("display2").appendChild(card);
    		
    		
    		
    	}
    	
    	
    	
    }
    
    
    
    
    function renderDeck11()
    {
    	var card;
    	var value;
    	var suit;
    	
    	document.getElementById('display1').innerHTML = '';   	
    	
    	
    	for(var i = 0; i < 2; i++)
    	{
    		 card = document.createElement("div");
    		 value = document.createElement("div");
    		 suit = document.createElement("div");
    		card.className = "card";
    		value.className = "value";
    		suit.className = "suit " + deck1[i].Suit;

    		value.innerHTML = deck1[i].Value;
    		card.appendChild(value);
    		card.appendChild(suit);

    		document.getElementById("display1").appendChild(card);
    		
    		
    		
    		
    		
    		 
    		 
    		 
    		 //document.getElementById("player1").value=  deck1[1].appendChild(value);
    		 
    		 
    		 
    	}
    	
    }
    
    
   
    </script>
    
</body>
</html>