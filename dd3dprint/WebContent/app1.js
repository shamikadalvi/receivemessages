
    
   
    
    
    var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suits = ["diamonds", "hearts", "spades", "clubs"];
    var deck = new Array();
    var deck1 = new Array();
 
    var shuffelcount=0;
    
    var arr=new Array();
    var array1=new Array();
    var array2=new Array();
    var array4=new Array();
    var array5=new Array();
	
	
	var maxraisevalue=0;
    var deduction=0;
    var flagnumber=0;
    
    
    
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
  
    
    
    
    var winnercount=0;
    var winnerdeclaredfinal;
    
    var startamount=500;
    var totalamount=0;
    
    
    var totalamount1=0;
    var totalamount2=0;
    var totalamount3=0;
    var totalamount4=0;
    var totalamount5=0;
    
    var value1=0;
    var value2=0;
    var value3=0;
    var value4=0;
    var value5=0;
    
    
    var startamount11;
    var startamount22;
    var startamount33;
    var startamount44;
    var startamount55;
    
    
    
    var flagraise1=false;
    var flagraise2=false;
    var flagraise3=false;
    var flagraise4=false;
    var flagraise5=false;
    
    
    var flagcall1=false;
    var flagcall2=false;
    var flagcall3=false;
    var flagcall4=false;
    var flagcall5=false;
    
    
    
    
   var  count1=0;
   var count2=0;
   var count3=0;
   var count4=0;

   var count5=0;
   var count6=0;
   var count7=0;
   var count8=0;

   var count9=0;
    var count10=0;
    var count11=0;
    var count12=0;
    var count13=0;
    
    
    
    
    var counta=0;
    var countb=0;
    var countc=0;
    var countd=0;
    
    
    
    
    
    var shuffel1id=0;
    
    
    var winner1=false;
    var winner2=false;
    var winner3=false;
    var winner4=false;
    var winner5=false;
  
    
    
    var flag11=true;
    var flag22=true;
    var flag33=true;
    var flag44=true;
    var flag55=true;
    
    
    var card1v;
    var card1c;
    
    
    var card11v;
    var card11c;
    
    var card2v;
    var card2c;
    
    
    var card22v;
    var card22c;
    
    
    var card3v;
    var card3c;
    
    
    var card33v;
    var card33c;
    
    
    var card4v;
    var card4c;
    
    
    var card44v;
    var card44c;
    
    
    var card5v;
    var card5c;
    
    
    var card55v;
    var card55c;
    
    
    
    var play1v;
    var play1c;
    
    
    
    
    
    var play2v;
    var play2c;
    
    
    
    
    var play3v;
    var play3c;
    
    
    
    
    var play4v;
    var play4c;
    
    
    
    
    var play5v;
    var play5c;
    
    
    var royalflush1=false;
    var royalflush2=false;
    var royalflush3=false;
    var royalflush4=false;
    var royalflush5=false;
    
    
    var straightflush1=false;
    var straightflush2=false;
    var straightflush3=false;
    var straightflush4=false;
    var straightflush5=false;
    
    var fourofakind1=false;
    var fourofakind2=false;
    var fourofakind3=false;
    var fourofakind4=false;
    var fourofakind5=false;
    
    
    var fullhouse1=false;
    var fullhouse2=false;
    var fullhouse3=false;
    var fullhouse4=false;
    var fullhouse5=false;
    
    
    var flush1=false;
    var flush2=false;
    var flush3=false;
    var flush4=false;
    var flush5=false;
        
   
   
    var straight1=false;
    var straight2=false;
    var straight3=false;
    var straight4=false;
    var straight5=false;
    
    
    

    var threeofakind1=false;
    var threeofakind2=false;
    var threeofakind3=false;
    var threeofakind4=false;
    var threeofakind5=false;
    
    
    
    var twopair1=false;
    var twopair2=false;
    var twopair3=false;
    var twopair4=false;
    var twopair5=false;
    
    
    
    var pair1=false;
    var pair2=false;
    var pair3=false;
    var pair4=false;
    var pair5=false;
    
    
    var highcard1=false;
    var highcard2=false;
    var highcard3=false;
    var highcard4=false;
    var highcard5=false;
    
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

    
    

    function Raise1()
      {
   	 value1=0;
   	 
   	 
   	 
   	 flagnumber=1;
   	 
   	 
   	 
   	 //alert("hi");
   	 value1=document.getElementById("amount1").value;
   	// alert(value1);
   	 //alert("done");
   	 
   	 
   	 flagraise1=true;
   	startamount11=startamount11-value1; 
   	 //alert(startamount11);
   	
   	totalamount1=value1;
   	//totalamount1=value1;
   	 
   	document.getElementById('cash1').innerHTML = '';
   	
   	var startamount1;

  	 startamount1=document.createElement("div");
  	startamount1.className="startamount1";
  	startamount1.innerHTML=startamount11;
   	
   	 document.getElementById("cash1").appendChild(startamount1);
   	
   	
   	totalvalue();
   	 
   	}
      
      
      
      function call1()
      {
      
    	  
    	  alert("reached here 11");
    	  
    	  
    	
    	  
    	  
    	  
      	
      	array4 = [value1,value2,value3,value4,value5];
      	
      	
      	
      	
      	array5=bubble_Sort(array4);
      
      	
      	maxraisevalue=array5[4];	
      	
      	
      	
      	
      	if(maxraisevalue==0)
      	{
      
          //value1=0;	
      
      	//totalamount1=value1+value2+value3+value4+value5+10;
      	
      		document.getElementById('cash1').innerHTML = '';
     		 
     		 var startamount1;

     		 startamount11=startamount11-10;
     		totalamount1=10;
     		
     		
     		 startamount1=document.createElement("div");
     		startamount1.className="startamount1";
     		startamount1.innerHTML=startamount11;
     	 	
     	 	 document.getElementById("cash1").appendChild(startamount1);
     	 	 
     	 	 
     	 	 flagcall1=true; 	 
     	 	
      	}
      	
      	
      	
      	
      	
      	
      	if(maxraisevalue>0)
  		{
  		
  		
  		     //value1=0;	
  		    
  	    	
  	    	     alert("here1");
  	    		document.getElementById('cash1').innerHTML = '';
  	   		 
  	   		 var startamount1;
  	   	      //maxraisevalue=maxraisevalue-10;
  	   		  
  	   		 
  	   		 
  	   		 
  	   		 
  	  	 if(flagcall1==true)
   		 {
   		  deduction=maxraisevalue-value1-10;
   		  startamount11=((startamount11)-(deduction));
   		  totalamount1=deduction;
   		  flagcall1=false;
   		 }
   		 
   		 
   		 else
   			 {
   			 
   		      deduction=maxraisevalue-value1;
		      startamount11=((startamount11)-(deduction));
		      totalamount1=deduction;
   			 
   			 }
  	   		 
  	   		 
  	   		 
  	   		 startamount1=document.createElement("div");
  	   		startamount1.className="startamount1";
  	   		startamount1.innerHTML=startamount11;
  	   	 	
  	   	 	 document.getElementById("cash1").appendChild(startamount1);
  		
  		}
      	
      	
      	
      	flagnumber++;
    	
    	
    	if(flagnumber==5)
    		{
    		flagnumber=0;
    		value1=0;
    		value2=0;
    		value3=0;
    		value4=0;
    		value5=0;
    		deduction=0;
            maxraisevalue=0;
            
            
            flagcall1=false;
            flagcall2=false;
            flagcall3=false;
            flagcall4=false;
            flagcall5=false;
            
            
            
            flagraise1=false;
            flagraise2=false;
            flagraise3=false;
            flagraise4=false;
            flagraise5=false;
            
            
    		}
	  
	  
  	
      	
      	
   	 
   	   totalvalue();
   	}
      
      
      
      
      
      function Raise2()
      {
   	 value2=0;
   	 //alert("hi");
   	 value2=document.getElementById("amount2").value;
   	 //alert(value2);
   	 //alert("done");
   	 
   	 
   	 flagnumber=1;
   
   	 
   	 flagraise2=true;
   	 totalamount2=value2;
   	startamount22=startamount22-value2; 
   	 //alert(startamount22);
   	
   	 
   	document.getElementById('cash2').innerHTML = '';
   	
   	var startamount2;

  	 startamount2=document.createElement("div");
  	startamount2.className="startamount2";
  	startamount2.innerHTML=startamount22;
   	
   	 document.getElementById("cash2").appendChild(startamount2);
   	totalvalue();
   	}
      
      
      
      
      
      
      function call2()
      {
      	
      	
    	  
    	
    	  
    	  
    	  
      	array4 = [value1,value2,value3,value4,value5];
      	
      	
      	
      	
      	array5=bubble_Sort(array4);
      
      	
      	maxraisevalue=array5[4];	
      	
      	
      	
      	
      	if(maxraisevalue==0)
      	{
      
          //value1=0;	
      
      	//totalamount1=value1+value2+value3+value4+value5+10;
      	
      		document.getElementById('cash2').innerHTML = '';
     		 
     		 var startamount2;

     		 startamount22=startamount22-10;
     		totalamount2=10;
     		
     		
     		
     		 startamount2=document.createElement("div");
     		startamount2.className="startamount2";
     		startamount2.innerHTML=startamount22;
     	 	
     	 	 document.getElementById("cash2").appendChild(startamount2);
     	 	 flagcall2=true;
     	 	 
     	 	 
     	 	
     	 	 
      	}
      	
      	
      	
      	
      	
      	
      	if(maxraisevalue>0)
  		{
  		
  		
  		     //value1=0;	
  		    
  	    	
  	    	     alert("here2##");
  	    		document.getElementById('cash2').innerHTML = '';
  	   		 
  	   		 var startamount2;
  	   	      //maxraisevalue=maxraisevalue-10;
  	   		 
  	   		 
  	   		 
  	   		 

		  	   if((flagraise1==true)&&(flagraise3==true)&&(flagraise2==false))
				 {
				 
				  maxraisevalue=maxraisevalue-value1;
				 
				 }
  	   		 
		  	   
		  	   
		  	   
		  	   else if((flagraise1==true)&&(flagraise4==true)&&(flagraise2==false))
				 {
				 
				  maxraisevalue=maxraisevalue-value1;
				 
				 }
		  	  
		  	  
		  	   else if((flagraise1==true)&&(flagraise5==true)&&(flagraise2==false))
				 {
				 
				  maxraisevalue=maxraisevalue-value1;
				 
				 }
  	   		 
  	   		 
  	   		 
  	  	 if(flagcall2==true)
   		 {
   		  deduction=maxraisevalue-value2-10;
   		  startamount22=((startamount22)-(deduction));
   		  totalamount2=deduction;
   		  flagcall2=false;
   		 }
   		 
   		 
   		 else
   			 {
   			 
   		      deduction=maxraisevalue-value2;
		      startamount22=((startamount22)-(deduction));
		      totalamount2=deduction;
   			 
   			 }
  	   		 
  	   		 
  	   		 startamount2=document.createElement("div");
  	   		startamount2.className="startamount2";
  	   		startamount2.innerHTML=startamount22;
  	   	 	
  	   	 	 document.getElementById("cash2").appendChild(startamount2);
  		
  		}
  	
      	
      	
      	
      
      	
   	 
   	   totalvalue();
   	}
      
      
      
      
      
      
      function Raise3()
      {
   	 value3=0;
   	 //alert("hi");
   	 value3=document.getElementById("amount3").value;
   	 //alert(value3);
   	 //alert("done");
   	 
   	 
   	 flagnumber=1;
   
   	 
   	 
   	 flagraise3=true;
   	 totalamount3=value3;
   	startamount33=startamount33-value3; 
   	 //alert(startamount33);
   	
   	 
   	document.getElementById('cash3').innerHTML = '';
   	
   	var startamount3;

  	 startamount3=document.createElement("div");
  	startamount3.className="startamount3";
  	startamount3.innerHTML=startamount33;
   	
   	 document.getElementById("cash3").appendChild(startamount3);
   	 
   	 
   	flagnumber++;
	
	
	if(flagnumber==5)
		{
		flagnumber=0;
		value1=0;
		value2=0;
		value3=0;
		value4=0;
		value5=0;
		deduction=0;
        maxraisevalue=0;
        
        
        flagcall1=false;
        flagcall2=false;
        flagcall3=false;
        flagcall4=false;
        flagcall5=false;
        
        
        
        flagraise1=false;
        flagraise2=false;
        flagraise3=false;
        flagraise4=false;
        flagraise5=false;
        
        
		}
  
  
   	 
   	 
   	totalvalue();
   	 
   	  
   	}
      
      
      
      
      
      
      
      
      function call3()
      {
      	
      
    	  
    	  
    	  
    	
    	  
    	  
    	  
      	array4 = [value1,value2,value3,value4,value5];
      	
      	
      	
      	
      	array5=bubble_Sort(array4);
      
      	
      	maxraisevalue=array5[4];	
      	
      	
      	 
      	
      	if(maxraisevalue==0)
      	{
      
      	
      		document.getElementById('cash3').innerHTML = '';
     		 
     		 var startamount3;

     		 startamount33=startamount33-10;
     		totalamount3=10;
     		
     		
     		 startamount3=document.createElement("div");
     		startamount3.className="startamount3";
     		startamount3.innerHTML=startamount33;
     	 	
     	 	 document.getElementById("cash3").appendChild(startamount3);
     	 
     	 	 
     	 	flagcall3=true;
     	 	 
     	 	
      	}
      	
      	
      	
      	
      	
      	
      	if(maxraisevalue>0)
  		{
  		
  		
  		     //value1=0;	
  		    
  	    	
  	    	     alert("here3");
  	    		document.getElementById('cash3').innerHTML = '';
  	   		 
  	   		 var startamount3;
  	   	      //maxraisevalue=maxraisevalue-10; 
  	   		 
  	   		 
  	   		 
  	   		 
  	   		 
  	   		 
  	   		 
  	   		 
  	   		 
  	   		 
  	   	 
  	   		 if((flagraise1==true)&&(flagraise4==true)&&(flagraise2==false)&&(flagraise3==false))
  	   			 {
  	   			 
  	   			  maxraisevalue=maxraisevalue-value1;
  	   			 
  	   			 }
  	   		 
  	   		 
  	   		 
  	   		 
  	   		 
  	   		 else if((flagraise1==true)&&(flagraise5==true)&&(flagraise2==false)&&(flagraise3==false))
		 			 {
		 			 
		 			  maxraisevalue=maxraisevalue-value1;
		 			 
		 			 }
		 		 
  	   		 
  	   		
  	  	 
  	   		 else  if((flagraise2==true)&&(flagraise4==true)&&(flagraise3==false))
						 {
						 
						  maxraisevalue=maxraisevalue-value2;
						 
						 }
  	  	 
  	   		 

  	   		 else  if((flagraise2==true)&&(flagraise5==true)&&(flagraise3==false))
						 {
						 
						  maxraisevalue=maxraisevalue-value2;
						 
						 }
  	   		 
  	   		 
  	   		 
  	   		 
  	   		 
  	  	 if(flagcall3==true)
   		 {
   		  deduction=maxraisevalue-value3-10;
   		  startamount33=((startamount33)-(deduction));
   		  totalamount3=deduction;
   		  flagcall3=false;
   		 }
   		 
   		 
   		 else
   			 {
   			 
   		      deduction=maxraisevalue-value3;
		      startamount33=((startamount33)-(deduction));
		      totalamount3=deduction;
   			 
   			 }
  	   		  
  	   		  
  	   		  
  	   		  
  	   		 startamount3=document.createElement("div");
  	   		startamount3.className="startamount3";
  	   		startamount3.innerHTML=startamount33;
  	   	 	
  	   	 	 document.getElementById("cash3").appendChild(startamount3);
  		
  		}
  	
      	
      	
      	
    	flagnumber++;
      	
      	
      	if(flagnumber==5)
      		{
      		flagnumber=0;
      		value1=0;
      		value2=0;
      		value3=0;
      		value4=0;
      		value5=0;
      		deduction=0;
            maxraisevalue=0;
            flagcall1=false;
            flagcall2=false;
            flagcall3=false;
            flagcall4=false;
            flagcall5=false;
            
            
            			
            flagraise1=false;
            flagraise2=false;
            flagraise3=false;
            flagraise4=false;
            flagraise5=false;
            
            
      		}
    
      	
   	 
   	   totalvalue();
   	}
      
      
      
      function Raise4()
      {
   	 value4=0;
   	 //alert("hi");
   	 value4=document.getElementById("amount4").value;
   	 //alert(value4);
   	 //alert("done");
   	 
   	 
   	 
   	 flagnumber=1;
  	 
   	 flagraise4=true;
   	totalamount4=value4;
   	startamount44=startamount44-value4; 
   	 //alert(startamount44);
   	
   	 
   	document.getElementById('cash4').innerHTML = '';
   	
   	var startamount4;

  	 startamount4=document.createElement("div");
  	startamount4.className="startamount4";
  	startamount4.innerHTML=startamount44;
   	
   	 document.getElementById("cash4").appendChild(startamount4);
   	 
   	totalvalue();
   	}
     
      
      
      
      
      
      function call4()
      {
      	
    
    	  
    	  
    		
    	  
    	  
    	  
    	  
      	array4 = [value1,value2,value3,value4,value5];
      	
      	
      	
      	
      	array5=bubble_Sort(array4);
      
      	
      	maxraisevalue=array5[4];	
      	
    	
      	
      	
      	if(maxraisevalue==0)
      	{
      
      	
      		document.getElementById('cash4').innerHTML = '';
     		 
     		 var startamount4;

     		 startamount44=startamount44-10;
     		totalamount4=10;
     		
     		
     		 startamount4=document.createElement("div");
     		startamount4.className="startamount4";
     		startamount4.innerHTML=startamount44;
     	 	
     	 	 document.getElementById("cash4").appendChild(startamount4);
     	 	 
     	 	 
     	 	 
     	 	flagcall4=true; 
     	 	 
      	}
      	
      	
      	
      	
      	
      	
      	if(maxraisevalue>0)
  		{
  		
  		
  		     //value1=0;	
  		    
  	    	
  	    	     alert("here4");
  	    		document.getElementById('cash4').innerHTML = '';
  	   		 
  	   		 var startamount4;
  	   	      
  	   		 
  	   		 
  	   		 if((flagraise1==true)&&(flagraise5==true)&&(flagraise2==false)&&(flagraise3==false)&&(flagraise4==false))
  	   			 {
  	   			 
  	   			  maxraisevalue=maxraisevalue-value1;
  	   			 
  	   			 }
  	   		 
  	   		 
  	   		 
  	   		 
  	   		 
  	   		 else if((flagraise2==true)&&(flagraise5==true)&&(flagraise3==false)&&(flagraise4==false))
		 			 {
		 			 
		 			  maxraisevalue=maxraisevalue-value2;
		 			 
		 			 }
		 		 
  	   		 
  	   		
  	  	 
  	   		 else   if((flagraise3==true)&&(flagraise5==true)&&(flagraise2==false)&&(flagraise4==false))
						 {
						 
						  maxraisevalue=maxraisevalue-value3;
						 
						 }
  	   		 
  	  
  	   	 else if((flagraise1==true)&&(flagraise2==true)&&(flagraise3==true)&&(flagraise4==false)&&(flag5==true))
		 {
		 
		  maxraisevalue=maxraisevalue-value3;
		 
		 }
  	  	
  	  	 
  	  	 
  	   		 
  	   		 
  	   	 if(flagcall4==true)
	   		 {
	   		  deduction=maxraisevalue-value4-10;
	   		  startamount44=((startamount44)-(deduction));
	   		  totalamount4=deduction;
	   		  flagcall4=false;
	   		 }
	   		 
	   		 
	   		 else
	   			 {
	   			 
	   		      deduction=maxraisevalue-value4;
   		      startamount44=((startamount44)-(deduction));
   		      totalamount4=deduction;
	   			 
	   			 }
	   		  
  	   		  
  	   		  
  	   		  
  	   		  
  	   		 startamount4=document.createElement("div");
  	   		startamount4.className="startamount4";
  	   		startamount4.innerHTML=startamount44;
  	   	 	
  	   	 	 document.getElementById("cash4").appendChild(startamount4);
  		
  		}
  	
      	
      	flagnumber++;
      	
      	
      	if(flagnumber==5)
      		{
      		flagnumber=0;
      		value1=0;
      		value2=0;
      		value3=0;
      		value4=0;
      		value5=0;
      		deduction=0;
            maxraisevalue=0;
            flagcall1=false;
            flagcall2=false;
            flagcall3=false;
            flagcall4=false;
            flagcall5=false;
            
            flagraise1=false;
            flagraise2=false;
            flagraise3=false;
            flagraise4=false;
            flagraise5=false;
            
            
            
      		}
     	
   	 
   	   totalvalue();
   	}
      
      
      
      
     
      
      
     
      
      function Raise5()
      {
   	 value5=0;
   	 //alert("hi");
   	 value5=document.getElementById("amount5").value;
   	 //alert(value5);
   	 //alert("done");
   	 
   	 
   	 
   	 
   	 flagnumber=1;
   	
   	 
   	 
   	 flagraise5=true;
   	totalamount5=value5;
   	startamount55=startamount55-value5; 
   	 //alert(startamount55);
   	
   	 
   	document.getElementById('cash5').innerHTML = '';
   	
   	var startamount5;

  	 startamount5=document.createElement("div");
  	startamount5.className="startamount5";
  	startamount5.innerHTML=startamount55;
   	
   	 document.getElementById("cash5").appendChild(startamount5);
   	 
   	totalvalue();
   	
   	
   	
   	 
   	}
      
      
   
      

      function call5()
      {
   
    	  
    	  
    	   	
        	
      	
      	array4 = [value1,value2,value3,value4,value5];
      	
      	
      	
      	
      	array5=bubble_Sort(array4);
      
      	
      	maxraisevalue=array5[4];	
      	
      	
      	
      	
      	if(maxraisevalue==0)
      	{
      
      	
      		document.getElementById('cash5').innerHTML = '';
     		 
     		 var startamount5;

     		 startamount55=startamount55-10;
     		totalamount5=10;
     		
     		
     		 startamount5=document.createElement("div");
     		startamount5.className="startamount5";
     		startamount5.innerHTML=startamount55;
     	 	
     	 	 document.getElementById("cash5").appendChild(startamount5);
     	 	 
     	 	 flagcall5=true;
     	 	
      	}
      	
      	
      	
      	
      	
      	
      	if(maxraisevalue>0)
  		{
  		
  		
  		     //value1=0;	
  		    
  	    	
  	    	     alert("here5");
  	    		document.getElementById('cash5').innerHTML = '';
  	   		 
  	   		 var startamount5;
  	   	      
  	   		 
  	   		 if(flagcall5==true)
  	   		 {
  	   		    alert("here55");
  	   		  deduction=maxraisevalue-value5-10;
  	   		  startamount55=((startamount55)-(deduction));
  	   		  totalamount5=deduction;
  	   		  flagcall5=false;
  	   		 }
  	   		 
  	   		 
  	   		 else
  	   			 {
  	   			 
  	   		      deduction=maxraisevalue-value5;
	   		      startamount55=((startamount55)-(deduction));
	   		      totalamount5=deduction;
  	   			 
  	   			 }
  	   		  
  	   		  
  	   		  
  	   		 startamount5=document.createElement("div");
  	   		startamount5.className="startamount5";
  	   		startamount5.innerHTML=startamount55;
  	   	 	
  	   	 	 document.getElementById("cash5").appendChild(startamount5);
  		
  		}
  	
      	
      	flagnumber++;
    	
    	
    	if(flagnumber==5)
    		{
    		flagnumber=0;
    		value1=0;
    		value2=0;
    		value3=0;
    		value4=0;
    		value5=0;
    		deduction=0;
            maxraisevalue=0;
            
            
            flagcall1=false;
            flagcall2=false;
            flagcall3=false;
            flagcall4=false;
            flagcall5=false;
            
            
            
            flagraise1=false;
            flagraise2=false;
            flagraise3=false;
            flagraise4=false;
            flagraise5=false;
            
            
    		}
	  
	  
   
      	
   	 
   	   totalvalue();
   	}
      
	
	
	
	
	function totalvalue()
	{
		
		var totalmoney=parseInt(totalamount1)+parseInt(totalamount2)+parseInt(totalamount3)+parseInt(totalamount4)+parseInt(totalamount5);
		
		
		totalamount=totalamount+totalmoney;
		
		
		
		
 		document.getElementById('displaytotalfinal').innerHTML = '';
		   		 
		   		 var total;

		     
		   		total=document.createElement("div");
		   		total.className="displaytotalfinal";
		   		total.innerHTML=totalamount;
		   	 	
		   	 	 document.getElementById("displaytotalfinal").appendChild(total);
		   	 	totalamount1=0;
		   	    totalamount2=0;
		   	    totalamount3=0;
		   	    totalamount4=0;
		   	    totalamount5=0;
		
		
	}
	
	
    
	
    
    
    function load()
    {
    	deck = getDeck();
    	//shuffle();
    	renderDeckfold11();
    	renderDeckfold22();
    	renderDeckfold33();
    	renderDeckfold44();
    	renderDeckfold55();
    	renderDeckfoldplaycards();
    	startamount1();
    	startamount2();
    	startamount3();
    	startamount4();
    	startamount5();
    	totalvalue();
    	
   
    	
    	$(document).ready(function()
    			{
    	 $("#shamika1").hide();
    	   
    	    
    	    
    	  });
    	
    	
    	
    	$(document).ready(function()
    			{
    	 $("#shamika2").hide();
    	   
    	    
    	    
    	  });
    	  
    	
    	
       
    	$(document).ready(function()
    			{
    	 $("#shamika3").hide();
    	   
    	    
    	    
    	  });
    	  
    	  
    	
    	

    	$(document).ready(function()
    			{
    	 $("#shamika4").hide();
    	   
    	    
    	    
    	  });
    	
    	

    	$(document).ready(function()
    			{
    	 $("#shamika5").hide();
    	   
    	    
    	    
    	  });
    	  
    	  
    	
    }
    

    window.onload = load;
    
   
    
    
    
  
    
    
    
    
    
    
    function shuffle()
    {
    	// for 1000 turns
    	// switch the values of two random cards
    	
    	
    	
    	
    	var findflag=document.getElementById("flagis").value;
    	
    	var d=parseInt(findflag);
    	
    	
    	for (var i = 0; i < 15; i++)
    	{
    		var location1 = Math.floor((Math.random() * deck1.length));
    		var location2 = Math.floor((Math.random() * deck1.length));
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
    	
    	
    	
    
    	
    	
    	
    	renderDeckfoldplaycards();	
    	
      var findflag=document.getElementById("flagis").value;
    	
    	var newshuffelid=0;
    	shuffel1id=shuffel1id+3;
    	newshuffelid=shuffel1id;
    	
    	var d=parseInt(findflag)+newshuffelid;
    	//alert("d is");
    	//alert(d);
    	
    	
    	for (var i = 0; i < 650; i++)
    	{
    		//var location1=Math.floor((i+1)/(d+(3*i))*(21+i+d));
    		//var location2 = Math.floor((i+1)/(d+(1*i))*(54+i+d));
    		
    		
    		
    		var location1=Math.floor(((i+d)*(1))%19);
    		var location2=Math.floor(((5*i+d)*(i+d)*(i+5))%53);
    		
    		
    		var tmp1 = deck1[location1];

    		deck1[location1] = deck1[location2];
    		deck1[location2] = tmp1;
    		 
    	}

    	
    }
    
    
    
    function finalshow()
    {
    	
    	 renderDeck11();
    	 renderDeck22();
    	 renderDeck33();
    	 renderDeck44();
    	 renderDeck55();
    	
    	 winner1=false;
    	 winner2=false;
    	 winner3=false;
    	 winner4=false;
    	 winner5=false;
    	  
    	   winner();
    	 
    	 determinewinner();
    	 
    }
    
    
    
    

    
    
    
    

    function distribute()
    {
    	
    	
    	var findplayer=document.getElementById("playeris").value;
    	
    	
    	   
        winner1=false;
   	   winner2=false;
   	   winner3=false;
   	   winner4=false;
   	   winner5=false;
          
   	 
   	   var winner11;
   	   var winner22;
   	   var winner33;
   	   var winner44;
   	   var winner55;
    	
  
		
		
		document.getElementById('winner1').innerHTML = '';
	    	
		winner11=document.createElement("div");
		winner11.className="yourwinner";
		winner11.innerHTML="";
	    	
	    document.getElementById("winner1").appendChild(winner11);
		
		
		
	    
	    document.getElementById('winner2').innerHTML = '';
    	
		winner22=document.createElement("div");
		winner22.className="yourwinner";
		winner22.innerHTML="";
	    	
	    document.getElementById("winner2").appendChild(winner22);
	    
	    
	    document.getElementById('winner3').innerHTML = '';
    	
		winner33=document.createElement("div");
		winner33.className="yourwinner";
		winner33.innerHTML="";
	    	
	    document.getElementById("winner3").appendChild(winner33);
	    
	    
	    document.getElementById('winner4').innerHTML = '';
    	
		winner44=document.createElement("div");
		winner44.className="yourwinner";
		winner44.innerHTML="";
	    	
	    document.getElementById("winner4").appendChild(winner44);
	    
	    
	    document.getElementById('winner5').innerHTML = '';
    	
		winner55=document.createElement("div");
		winner55.className="yourwinner";
		winner55.innerHTML="";
	    	
	    document.getElementById("winner5").appendChild(winner55);
	    
	    
	    
	    
         
         deck1=getDeck();
         shuffle1();
       
         flag11=true;
         flag22=true;
         flag33=true;
         flag44=true;
         flag55=true;
       
        
      
      
        
        
        if(findplayer=="PLAYER1")
        
        {
        	
         	
        	
        renderDeck11();
       // renderDeckfold11();
    	renderDeckfold22();
    	renderDeckfold33();
    	renderDeckfold44();
    	renderDeckfold55();
    	
        }
        
        
       
        
        
        
        if(findplayer=="PLAYER2")
            
        {
        	
        	
      
       
        
        renderDeck22();
        renderDeckfold11();
    	//renderDeckfold22();
    	renderDeckfold33();
    	renderDeckfold44();
    	renderDeckfold55();
        
        }
        
        
        if(findplayer=="PLAYER3")
            
        {
        renderDeck33();
        renderDeckfold11();
    	renderDeckfold22();
    	//renderDeckfold33();
    	renderDeckfold44();
    	renderDeckfold55();
        }
        
        
        
        
        if(findplayer=="PLAYER4")
            
        {
        renderDeck44();
        
        renderDeckfold11();
    	renderDeckfold22();
    	renderDeckfold33();
    	//renderDeckfold44();
    	renderDeckfold55();
        }
        
        
      if(findplayer=="PLAYER5")
            
        {
        renderDeck55();
        renderDeckfold11();
    	renderDeckfold22();
    	renderDeckfold33();
    	renderDeckfold44();
    	//renderDeckfold55();
        }
         
    	 
    	
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
    
    
    
    function startamount1()
    {
    	var startamount1;
    	
    	document.getElementById('cash1').innerHTML = '';
    	
    	
    	
    	
    	
    	
    	startamount1=document.createElement("div");
    	startamount1.className="startamount1";
    	startamount1.innerHTML=startamount;
     	startamount11=startamount;
     	 document.getElementById("cash1").appendChild(startamount1);
    	
    	
    	
    }
    
    
    
    
    function startamount2()
    {
    	var startamount2;
    	
    	document.getElementById('cash2').innerHTML = '';
    	
    	
    	
    	
    	
    	
    	startamount2=document.createElement("div");
    	startamount2.className="startamount2";
    	startamount2.innerHTML=startamount;
    	startamount22=startamount;
     	 document.getElementById("cash2").appendChild(startamount2);
    	
    	
    	
    }
    
    
    
    function startamount3()
    {
    	var startamount3;
    	
    	document.getElementById('cash3').innerHTML = '';
    	
    	
    	
    	
    	
    	
    	startamount3=document.createElement("div");
    	startamount3.className="startamount3";
    	startamount3.innerHTML=startamount;
    	startamount33=startamount;
     	 document.getElementById("cash3").appendChild(startamount3);
    	
    	
    	
    }
   
    
    function startamount4()
    {
    	var startamount4;
    	
    	document.getElementById('cash4').innerHTML = '';
    	
    	
    	
    	
    	
    	
    	startamount4=document.createElement("div");
    	startamount4.className="startamount4";
    	startamount4.innerHTML=startamount;
    	startamount44=startamount;
     	 document.getElementById("cash4").appendChild(startamount4);
    	
    	
    	
    }
    
    
    
    function startamount5()
    {
    	var startamount5;
    	
    	document.getElementById('cash5').innerHTML = '';
    	
    	
    	
    	
    	
    	
    	startamount5=document.createElement("div");
    	startamount5.className="startamount5";
    	startamount5.innerHTML=startamount;
    	startamount55=startamount;
     	 document.getElementById("cash5").appendChild(startamount5);
    	
    	
    	
    }
    
    
    
    
    
    
    
    
    function call()
    {
    	
    	 renderDeck1();
    	
    }
    
    
    
    function start()
    {
    	
    	
    	renderDeck2();
    	//alert("start");
    	//callcard();
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
		 
		 document.getElementById('number11').value =  deck1[5].Value;
		 document.getElementById('color11').value =  deck1[5].Suit; 
		 
		 
		 
		 
		 document.getElementById('number2').value =  deck1[1].Value;
		 document.getElementById('color2').value =  deck1[1].Suit;
		 
		 document.getElementById('number22').value =  deck1[6].Value;
		 document.getElementById('color22').value =  deck1[6].Suit;
		 
		 
		 document.getElementById('number3').value =  deck1[2].Value;
		 document.getElementById('color3').value =  deck1[2].Suit;
		 
		 document.getElementById('number33').value =  deck1[7].Value;
		 document.getElementById('color33').value =  deck1[7].Suit;
		 
		 
		 document.getElementById('number4').value =  deck1[3].Value;
		 document.getElementById('color4').value =  deck1[3].Suit;
		 
		 document.getElementById('number44').value =  deck1[8].Value;
		 document.getElementById('color44').value =  deck1[8].Suit;
		 
		 
		 
		 document.getElementById('number5').value =  deck1[4].Value;
		 document.getElementById('color5').value =  deck1[4].Suit;
		 
		 document.getElementById('number55').value =  deck1[9].Value;
		 document.getElementById('color55').value =  deck1[9].Suit; 
    
		 
			
 		
		 document.getElementById('number111').value =  deck1[10].Value;
		 document.getElementById('color111').value =  deck1[10].Suit;
		 
		 document.getElementById('number112').value =  deck1[11].Value;
		 document.getElementById('color112').value =  deck1[11].Suit;
		 
		 
		 
		 document.getElementById('number113').value =  deck1[12].Value;
		 document.getElementById('color113').value =  deck1[12].Suit;
		 
		 
		 document.getElementById('number114').value =  deck1[13].Value;
		 document.getElementById('color114').value =  deck1[13].Suit;
		 
		 
		 document.getElementById('number115').value =  deck1[14].Value;
		 document.getElementById('color115').value =  deck1[14].Suit;
    
    	
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
    	
    
    
    
    
    function fold1()
    {
    	flag11=false;
    	renderDeckfold11();
    	
    	
    	
    
    }
    
    
    
    
    
    
    function fold2()
    {
    	
    	
    	flag22=false;
    	renderDeckfold22();	
    		
    
    	
    
    }
    
    
    
    
    
    
    
    function fold3()
    {
    	
    	
    	
    	flag33=false;
    	renderDeckfold33();
    
    }
    
    
    
    
    
    
    
    
    function fold4()
    {
    	
    	
    	flag44=false;
    	renderDeckfold44();
    
    }
    
    
    
    
    
    
    
    function fold5()
    {
    	
    	
    	flag55=false;
    	renderDeckfold55();
    
    }
    
    
    
    
    

    function renderDeck55()
    {
    	var card;
    	var value;
    	var suit;
    	
    	
    	 var yourname;
    document.getElementById('display5').innerHTML = '';   
    	 
    	 
 var findplayer=document.getElementById("playeris").value;
    	 
    	 if(findplayer=="PLAYER5")
    	 
    	{ 
    	 
     	
     	 yourname=document.createElement("div");
     	 yourname.className="yourname";
     	 yourname.innerHTML=document.getElementById("yourname").value;
     	
     	 document.getElementById("display5").appendChild(yourname);
    	}
    	for(var i = 4; i < 10; i+=5)
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
    	
    	
    	
    	 //document.getElementById('number5').value =  deck1[4].Value;
		 //document.getElementById('color5').value =  deck1[4].Suit;
		 
		 //document.getElementById('number55').value =  deck1[9].Value;
		 //document.getElementById('color55').value =  deck1[9].Suit; 
    	
    }
    	
    
    function renderDeck44()
    {
    	var card;
    	var value;
    	var suit;
    	
    	
    	 var yourname;
    	 document.getElementById('display4').innerHTML = '';   
    	 
    	 
 var findplayer=document.getElementById("playeris").value;
    	 
    	 if(findplayer=="PLAYER4")
    	 {
     		
     	 yourname=document.createElement("div");
     	 yourname.className="yourname";
     	 yourname.innerHTML=document.getElementById("yourname").value;
     	
     	 document.getElementById("display4").appendChild(yourname);
    	 }
    	for(var i = 3; i < 10; i+=5)
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
    	
    	
    	
    	 //document.getElementById('number4').value =  deck1[3].Value;
		 //document.getElementById('color4').value =  deck1[3].Suit;
		 
		 //document.getElementById('number44').value =  deck1[8].Value;
		 //document.getElementById('color44').value =  deck1[8].Suit; 
    	
    }

    
    
    
    
    
    
    function renderDeck33()
    {
    	var card;
    	var value;
    	var suit;
    	
    	
    	 var yourname;
    	 document.getElementById('display3').innerHTML = '';   	
    	 
    	 
 var findplayer=document.getElementById("playeris").value;
    	 
    	 if(findplayer=="PLAYER3")
    	 {
     	
     	 yourname=document.createElement("div");
     	 yourname.className="yourname";
     	 yourname.innerHTML=document.getElementById("yourname").value;
     	
     	 document.getElementById("display3").appendChild(yourname);   	
    	
    	 }
    	for(var i = 2; i < 10; i+=5)
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
    	
    	
    	
    	
    	 //document.getElementById('number3').value =  deck1[2].Value;
		 //document.getElementById('color3').value =  deck1[2].Suit;
		 
		 //document.getElementById('number33').value =  deck1[7].Value;
		 //document.getElementById('color33').value =  deck1[7].Suit; 
		 
    }

    
    
    
    
    
    function renderDeck22()
    {
    	var card;
    	var value;
    	var suit;
    	
    	
    	document.getElementById('display2').innerHTML = ''; 
    	
    	 
    	 var yourname;
    	 
    	 
 var findplayer=document.getElementById("playeris").value;
    	 
    	 if(findplayer=="PLAYER2")
    	 {
     	  	
     	 yourname=document.createElement("div");
     	 yourname.className="yourname";
     	 yourname.innerHTML=document.getElementById("yourname").value;
     	
     	 document.getElementById("display2").appendChild(yourname);	
    	 }
    
    	for(var i = 1; i < 10; i+=5)
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
    	
    	 //document.getElementById('number2').value =  deck1[1].Value;
		 //document.getElementById('color2').value =  deck1[1].Suit;
		 
		 //document.getElementById('number22').value =  deck1[6].Value;
		 //document.getElementById('color22').value =  deck1[6].Suit; 
		
    	
    }
    
    
    
    
    function renderDeck11()
    {
    	var card;
    	var value;
    	var suit;
    	 var yourname;
    	 document.getElementById('display1').innerHTML = '';  
    	 
    	 var findplayer=document.getElementById("playeris").value;
    	 
    	 if(findplayer=="PLAYER1")
    	{	 
    	 	
    	 yourname=document.createElement("div");
    	 yourname.className="yourname";
    	 yourname.innerHTML=document.getElementById("yourname").value;
    	
    	 document.getElementById("display1").appendChild(yourname);
    	 
    	}
    	 
    	 
    	for(var i = 0; i < 10; i+=5)
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
    	
    	
    	
    	
    	 //document.getElementById('number1').value =  deck1[0].Value;
		 //document.getElementById('color1').value =  deck1[0].Suit;
		 
		 //document.getElementById('number11').value =  deck1[5].Value;
		 //document.getElementById('color11').value =  deck1[5].Suit; 
    	
    }
    
    
    
    
    
    
    function renderDeckfold11()
    {
    	
    	
    	var cardfold;
    	var fold;
    	var suit;
    	
    	
    	 var yourname;
    	 document.getElementById('display1').innerHTML = '';  
    	 
    	 var findplayer=document.getElementById("playeris").value;
    	 
    	 if(findplayer=="PLAYER1")
    	{	 
    	 	
    	 yourname=document.createElement("div");
    	 yourname.className="yourname";
    	 yourname.innerHTML=document.getElementById("yourname").value;
    	
    	 document.getElementById("display1").appendChild(yourname);
    	 
    	}
    	
    	
    	
    	for(var i = 0; i < 10; i+=5)
    	{
    		cardfold = document.createElement("div");
    		 fold = document.createElement("div");
    		 cardfold.className = "cardfold";
    	     fold.className = "fold";
    		//suit.className = "suit " + deck1[i].Suit;

    		//value.innerHTML = deck1[i].Value;
    		cardfold.appendChild(fold);
    		//card.appendChild(suit);

    		document.getElementById("display1").appendChild(cardfold);
    		
    		
    		
    	
    		 
    		 
    	}
    	
    	
    
    }
    
    
    
    function renderDeckfold22()
    {
    	
    	
    	var cardfold;
    	var fold;
    	var suit;
    	
    	
    	 var yourname;
    	 document.getElementById('display2').innerHTML = '';  
    	 
    	 var findplayer=document.getElementById("playeris").value;
    	 
    	 if(findplayer=="PLAYER2")
    	{	 
    	 	
    	 yourname=document.createElement("div");
    	 yourname.className="yourname";
    	 yourname.innerHTML=document.getElementById("yourname").value;
    	
    	 document.getElementById("display2").appendChild(yourname);
    	 
    	}
    	
    	
    	
    	
    	for(var i = 1; i < 10; i+=5)
    	{
    		cardfold = document.createElement("div");
    		 fold = document.createElement("div");
    		 cardfold.className = "cardfold";
    	     fold.className = "fold";
    		//suit.className = "suit " + deck1[i].Suit;

    		//value.innerHTML = deck1[i].Value;
    		cardfold.appendChild(fold);
    		//card.appendChild(suit);

    		document.getElementById("display2").appendChild(cardfold);
    		
    		
    		
    	
    		 
    		 
    	}
    	
    	
    
    }
    
    
    
    
    function renderDeckfold33()
    {
    	
    	
    	var cardfold;
    	var fold;
    	var suit;
    	
    	
    	 var yourname;
    	 document.getElementById('display3').innerHTML = '';  
    	 
    	 var findplayer=document.getElementById("playeris").value;
    	 
    	 if(findplayer=="PLAYER3")
    	{	 
    	 	
    	 yourname=document.createElement("div");
    	 yourname.className="yourname";
    	 yourname.innerHTML=document.getElementById("yourname").value;
    	
    	 document.getElementById("display3").appendChild(yourname);
    	 
    	}
    	
    	
    	
    	
    	for(var i = 2; i < 10; i+=5)
    	{
    		cardfold = document.createElement("div");
    		 fold = document.createElement("div");
    		 cardfold.className = "cardfold";
    	     fold.className = "fold";
    		//suit.className = "suit " + deck1[i].Suit;

    		//value.innerHTML = deck1[i].Value;
    		cardfold.appendChild(fold);
    		//card.appendChild(suit);

    		document.getElementById("display3").appendChild(cardfold);
    		
    		
    		
    	
    		 
    		 
    	}
    	
    	
    
    }
    
    
    
    
    
    function renderDeckfold44()
    {
    	
    	
    	var cardfold;
    	var fold;
    	var suit;
    	
    	
    	 var yourname;
    	 document.getElementById('display4').innerHTML = '';  
    	 
    	 var findplayer=document.getElementById("playeris").value;
    	 
    	 if(findplayer=="PLAYER4")
    	{	 
    	 	
    	 yourname=document.createElement("div");
    	 yourname.className="yourname";
    	 yourname.innerHTML=document.getElementById("yourname").value;
    	
    	 document.getElementById("display4").appendChild(yourname);
    	 
    	}
    	
    	
    	
    	
    	for(var i = 3; i < 10; i+=5)
    	{
    		cardfold = document.createElement("div");
    		 fold = document.createElement("div");
    		 cardfold.className = "cardfold";
    	     fold.className = "fold";
    		//suit.className = "suit " + deck1[i].Suit;

    		//value.innerHTML = deck1[i].Value;
    		cardfold.appendChild(fold);
    		//card.appendChild(suit);

    		document.getElementById("display4").appendChild(cardfold);
    		
    		
    		
    	
    		 
    		 
    	}
    	
    	
    
    }
    
    
    
    
    function renderDeckfold55()
    {
    	
    	
    	var cardfold;
    	var fold;
    	var suit;
    	
    	
    	 var yourname;
    	 document.getElementById('display5').innerHTML = '';  
    	 
    	 var findplayer=document.getElementById("playeris").value;
    	 
    	 if(findplayer=="PLAYER5")
    	{	 
    	 	
    	 yourname=document.createElement("div");
    	 yourname.className="yourname";
    	 yourname.innerHTML=document.getElementById("yourname").value;
    	
    	 document.getElementById("display5").appendChild(yourname);
    	 
    	}
    	
    	
    	
    	for(var i = 4; i < 10; i+=5)
    	{
    		cardfold = document.createElement("div");
    		 fold = document.createElement("div");
    		 cardfold.className = "cardfold";
    	     fold.className = "fold";
    		//suit.className = "suit " + deck1[i].Suit;

    		//value.innerHTML = deck1[i].Value;
    		cardfold.appendChild(fold);
    		//card.appendChild(suit);

    		document.getElementById("display5").appendChild(cardfold);
    		
    		
    		
    	
    		 
    		 
    	}
    	
    	
    
    }
    
    
    
    
    
    ///////////////////////////////    
    
    
    function renderDeckfoldplaycards()
    {
    	
    	
    	var cardfold;
    	var fold;
    	var suit;
    	
    	
    	 var yourname;
    	 document.getElementById('distribute').innerHTML = '';  
    	 
    	
    	
    	
    	for(var i = 10; i < 15; i++)
    	{
    		cardfold = document.createElement("div");
    		 fold = document.createElement("div");
    		 cardfold.className = "cardfold";
    	     fold.className = "fold";
    		//suit.className = "suit " + deck1[i].Suit;

    		//value.innerHTML = deck1[i].Value;
    		cardfold.appendChild(fold);
    		//card.appendChild(suit);

    		document.getElementById("distribute").appendChild(cardfold);
    		
    		
    		
    	
    		 
    		 
    	}
    	
    	
    
    }
    
    
    
    
    
    
    
    
 
    function winner()
    {
    	
    	
    	
    	alert("hiwinner");
    	
    	
    	  card1v=document.getElementById('number1').value; 
		  card1c=document.getElementById('color1').value;
		 
		 
		  card11v=document.getElementById('number11').value; 
		  card11c=document.getElementById('color11').value;
    	
    	
		 
		  card2v=document.getElementById('number2').value; 
		  card2c=document.getElementById('color2').value;
		 
		 
		  card22v=document.getElementById('number22').value; 
		  card22c=document.getElementById('color22').value;
		 
		 
		 
		  card3v=document.getElementById('number3').value; 
		  card3c=document.getElementById('color3').value;
		 
		 
		  card33v=document.getElementById('number33').value; 
		  card33c=document.getElementById('color33').value;
		 
		 
		 
		  card4v=document.getElementById('number4').value; 
		  card4c=document.getElementById('color4').value;
		 
		 
		  card44v=document.getElementById('number44').value; 
		  card44c=document.getElementById('color44').value;
		 
		 
		  card5v=document.getElementById('number5').value; 
		  card5c=document.getElementById('color5').value;
		 
		 
		  card55v=document.getElementById('number55').value; 
		  card55c=document.getElementById('color55').value;
		 
		 
		 
		  play1v=document.getElementById('number111').value; 
		  play1c=document.getElementById('color111').value; 
		 
		 
		  play2v=document.getElementById('number112').value; 
		  play2c=document.getElementById('color112').value; 
		 
		 
		  play3v=document.getElementById('number113').value; 
		  play3c=document.getElementById('color113').value; 
		 
		  play4v=document.getElementById('number114').value; 
		  play4c=document.getElementById('color114').value; 
		 
		 
		 
		  play5v=document.getElementById('number115').value; 
		  play5c=document.getElementById('color115').value; 
		  
		  
		  
		  
		  //alert("the play5 is");
		  //alert(play5v);
		  //alert(play5c);
		  
		  
		  winner1=false;
		  winner2=false;
		  winner3=false;
		  winner4=false;
		  winner5=false;
		  
		  
		  count1=0;
		  count2=0;
		  count3=0;
		  count4=0;

		  count5=0;
		  count6=0;
		  count7=0;
		  count8=0;

		  count9=0;
		  count10=0;
		  count11=0;
		  count12=0;
		  count13=0;



		 checkcount();
		  
		 
		 
		// if( (((count1==2)&&(card5v=="A")&&(card55v=="A")))||(((count2==2)&&(card5v=="2")&&(card55v=="2")))||(((count3==2)&&(card5v=="3")&&(card55v=="3")))||(((count4==2)&&(card5v=="4")&&(card55v=="4")))||(((count5==2)&&(card5v=="5")&&(card55v=="5")))||(((count6==2)&&(card5v=="6")&&(card55v=="6")))||(((count7==2)&&(card5v=="7")&&(card55v=="7")))||(((count8==2)&&(card5v=="8")&&(card55v=="8")))||(((count9==2)&&(card5v=="9")&&(card55v=="9")))||(((count10==2)&&(card5v=="10")&&(card55v=="10")))||(((count11==2)&&(card5v=="J")&&(card55v=="J")))||(((count12==2)&&(card5v=="Q")&&(card55v=="Q")))||(((count13==2)&&(card5v=="K")&&(card55v=="K"))))
		 
		 
		  
		  
		  
		  //alert("checkroyalflush");
		  
		  var isthereroyalflush=checkroyalflush(); //have to code
		  
		 
		  
		  
		  if(isthereroyalflush==true)
			  {
			  
			 
			  
					  if((flag11==true)&&(royalflush1==true))
					  {
					  
						  winner1=true;
						  royalflush1=false;
					  }
					  
					  
					  if((flag22==true)&&(royalflush2==true))
					  {
					  
						  winner2=true;
						  royalflush2=false;
					  }
					  
					  
					  if((flag33==true)&&(royalflush3==true))
					  {
					  
						  winner3=true;
						  royalflush3=false;
					  }
					  
					  
					  if((flag44==true)&&(royalflush4==true))
					  {
					  
						  winner4=true;
						  royalflush4=false;
					  }
					  
					  
					  if((flag55==true)&&(royalflush5==true))
					  {
					  
						  winner5=true;
						  royalflush5=false;
					  } 
					  
			  
			  
			  
			  }
		 
		  else
			  
			  {
			  
			  
			  //alert("noroyalflush");
			  var istherestraightflush=checkstraightflush();//have to code
			  
			  
			  if(istherestraightflush==true)
			  {
			  
			 
			  
					  if((flag11==true)&&(straightflush1==true))
					  {
					  
					  winner1=true;
					  straightflush1=false;
					  }
					  
					  
					  if((flag22==true)&&(straightflush2==true))
					  {
					  
						  winner2=true;
						  straightflush2=false;
					  }
					  
					  
					  if((flag33==true)&&(straightflush3==true))
					  {
					  
						  winner3=true;
						  straightflush3=false;
					  }
					  
					  
					  if((flag44==true)&&(straightflush4==true))
					  {
					  
						  winner4=true;
						  straightflush4=false;
					  }
					  
					  
					  if((flag55==true)&&(straightflush5==true))
					  {
					  
						  winner5=true;
						  straightflush5=false;
					  } 
					  
			  
			  
			  
			  }
			  
			  
			  
			  else
				  
				  {
				  
				  //alert("nostraightflush");
				  
				  
				  var istherefourofakind=checkfourofakind();//have to code
				  
				  
				  if(istherefourofakind==true)
				  {
				  
					//  alert("fourofakind");
				  
						  if((flag11==true)&&(fourofakind1==true))
						  {
						  
							  winner1=true;
							  fourofakind1=false;
						  }
						  
						  
						  if((flag22==true)&&(fourofakind2==true))
						  {
						  
							  winner2=true;
							  fourofakind2=false;
						  }
						  
						  
						  if((flag33==true)&&(fourofakind3==true))
						  {
						  
							  winner3=true;
							  fourofakind3=false;
						  }
						  
						  
						  if((flag44==true)&&(fourofakind4==true))
						  {
						  
							  winner4=true;
							  fourofakind4=false;
						  }
						  
						  
						  if((flag55==true)&&(fourofakind5==true))
						  {
						  
							  winner5=true;
							  fourofakind5=false;
						  } 
						  
				  
				  
				  
				   }
				  
				  
				  else
					  {
					  
					  
					  //alert("nofourofakind");
					  var istherefullhouse=checkfullhouse();//have to code
					  
					  
					  if(istherefullhouse==true)
					  {
					  
					 
					  
							  if((flag11==true)&&(fullhouse1==true))
							  {
							  
								  winner1=true;
								  fullhouse1=false;
								  
							  }
							  
							  
							  if((flag22==true)&&(fullhouse2==true))
							  {
							  
								  winner2=true;
								  fullhouse2=false;
							  }
							  
							  
							  if((flag33==true)&&(fullhouse3==true))
							  {
							  
								  winner3=true;
								  fullhouse3=false;
							  }
							  
							  
							  if((flag44==true)&&(fullhouse4==true))
							  {
								  fullhouse4=false;
								  winner4=true;
							  }
							  
							  
							  if((flag55==true)&&(fullhouse5==true))
							  {
								  fullhouse5=false;
								  winner5=true;
							  } 
							  
					  
					  
					  
					   }	


                         else
                         {
                        	 //alert("nofullhouse");
                        	 
                        	 
                              var isthereflush=checkflush();//have to code
					  
					  
					              if(isthereflush==true)
					            	  
					            	  
					            	  
					                {
					  
					            	  //alert("itsaflush");
					  
							  if((flag11==true)&&(flush1==true))
							  {
								  flush1=false;
								  winner1=true;
							  }
							  
							  
							  if((flag22==true)&&(flush2==true))
							  {
								  flush2=false;
								  winner2=true;
							  }
							  
							  
							  if((flag33==true)&&(flush3==true))
							  {
								  flush3=false;
								  winner3=true;
							  }
							  
							  
							  if((flag44==true)&&(flush4==true))
							  {
								  flush4=false;
								  winner4=true;
							  }
							  
							  
							  if((flag55==true)&&(flush5==true))
							  {
								  flush5=false;
								  winner5=true;
							  } 
							  
				             		 
					     }
						 
						 
						 else
						   {
							 //alert("noflush");
						   
						          var istherestraight=checkstraight();//have to code
						          
					              if(istherestraight==true)
					                {
					  
					 
					  
							  if((flag11==true)&&(straight1==true))
							  {
							  
								  winner1=true;
								  straight1=false;
							  }
							  
							  
							  if((flag22==true)&&(straight2==true))
							  {
							  
								  winner2=true;
								  straight2=false;
							  }
							  
							  
							  if((flag33==true)&&(straight3==true))
							  {
							  
								  winner3=true;
								  straight3=false;
							  }
							  
							  
							  if((flag44==true)&&(straight4==true))
							  {
							  
								  winner4=true;
								  straight4=false;
							  }
							  
							  
							  if((flag55==true)&&(straight5==true))
							  {
							  
								  winner5=true;
								  straight5=false;
							  } 
							  
				             		 
					     }
						 
						 
						 else
						 {
							        // alert("nostraight");
						 
						               var istherethreeofakind=checkthreeofakind();//have to code
						             
					  
					              if(istherethreeofakind==true)
					                {
					  
					            	 
					  
							  if((flag11==true)&&(threeofakind1==true))
							  {
								  threeofakind1=false;
								  winner1=true;
							  }
							  
							  
							  if((flag22==true)&&(threeofakind2==true))
							  {
								  threeofakind2=false;
								  winner2=true;
							  }
							  
							  
							  if((flag33==true)&&(threeofakind3==true))
							  {
								  threeofakind3=false;
								  winner3=true;
							  }
							  
							  
							  if((flag44==true)&&(threeofakind4==true))
							  {
								  threeofakind4=false;
								  winner4=true;
							  }
							  
							  
							  if((flag55==true)&&(threeofakind5==true))
							  {
								  threeofakind5=false;
								  winner5=true;
							  } 
							  
				             		 
					     }
						 
						 
						 
						 else
						 {
						 
							       //alert("nothreeofakind");
							          
							            
							             
						 
						             var istheretwopair=checktwopair();//have to code
					                //alert(istheretwopair);
					  
					              if(istheretwopair==true)
					                {
					  
					 
					  
							  if((flag11==true)&&(twopair1==true))
							  {
								  twopair1=false;
								  winner1=true;
							  }
							  
							  
							  if((flag22==true)&&(twopair2==true))
							  {
								  twopair2=false;
								  winner2=true;
							  }
							  
							  
							  if((flag33==true)&&(twopair3==true))
							  {
								  twopair3=false;
								  winner3=true;
							  }
							  
							  
							  if((flag44==true)&&(twopair4==true))
							  {
								  twopair4=false;
								  winner4=true;
							  }
							  
							  
							  if((flag55==true)&&(twopair5==true))
							  {
								  twopair5=false;
								  winner5=true;
							  } 
							  
				             		 
					     }
						 
						 
						 
						 else
						 {
						 
				//			 alert("notwopair");
							 
							 
						   var istherepair=checkpair();//have to code
					      
					  
					              if(istherepair==true)
					                {
					  
					 
					  
							  if((flag11==true)&&(pair1==true))
							  {
								  pair1=false;
								  winner1=true;
							  }
							  
							  
							  if((flag22==true)&&(pair2==true))
							  {
								  pair2=false;
								  winner2=true;
							  }
							  
							  
							  if((flag33==true)&&(pair3==true))
							  {
								  pair3=false;
								  winner3=true;
							  }
							  
							  
							  if((flag44==true)&&(pair4==true))
							  {
								  pair4=false;
								  winner4=true;
							  }
							  
							  
							  if((flag55==true)&&(pair5==true))
							  {
								  pair5=false;
								  winner5=true;
							  } 
							  
				             		 
					     }
						 
						 
						 
						 else
						 {
						 
							 
					//		 alert("nopair");
							 
						    var istherehighcard=checkhighcard();//have to code
					  
					  
					              if(istherehighcard==true)
					                {
					  
					  //          	  alert("highcard");
					  
											  if((flag11==true)&&(highcard1==true))
											  {
												  highcard1=false;
												  winner1=true;
											  }
											  
											  
											  if((flag22==true)&&(highcard2==true))
											  {
												  highcard2=false;
												  winner2=true;
											  }
											  
											  
											  if((flag33==true)&&(highcard3==true))
											  {
												  highcard3=false;
												  winner3=true;
											  }
											  
											  
											  if((flag44==true)&&(highcard4==true))
											  {
												  highcard4=false;
												  winner4=true;
											  }
											  
											  
											  if((flag55==true)&&(highcard5==true))
											  {
												  highcard5=false;
												  winner5=true;
											  } 
							  
				             		 
					                  }
									  
									  
						    }
						 
						 
						 }//
						 
						 
						 
						 }//
						 
						 
						 
						 }//
						 
						 
						 
						   
						    }//
					  
					  }//
				  
				  
				  }//
			  
			  
			  }
		 
		 
		 
    }
	
	
	}
    
    
    
    
    
    
    
    
    
    function checkflush()
    {

    	
    var valueofflush=false;

    counta=0;
    countb=0;
     countc=0;
     countd=0;

    if(play1c=="diamonds")
    {
    	
    	counta++;
    }


    if(play1c=="hearts")
    {
    	
    	countb++;
    }

    if(play1c=="spades")
    {
    	
    	countc++;
    }

    if(play1c=="clubs")
    {
    	
    	countd++;
    }


    if(play2c=="diamonds")
    {
    	
    	counta++;
    }


    if(play2c=="hearts")
    {
    	
    	countb++;
    }

    if(play2c=="spades")
    {
    	
    	countc++;
    }

    if(play2c=="clubs")
    {
    	
    	countd++;
    }



    if(play3c=="diamonds")
    {
    	
    	counta++;
    }


    if(play3c=="hearts")
    {
    	
    	countb++;
    }

    if(play3c=="spades")
    {
    	
    	countc++;
    }

    if(play3c=="clubs")
    {
    	
    	countd++;
    }


    if(play4c=="diamonds")
    {
    	
    	counta++;
    }


    if(play4c=="hearts")
    {
    	
    	countb++;
    }

    if(play4c=="spades")
    {
    	
    	countc++;
    }

    if(play4c=="clubs")
    {
    	
    	countd++;
    }



    if(play5c=="diamonds")
    {
    	
    	counta++;
    }


    if(play5c=="hearts")
    {
    	
    	countb++;
    }

    if(play5c=="spades")
    {
    	
    	countc++;
    }

    if(play5c=="clubs")
    {
    	
    	countd++;
    }



    //alert("the diamonds are");
    //alert(counta);
    
    
    

    //alert("the hearts are");
    //alert(countb);
    
    

    //alert("the spades are");
    //alert(countc);
    
    
    

    //alert("the clubs are");
    //alert(countd);
   	
    	if(counta==3)
    	{
    		
    		 //alert("ifreacheddiamonds3");
    		if((card1c==card11c)&&(card1c=="diamonds"))
    		{
    			
    			valueofflush=true;
    			flush1=true;
    		}



             if((card2c==card22c)&&(card2c=="diamonds"))
    		{
    			valueofflush=true;
    			flush2=true;
    		}
    		
    		
    		if((card3c==card33c)&&(card3c=="diamonds"))
    		{
    			valueofflush=true;
    			flush3=true;
    		}
    		
    		
    		if((card4c==card44c)&&(card4c=="diamonds"))
    		{
    			valueofflush=true;
    			flush4=true;
    		}
    		
    		if((card5c==card55c)&&(card5c=="diamonds"))
    		{
    			 //alert("ifreacheddiamonds3nested");
    			  valueofflush=true;
    			  flush5=true;
    		}
            
    		
    	}
    	
    	if(counta==4)
    	{
    		
    		 //alert("ifreacheddiamonds4");
    		
    		if((card1c=="diamonds")||(card11c=="diamonds"))
    		{
    			valueofflush=true;
    			flush1=true;
    			
    		}
    		
    		
    		if((card2c=="diamonds")||(card22c=="diamonds"))
    		{
    			valueofflush=true;
    			flush2=true;
    			
    		}
    		
    		
    		
    		if((card3c=="diamonds")||(card33c=="diamonds"))
    		{
    			valueofflush=true;
    			flush3=true;
    			
    		}
    		
    		
    		if((card4c=="diamonds")||(card44c=="diamonds"))
    		{
    			valueofflush=true;
    			flush4=true;
    			
    		}
    		
    		
    		if((card5c=="diamonds")||(card55c=="diamonds"))
    		{
    			valueofflush=true;
    			flush5=true;
    			
    		}
    		
    		
    	}
    	
    	
    	if(counta==5)
    	{
    		   valueofflush=true;
    		     flush1=true;
    			 flush2=true;
    			 flush3=true;
    			 flush4=true;
    			 flush5=true;
    	}
    	
    	/////////
    	
    	
    	
    	
    	
    	
    	
    	
    	if(countb==3)
    	{
    		if((card1c==card11c)&&(card1c=="hearts"))
    		{
    			valueofflush=true;
    			flush1=true;
    		}



             if((card2c==card22c)&&(card2c=="hearts"))
    		{
    			valueofflush=true;
    			flush2=true;
    		}
    		
    		
    		if((card3c==card33c)&&(card3c=="hearts"))
    		{
    			valueofflush=true;
    			flush3=true;
    		}
    		
    		
    		if((card4c==card44c)&&(card4c=="hearts"))
    		{
    			valueofflush=true;
    			flush4=true;
    		}
    		
    		if((card5c==card55c)&&(card5c=="hearts"))
    		{
    			valueofflush=true;
    			flush5=true;
    		}
            
    		
    	}
    	
    	if(countb==4)
    	{
    		if((card1c=="hearts")||(card11c=="hearts"))
    		{
    			valueofflush=true;
    			flush1=true;
    			
    		}
    		
    		
    		if((card2c=="hearts")||(card22c=="hearts"))
    		{
    			valueofflush=true;
    			flush2=true;
    			
    		}
    		
    		
    		
    		if((card3c=="hearts")||(card33c=="hearts"))
    		{
    			valueofflush=true;
    			flush3=true;
    			
    		}
    		
    		
    		if((card4c=="hearts")||(card44c=="hearts"))
    		{
    			valueofflush=true;
    			flush4=true;
    			
    		}
    		
    		
    		if((card5c=="hearts")||(card55c=="hearts"))
    		{
    			valueofflush=true;
    			flush5=true;
    			
    		}
    		
    		
    	}
    	
    	
    	if(countb==5)
    	{
    		   valueofflush=true;
    		     flush1=true;
    			 flush2=true;
    			 flush3=true;
    			 flush4=true;
    			 flush5=true;
    	}
    	////////
    	
    	
    	
    	
    	
    	
    	
    		
    	if(countc==3)
    	{
    		if((card1c==card11c)&&(card1c=="spades"))
    		{
    			valueofflush=true;
    			flush1=true;
    		}



             if((card2c==card22c)&&(card2c=="spades"))
    		{
    			valueofflush=true;
    			flush2=true;
    		}
    		
    		
    		if((card3c==card33c)&&(card3c=="spades"))
    		{
    			valueofflush=true;
    			flush3=true;
    		}
    		
    		
    		if((card4c==card44c)&&(card4c=="spades"))
    		{
    			valueofflush=true;
    			flush4=true;
    		}
    		
    		if((card5c==card55c)&&(card5c=="spades"))
    		{
    			valueofflush=true;
    			flush5=true;
    		}
            
    		
    	}
    	
    	if(countc==4)
    	{
    		if((card1c=="spades")||(card11c=="spades"))
    		{
    			valueofflush=true;
    			flush1=true;
    			
    		}
    		
    		
    		if((card2c=="spades")||(card22c=="spades"))
    		{
    			valueofflush=true;
    			flush2=true;
    			
    		}
    		
    		
    		
    		if((card3c=="spades")||(card33c=="spades"))
    		{
    			valueofflush=true;
    			flush3=true;
    			
    		}
    		
    		
    		if((card4c=="spades")||(card44c=="spades"))
    		{
    			valueofflush=true;
    			flush4=true;
    			
    		}
    		
    		
    		if((card5c=="spades")||(card55c=="spades"))
    		{
    			valueofflush=true;
    			flush5=true;
    			
    		}
    		
    		
    	}
    	
    	
    	if(countc==5)
    	{
    		   valueofflush=true;
    		     flush1=true;
    			 flush2=true;
    			 flush3=true;
    			 flush4=true;
    			 flush5=true;
    	}
    	
    	
    	///////////
    	
    	
    	
    	
    		
    		
    	if(countd==3)
    	{
    		if((card1c==card11c)&&(card1c=="clubs"))
    		{
    			valueofflush=true;
    			flush1=true;
    		}



             if((card2c==card22c)&&(card2c=="clubs"))
    		{
    			valueofflush=true;
    			flush2=true;
    		}
    		
    		
    		if((card3c==card33c)&&(card3c=="clubs"))
    		{
    			valueofflush=true;
    			flush3=true;
    		}
    		
    		
    		if((card4c==card44c)&&(card4c=="clubs"))
    		{
    			valueofflush=true;
    			flush4=true;
    		}
    		
    		if((card5c==card55c)&&(card5c=="clubs"))
    		{
    			valueofflush=true;
    			flush5=true;
    		}
            
    		
    	}
    	
    	if(countd==4)
    	{
    		
    		
    		//alert("reachedclubs4");
    		
    		if((card1c=="clubs")||(card11c=="clubs"))
    		{
    			valueofflush=true;
    			flush1=true;
    			
    		}
    		
    		
    		if((card2c=="clubs")||(card22c=="clubs"))
    		{
    			valueofflush=true;
    			flush2=true;
    			
    		}
    		
    		
    		
    		if((card3c=="clubs")||(card33c=="clubs"))



    		{
    			valueofflush=true;
    			flush3=true;
    			
    		}
    		
    		
    		if((card4c=="clubs")||(card44c=="clubs"))
    		{
    			valueofflush=true;
    			flush4=true;
    			
    		}
    		
    		
    		if((card5c=="clubs")||(card55c=="clubs"))
    		{
    			valueofflush=true;
    			flush5=true;
    			
    		}
    		
    		
    	}
    	
    	
    	if(countd==5)
    	{
    		   valueofflush=true;
    		     flush1=true;
    			 flush2=true;
    			 flush3=true;
    			 flush4=true;
    			 flush5=true;
    	}
    	
    	
    	
    	
    	
    



    return valueofflush;


    }


			
    
    
    

    function checkcount()
    {

    if(play1v=="A")
    {
    	
    	count1++;
    }



    if(play1v=="2")
    {
    	
    	count2++;
    }


    if(play1v=="3")
    {
    	
    	count3++;
    }



    if(play1v=="4")
    {
    	
    	count4++;
    }



    if(play1v=="5")
    {
    	
    	count5++;
    }



    if(play1v=="6")
    {
    	
    	count6++;
    }



    if(play1v=="7")
    {
    	
    	count7++;
    }



    if(play1v=="8")
    {
    	
    	count8++;
    }



    if(play1v=="9")
    {
    	
    	count9++;
    }



    if(play1v=="10")
    {
    	
    	count10++;
    }



    if(play1v=="J")
    {
    	
    	count11++;
    }



    if(play1v=="Q")
    {
    	
    	count12++;
    }



    if(play1v=="K")
    {
    	
    	count13++;
    }


    ///////////////





    if(play2v=="A")
    {
    	
    	count1++;
    }



    if(play2v=="2")
    {
    	
    	count2++;
    }


    if(play2v=="3")
    {
    	
    	count3++;
    }



    if(play2v=="4")
    {
    	
    	count4++;
    }



    if(play2v=="5")
    {
    	
    	count5++;
    }



    if(play2v=="6")
    {
    	
    	count6++;
    }



    if(play2v=="7")
    {
    	
    	count7++;
    }



    if(play2v=="8")
    {
    	
    	count8++;
    }



    if(play2v=="9")
    {
    	
    	count9++;
    }



    if(play2v=="10")
    {
    	
    	count10++;
    }



    if(play2v=="J")
    {
    	
    	count11++;
    }



    if(play2v=="Q")
    {
    	
    	count12++;
    }



    if(play2v=="K")
    {
    	
    	count13++;
    }

    /////////////////



    if(play3v=="A")
    {
    	
    	count1++;
    }



    if(play3v=="2")
    {
    	
    	count2++;
    }


    if(play3v=="3")
    {
    	
    	count3++;
    }



    if(play3v=="4")
    {
    	
    	count4++;
    }



    if(play3v=="5")
    {
    	
    	count5++;
    }



    if(play3v=="6")
    {
    	
    	count6++;
    }



    if(play3v=="7")
    {
    	
    	count7++;
    }



    if(play3v=="8")
    {
    	
    	count8++;
    }



    if(play3v=="9")
    {
    	
    	count9++;
    }



    if(play3v=="10")
    {
    	
    	count10++;
    }



    if(play3v=="J")
    {
    	
    	count11++;
    }



    if(play3v=="Q")
    {
    	
    	count12++;
    }



    if(play3v=="K")
    {
    	
    	count13++;
    }

    /////////////////////






    if(play4v=="A")
    {
    	
    	count1++;
    }



    if(play4v=="2")
    {
    	
    	count2++;
    }


    if(play4v=="3")
    {
    	
    	count3++;
    }



    if(play4v=="4")
    {
    	
    	count4++;
    }



    if(play4v=="5")
    {
    	
    	count5++;
    }



    if(play4v=="6")
    {
    	
    	count6++;
    }



    if(play4v=="7")
    {
    	
    	count7++;
    }



    if(play4v=="8")
    {
    	
    	count8++;
    }



    if(play4v=="9")
    {
    	
    	count9++;
    }



    if(play4v=="10")
    {
    	
    	count10++;
    }



    if(play4v=="J")
    {
    	
    	count11++;
    }



    if(play4v=="Q")
    {
    	
    	count12++;
    }



    if(play4v=="K")
    {
    	
    	count13++;
    }
     ////


    if(play5v=="A")
    {
    	
    	count1++;
    }



    if(play5v=="2")
    {
    	
    	count2++;
    }


    if(play5v=="3")
    {
    	
    	count3++;
    }



    if(play5v=="4")
    {
    	
    	count4++;
    }



    if(play5v=="5")
    {
    	
    	count5++;
    }



    if(play5v=="6")
    {
    	
    	count6++;
    }



    if(play5v=="7")
    {
    	
    	count7++;
    }



    if(play5v=="8")
    {
    	
    	count8++;
    }



    if(play5v=="9")
    {
    	
    	count9++;
    }



    if(play5v=="10")
    {
    	
    	count10++;
    }



    if(play5v=="J")
    {
    	
    	count11++;
    }



    if(play5v=="Q")
    {
    	
    	count12++;
    }



    if(play5v=="K")
    {
    	
    	count13++;
    }	
    	
    }

    

    
    function checktwopair()
    {
    	
    	var valueoftwopair=false;
    count1=0;
     count2=0;
     count3=0;
     count4=0;

     count5=0;
     count6=0;
     count7=0;
     count8=0;

     count9=0;
     count10=0;
     count11=0;
     count12=0;
     count13=0;

var flagcount=0;

    checkcount();


    
    
    
    
    
    
    if(count1==2)
 	   {
 	      flagcount++;
 	   
 	   }
    
    if(count2==2)
	   {
	      flagcount++;
	   
	   }

    
    if(count3==2)
	   {
	      flagcount++;
	   
	   }

    
    if(count4==2)
	   {
	      flagcount++;
	   
	   }

    
    if(count5==2)
	   {
	      flagcount++;
	   
	   }

    
    if(count6==2)
	   {
	      flagcount++;
	   
	   }

    
    if(count7==2)
	   {
	      flagcount++;
	   
	   }

    
    if(count8==2)
	   {
	      flagcount++;
	   
	   }

    
    if(count9==2)
	   {
	      flagcount++;
	   
	   }

    
    if(count10==2)
	   {
	      flagcount++;
	   
	   }

    
    if(count11==2)
	   {
	      flagcount++;
	   
	   }

    
    if(count12==2)
	   {
	      flagcount++;
	   
	   }

    
    if(count13==2)
	   {
	      flagcount++;
	   
	   }

    
    
   // alert(flagcount);
    
    
    
    
    if(flagcount==2)
    	{
    	
    	valueoftwopair=true;
		twopair1=true;
		twopair2=true;
		twopair3=true;
		twopair4=true;
		twopair5=true;
		
		
		
		
    	}
    
    
    

    if((count1==2)||(count2==2)||(count3==2)||(count4==2)||(count5==2)||(count6==2)||(count7==2)||(count8==2)||(count9==2)||(count10==2)||(count11==2)||(count12==2)||(count13==2))
    {
    	
    	if( ((count1==2)&&(card1v==card11v)&&(card1v!="A")) || ((count2==2)&&(card1v==card11v)&&(card1v!="2")) || ((count1==3)&&(card1v==card11v)&&(card1v!="3")) || ((count1==4)&&(card1v==card11v)&&(card1v!="4"))  ||((count5==2)&&(card1v==card11v)&&(card1v!="5")) || ((count6==2)&&(card1v==card11v)&&(card1v!="6")) || ((count7==2)&&(card1v==card11v)&&(card1v!="7")) ||  ((count8==2)&&(card1v==card11v)&&(card1v!="8")) || ((count9==2)&&(card1v==card11v)&&(card1v!="9")) || ((count10==2)&&(card1v==card11v)&&(card1v!="10")) ||  ((count11==2)&&(card1v==card11v)&&(card1v!="J")) ||  ((count12==2)&&(card1v==card11v)&&(card1v!="Q")) || ((count13==2)&&(card1v==card11v)&&(card1v!="K")) )
    	{
    	
         	valueoftwopair=true;
    		twopair1=true;
    	
    	}	
    	
    	
    	
    	
    	if( ((count1==2)&&(card2v==card22v)&&(card2v!="A")) || ((count2==2)&&(card2v==card22v)&&(card2v!="2")) || ((count1==3)&&(card2v==card22v)&&(card2v!="3")) || ((count1==4)&&(card2v==card22v)&&(card2v!="4"))  ||((count5==2)&&(card2v==card22v)&&(card2v!="5")) || ((count6==2)&&(card2v==card22v)&&(card2v!="6")) || ((count7==2)&&(card2v==card22v)&&(card2v!="7")) ||  ((count8==2)&&(card2v==card22v)&&(card2v!="8")) || ((count9==2)&&(card2v==card22v)&&(card2v!="9")) || ((count10==2)&&(card2v==card22v)&&(card2v!="10")) ||  ((count11==2)&&(card2v==card22v)&&(card2v!="J")) ||  ((count12==2)&&(card2v==card22v)&&(card2v!="Q")) || ((count13==2)&&(card2v==card22v)&&(card2v!="K")) )
    	{
    	
         	valueoftwopair=true;
    		twopair1=true;
    	
    	}	
    	
    	
    	if( ((count1==2)&&(card3v==card33v)&&(card3v!="A")) || ((count2==2)&&(card3v==card33v)&&(card3v!="2")) || ((count1==3)&&(card3v==card33v)&&(card3v!="3")) || ((count1==4)&&(card3v==card33v)&&(card3v!="4"))  ||((count5==2)&&(card3v==card33v)&&(card3v!="5")) || ((count6==2)&&(card3v==card33v)&&(card3v!="6")) || ((count7==2)&&(card3v==card33v)&&(card3v!="7")) ||  ((count8==2)&&(card3v==card33v)&&(card3v!="8")) || ((count9==2)&&(card3v==card33v)&&(card3v!="9")) || ((count10==2)&&(card3v==card33v)&&(card3v!="10")) ||  ((count11==2)&&(card3v==card33v)&&(card3v!="J")) ||  ((count12==2)&&(card3v==card33v)&&(card3v!="Q")) || ((count13==2)&&(card3v==card33v)&&(card3v!="K")) )
    	{
    	
         	valueoftwopair=true;
    		twopair3=true;
    	
    	}	
    	
    	
    	if( ((count1==2)&&(card4v==card11v)&&(card4v!="A")) || ((count2==2)&&(card4v==card44v)&&(card4v!="2")) || ((count1==3)&&(card4v==card44v)&&(card4v!="3")) || ((count1==4)&&(card4v==card44v)&&(card4v!="4"))  ||((count5==2)&&(card4v==card44v)&&(card4v!="5")) || ((count6==2)&&(card4v==card44v)&&(card4v!="6")) || ((count7==2)&&(card4v==card44v)&&(card4v!="7")) ||  ((count8==2)&&(card4v==card44v)&&(card4v!="8")) || ((count9==2)&&(card4v==card44v)&&(card4v!="9")) || ((count10==2)&&(card4v==card44v)&&(card4v!="10")) ||  ((count11==2)&&(card4v==card44v)&&(card4v!="J")) ||  ((count12==2)&&(card4v==card44v)&&(card4v!="Q")) || ((count13==2)&&(card4v==card44v)&&(card4v!="K")) )
    	{
    	
         	valueoftwopair=true;
    		twopair4=true;
    	
    	}	
    	
    		
    	
    	
    	
    	if( ((count1==2)&&(card5v==card55v)&&(card5v!="A")) || ((count2==2)&&(card5v==card55v)&&(card5v!="2")) || ((count1==3)&&(card5v==card55v)&&(card5v!="3")) || ((count1==4)&&(card5v==card55v)&&(card5v!="4"))  ||((count5==2)&&(card5v==card55v)&&(card5v!="5")) || ((count6==2)&&(card5v==card55v)&&(card5v!="6")) || ((count7==2)&&(card5v==card55v)&&(card5v!="7")) ||  ((count8==2)&&(card5v==card55v)&&(card5v!="8")) || ((count9==2)&&(card5v==card55v)&&(card5v!="9")) || ((count10==2)&&(card5v==card55v)&&(card5v!="10")) ||  ((count11==2)&&(card5v==card55v)&&(card5v!="J")) ||  ((count12==2)&&(card5v==card55v)&&(card5v!="Q")) || ((count13==2)&&(card5v==card55v)&&(card5v!="K")) )
    	{
    	
         	valueoftwopair=true;
    		twopair5=true;
    	
    	}	
    	
    	
    	
    	
    	
    	
    	if((count1==2)||(count2==2)||(count3==2)||(count4==2)||(count5==2)||(count6==2)||(count7==2)||(count8==2)||(count9==2)||(count10==2)||(count11==2)||(count12==2)||(count13==2))
    	{
    	
    				if( (card1v==play1v)||(card1v==play2v)||(card1v==play3v)||(card1v==play4v)||(card1v==play5v) ||((card11v==play1v)||(card11v==play2v)||(card11v==play3v)||(card11v==play4v)||(card11v==play5v))   &&(card1v!=card11v)  )
    			{
    				valueoftwopair=true;
    				twopair1=true;
    				
    			}
    	
    	}	
    	
    	
    	if((count1==2)||(count2==2)||(count3==2)||(count4==2)||(count5==2)||(count6==2)||(count7==2)||(count8==2)||(count9==2)||(count10==2)||(count11==2)||(count12==2)||(count13==2))
    	{
    	
    				if( (card2v==play1v)||(card2v==play2v)||(card2v==play3v)||(card2v==play4v)||(card2v==play5v) ||((card22v==play1v)||(card22v==play2v)||(card22v==play3v)||(card22v==play4v)||(card22v==play5v))   &&(card1v!=card11v)  )
    			{
    				valueoftwopair=true;
    				twopair2=true;
    				
    			}
    	
    	}
    	
    	
    	if((count1==2)||(count2==2)||(count3==2)||(count4==2)||(count5==2)||(count6==2)||(count7==2)||(count8==2)||(count9==2)||(count10==2)||(count11==2)||(count12==2)||(count13==2))
    	{
    	
    				if( (card3v==play1v)||(card3v==play2v)||(card3v==play3v)||(card3v==play4v)||(card3v==play5v) ||((card33v==play1v)||(card33v==play2v)||(card33v==play3v)||(card33v==play4v)||(card33v==play5v))   &&(card1v!=card11v)  )
    			{
    				valueoftwopair=true;
    				twopair3=true;
    				
    			}
    	
    	}
    	
    	
    	if((count1==2)||(count2==2)||(count3==2)||(count4==2)||(count5==2)||(count6==2)||(count7==2)||(count8==2)||(count9==2)||(count10==2)||(count11==2)||(count12==2)||(count13==2))
    	{
    	
    				if( (card4v==play1v)||(card4v==play2v)||(card4v==play3v)||(card4v==play4v)||(card4v==play5v) ||((card44v==play1v)||(card44v==play2v)||(card44v==play3v)||(card44v==play4v)||(card44v==play5v))   &&(card1v!=card11v)  )
    			{
    				valueoftwopair=true;
    				twopair4=true;
    				
    			}
    	
    	}
    	
    	if((count1==2)||(count2==2)||(count3==2)||(count4==2)||(count5==2)||(count6==2)||(count7==2)||(count8==2)||(count9==2)||(count10==2)||(count11==2)||(count12==2)||(count13==2))
    	{
    	
    				if( (card5v==play1v)||(card5v==play2v)||(card5v==play3v)||(card5v==play4v)||(card5v==play5v) ||((card55v==play1v)||(card55v==play2v)||(card55v==play3v)||(card55v==play4v)||(card55v==play5v))   &&(card1v!=card11v)  )
    			{
    				valueoftwopair=true;
    				twopair5=true;
    				
    			}
    	
    	}

    	
    	
    }





  



   	
    	
    	if( ((card1v==play1v)||(card1v==play2v)||(card1v==play3v)||(card1v==play4v)||(card1v==play5v))   &&((card11v==play1v)||(card11v==play2v)||(card11v==play3v)||(card11v==play4v)||(card11v==play5v))   &&(card1v!=card11v)  )
    	{
    		valueoftwopair=true;
    		twopair1=true;
    		
    	}
    	
    	
    	if( ((card2v==play1v)||(card2v==play2v)||(card2v==play3v)||(card2v==play4v)||(card2v==play5v))   &&((card22v==play1v)||(card22v==play2v)||(card22v==play3v)||(card22v==play4v)||(card22v==play5v))   &&(card2v!=card22v)  )
    	{
    		valueoftwopair=true;
    		twopair2=true;
    		
    	}
    	
    	
    	
    	if( ((card3v==play1v)||(card3v==play2v)||(card3v==play3v)||(card3v==play4v)||(card3v==play5v))   &&((card33v==play1v)||(card33v==play2v)||(card33v==play3v)||(card33v==play4v)||(card33v==play5v))   &&(card3v!=card33v)  )
    	{
    		valueoftwopair=true;
    		twopair3=true;
    		
    	}
    	
    	
    	if( ((card4v==play1v)||(card4v==play2v)||(card4v==play3v)||(card4v==play4v)||(card4v==play5v))   &&((card44v==play1v)||(card44v==play2v)||(card44v==play3v)||(card44v==play4v)||(card44v==play5v))   &&(card4v!=card44v)  )
    	{
    		valueoftwopair=true;
    		twopair4=true;
    		
    	}
    	
    	
    	
    	if( ((card5v==play1v)||(card5v==play2v)||(card5v==play3v)||(card5v==play4v)||(card5v==play5v))   &&((card55v==play1v)||(card55v==play2v)||(card55v==play3v)||(card55v==play4v)||(card55v==play5v))   &&(card5v!=card55v)  )
    	{
    		valueoftwopair=true;
    		twopair5=true;
    		
    	}
    	
    


    	
    	return valueoftwopair;
    	
    	
    }
    
    
    function checkfourofakind()
    {
    	
    	var valueoffourofakind=false;
    //	alert("reached here function 6");
     count1=0;
     count2=0;
     count3=0;
     count4=0;

     count5=0;
     count6=0;
     count7=0;
     count8=0;

     count9=0;
     count10=0;
     count11=0;
     count12=0;
     count13=0;




    checkcount();

   

    if(((count1==2)&&(card1v=="A")&&(card11v=="A"))||((count2==2)&&(card1v=="2")&&(card11v=="2"))||((count3==2)&&(card1v=="3")&&(card11v=="3"))||((count4==2)&&(card1v=="4")&&(card11v=="4"))||((count5==2)&&(card1v=="5")&&(card11v=="5"))||((count6==2)&&(card1v=="6")&&(card11v=="6"))||((count7==2)&&(card1v=="7")&&(card11v=="7"))||((count8==2)&&(card1v=="8")&&(card11v=="8"))||((count9==2)&&(card1v=="9")&&(card11v=="9"))||((count10==2)&&(card1v=="10")&&(card11v=="10"))||((count11==2)&&(card1v=="J")&&(card11v=="J"))||((count12==2)&&(card1v=="Q")&&(card11v=="Q"))||((count13==2)&&(card1v=="K")&&(card11v=="K")))
    {
    	     fourofakind1=true;
    		valueoffourofakind=true;
    	
    }



    if(((count1==2)&&(card2v=="A")&&(card22v=="A"))||((count2==2)&&(card2v=="2")&&(card22v=="2"))||((count3==2)&&(card2v=="3")&&(card22v=="3"))||((count4==2)&&(card2v=="4")&&(card22v=="4"))||((count5==2)&&(card2v=="5")&&(card22v=="5"))||((count6==2)&&(card2v=="6")&&(card22v=="6"))||((count7==2)&&(card2v=="7")&&(card22v=="7"))||((count8==2)&&(card2v=="8")&&(card22v=="8"))||((count9==2)&&(card2v=="9")&&(card22v=="9"))||((count10==2)&&(card2v=="10")&&(card22v=="10"))||((count11==2)&&(card2v=="J")&&(card22v=="J"))||((count12==2)&&(card2v=="Q")&&(card22v=="Q"))||((count13==2)&&(card2v=="K")&&(card22v=="K")))
    {
    	     fourofakind2=true;
    		valueoffourofakind=true;
    	
    	
    }



    if(((count1==2)&&(card3v=="A")&&(card33v=="A"))||((count2==2)&&(card3v=="2")&&(card33v=="2"))||((count3==2)&&(card3v=="3")&&(card33v=="3"))||((count4==2)&&(card3v=="4")&&(card33v=="4"))||((count5==2)&&(card3v=="5")&&(card33v=="5"))||((count6==2)&&(card3v=="6")&&(card33v=="6"))||((count7==2)&&(card3v=="7")&&(card33v=="7"))||((count8==2)&&(card3v=="8")&&(card33v=="8"))||((count9==2)&&(card3v=="9")&&(card33v=="9"))||((count10==2)&&(card3v=="10")&&(card33v=="10"))||((count11==2)&&(card3v=="J")&&(card33v=="J"))||((count12==2)&&(card3v=="Q")&&(card33v=="Q"))||((count13==2)&&(card3v=="K")&&(card33v=="K")))
    {
    	     fourofakind3=true;
    		valueoffourofakind=true;
    	
    	
    }


    if( ( (count1==2)&&(card4v=="A")&&(card44v=="A"))||((count2==2)&&(card4v=="2")&&(card44v=="2"))||((count3==2)&&(card4v=="3")&&(card44v=="3"))||((count4==2)&&(card4v=="4")&&(card44v=="4"))||((count5==2)&&(card4v=="5")&&(card44v=="5"))||((count6==2)&&(card4v=="6")&&(card44v=="6"))||((count7==2)&&(card4v=="7")&&(card44v=="7"))||((count8==2)&&(card4v=="8")&&(card44v=="8"))||((count9==2)&&(card4v=="9")&&(card44v=="9"))||((count10==2)&&(card4v=="10")&&(card44v=="10"))||((count11==2)&&(card4v=="J")&&(card44v=="J"))||((count12==2)&&(card4v=="Q")&&(card44v=="Q"))||((count13==2)&&(card4v=="K")&&(card44v=="K")))
    {
    	     fourofakind4=true;
    		valueoffourofakind=true;
    	
    	
    }


    if( (((count1==2)&&(card5v=="A")&&(card55v=="A")))||(((count2==2)&&(card5v=="2")&&(card55v=="2")))||(((count3==2)&&(card5v=="3")&&(card55v=="3")))||(((count4==2)&&(card5v=="4")&&(card55v=="4")))||(((count5==2)&&(card5v=="5")&&(card55v=="5")))||(((count6==2)&&(card5v=="6")&&(card55v=="6")))||(((count7==2)&&(card5v=="7")&&(card55v=="7")))||(((count8==2)&&(card5v=="8")&&(card55v=="8")))||(((count9==2)&&(card5v=="9")&&(card55v=="9")))||(((count10==2)&&(card5v=="10")&&(card55v=="10")))||(((count11==2)&&(card5v=="J")&&(card55v=="J")))||(((count12==2)&&(card5v=="Q")&&(card55v=="Q")))||(((count13==2)&&(card5v=="K")&&(card55v=="K"))))
    {
    	
    	//alert("reached here 676");
    	     fourofakind5=true;
    		valueoffourofakind=true;
    	
    	
    }




    if(  (count1==3)&&((card1v=="A")||(card11v=="A"))|| (count2==3)&&((card1v=="2")||(card11v=="2")) || (count3==3)&&((card1v=="3")||(card11v=="3")) || (count4==3)&&((card1v=="4")||(card11v=="4")) || (count5==3)&&((card1v=="5")||(card11v=="5")) || (count6==3)&&((card1v=="6")||(card11v=="6")) || (count7==3)&&((card1v=="7")||(card11v=="7")) || (count8==3)&&((card1v=="8")||(card11v=="8")) || (count9==3)&&((card1v=="9")||(card11v=="9")) || (count10==3)&&((card1v=="10")||(card11v=="10")) || (count11==3)&&((card1v=="J")||(card11v=="J")) || (count12==3)&&((card1v=="Q")||(card11v=="Q")) || (count13==3)&&((card1v=="K")||(card11v=="K"))         )

    {

           fourofakind1=true;
    		valueoffourofakind=true;
    	
    }


    if(  (count1==3)&&((card1v=="A")||(card11v=="A"))|| (count2==3)&&((card1v=="2")||(card11v=="2")) || (count3==3)&&((card1v=="3")||(card11v=="3")) || (count4==3)&&((card1v=="4")||(card11v=="4")) || (count5==3)&&((card1v=="5")||(card11v=="5")) || (count6==3)&&((card1v=="6")||(card11v=="6")) || (count7==3)&&((card1v=="7")||(card11v=="7")) || (count8==3)&&((card1v=="8")||(card11v=="8")) || (count9==3)&&((card1v=="9")||(card11v=="9")) || (count10==3)&&((card1v=="10")||(card11v=="10")) || (count11==3)&&((card1v=="J")||(card11v=="J")) || (count12==3)&&((card1v=="Q")||(card11v=="Q")) || (count13==3)&&((card1v=="K")||(card11v=="K"))         )

    {

           fourofakind1=true;
    		valueoffourofakind=true;
    	
    }


    if(  (count1==3)&&((card2v=="A")||(card22v=="A"))|| (count2==3)&&((card2v=="2")||(card22v=="2")) || (count3==3)&&((card2v=="3")||(card22v=="3")) || (count4==3)&&((card2v=="4")||(card22v=="4")) || (count5==3)&&((card2v=="5")||(card22v=="5")) || (count6==3)&&((card2v=="6")||(card22v=="6")) || (count7==3)&&((card2v=="7")||(card22v=="7")) || (count8==3)&&((card2v=="8")||(card22v=="8")) || (count9==3)&&((card2v=="9")||(card22v=="9")) || (count10==3)&&((card2v=="10")||(card22v=="10")) || (count11==3)&&((card2v=="J")||(card22v=="J")) || (count12==3)&&((card2v=="Q")||(card22v=="Q")) || (count13==3)&&((card2v=="K")||(card22v=="K"))         )

    {

           fourofakind2=true;
    		valueoffourofakind=true;
    	
    }


    if(  (count1==3)&&((card3v=="A")||(card33v=="A"))|| (count2==3)&&((card3v=="2")||(card33v=="2")) || (count3==3)&&((card3v=="3")||(card33v=="3")) || (count4==3)&&((card3v=="4")||(card33v=="4")) || (count5==3)&&((card3v=="5")||(card33v=="5")) || (count6==3)&&((card3v=="6")||(card33v=="6")) || (count7==3)&&((card3v=="7")||(card33v=="7")) || (count8==3)&&((card3v=="8")||(card33v=="8")) || (count9==3)&&((card3v=="9")||(card33v=="9")) || (count10==3)&&((card3v=="10")||(card33v=="10")) || (count11==3)&&((card3v=="J")||(card33v=="J")) || (count12==3)&&((card3v=="Q")||(card33v=="Q")) || (count13==3)&&((card3v=="K")||(card33v=="K"))         )

    {

           fourofakind3=true;
    		valueoffourofakind=true;
    	
    }


    if(  (count1==3)&&((card4v=="A")||(card44v=="A"))|| (count2==3)&&((card4v=="2")||(card44v=="2")) || (count3==3)&&((card4v=="3")||(card44v=="3")) || (count4==3)&&((card4v=="4")||(card44v=="4")) || (count5==3)&&((card4v=="5")||(card44v=="5")) || (count6==3)&&((card4v=="6")||(card44v=="6")) || (count7==3)&&((card4v=="7")||(card44v=="7")) || (count8==3)&&((card4v=="8")||(card44v=="8")) || (count9==3)&&((card4v=="9")||(card44v=="9")) || (count10==3)&&((card4v=="10")||(card44v=="10")) || (count11==3)&&((card4v=="J")||(card44v=="J")) || (count12==3)&&((card4v=="Q")||(card44v=="Q")) || (count13==3)&&((card4v=="K")||(card44v=="K"))         )

    {

           fourofakind4=true;
    		valueoffourofakind=true;
    	
    }

    if(  (count1==3)&&((card5v=="A")||(card55v=="A"))|| (count2==3)&&((card5v=="2")||(card55v=="2")) || (count3==3)&&((card5v=="3")||(card55v=="3")) || (count4==3)&&((card5v=="4")||(card55v=="4")) || (count5==3)&&((card5v=="5")||(card55v=="5")) || (count6==3)&&((card5v=="6")||(card55v=="6")) || (count7==3)&&((card5v=="7")||(card55v=="7")) || (count8==3)&&((card5v=="8")||(card55v=="8")) || (count9==3)&&((card5v=="9")||(card55v=="9")) || (count10==3)&&((card5v=="10")||(card55v=="10")) || (count11==3)&&((card5v=="J")||(card55v=="J")) || (count12==3)&&((card5v=="Q")||(card55v=="Q")) || (count13==3)&&((card5v=="K")||(card55v=="K"))         )

    {

           fourofakind5=true;
    		valueoffourofakind=true;
    	
    }




    if((count1==4)||(count2==4)||(count3==4)||(count4==4)||(count5==4)||(count6==4)||(count7==4)||(count8==4)||(count9==4)||(count10==4)||(count11==4)||(count12==4)||(count13==4))

    {
    	
    	       fourofakind1=true; 
    		   fourofakind2=true; 
    		   fourofakind3=true; 
    		   fourofakind4=true; 
    	       fourofakind5=true; 
    		valueoffourofakind=true;
    }

    return valueoffourofakind;


    }

    
    
    function checkfullhouse()
    {
    	
    //alert("reachedfullhouse");	
    var valueofcheckfullhouse=false;
    
    var flagcount=0;
    
    count1=0;
     count2=0;
     count3=0;
     count4=0;

     count5=0;
     count6=0;
     count7=0;
     count8=0;

     count9=0;
     count10=0;
     count11=0;
     count12=0;
     count13=0;



    checkcount();



    if(card1v==card11v)
    {
    	
    	if(((count1==3)&&(card1v!="A") ) || ((count2==3)&&(card1v!="2") )||((count3==3)&&(card1v!="3") )||((count4==3)&&(card1v!="4"))||((count5==3)&&(card1v!="5"))||((count5==3)&&(card1v!="5"))||((count6==3)&&(card1v!="6"))||((count7==3)&&(card1v!="7"))||((count8==3)&&(card1v!="8"))||((count9==3)&&(card1v!="9"))||((count10==3)&&(card1v!="10"))||((count11==3)&&(card1v!="J"))||((count12==3)&&(card1v!="Q"))||((count13==3)&&(card1v!="K")) )
    	{
         
           fullhouse1=true;	 
    	   valueofcheckfullhouse=true;

    	}	

    	
    	
    }




    if(card2v==card22v)
    {
    	
    	if(((count1==3)&&(card2v!="A") ) || ((count2==3)&&(card2v!="2") )||((count3==3)&&(card2v!="3") )||((count4==3)&&(card2v!="4"))||((count5==3)&&(card2v!="5"))||((count5==3)&&(card2v!="5"))||((count6==3)&&(card2v!="6"))||((count7==3)&&(card2v!="7"))||((count8==3)&&(card2v!="8"))||((count9==3)&&(card2v!="9"))||((count10==3)&&(card2v!="10"))||((count11==3)&&(card2v!="J"))||((count12==3)&&(card2v!="Q"))||((count13==3)&&(card2v!="K")) )
    	{
         
           fullhouse2=true;	 
    	   valueofcheckfullhouse=true;

    	}	

    	
    	
    }



    if(card3v==card33v)
    {
    	
    	if(((count1==3)&&(card3v!="A") ) || ((count2==3)&&(card3v!="2") )||((count3==3)&&(card3v!="3") )||((count4==3)&&(card3v!="4"))||((count5==3)&&(card3v!="5"))||((count5==3)&&(card3v!="5"))||((count6==3)&&(card3v!="6"))||((count7==3)&&(card3v!="7"))||((count8==3)&&(card3v!="8"))||((count9==3)&&(card3v!="9"))||((count10==3)&&(card3v!="10"))||((count11==3)&&(card3v!="J"))||((count12==3)&&(card3v!="Q"))||((count13==3)&&(card3v!="K")) )
    	{
         
           fullhouse3=true;	 
    	   valueofcheckfullhouse=true;

    	}	

    	
    	
    }




    if(card4v==card44v)
    {
    	
    	if(((count1==3)&&(card4v!="A") ) || ((count2==3)&&(card4v!="2") )||((count3==3)&&(card4v!="3") )||((count4==3)&&(card4v!="4"))||((count5==3)&&(card4v!="5"))||((count5==3)&&(card4v!="5"))||((count6==3)&&(card4v!="6"))||((count7==3)&&(card4v!="7"))||((count8==3)&&(card4v!="8"))||((count9==3)&&(card4v!="9"))||((count10==3)&&(card4v!="10"))||((count11==3)&&(card4v!="J"))||((count12==3)&&(card4v!="Q"))||((count13==3)&&(card4v!="K")) )
    	{
         
           fullhouse4=true;	 
    	   valueofcheckfullhouse=true;

    	}	

    	
    	
    }



    if(card5v==card55v)
    {
    	
    	if(((count1==3)&&(card5v!="A") ) || ((count2==3)&&(card5v!="2") )||((count3==3)&&(card5v!="3") )||((count4==3)&&(card5v!="4"))||((count5==3)&&(card5v!="5"))||((count5==3)&&(card5v!="5"))||((count6==3)&&(card5v!="6"))||((count7==3)&&(card5v!="7"))||((count8==3)&&(card5v!="8"))||((count9==3)&&(card5v!="9"))||((count10==3)&&(card5v!="10"))||((count11==3)&&(card5v!="J"))||((count12==3)&&(card5v!="Q"))||((count13==3)&&(card5v!="K")) )
    	{
         
           fullhouse5=true;	 
    	   valueofcheckfullhouse=true;

    	}	

    	
    	
    }
    
    
    /////////
    
    
     if((count1==2)||(count2==2)||(count3==2)||(count4==2)||(count5==2)||(count6==2)||(count7==2)||(count8==2)||(count9==2)||(count10==2)||(count11==2)||(count12==2)||(count13==2))
    {
    	 
     if(card1v==card11v)
    {
    	
    	

     	if( (card1v==play1v) || (card1v==play2v) ||(card1v==play3v)||(card1v==play4v)||(card1v==play5v) )  
     	{
     		 fullhouse1=true;	 
     	   valueofcheckfullhouse=true;
     		
     	 }
    	
    	
       }
    
    }
    
    
     if((count1==2)||(count2==2)||(count3==2)||(count4==2)||(count5==2)||(count6==2)||(count7==2)||(count8==2)||(count9==2)||(count10==2)||(count11==2)||(count12==2)||(count13==2))
     {
     	 
      if(card2v==card22v)
     {
     	
     	

      	if( (card2v==play1v) || (card2v==play2v) ||(card2v==play3v)||(card2v==play4v)||(card2v==play5v) )  
      	{
      		 fullhouse2=true;	 
      	   valueofcheckfullhouse=true;
      		
      	 }
     	
     	
        }
     
     }
    
    
    
     if((count1==2)||(count2==2)||(count3==2)||(count4==2)||(count5==2)||(count6==2)||(count7==2)||(count8==2)||(count9==2)||(count10==2)||(count11==2)||(count12==2)||(count13==2))
     {
     	 
      if(card3v==card33v)
     {
     	
     	

      	if( (card3v==play1v) || (card3v==play2v) ||(card3v==play3v)||(card3v==play4v)||(card3v==play5v) )  
      	{
      		 fullhouse3=true;	 
      	   valueofcheckfullhouse=true;
      		
      	 }
     	
     	
        }
     
     }
    
    
    
     if((count1==2)||(count2==2)||(count3==2)||(count4==2)||(count5==2)||(count6==2)||(count7==2)||(count8==2)||(count9==2)||(count10==2)||(count11==2)||(count12==2)||(count13==2))
     {
     	 
      if(card4v==card44v)
     {
     	
     	

      	if( (card4v==play1v) || (card4v==play2v) ||(card4v==play3v)||(card4v==play4v)||(card4v==play5v) )  
      	{
      		 fullhouse4=true;	 
      	   valueofcheckfullhouse=true;
      		
      	 }
     	
     	
        }
     
     }
    
    
    
    
     if((count1==2)||(count2==2)||(count3==2)||(count4==2)||(count5==2)||(count6==2)||(count7==2)||(count8==2)||(count9==2)||(count10==2)||(count11==2)||(count12==2)||(count13==2))
     {
     	 
      if(card5v==card55v)
     {
     	
     	

      	if( (card5v==play1v) || (card5v==play2v) ||(card5v==play3v)||(card5v==play4v)||(card5v==play5v) )  
      	{
      		 fullhouse5=true;	 
      	   valueofcheckfullhouse=true;
      		
      	 }
     	
     	
        }
     
     }
    
    
    
    
    



    if((count1==3)||(count2==3)||(count3==3)||(count4==3)||(count5==3)||(count6==3)||(count7==3)||(count8==3)||(count9==3)||(count10==3)||(count11==3)||(count12==3)||(count13==3))
    {
    	
    	
    	if(( (card1v==play1v)||(card1v==play2v)||(card1v==play3v)||(card1v==play4v)||(card1v==play5v)) || (((card11v==play1v)||(card11v==play2v)||(card11v==play3v)||(card11v==play4v)||(card11v==play5v)) )  &&(card1v!=card11v)  )
    	{
    		 fullhouse1=true;	 
    	   valueofcheckfullhouse=true;
    		
    	 }
    	
      }	
    	


    if((count1==3)||(count2==3)||(count3==3)||(count4==3)||(count5==3)||(count6==3)||(count7==3)||(count8==3)||(count9==3)||(count10==3)||(count11==3)||(count12==3)||(count13==3))
    {
    	

    	if( ((card2v==play1v)||(card2v==play2v)||(card2v==play3v)||(card2v==play4v)||(card2v==play5v))  ||(((card22v==play1v)||(card22v==play2v)||(card22v==play3v)||(card22v==play4v)||(card22v==play5v)))   &&(card2v!=card22v)  )
    	{
    		 fullhouse2=true;	 
    	   valueofcheckfullhouse=true;
    		
    	}	

    	
      }	

    	
    	
    	
    	
    if((count1==3)||(count2==3)||(count3==3)||(count4==3)||(count5==3)||(count6==3)||(count7==3)||(count8==3)||(count9==3)||(count10==3)||(count11==3)||(count12==3)||(count13==3))
    {
    	
    if( ((card3v==play1v)||(card3v==play2v)||(card3v==play3v)||(card3v==play4v)||(card3v==play5v)) || (((card33v==play1v)||(card33v==play2v)||(card33v==play3v)||(card33v==play4v)||(card33v==play5v)))   &&(card3v!=card33v)  )
    	{
    		 fullhouse3=true;	 
    	   valueofcheckfullhouse=true;
    		
    	}

    	
      }	

    	
    	
    		
    if((count1==3)||(count2==3)||(count3==3)||(count4==3)||(count5==3)||(count6==3)||(count7==3)||(count8==3)||(count9==3)||(count10==3)||(count11==3)||(count12==3)||(count13==3))
    {
    	
    if( ((card4v==play1v)||(card4v==play2v)||(card4v==play3v)||(card4v==play4v)||(card4v==play5v) )||(((card44v==play1v)||(card44v==play2v)||(card44v==play3v)||(card44v==play4v)||(card44v==play5v)))   &&(card4v!=card44v)  )
    	{
    		 fullhouse4=true;	 
    	   valueofcheckfullhouse=true;
    		
    	}

    	
      }	

    		
    if((count1==3)||(count2==3)||(count3==3)||(count4==3)||(count5==3)||(count6==3)||(count7==3)||(count8==3)||(count9==3)||(count10==3)||(count11==3)||(count12==3)||(count13==3))
    {
    	

    	if(( (card5v==play1v)||(card5v==play2v)||(card5v==play3v)||(card5v==play4v)||(card5v==play5v) && ((card55v==play1v)||(card55v==play2v)||(card55v==play3v)||(card55v==play4v)||(card55v==play5v)))   &&(card5v!=card55v)  )
    	{
    		 fullhouse5=true;	 
    	     valueofcheckfullhouse=true;
    		
    	}

    	
      }	
      
      ////////
	
    
    
      
        if(  ((count1==2)&&((card1v=="A")||(card11v=="A"))&&(card1v!=card11v))|| ((count2==2)&&((card1v=="2")||(card11v=="2"))&&(card1v!=card11v)) || ((count3==3)&&((card1v=="3")||(card11v=="3"))&&(card1v!=card11v))|| ((count4==2)&&((card1v=="4")||(card11v=="4"))&&(card1v!=card11v))|| ((count5==2)&&((card1v=="5")||(card11v=="5"))&&(card1v!=card11v))|| ((count6==2)&&((card1v=="6")||(card11v=="6"))&&(card1v!=card11v))|| ((count7==2)&&((card1v=="7")||(card11v=="7"))&&(card1v!=card11v))|| ((count8==2)&&((card1v=="8")||(card11v=="8"))&&(card1v!=card11v))|| ((count9==2)&&((card1v=="9")||(card11v=="9"))&&(card1v!=card11v))|| ((count10==2)&&((card1v=="10")||(card11v=="10"))&&(card1v!=card11v))|| ((card11v==2)&&((card1v=="J")||(card11v=="J"))&&(card1v!=card11v))|| ((count12==2)&&((card1v=="Q")||(card11v=="Q"))&&(card1v!=card11v))|| ((count13==2)&&((card1v=="K")||(card11v=="K"))&&(card1v!=card11v))   )	
    	
    	{   
    	
    	
    	if(( (card1v==play1v)||(card1v==play2v)||(card1v==play3v)||(card1v==play4v)||(card1v==play5v)) && (((card11v==play1v)||(card11v==play2v)||(card11v==play3v)||(card11v==play4v)||(card11v==play5v)) )  &&(card1v!=card11v)  )
    	{
    		 fullhouse1=true;	 
    	   valueofcheckfullhouse=true;
    		
    	 }
    		
    		
    		
    	}
		
      
      
        if(  ((count1==2)&&((card2v=="A")||(card22v=="A"))&&(card2v!=card22v))|| ((count2==2)&&((card2v=="2")||(card22v=="2"))&&(card2v!=card22v)) || ((count3==3)&&((card2v=="3")||(card22v=="3"))&&(card2v!=card22v))|| ((count4==2)&&((card2v=="4")||(card22v=="4"))&&(card2v!=card22v))|| ((count5==2)&&((card2v=="5")||(card22v=="5"))&&(card2v!=card22v))|| ((count6==2)&&((card2v=="6")||(card22v=="6"))&&(card2v!=card22v))|| ((count7==2)&&((card2v=="7")||(card22v=="7"))&&(card2v!=card22v))|| ((count8==2)&&((card2v=="8")||(card22v=="8"))&&(card2v!=card22v))|| ((count9==2)&&((card2v=="9")||(card22v=="9"))&&(card2v!=card22v))|| ((count10==2)&&((card2v=="10")||(card22v=="10"))&&(card2v!=card22v))|| ((card22v==2)&&((card2v=="J")||(card22v=="J"))&&(card2v!=card22v))|| ((count12==2)&&((card2v=="Q")||(card22v=="Q"))&&(card2v!=card22v))|| ((count13==2)&&((card2v=="K")||(card22v=="K"))&&(card2v!=card22v))   )	
        	
    	{   
    	
    	
    	if(( (card2v==play1v)||(card2v==play2v)||(card2v==play3v)||(card2v==play4v)||(card2v==play5v)) && (((card22v==play1v)||(card22v==play2v)||(card22v==play3v)||(card22v==play4v)||(card22v==play5v)) )  &&(card2v!=card22v)  )
    	{
    		 fullhouse2=true;	 
    	   valueofcheckfullhouse=true;
    		
    	 }
    		
    		
    		
    	}
        
        
        
        
        

        if(  ((count1==2)&&((card3v=="A")||(card33v=="A"))&&(card3v!=card33v))|| ((count2==2)&&((card3v=="2")||(card33v=="2"))&&(card3v!=card33v)) || ((count3==3)&&((card3v=="3")||(card33v=="3"))&&(card3v!=card33v))|| ((count4==2)&&((card3v=="4")||(card33v=="4"))&&(card3v!=card33v))|| ((count5==2)&&((card3v=="5")||(card33v=="5"))&&(card3v!=card33v))|| ((count6==2)&&((card3v=="6")||(card33v=="6"))&&(card3v!=card33v))|| ((count7==2)&&((card3v=="7")||(card33v=="7"))&&(card3v!=card33v))|| ((count8==2)&&((card3v=="8")||(card33v=="8"))&&(card3v!=card33v))|| ((count9==2)&&((card3v=="9")||(card33v=="9"))&&(card3v!=card33v))|| ((count10==2)&&((card3v=="10")||(card33v=="10"))&&(card3v!=card33v))|| ((card33v==2)&&((card3v=="J")||(card33v=="J"))&&(card3v!=card33v))|| ((count12==2)&&((card3v=="Q")||(card33v=="Q"))&&(card3v!=card33v))|| ((count13==2)&&((card3v=="K")||(card33v=="K"))&&(card3v!=card33v))   )	
          	
          	{   
          	
          	
          	if(( (card3v==play1v)||(card3v==play2v)||(card3v==play3v)||(card3v==play4v)||(card3v==play5v)) && (((card33v==play1v)||(card33v==play2v)||(card33v==play3v)||(card33v==play4v)||(card33v==play5v)) )  &&(card3v!=card33v)  )
          	{
          		 fullhouse3=true;	 
          	   valueofcheckfullhouse=true;
          		
          	 }
          		
          		
          		
          	}
      		
      
      
      
      
      
      

    
       if(  ((count1==2)&&((card4v=="A")||(card44v=="A"))&&(card4v!=card44v))|| ((count2==2)&&((card4v=="2")||(card44v=="2"))&&(card4v!=card44v)) || ((count3==3)&&((card4v=="3")||(card44v=="3"))&&(card4v!=card11v))|| ((count4==2)&&((card4v=="4")||(card44v=="4"))&&(card4v!=card44v))|| ((count5==2)&&((card4v=="5")||(card11v=="5"))&&(card4v!=card44v))|| ((count6==2)&&((card4v=="6")||(card44v=="6"))&&(card4v!=card44v))|| ((count7==2)&&((card4v=="7")||(card44v=="7"))&&(card4v!=card44v))|| ((count8==2)&&((card4v=="8")||(card44v=="8"))&&(card4v!=card44v))|| ((count9==2)&&((card4v=="9")||(card44v=="9"))&&(card4v!=card44v))|| ((count10==2)&&((card4v=="10")||(card44v=="10"))&&(card4v!=card44v))|| ((card44v==2)&&((card4v=="J")||(card44v=="J"))&&(card4v!=card44v))|| ((count12==2)&&((card4v=="Q")||(card44v=="Q"))&&(card4v!=card44v))|| ((count13==2)&&((card4v=="K")||(card44v=="K"))&&(card4v!=card44v))   )	
    	
    	{   
    	
    	
	    	if(( (card4v==play1v)||(card4v==play2v)||(card4v==play3v)||(card4v==play4v)||(card4v==play5v)) && (((card44v==play1v)||(card44v==play2v)||(card44v==play3v)||(card44v==play4v)||(card11v==play5v)) )  &&(card4v!=card44v)  )
	    	{
	    		 fullhouse4=true;	 
	    	   valueofcheckfullhouse=true;
	    		
	    	 }
    		
    		
    		
    	}
 
    
    

       
		
   	
       if(  ((count1==2)&&((card5v=="A")||(card55v=="A"))&&(card5v!=card55v))|| ((count2==2)&&((card5v=="2")||(card55v=="2"))&&(card5v!=card55v)) || ((count3==3)&&((card5v=="3")||(card55v=="3"))&&(card5v!=card55v))|| ((count4==2)&&((card5v=="4")||(card55v=="4"))&&(card5v!=card55v))|| ((count5==2)&&((card5v=="5")||(card55v=="5"))&&(card5v!=card55v))|| ((count6==2)&&((card5v=="6")||(card55v=="6"))&&(card5v!=card55v))|| ((count7==2)&&((card5v=="7")||(card55v=="7"))&&(card5v!=card55v))|| ((count8==2)&&((card5v=="8")||(card55v=="8"))&&(card5v!=card55v))|| ((count9==2)&&((card5v=="9")||(card55v=="9"))&&(card5v!=card55v))|| ((count10==2)&&((card5v=="10")||(card55v=="10"))&&(card5v!=card55v))|| ((card55v==2)&&((card5v=="J")||(card55v=="J"))&&(card5v!=card55v))|| ((count12==2)&&((card5v=="Q")||(card55v=="Q"))&&(card5v!=card55v))|| ((count13==2)&&((card5v=="K")||(card55v=="K"))&&(card5v!=card55v))   )	
       	
       	{   
       	
       	
       	if(( (card5v==play1v)||(card5v==play2v)||(card5v==play3v)||(card5v==play4v)||(card5v==play5v)) && (((card55v==play1v)||(card55v==play2v)||(card55v==play3v)||(card55v==play4v)||(card55v==play5v)) )  &&(card5v!=card55v)  )
       	{
       		 fullhouse5=true;	 
       	   valueofcheckfullhouse=true;
       		
       	 }
       		
       		
       		
       	}
       
       
       
       
       
       if(count1==2)
    	   {
    	      flagcount++;
    	   
    	   }
       
       if(count2==2)
	   {
	      flagcount++;
	   
	   }
   
       
       if(count3==2)
	   {
	      flagcount++;
	   
	   }
   
       
       if(count4==2)
	   {
	      flagcount++;
	   
	   }
   
       
       if(count5==2)
	   {
	      flagcount++;
	   
	   }
   
       
       if(count6==2)
	   {
	      flagcount++;
	   
	   }
   
       
       if(count7==2)
	   {
	      flagcount++;
	   
	   }
   
       
       if(count8==2)
	   {
	      flagcount++;
	   
	   }
   
       
       if(count9==2)
	   {
	      flagcount++;
	   
	   }
   
       
       if(count10==2)
	   {
	      flagcount++;
	   
	   }
   
       
       if(count11==2)
	   {
	      flagcount++;
	   
	   }
   
       
       if(count12==2)
	   {
	      flagcount++;
	   
	   }
   
       
       if(count13==2)
	   {
	      flagcount++;
	   
	   }
   
       
       
       alert(flagcount);
       
       
     
      if(flagcount==2)
   
    {	  
       
       
       if(  ((count1==2)&&((card1v=="A")||(card11v=="A"))&&(card1v!=card11v))|| ((count2==2)&&((card1v=="2")||(card11v=="2"))&&(card1v!=card11v)) || ((count3==3)&&((card1v=="3")||(card11v=="3"))&&(card1v!=card11v))|| ((count4==2)&&((card1v=="4")||(card11v=="4"))&&(card1v!=card11v))|| ((count5==2)&&((card1v=="5")||(card11v=="5"))&&(card1v!=card11v))|| ((count6==2)&&((card1v=="6")||(card11v=="6"))&&(card1v!=card11v))|| ((count7==2)&&((card1v=="7")||(card11v=="7"))&&(card1v!=card11v))|| ((count8==2)&&((card1v=="8")||(card11v=="8"))&&(card1v!=card11v))|| ((count9==2)&&((card1v=="9")||(card11v=="9"))&&(card1v!=card11v))|| ((count10==2)&&((card1v=="10")||(card11v=="10"))&&(card1v!=card11v))|| ((card11v==2)&&((card1v=="J")||(card11v=="J"))&&(card1v!=card11v))|| ((count12==2)&&((card1v=="Q")||(card11v=="Q"))&&(card1v!=card11v))|| ((count13==2)&&((card1v=="K")||(card11v=="K"))&&(card1v!=card11v))   )	
       	
			   	{   
			   	
			   	
			   	if(( (card1v==play1v)||(card1v==play2v)||(card1v==play3v)||(card1v==play4v)||(card1v==play5v)) || (((card11v==play1v)||(card11v==play2v)||(card11v==play3v)||(card11v==play4v)||(card11v==play5v)) )  &&(card1v!=card11v)  )
			   	{
			   		 fullhouse1=true;	 
			   	   valueofcheckfullhouse=true;
			   		
			   	 }
   		
   		
   		
   	}
		
     
     
       if(  ((count1==2)&&((card2v=="A")||(card22v=="A"))&&(card2v!=card22v))|| ((count2==2)&&((card2v=="2")||(card22v=="2"))&&(card2v!=card22v)) || ((count3==3)&&((card2v=="3")||(card22v=="3"))&&(card2v!=card22v))|| ((count4==2)&&((card2v=="4")||(card22v=="4"))&&(card2v!=card22v))|| ((count5==2)&&((card2v=="5")||(card22v=="5"))&&(card2v!=card22v))|| ((count6==2)&&((card2v=="6")||(card22v=="6"))&&(card2v!=card22v))|| ((count7==2)&&((card2v=="7")||(card22v=="7"))&&(card2v!=card22v))|| ((count8==2)&&((card2v=="8")||(card22v=="8"))&&(card2v!=card22v))|| ((count9==2)&&((card2v=="9")||(card22v=="9"))&&(card2v!=card22v))|| ((count10==2)&&((card2v=="10")||(card22v=="10"))&&(card2v!=card22v))|| ((card22v==2)&&((card2v=="J")||(card22v=="J"))&&(card2v!=card22v))|| ((count12==2)&&((card2v=="Q")||(card22v=="Q"))&&(card2v!=card22v))|| ((count13==2)&&((card2v=="K")||(card22v=="K"))&&(card2v!=card22v))   )	
       	
   	{   
   	
   	
		   	if(( (card2v==play1v)||(card2v==play2v)||(card2v==play3v)||(card2v==play4v)||(card2v==play5v)) || (((card22v==play1v)||(card22v==play2v)||(card22v==play3v)||(card22v==play4v)||(card22v==play5v)) )  &&(card2v!=card22v)  )
		   	{
		   		 fullhouse2=true;	 
		   	   valueofcheckfullhouse=true;
		   		
		   	 }
		   		
   		
   		
   	}
       
       
       
       
       

       if(  ((count1==2)&&((card3v=="A")||(card33v=="A"))&&(card3v!=card33v))|| ((count2==2)&&((card3v=="2")||(card33v=="2"))&&(card3v!=card33v)) || ((count3==3)&&((card3v=="3")||(card33v=="3"))&&(card3v!=card33v))|| ((count4==2)&&((card3v=="4")||(card33v=="4"))&&(card3v!=card33v))|| ((count5==2)&&((card3v=="5")||(card33v=="5"))&&(card3v!=card33v))|| ((count6==2)&&((card3v=="6")||(card33v=="6"))&&(card3v!=card33v))|| ((count7==2)&&((card3v=="7")||(card33v=="7"))&&(card3v!=card33v))|| ((count8==2)&&((card3v=="8")||(card33v=="8"))&&(card3v!=card33v))|| ((count9==2)&&((card3v=="9")||(card33v=="9"))&&(card3v!=card33v))|| ((count10==2)&&((card3v=="10")||(card33v=="10"))&&(card3v!=card33v))|| ((card33v==2)&&((card3v=="J")||(card33v=="J"))&&(card3v!=card33v))|| ((count12==2)&&((card3v=="Q")||(card33v=="Q"))&&(card3v!=card33v))|| ((count13==2)&&((card3v=="K")||(card33v=="K"))&&(card3v!=card33v))   )	
         	
         	{   
         	
		         	
		         	if(( (card3v==play1v)||(card3v==play2v)||(card3v==play3v)||(card3v==play4v)||(card3v==play5v)) || (((card33v==play1v)||(card33v==play2v)||(card33v==play3v)||(card33v==play4v)||(card33v==play5v)) )  &&(card3v!=card33v)  )
		         	{
		         		 fullhouse3=true;	 
		         	   valueofcheckfullhouse=true;
		         		
		         	 }
		         		
         		
         		
         	}
     		
     
     
     
     
     
     

   
      if(  ((count1==2)&&((card4v=="A")||(card44v=="A"))&&(card4v!=card44v))|| ((count2==2)&&((card4v=="2")||(card44v=="2"))&&(card4v!=card44v)) || ((count3==3)&&((card4v=="3")||(card44v=="3"))&&(card4v!=card11v))|| ((count4==2)&&((card4v=="4")||(card44v=="4"))&&(card4v!=card44v))|| ((count5==2)&&((card4v=="5")||(card11v=="5"))&&(card4v!=card44v))|| ((count6==2)&&((card4v=="6")||(card44v=="6"))&&(card4v!=card44v))|| ((count7==2)&&((card4v=="7")||(card44v=="7"))&&(card4v!=card44v))|| ((count8==2)&&((card4v=="8")||(card44v=="8"))&&(card4v!=card44v))|| ((count9==2)&&((card4v=="9")||(card44v=="9"))&&(card4v!=card44v))|| ((count10==2)&&((card4v=="10")||(card44v=="10"))&&(card4v!=card44v))|| ((card44v==2)&&((card4v=="J")||(card44v=="J"))&&(card4v!=card44v))|| ((count12==2)&&((card4v=="Q")||(card44v=="Q"))&&(card4v!=card44v))|| ((count13==2)&&((card4v=="K")||(card44v=="K"))&&(card4v!=card44v))   )	
   	
   	{   
   	
   	
	    	if(( (card4v==play1v)||(card4v==play2v)||(card4v==play3v)||(card4v==play4v)||(card4v==play5v)) || (((card44v==play1v)||(card44v==play2v)||(card44v==play3v)||(card44v==play4v)||(card11v==play5v)) )  &&(card4v!=card44v)  )
	    	{
	    		 fullhouse4=true;	 
	    	   valueofcheckfullhouse=true;
	    		
	    	 }
   		
   		
   		
   	}

   
   

      
		
  	
      if(  ((count1==2)&&((card5v=="A")||(card55v=="A"))&&(card5v!=card55v))|| ((count2==2)&&((card5v=="2")||(card55v=="2"))&&(card5v!=card55v)) || ((count3==3)&&((card5v=="3")||(card55v=="3"))&&(card5v!=card55v))|| ((count4==2)&&((card5v=="4")||(card55v=="4"))&&(card5v!=card55v))|| ((count5==2)&&((card5v=="5")||(card55v=="5"))&&(card5v!=card55v))|| ((count6==2)&&((card5v=="6")||(card55v=="6"))&&(card5v!=card55v))|| ((count7==2)&&((card5v=="7")||(card55v=="7"))&&(card5v!=card55v))|| ((count8==2)&&((card5v=="8")||(card55v=="8"))&&(card5v!=card55v))|| ((count9==2)&&((card5v=="9")||(card55v=="9"))&&(card5v!=card55v))|| ((count10==2)&&((card5v=="10")||(card55v=="10"))&&(card5v!=card55v))|| ((card55v==2)&&((card5v=="J")||(card55v=="J"))&&(card5v!=card55v))|| ((count12==2)&&((card5v=="Q")||(card55v=="Q"))&&(card5v!=card55v))|| ((count13==2)&&((card5v=="K")||(card55v=="K"))&&(card5v!=card55v))   )	
      	
      	{   
      	
      	
      	if(( (card5v==play1v)||(card5v==play2v)||(card5v==play3v)||(card5v==play4v)||(card5v==play5v)) || (((card55v==play1v)||(card55v==play2v)||(card55v==play3v)||(card55v==play4v)||(card55v==play5v)) )  &&(card5v!=card55v)  )
      	{
      		 fullhouse5=true;	 
      	   valueofcheckfullhouse=true;
      		
      	 }
      		
      		
      		
      	}
      
       
       
       
    }  
       
       
      
      
      
    return valueofcheckfullhouse;

    }

   
    function checkpair()
    {
    	
    	var valueofcheckpair=false;
    	
    	count1=0;
     count2=0;
     count3=0;
     count4=0;

     count5=0;
     count6=0;
     count7=0;
     count8=0;

     count9=0;
     count10=0;
     count11=0;
     count12=0;
     count13=0;



    checkcount();
    	
    	
    	
    	if((count1<2)&&(count2<2)&&(count3<2)&&(count4<2)&&(count5<2)&&(count6<2)&&(count7<2)&&(count8<2)&&(count9<2)&&(count10<2)&&(count11<2)&&(count12<2)&&(count12<2))
    	{
    	

          if(card1v==card11v)
    	  {
    		  
    		  pair1=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    	  
    	 
    	  
    	   if(card2v==card22v)
    	  {
    		  
    		  pair2=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    	  
    	   if(card3v==card33v)
    	  {
    		  
    		  pair3=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    	  
    	   if(card4v==card44v)
    	  {
    		  
    		  pair4=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    	  
    	    if(card5v==card55v)
    	  {
    		  
    		  pair5=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  

		}
        ///
    	
    	
    	if((count1==2)||(count2==2)||(count3==2)&&(count4==2)||(count5==2)||(count6==2)||(count7==2)||(count8==2)||(count9==2)&&(count10==2)||(count11==2)||(count12==2)||(count12==2))
    	{
    	

          if(card1v!=card11v)
    	  {
    		  
    		  pair1=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    	  
    	 
    	  
    	   if(card2v!=card22v)
    	  {
    		  
    		  pair2=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    	  
    	   if(card3v!=card33v)
    	  {
    		  
    		  pair3=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    	  
    	   if(card4v!=card44v)
    	  {
    		  
    		  pair4=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    	  
    	    if(card5v!=card55v)
    	  {
    		  
    		  pair5=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  

  
		}
		
		
		
  
         if(((card1v==play1v)||(card1v==play2v)||(card1v==play3v)||(card1v==play4v)||(card1v==play5v))||((card11v==play1v)||(card11v==play2v)||(card11v==play3v)||(card11v==play4v)||(card11v==play5v)))

    	 {
    		 
    		   if(card1v!=card11v)
    	  {
    		  
    		  pair1=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    		 
    	 }




       
    	 
    	 
         if(((card2v==play1v)||(card2v==play2v)||(card2v==play3v)||(card2v==play4v)||(card2v==play5v))||((card22v==play1v)||(card22v==play2v)||(card22v==play3v)||(card22v==play4v)||(card22v==play5v)))

    	 {
    		 
    		   if(card2v!=card22v)
    	  {
    		  
    		  pair2=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    		 
    	 }
    	 
    	 
    	 
    	 
         if(((card3v==play1v)||(card3v==play2v)||(card3v==play3v)||(card3v==play4v)||(card3v==play5v))||((card33v==play1v)||(card33v==play2v)||(card33v==play3v)||(card33v==play4v)||(card33v==play5v)))

    	 {
    		 
    		   if(card3v!=card33v)
    	  {
    		  
    		  pair3=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    		 
    	 }
    	 
    	 
    	 
    	 
         if(((card4v==play1v)||(card4v==play2v)||(card4v==play3v)||(card4v==play4v)||(card4v==play5v))||((card44v==play1v)||(card44v==play2v)||(card44v==play3v)||(card44v==play4v)||(card44v==play5v)))

    	 {
    		 
    		   if(card4v!=card44v)
    	  {
    		  
    		  pair4=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    		 
    	 }




          if(((card5v==play1v)||(card5v==play2v)||(card5v==play3v)||(card5v==play4v)||(card5v==play5v))||((card55v==play1v)||(card55v==play2v)||(card55v==play3v)||(card55v==play4v)||(card55v==play5v)))

    	 {
    		 
    		   if(card5v!=card55v)
    	  {
    		  
    		  pair5=true;
    		  valueofcheckpair=true;
    		  
    	  }
    	  
    		 
    	 }
    	 


    	
    	
    	
    	
    	
    	return valueofcheckpair;
    	
    }
	
    
    
    
    
    function checkhighcard()
    {
    	
    	
    	var valueofhighcard=false;
    	
    	
    	var card1n;
    	var card11n;
    	var card2n;
    	var card22n;
    	var card3n;
    	var card33n;
    	var card4n;
    	var card44n;
    	var card5n;
    	var card55n;
    	
    	
    	
    	
    	
    	
    	if((card1v=="J")||(card1v=="Q")||(card1v=="K")||(card1v=="A"))
    	{
    	  if(card1v=="J")
    	  {
          card1n=11;
           
    	  }		  
    	  
    	  if(card1v=="Q")
    	  {
          card1n=12;
           
    	  }		
    	  
    	  if(card1v=="K")
    	  {
          card1n=13;
           
    	  }		
    	  
    	  
    	  if(card1v=="A")
    	  {
          card1n=14;
           
    	  }		
    	  
    		
    	}
    	
    	else
    	{
    		card1n=parseInt(card1v);
    	}
    	
    	
    	
    	if((card11v=="J")||(card11v=="Q")||(card11v=="K")||(card11v=="A"))
    	{
    	  if(card11v=="J")
    	  {
          card11n=11;
           
    	  }		  
    	  
    	  if(card11v=="Q")
    	  {
          card11n=12;
           
    	  }		
    	  
    	  if(card11v=="K")
    	  {
          card11n=13;
           
    	  }		
    	  
    	  
    	  if(card11v=="A")
    	  {
          card11n=14;
           
    	  }		
    	  
    		
    	}
    	
    	else
    	{
    		card11n=parseInt(card11v);
    	}




    if((card2v=="J")||(card2v=="Q")||(card2v=="K")||(card2v=="A"))
    	{
    	  if(card2v=="J")
    	  {
          card2n=11;
           
    	  }		  
    	  
    	  if(card2v=="Q")
    	  {
          card2n=12;
           
    	  }		
    	  
    	  if(card2v=="K")
    	  {
          card2n=13;
           
    	  }		
    	  
    	  
    	  if(card2v=="A")
    	  {
          card2n=14;
           
    	  }		
    	  
    		
    	}
    	
    	else
    	{
    		card2n=parseInt(card2v);
    	}




    if((card22v=="J")||(card22v=="Q")||(card22v=="K")||(card22v=="A"))
    	{
    	  if(card22v=="J")
    	  {
          card22n=11;
           
    	  }		  
    	  
    	  if(card22v=="Q")
    	  {
          card22n=12;
           
    	  }		
    	  
    	  if(card22v=="K")
    	  {
          card22n=13;
           
    	  }		
    	  
    	  
    	  if(card22v=="A")
    	  {
          card22n=14;
           
    	  }		
    	  
    		
    	}
    	
    	else
    	{
    		card22n=parseInt(card22v);
    	}



    if((card3v=="J")||(card3v=="Q")||(card3v=="K")||(card3v=="A"))
    	{
    	  if(card3v=="J")
    	  {
          card3n=11;
           
    	  }		  
    	  
    	  if(card3v=="Q")
    	  {
          card3n=12;
           
    	  }		
    	  
    	  if(card3v=="K")
    	  {
          card3n=13;
           
    	  }		
    	  
    	  
    	  if(card3v=="A")
    	  {
          card3n=14;
           
    	  }		
    	  
    		
    	}
    	
    	else
    	{
    		card3n=parseInt(card3v);
    	}



    if((card4v=="J")||(card4v=="Q")||(card4v=="K")||(card4v=="A"))
    	{
    	  if(card4v=="J")
    	  {
          card4n=11;
           
    	  }		  
    	  
    	  if(card4v=="Q")
    	  {
          card4n=12;
           
    	  }		
    	  
    	  if(card4v=="K")
    	  {
          card4n=13;
           
    	  }		
    	  
    	  
    	  if(card4v=="A")
    	  {
          card4n=14;
           
    	  }		
    	  
    		
    	}
    	
    	else
    	{
    		card4n=parseInt(card4v);
    	}



    if((card33v=="J")||(card33v=="Q")||(card33v=="K")||(card33v=="A"))
    	{
    	  if(card33v=="J")
    	  {
          card33n=11;
           
    	  }		  
    	  
    	  if(card33v=="Q")
    	  {
          card33n=12;
           
    	  }		
    	  
    	  if(card33v=="K")
    	  {
          card33n=13;
           
    	  }		
    	  
    	  
    	  if(card33v=="A")
    	  {
          card33n=14;
           
    	  }		
    	  
    		
    	}
    	
    	else
    	{
    		card33n=parseInt(card33v);
    	}



    if((card44v=="J")||(card44v=="Q")||(card44v=="K")||(card44v=="A"))
    	{
    	  if(card44v=="J")
    	  {
          card44n=11;
           
    	  }		  
    	  
    	  if(card44v=="Q")
    	  {
          card44n=12;
           
    	  }		
    	  
    	  if(card44v=="K")
    	  {
          card44n=13;
           
    	  }		
    	  
    	  
    	  if(card44v=="A")
    	  { 
          card44n=14;
           
    	  }		
    	  
    		
    	}
    	
    	else
    	{
    		card44n=parseInt(card44v);
    	}



    if((card5v=="J")||(card5v=="Q")||(card5v=="K")||(card5v=="A"))
    	{
    	  if(card5v=="J")
    	  {
          card5n=11;
           
    	  }		  
    	  
    	  if(card5v=="Q")
    	  {
          card5n=12;
           
    	  }		
    	  
    	  if(card5v=="K")
    	  {
          card5n=13;
           
    	  }		
    	  
    	  
    	  if(card5v=="A")
    	  {
          card5n=14;
           
    	  }		
    	  
    		
    	}
    	
    	else
    	{
    		card5n=parseInt(card5v);
    	}



    if((card55v=="J")||(card55v=="Q")||(card55v=="K")||(card55v=="A"))
    	{
    	  if(card55v=="J")
    	  {
          card55n=11;
           
    	  }		  
    	  
    	  if(card55v=="Q")
    	  {
          card55n=12;
           
    	  }		
    	  
    	  if(card55v=="K")
    	  {
          card55n=13;
           
    	  }		
    	  
    	  
    	  if(card55v=="A")
    	  {
          card55n=14;
           
    	  }		
    	  
    		
    	}
    	
    	else
    	{
    		card55n=parseInt(card55v);
    	}

    	
    	
    	  array1 = [card1n, card11n, card2n, card22n, card3n, card33n, card4n, card44n, card5n, card55n];
    	
    	
    	
    	array2=bubble_Sort(array1);
    	
    	
    	if((card1n==array2[9])||(card11n==array2[9]))
    	{
    		
    		highcard1=true;
    		valueofhighcard=true;
    		
    	}
    	
    	if((card2n==array2[9])||(card22n==array2[9]))
    	{
    		
    		highcard2=true;
    		valueofhighcard=true;
    		
    	}
    	
    	
    	
    	if((card3n==array2[9])||(card33n==array2[9]))
    	{
    		
    		highcard3=true;
    		valueofhighcard=true;
    		
    	}
    	
    	
    	
    	if((card4n==array2[9])||(card44n==array2[9]))
    	{
    		
    		highcard4=true;
    		valueofhighcard=true;
    		
    	}
    	
    	
    	
    	if((card5n==array2[9])||(card55n==array2[9]))
    	{
    		
    		highcard5=true;
    		valueofhighcard=true;
    		
    	}
    	
    	
    	
    	
    	return valueofhighcard;
    }


    
    
    function swap(arr, first_Index, second_Index)

    {
        var temp = arr[first_Index];
        arr[first_Index] = arr[second_Index];
        arr[second_Index] = temp;
    }


    function bubble_Sort(arr)
    
    {

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
    
    
    
    
    

    function checkroyalflush()
    {
    	var valueofroyalflush=false;
    	
    	
    	
    	
    	
    	
	var valueofflush=checkflush();
    	
    	
    	if(valueofflush==true)
    		{
    		
    		  var valueofstraight=checkstraight();
    		  
    		  
    		  if(valueofstraight==true)
    			  {
    			  
    			  
    			    valueofstraightflush=true;
    			   if((card1v=="A")||(card11v=="A")||(card2v=="A")||(card22v=="A")||(card3v=="A")||(card33v=="A")||(card4v=="A")||(card44v=="A")||(card5v=="A")||(card55v=="A")||(play1v=="A")||(play2v=="A")||(play3v=="A")||(play4v=="A")||(play5v=="A"))
    				   {
    				   
    				      valueofroyalflush=true;
    				   
    				   }
    			  
    			  }
    		
    		}
    	
    	
    	
    	
    	return valueofroyalflush;
    	
    }

    function checkstraightflush()
    {
    	var valueofstraightflush=false;
    	
    	
    	
    	
    	var valueofflush=checkflush();
    	
    	
    	if(valueofflush==true)
    		{
    		
    		  var valueofstraight=checkstraight();
    		  
    		  
    		  if(valueofstraight==true)
    			  {
    			  
    			  
    			  valueofstraightflush=true;
    			      
    			  
    			  }
    		
    		}
    	
    	
    	
    	return valueofstraightflush;
    	
    }



	function checkstraight()
	{
	
		
		
	//alert("reached here straight");	
		
	var valueofstraight=false;
	var valueofflush=checkflush();	
		
	
	//alert("value of flush");
	//alert(valueofflush);	
	
	
	var card1n=0;
	var card11n=0;
	var card2n=0;
	var card22n=0;
	var card3n=0;
	var card33n=0;
	var card4n=0;
	var card44n=0;
	var card5n=0;
	var card55n=0;
	var play1n=0;
	var play2n=0;
	var play3n=0;
	var play4n=0;
	var play5n=0;
	
	
	
	
	
	if((card1v=="J")||(card1v=="Q")||(card1v=="K")||(card1v=="A"))
	{
	  if(card1v=="J")
	  {
      card1n=11;
       
	  }		  
	  
	  if(card1v=="Q")
	  {
      card1n=12;
       
	  }		
	  
	  if(card1v=="K")
	  {
      card1n=13;
       
	  }		
	  
	  
	  if(card1v=="A")
	  {
      card1n=14;
       
	  }		
	  
		
	}
	
	else
	{
		card1n=parseInt(card1v);
	}
	
	
	
	if((card11v=="J")||(card11v=="Q")||(card11v=="K")||(card11v=="A"))
	{
	  if(card11v=="J")
	  {
      card11n=11;
       
	  }		  
	  
	  if(card11v=="Q")
	  {
      card11n=12;
       
	  }		
	  
	  if(card11v=="K")
	  {
      card11n=13;
       
	  }		
	  
	  
	  if(card11v=="A")
	  {
      card11n=14;
       
	  }		
	  
		
	}
	
	else
	{
		card11n=parseInt(card11v);
	}




if((card2v=="J")||(card2v=="Q")||(card2v=="K")||(card2v=="A"))
	{
	  if(card2v=="J")
	  {
      card2n=11;
       
	  }		  
	  
	  if(card2v=="Q")
	  {
      card2n=12;
       
	  }		
	  
	  if(card2v=="K")
	  {
      card2n=13;
       
	  }		
	  
	  
	  if(card2v=="A")
	  {
      card2n=14;
       
	  }		
	  
		
	}
	
	else
	{
		card2n=parseInt(card2v);
	}




if((card22v=="J")||(card22v=="Q")||(card22v=="K")||(card22v=="A"))
	{
	  if(card22v=="J")
	  {
      card22n=11;
       
	  }		  
	  
	  if(card22v=="Q")
	  {
      card22n=12;
       
	  }		
	  
	  if(card22v=="K")
	  {
      card22n=13;
       
	  }		
	  
	  
	  if(card22v=="A")
	  {
      card22n=14;
       
	  }		
	  
		
	}
	
	else
	{
		card22n=parseInt(card22v);
	}



if((card3v=="J")||(card3v=="Q")||(card3v=="K")||(card3v=="A"))
	{
	  if(card3v=="J")
	  {
      card3n=11;
       
	  }		  
	  
	  if(card3v=="Q")
	  {
      card3n=12;
       
	  }		
	  
	  if(card3v=="K")
	  {
      card3n=13;
       
	  }		
	  
	  
	  if(card3v=="A")
	  {
      card3n=14;
       
	  }		
	  
		
	}
	
	else
	{
		card3n=parseInt(card3v);
	}



if((card4v=="J")||(card4v=="Q")||(card4v=="K")||(card4v=="A"))
	{
	  if(card4v=="J")
	  {
      card4n=11;
       
	  }		  
	  
	  if(card4v=="Q")
	  {
      card4n=12;
       
	  }		
	  
	  if(card4v=="K")
	  {
      card4n=13;
       
	  }		
	  
	  
	  if(card4v=="A")
	  {
      card4n=14;
       
	  }		
	  
		
	}
	
	else
	{
		card4n=parseInt(card4v);
	}



if((card33v=="J")||(card33v=="Q")||(card33v=="K")||(card33v=="A"))
	{
	  if(card33v=="J")
	  {
      card33n=11;
       
	  }		  
	  
	  if(card33v=="Q")
	  {
      card33n=12;
       
	  }		
	  
	  if(card33v=="K")
	  {
      card33n=13;
       
	  }		
	  
	  
	  if(card33v=="A")
	  {
      card33n=14;
       
	  }		
	  
		
	}
	
	else
	{
		card33n=parseInt(card33v);
	}



if((card44v=="J")||(card44v=="Q")||(card44v=="K")||(card44v=="A"))
	{
	  if(card44v=="J")
	  {
      card44n=11;
       
	  }		  
	  
	  if(card44v=="Q")
	  {
      card44n=12;
       
	  }		
	  
	  if(card44v=="K")
	  {
      card44n=13;
       
	  }		
	  
	  
	  if(card44v=="A")
	  {
      card44n=14;
       
	  }		
	  
		
	}
	
	else
	{
		card44n=parseInt(card44v);
	}



if((card5v=="J")||(card5v=="Q")||(card5v=="K")||(card5v=="A"))
	{
	  if(card5v=="J")
	  {
      card5n=11;
       
	  }		  
	  
	  if(card5v=="Q")
	  {
      card5n=12;
       
	  }		
	  
	  if(card5v=="K")
	  {
      card5n=13;
       
	  }		
	  
	  
	  if(card5v=="A")
	  {
      card5n=14;
       
	  }		
	  
		
	}
	
	else
	{
		card5n=parseInt(card5v);
	}



if((card55v=="J")||(card55v=="Q")||(card55v=="K")||(card55v=="A"))
	{
	  if(card55v=="J")
	  {
      card55n=11;
       
	  }		  
	  
	  if(card55v=="Q")
	  {
      card55n=12;
       
	  }		
	  
	  if(card55v=="K")
	  {
      card55n=13;
       
	  }		
	  
	  
	  if(card55v=="A")
	  {
      card55n=14;
       
	  }		
	  
		
	}
	
	else
	{
		card55n=parseInt(card55v);
	}




       
	   
	   
if((play1v=="J")||(play1v=="Q")||(play1v=="K")||(play1v=="A"))
	{
	  if(play1v=="J")
	  {
      play1n=11;
       
	  }		  
	  
	  if(play1v=="Q")
	  {
     play1n=12;
       
	  }		
	  
	  if(play1v=="K")
	  {
      play1n=13;
       
	  }		
	  
	  
	  if(play1v=="A")
	  {
      play1n=14;
       
	  }		
	  
		
	}
	
	else
	{
		play1n=parseInt(play1v);
	}






         if((play2v=="J")||(play2v=="Q")||(play2v=="K")||(play2v=="A"))
	{
	  if(play2v=="J")
	  {
      play2n=11;
       
	  }		  
	  
	  if(play2v=="Q")
	  {
     play2n=12;
       
	  }		
	  
	  if(play2v=="K")
	  {
      play2n=13;
       
	  }		
	  
	  
	  if(play2v=="A")
	  {
      play2n=14;
       
	  }		
	  
		
	}
	
	else
	{
		play2n=parseInt(play2v);
	}
	
	
	
	
	   if((play3v=="J")||(play3v=="Q")||(play3v=="K")||(play3v=="A"))
	{
	  if(play3v=="J")
	  {
      play3n=11;
       
	  }		  
	  
	  if(play3v=="Q")
	  {
     play3n=12;
       
	  }		
	  
	  if(play3v=="K")
	  {
      play3n=13;
       
	  }		
	  
	  
	  if(play3v=="A")
	  {
      play3n=14;
       
	  }		
	  
		
	}
	
	else
	{
		play3n=parseInt(play3v);
	}
	
	
	
	
	
	   if((play4v=="J")||(play4v=="Q")||(play4v=="K")||(play4v=="A"))
	{
	  if(play4v=="J")
	  {
      play4n=11;
       
	  }		  
	  
	  if(play4v=="Q")
	  {
     play4n=12;
       
	  }		
	  
	  if(play4v=="K")
	  {
      play4n=13;
       
	  }		
	  
	  
	  if(play4v=="A")
	  {
      play4n=14;
       
	  }		
	  
		
	}
	
	else
	{
		play4n=parseInt(play4v);
	}
	
	
	
	   if((play5v=="J")||(play5v=="Q")||(play5v=="K")||(play5v=="A"))
	{
	  if(play5v=="J")
	  {
      play5n=11;
       
	  }		  
	  
	  if(play5v=="Q")
	  {
     play5n=12;
       
	  }		
	  
	  if(play5v=="K")
	  {
      play5n=13;
       
	  }		
	  
	  
	  if(play5v=="A")
	  {
      play5n=14;
       
	  }		
	  
		
	}
	
	else
	{
		play5n=parseInt(play5v);
	}


     var arraycheck11=new Array();
	 var array11=new Array();
    var array111=new Array();
     arraycheck11 = [card1n,card11n,play1n,play2n,play3n,play4n,play5n];
	
	
	
	array11=bubble_Sort(arraycheck11);
	array111=getUnique(array11);
   //
	
	

    if((array111[0]+1)==array111[1])
	 {
	   
	    if((array111[1]+1)==array111[2])
		{
		
		
					if((array111[2]+1)==array111[3])
				{
				
				
				
						if(((array111[3]+1)==array111[4]&&(valueofflush==false)))  
							{
							
							
							 straight1=true;
							 valueofstraight=true;
														
							
							}
							
							
						
							
						if(((array111[3]+1)==array111[4]&&(valueofflush==true)))  
						{
						
						
						 straightflush1=true;
						 valueofstraight=true;
													
						
						}
							
				
				}
		
		}
	 
	 }
    
    
    
    //
    
    
   


///

       if((array111[1]+1)==array111[2])
	   {
	   
	         if((array111[2]+1)==array111[3])
	          {
	   
	                if((array111[3]+1)==array111[4])
	                  {
	   
	                        if(((array111[4]+1)==array111[5])&&(valueofflush==false))
	                          {
	   
	                             straight1=true;
							     valueofstraight=true;
	   
	   
	                          }
	                        
	                        
	                        if(((array111[4]+1)==array111[5])&&(valueofflush==true))
	                          {
	   
	                             straightflush1=true;
							     valueofstraight=true;
	   
	   
	                          }
	                        
	                        
	   
	   
	                  }

	   
	   
	         }

	   
	   
	   }
	   
	   
	   


      ////       
			 
			 
       if(array111[6]!=null)
      {
		
		    if((array111[2]+1)==array111[3])
	   {
	   
	         if((array111[3]+1)==array111[4])
	          {
	   
	                if((array111[4]+1)==array111[5])
	                  {
	   
	                        if(((array111[5]+1)==array111[6])&&(valueofflush==false))
	                          {
	   
	                            
								straight1=true;
							    valueofstraight=true;
	   
	   
	                          }
	                        
	                        
	                        
	                        
	                        
	                        
	                        
	                        
	                        if(((array111[5]+1)==array111[6])&&(valueofflush==true))
	                          {
	   
	                            
								straightflush1=true;
							    valueofstraight=true;
	   
	   
	                          }
	   
	   
	                  }

	   
	   
	         }

	   
	   
	   }	 
	   
	   
	   
	   if(array111[6]==14)
	   {
		   
		   if((array111[0]==2)&&(array111[1]==3)&&(array111[2]==4)&&(array111[3]==5)&&(valueofflush==false))
		   {
			   straight1=true;
			  valueofstraight=true;
			   
		   }
		   
		   
		   
		   if((array111[0]==2)&&(array111[1]==3)&&(array111[2]==4)&&(array111[3]==5)&&(valueofflush==true))
		   {
			   royalflush1=true;
			  valueofstraight=true;
			   
		   }
		   
		   
		   
	   }		   
		   
	   }
	   
	  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  
	  
	  //repeat for 2,3,4,5 cards
	  
	  ////////////////////////////////////////////////////////////
			 
			 
			 alert("here2");
			 
			 
	 var arraycheck22=new Array();
	 var array22=new Array();
     var array222=new Array();
	 
	 
     arraycheck22 = [card2n,card22n,play1n,play2n,play3n,play4n,play5n];
	
	
	
	array22=bubble_Sort(arraycheck22);
	
	
	
	array222=getUnique(array22);
   

    if((array222[0]+1)==array222[1])
	 {
	   
	    if((array222[1]+1)==array222[2])
		{
		
		
					if((array222[2]+1)==array222[3])
				{
				
				
				
						if(((array222[3]+1)==array222[4])&&(valueofflush==false))
							{
							
							
							 straight2=true;
							 valueofstraight=true;
														
							
							}
						
						
						
						
						if(((array222[3]+1)==array222[4])&&(valueofflush==true))
						{
						
						
						 straightflush2=true;
						 valueofstraight=true;
													
						
						}
						
						
						
						
						
				
				}
		
		}
	 
	 }



///

       if((array222[1]+1)==array222[2])
	   {
	   
	         if((array222[2]+1)==array222[3])
	          {
	   
	                if((array222[3]+1)==array222[4])
	                  {
	   
	                        if(((array222[4]+1)==array222[5])&&(valueofflush==false))
	                          {
	   
	                             straight2=true;
							     valueofstraight=true;
	   
	   
	                          }
	                        
	                        
	                        if(((array222[4]+1)==array222[5])&&(valueofflush==true))
	                          {
	   
	                             straightflush2=true;
							     valueofstraight=true;
	   
	   
	                          }
	                        
	                        
	                        
	   
	   
	                  }

	   
	   
	         }

	   
	   
	   }
	   
	   
	   


      ////       
			 
			 
       if(array222[6]!=null)		
{
		
		    if((array222[2]+1)==array222[3])
	   {
	   
	         if((array222[3]+1)==array222[4])
	          {
	   
	                if((array222[4]+1)==array222[5])
	                  {
	   
	                        if(((array222[5]+1)==array222[6])&&(valueofflush==false))
	                          {
	   
	                            
								straight2=true;
							    valueofstraight=true;
	   
	   
	                          }
	                        
	                        
	                        if(((array222[5]+1)==array222[6])&&(valueofflush==true))
	                          {
	   
	                            
								straightflush2=true;
							    valueofstraight=true;
	   
	   
	                          }
	                        
	                        
	   
	   
	                  }

	   
	   
	         }

	   
	   
	   }	 
	   
	   
	   
	   if(array222[6]==14)
	   {
		   
		   if((array222[0]==2)&&(array222[1]==3)&&(array222[2]==4)&&(array222[3]==5)&&(valueofflush==false))
		   {
			   straight2=true;
			  valueofstraight=true;
			   
		   }
		   
		   if((array222[0]==2)&&(array222[1]==3)&&(array222[2]==4)&&(array222[3]==5)&&(valueofflush==true))
		   {
			   royalflush2=true;
			  valueofstraight=true;
			   
		   }
		   
		   
		   
		   
		   
	   }
	   		 
			 
}			 
		//////////////////////////////////




      




     var arraycheck33=new Array();
	 var array33=new Array();
     var array333=new Array();
	  
     arraycheck33 = [card3n,card33n,play1n,play2n,play3n,play4n,play5n];
	
	
	
	array33=bubble_Sort(arraycheck33);
	array333=getUnique(array33);
   

    if((array333[0]+1)==array333[1])
	 {
	   
	    if((array333[1]+1)==array333[2])
		{
		
		
					if((array333[2]+1)==array333[3])
				{
				
				
				
						if(((array333[3]+1)==array333[4])&&(valueofflush==false))
							{
							
							
							 straight3=true;
							 valueofstraight=true;
														
							
							}
						
						
						
						
						

						if(((array333[3]+1)==array333[4])&&(valueofflush==true))
							{
							
							
							 straightflush3=true;
							 valueofstraight=true;
														
							
							}
						
						
						
						
						
				
				}
		
		}
	 
	 }



///

       if((array333[1]+1)==array333[2])
	   {
	   
	         if((array333[2]+1)==array333[3])
	          {
	   
	                if((array333[3]+1)==array333[4])
	                  {
	   
	                        if(((array333[4]+1)==array333[5])&&(valueofflush==false))
	                          {
	   
	                             straight3=true;
							     valueofstraight=true;
	   
	   
	                          }
	                        
	                        
	                        
	                        if(((array333[4]+1)==array333[5])&&(valueofflush==true))
	  	                          {
	  	   
	  	                             straightflush3=true;
	  							     valueofstraight=true;
	  	   
	  	   
	  	                          }
	   
	   
	                  }

	   
	   
	         }

	   
	   
	   }
	   
	   
	   
     

      ////       
			 
			 if(array333[6]!=null)
	{			 
		
         
		
		    if((array333[2]+1)==array333[3])
	   {
	   
	         if((array333[3]+1)==array333[4])
	          {
	   
	                if((array333[4]+1)==array333[5])
	                  {
	   
	                        if(((array333[5]+1)==array333[6])&&(valueofflush==false))
	                          {
	   
	                            
								straight3=true;
							    valueofstraight=true;
	   
	   
	                          }
	                        
	                        
	                        
	                        
	                        if(((array333[5]+1)==array333[6])&&(valueofflush==true))
	                          {
	   
	                            
								straightflush3=true;
							    valueofstraight=true;
	   
	   
	                          }
	   
	   
	                  }

	   
	   
	         }

	   
	   
	   }	 
	   
	   
	   
	   if(array333[6]==14)
	   {
		   
		   if((array333[0]==2)&&(array333[1]==3)&&(array333[2]==4)&&(array333[3]==5)&&(valueofflush==false))
		   {
			   straight3=true;
			  valueofstraight=true;
			   
		   }
		   
		   
		   
		   if((array333[0]==2)&&(array333[1]==3)&&(array333[2]==4)&&(array333[3]==5)&&(valueofflush==true))
		   {
			   royalflush3=true;
			  valueofstraight=true;
			   
		   }
		   
		   
		   
		   
		   
	   }
	   			
			 
	}		 
		//////////////////////////////////////////



          var arraycheck44=new Array();
	      var array44=new Array();
          var array444=new Array();
	      
	      
	      
     arraycheck44 = [card4n,card44n,play1n,play2n,play3n,play4n,play5n];
	
	
	
	array44=bubble_Sort(arraycheck44);
	array444=getUnique(array44);
   

    if((array444[0]+1)==array444[1])
	 {
	   
	    if((array444[1]+1)==array444[2])
		{
		
		
					if((array444[2]+1)==array444[3])
				{
				
				
				
						if(((array444[3]+1)==array444[4])&&(valueofflush==false))
							{
							
							
							 straight4=true;
							 valueofstraight=true;
														
							
							}
						
						
						
						
						
						if(((array444[3]+1)==array444[4])&&(valueofflush==true))
						{
						
						
						 straightflush4=true;
						 valueofstraight=true;
													
						
						}
			
						
						
				
				}
		
		}
	 
	 }



///

       if((array444[1]+1)==array444[2])
	   {
	   
	         if((array444[2]+1)==array444[3])
	          {
	   
	                if((array444[3]+1)==array444[4])
	                  {
	   
	                        if(((array444[4]+1)==array444[5])&&(valueofflush==false))
	                          {
	   
	                             straight4=true;
							     valueofstraight=true;
	   
	   
	                          }
	                        
	                        
	                        
	                        
	                        
	                        if(((array444[4]+1)==array444[5])&&(valueofflush==true))
	                          {
	   
	                             straightflush4=true;
							     valueofstraight=true;
	   
	   
	                          }
	   
	   
	                  }

	   
	   
	         }

	   
	   
	   }
	   
	   
	   


      ////       
			 
			 
		
if(array444[6]!=null)
	{
		
		    if((array444[2]+1)==array444[3])
	   {
	   
	         if((array444[3]+1)==array444[4])
	          {
	   
	                if((array444[4]+1)==array444[5])
	                  {
	   
	                        if(((array444[5]+1)==array444[6])&&(valueofflush==false))
	                          {
	   
	                            
								straight4=true;
							    valueofstraight=true;
	   
	   
	                          }
	   
	                        
	                        
	                        if(((array444[5]+1)==array444[6])&&(valueofflush==true))
	                          {
	   
	                            
								straightflush4=true;
							    valueofstraight=true;
	   
	   
	                          }
	   
	                  }

	   
	   
	         }

	   
	   
	   }	 
	   
	   
	   
	   if(array444[6]==14)
	   {
		   
		   if((array444[0]==2)&&(array444[1]==3)&&(array444[2]==4)&&(array444[3]==5)&&(valueofflush==false))
		   {
			   straight4=true;
			  valueofstraight=true;
			   
		   }
		   
		   
		   
		   
		   if((array444[0]==2)&&(array444[1]==3)&&(array444[2]==4)&&(array444[3]==5)&&(valueofflush==true))
		   {
			   royalflush4=true;
			  valueofstraight=true;
			   
		   }
	   }
	   
	}
////////////////////////////




    var arraycheck55=new Array();
	 var array55=new Array();
    var array555=new Array();
	 
	 
     arraycheck55 = [card5n,card55n,play1n,play2n,play3n,play4n,play5n];
	
	
	
	array55=bubble_Sort(arraycheck55);
	
	array555=getUnique(array55);
   

    if((array555[0]+1)==array555[1])
	 {
	   
	    if((array555[1]+1)==array555[2])
		{
		
		
					if((array555[2]+1)==array555[3])
				{
				
				
				
						if(((array555[3]+1)==array555[4])&&(valueofflush==false))
							{
							
							
							 straight5=true;
							 valueofstraight=true;
														
							
							}
						
						
						
						
						
						
						
						if(((array555[3]+1)==array555[4])&&(valueofflush==true))
						{
						
						
						 straightflush5=true;
						 valueofstraight=true;
													
						
						}
				
				}
		
		}
	 
	 }



///

       if((array555[1]+1)==array555[2])
	   {
	   
	         if((array555[2]+1)==array555[3])
	          {
	   
	                if((array555[3]+1)==array555[4])
	                  {
	   
	                        if(((array555[4]+1)==array555[5])&&(valueofflush==false))
	                          {
	   
	                             straight5=true;
							     valueofstraight=true;
	   
	   
	                          }
	                        
	                        
	                        
	                        
	                        
	                        
	                        

	                        if(((array555[4]+1)==array555[5])&&(valueofflush==true))
	                          {
	   
	                             straightflush5=true;
							     valueofstraight=true;
	   
	   
	                          }
	   
	   
	                  }

	   
	   
	         }

	   
	   
	   }
	   
	   
	   


      ////       
			 
			 if(array555[6]!=null)
				 
			{	 
		

		
		    if((array555[2]+1)==array555[3])
	   {
	   
	         if((array555[3]+1)==array555[4])
	          {
	   
	                if((array555[4]+1)==array555[5])
	                  {
	   
	                        if(((array555[5]+1)==array555[6])&&(valueofflush==false))
	                          {
	   
	                            
								straight5=true;
							    valueofstraight=true;
	   
	   
	                          }
	                        
	                        
	                        
	                        
	                        
	                        
	                        
	                        if(((array555[5]+1)==array555[6])&&(valueofflush==true))
	                          {
	   
	                            
								straightflush5=true;
							    valueofstraight=true;
	   
	   
	                          }
	   
	   
	                  }

	   
	   
	         }

	   
	   
	   }	 
	   
	   
	   
	   if(array555[6]==14)
	   {
		   
		   if((array555[0]==2)&&(array555[1]==3)&&(array555[2]==4)&&(array555[3]==5)&&(valueofflush==false))
		   {
			   straight5=true;
			  valueofstraight=true;
			   
		   }
		   
		   
		   if((array555[0]==2)&&(array555[1]==3)&&(array555[2]==4)&&(array555[3]==5)&&(valueofflush==true))
		   {
			   royalflush5=true;
			  valueofstraight=true;
			   
		   }
		   
		   
	   }
	   		   
			 
			 
			}			 
			 
			 
			 
	
  return valueofstraight;		
	
	
	}
    
    


    function checkthreeofakind()
    {
    	var valueofthreeofakind=false;
    	
     count1=0;
     count2=0;
     count3=0;
     count4=0;

     count5=0;
     count6=0;
     count7=0;
     count8=0;

     count9=0;
     count10=0;
     count11=0;
     count12=0;
     count13=0;




    checkcount();
    	

    if(  ((count1==2)&&((card1v=="A")||(card11v=="A"))&&(card1v!=card11v))|| ((count2==2)&&((card1v=="2")||(card11v=="2"))&&(card1v!=card11v)) || ((count3==3)&&((card1v=="3")||(card11v=="3"))&&(card1v!=card11v))|| ((count4==2)&&((card1v=="4")||(card11v=="4"))&&(card1v!=card11v))|| ((count5==2)&&((card1v=="5")||(card11v=="5"))&&(card1v!=card11v))|| ((count6==2)&&((card1v=="6")||(card11v=="6"))&&(card1v!=card11v))|| ((count7==2)&&((card1v=="7")||(card11v=="7"))&&(card1v!=card11v))|| ((count8==2)&&((card1v=="8")||(card11v=="8"))&&(card1v!=card11v))|| ((count9==2)&&((card1v=="9")||(card11v=="9"))&&(card1v!=card11v))|| ((count10==2)&&((card1v=="10")||(card11v=="10"))&&(card1v!=card11v))|| ((count11==2)&&((card1v=="J")||(card11v=="J"))&&(card1v!=card11v))|| ((count12==2)&&((card1v=="Q")||(card11v=="Q"))&&(card1v!=card11v))|| ((count13==2)&&((card1v=="K")||(card11v=="K"))&&(card1v!=card11v))   )	
    	
    	{   threeofakind1=true;
    		valueofthreeofakind=true;
    		
    		
    	}
    	
    	
    	
    	if(  ((count1==2)&&((card2v=="A")||(card22v=="A"))&&(card2v!=card22v))|| ((count2==2)&&((card2v=="2")||(card22v=="2"))&&(card2v!=card22v)) || ((count3==3)&&((card2v=="3")||(card22v=="3"))&&(card2v!=card22v))|| ((count4==2)&&((card2v=="4")||(card22v=="4"))&&(card2v!=card22v))|| ((count5==2)&&((card2v=="5")||(card22v=="5"))&&(card2v!=card22v))|| ((count6==2)&&((card2v=="6")||(card22v=="6"))&&(card2v!=card22v))|| ((count7==2)&&((card2v=="7")||(card22v=="7"))&&(card2v!=card22v))|| ((count8==2)&&((card2v=="8")||(card22v=="8"))&&(card2v!=card22v))|| ((count9==2)&&((card2v=="9")||(card22v=="9"))&&(card2v!=card22v))|| ((count10==2)&&((card2v=="10")||(card22v=="10"))&&(card2v!=card22v))|| ((count11==2)&&((card2v=="J")||(card22v=="J"))&&(card2v!=card22v))|| ((count12==2)&&((card2v=="Q")||(card22v=="Q"))&&(card2v!=card22v))|| ((count13==2)&&((card2v=="K")||(card22v=="K"))&&(card2v!=card22v))   )	
    	
    	{   threeofakind2=true;
    		valueofthreeofakind=true;
    		
    		
    	}
    	
    	
    	
    	if(  ((count1==2)&&((card3v=="A")||(card33v=="A"))&&(card3v!=card33v))|| ((count2==2)&&((card3v=="2")||(card33v=="2"))&&(card3v!=card33v)) || ((count3==3)&&((card3v=="3")||(card33v=="3"))&&(card3v!=card33v))|| ((count4==2)&&((card3v=="4")||(card33v=="4"))&&(card3v!=card33v))|| ((count5==2)&&((card1v=="5")||(card3v=="5"))&&(card3v!=card33v))|| ((count6==2)&&((card3v=="6")||(card33v=="6"))&&(card3v!=card33v))|| ((count7==2)&&((card3v=="7")||(card33v=="7"))&&(card3v!=card33v))|| ((count8==2)&&((card3v=="8")||(card33v=="8"))&&(card3v!=card33v))|| ((count9==2)&&((card3v=="9")||(card33v=="9"))&&(card3v!=card33v))|| ((count10==2)&&((card3v=="10")||(card33v=="10"))&&(card3v!=card33v))|| ((count11==2)&&((card3v=="J")||(card33v=="J"))&&(card3v!=card33v))|| ((count12==2)&&((card3v=="Q")||(card33v=="Q"))&&(card3v!=card33v))|| ((count13==2)&&((card3v=="K")||(card33v=="K"))&&(card1v!=card33v))   )	
    	
    	{   threeofakind3=true;
    		valueofthreeofakind=true;
    		
    		
    	}
    	
    	
    	if(  ((count1==2)&&((card4v=="A")||(card44v=="A"))&&(card4v!=card44v))|| ((count2==2)&&((card4v=="2")||(card44v=="2"))&&(card4v!=card44v)) || ((count3==3)&&((card4v=="3")||(card44v=="3"))&&(card4v!=card44v))|| ((count4==2)&&((card4v=="4")||(card44v=="4"))&&(card4v!=card44v))|| ((count5==2)&&((card4v=="5")||(card44v=="5"))&&(card4v!=card44v))|| ((count6==2)&&((card4v=="6")||(card44v=="6"))&&(card4v!=card44v))|| ((count7==2)&&((card1v=="7")||(card44v=="7"))&&(card4v!=card44v))|| ((count8==2)&&((card4v=="8")||(card44v=="8"))&&(card4v!=card44v))|| ((count9==2)&&((card4v=="9")||(card44v=="9"))&&(card4v!=card44v))|| ((count10==2)&&((card4v=="10")||(card44v=="10"))&&(card4v!=card44v))|| ((count11==2)&&((card4v=="J")||(card44v=="J"))&&(card4v!=card44v))|| ((count12==2)&&((card4v=="Q")||(card44v=="Q"))&&(card4v!=card44v))|| ((count13==2)&&((card4v=="K")||(card44v=="K"))&&(card4v!=card44v))   )	
    	
    	{   threeofakind4=true;
    		valueofthreeofakind=true;
    		
    		
    	}
    	
    	
    	if(  ((count1==2)&&((card5v=="A")||(card55v=="A"))&&(card5v!=card55v))|| ((count2==2)&&((card5v=="2")||(card55v=="2"))&&(card5v!=card55v)) || ((count3==3)&&((card5v=="3")||(card55v=="3"))&&(card5v!=card55v))|| ((count4==2)&&((card5v=="4")||(card55v=="4"))&&(card5v!=card55v))|| ((count5==2)&&((card5v=="5")||(card55v=="5"))&&(card5v!=card55v))|| ((count6==2)&&((card5v=="6")||(card11v=="6"))&&(card5v!=card55v))|| ((count7==2)&&((card5v=="7")||(card55v=="7"))&&(card5v!=card55v))|| ((count8==2)&&((card5v=="8")||(card11v=="8"))&&(card5v!=card55v))|| ((count9==2)&&((card5v=="9")||(card55v=="9"))&&(card5v!=card55v))|| ((count10==2)&&((card5v=="10")||(card55v=="10"))&&(card5v!=card55v))|| ((count11==2)&&((card5v=="J")||(card55v=="J"))&&(card5v!=card55v))|| ((count12==2)&&((card5v=="Q")||(card55v=="Q"))&&(card5v!=card55v))|| ((count13==2)&&((card5v=="K")||(card55v=="K"))&&(card5v!=card55v))   )	
    	
    	{   threeofakind5=true;
    		valueofthreeofakind=true;
    		
    		
    	}
    	
    	
    	


    if((card1v=="A")&&(card1v==card11v)&&(count1==1)||(card1v=="2")&&(card1v==card11v)&&(count2==1)||(card1v=="3")&&(card1v==card11v)&&(count3==1)||(card1v=="4")&&(card1v==card11v)&&(count4==1)||(card1v=="5")&&(card1v==card11v)&&(count5==1)||(card1v=="6")&&(card1v==card11v)&&(count6==1)||(card1v=="7")&&(card1v==card11v)&&(count7==1)||(card1v=="8")&&(card1v==card11v)&&(count8==1)||(card1v=="9")&&(card1v==card11v)&&(count9==1)||(card1v=="10")&&(card1v==card11v)&&(count10==1)||(card1v=="J")&&(card1v==card11v)&&(count11==1)||(card1v=="Q")&&(card1v==card11v)&&(count12==1)||(card1v=="K")&&(card1v==card11v)&&(count13==1))
    {
    	    threeofakind1=true;
    		valueofthreeofakind=true;
    }




    if((card2v=="A")&&(card2v==card11v)&&(count1==1)||(card2v=="2")&&(card2v==card22v)&&(count2==1)||(card2v=="3")&&(card2v==card22v)&&(count3==1)||(card2v=="4")&&(card2v==card22v)&&(count4==1)||(card2v=="5")&&(card2v==card22v)&&(count5==1)||(card2v=="6")&&(card2v==card22v)&&(count6==1)||(card2v=="7")&&(card2v==card22v)&&(count7==1)||(card2v=="8")&&(card2v==card22v)&&(count8==1)||(card2v=="9")&&(card2v==card22v)&&(count9==1)||(card2v=="10")&&(card2v==card22v)&&(count10==1)||(card2v=="J")&&(card2v==card22v)&&(count11==1)||(card2v=="Q")&&(card2v==card22v)&&(count12==1)||(card2v=="K")&&(card2v==card22v)&&(count13==1))
    {
    	    threeofakind2=true;
    		valueofthreeofakind=true;
    }



    if((card3v=="A")&&(card3v==card11v)&&(count1==1)||(card3v=="2")&&(card3v==card33v)&&(count2==1)||(card3v=="3")&&(card3v==card33v)&&(count3==1)||(card3v=="4")&&(card3v==card33v)&&(count4==1)||(card3v=="5")&&(card3v==card33v)&&(count5==1)||(card3v=="6")&&(card3v==card33v)&&(count6==1)||(card3v=="7")&&(card3v==card33v)&&(count7==1)||(card3v=="8")&&(card3v==card33v)&&(count8==1)||(card3v=="9")&&(card3v==card33v)&&(count9==1)||(card3v=="10")&&(card3v==card33v)&&(count10==1)||(card3v=="J")&&(card3v==card33v)&&(count11==1)||(card3v=="Q")&&(card3v==card33v)&&(count12==1)||(card3v=="K")&&(card3v==card33v)&&(count13==1))
    {
    	    threeofakind3=true;
    		valueofthreeofakind=true;
    }






    if((card4v=="A")&&(card4v==card44v)&&(count1==1)||(card4v=="2")&&(card4v==card44v)&&(count2==1)||(card4v=="3")&&(card4v==card44v)&&(count3==1)||(card4v=="4")&&(card4v==card44v)&&(count4==1)||(card4v=="5")&&(card4v==card44v)&&(count5==1)||(card4v=="6")&&(card4v==card44v)&&(count6==1)||(card4v=="7")&&(card4v==card44v)&&(count7==1)||(card4v=="8")&&(card4v==card44v)&&(count8==1)||(card4v=="9")&&(card4v==card44v)&&(count9==1)||(card4v=="10")&&(card4v==card44v)&&(count10==1)||(card4v=="J")&&(card4v==card44v)&&(count11==1)||(card4v=="Q")&&(card4v==card44v)&&(count12==1)||(card4v=="K")&&(card4v==card44v)&&(count13==1))
    {

            threeofakind4=true;
    		valueofthreeofakind=true;
    }	




    if((card5v=="A")&&(card5v==card55v)&&(count1==1)||(card5v=="2")&&(card5v==card55v)&&(count2==1)||(card5v=="3")&&(card5v==card55v)&&(count3==1)||(card5v=="4")&&(card5v==card55v)&&(count4==1)||(card5v=="5")&&(card5v==card55v)&&(count5==1)||(card5v=="6")&&(card5v==card55v)&&(count6==1)||(card5v=="7")&&(card5v==card55v)&&(count7==1)||(card5v=="8")&&(card5v==card55v)&&(count8==1)||(card5v=="9")&&(card5v==card55v)&&(count9==1)||(card5v=="10")&&(card5v==card55v)&&(count10==1)||(card5v=="J")&&(card5v==card55v)&&(count11==1)||(card5v=="Q")&&(card5v==card55v)&&(count12==1)||(card5v=="K")&&(card5v==card55v)&&(count13==1))
    {

            threeofakind5=true;
    		valueofthreeofakind=true;
    }	


    if((count1==3)||(count2==3)||(count3==3)||(count4==3)||(count5==3)||(count6==3)||(count7==3)||(count8==3)||(count9==3)||(count10==3)||(count11==3)||(count12==3)||(count13==3))
    {
    	    threeofakind1=true;
    	    threeofakind2=true;
    	    threeofakind3=true;
    	    threeofakind4=true;
    	    threeofakind5=true;
    		valueofthreeofakind=true;
    }

    	
    	
    	return valueofthreeofakind;
    }

    
    
    
    function  determinewinner()
    {
    	
    	alert("determine");
    	//renderDeckfoldplaycards();
    	
    	if(winner1==true)
    		{
    		var winnerdeclared="WINNER1";
    		//winnerdeclaredfinal="WINNER1";
    		winnercount++;
    		//alert("winner is");
    		//alert(winnerdeclared);
    		//document.getElementById('winner1').value = winnerdeclared;	
    		
    		
    		
    		
    		
    		var winner11;
    		
    		
    		
    		document.getElementById('winner1').innerHTML = '';
 	    	
    		winner11=document.createElement("div");
    		winner11.className="yourwinner";
    		winner11.innerHTML="WINNER 1";
 	    	
 	     	 document.getElementById("winner1").appendChild(winner11);
    		
    		
    		
    		
    		
    		
    		}
    	
    	
    	if(winner2==true)
		{
    		var winnerdeclared="WINNER2";
    		//winnerdeclaredfinal="WINNER2";
    		winnercount++;
		//document.getElementById('winner2').value =  winnerdeclared;	
    		
    		
           var winner22;
    		
    		
    		
    		document.getElementById('winner2').innerHTML = '';
 	    	
    		winner22=document.createElement("div");
    		winner22.className="yourwinner";
    		winner22.innerHTML="WINNER 2";
 	    	
 	     	 document.getElementById("winner2").appendChild(winner22);
    		
    		
		
		}
    	
    	
    	if(winner3==true)
		{
    		var winnerdeclared="WINNER3";
    		//winnerdeclaredfinal="WINNER3";
    		winnercount++;
		//document.getElementById('winner3').value =  winnerdeclared;	
    		
    		
    		
    		
           var winner33;
    		
    		
    		
    		document.getElementById('winner3').innerHTML = '';
 	    	
    		winner33=document.createElement("div");
    		winner33.className="yourwinner";
    		winner33.innerHTML="WINNER 3";
 	    	
 	     	 document.getElementById("winner3").appendChild(winner33);
    		
    		
		
		}
    	
    	
    	if(winner4==true)
		{
    		var winnerdeclared="WINNER4";
    		//winnerdeclaredfinal="WINNER4";
    		winnercount++;
		//document.getElementById('winner4').value =  winnerdeclared;	
    		
    		
    		
    		
           var winner44;
    		
    		
    		
    		document.getElementById('winner4').innerHTML = '';
 	    	
    		winner44=document.createElement("div");
    		winner44.className="yourwinner";
    		winner44.innerHTML="WINNER 4";
 	    	
 	     	 document.getElementById("winner4").appendChild(winner44);
    		
    		
		
		}
    	
    	if(winner5==true)
		{
    		
    		alert("here5");
    		var winnerdeclared="WINNER5";
    		//winnerdeclaredfinal="WINNER5";
    		winnercount++;
		//document.getElementById('winner5').value =  winnerdeclared;	
    		
    		
    		
          var winner55;
    		
    		
    		
    		document.getElementById('winner5').innerHTML = '';
 	    	
    		winner55=document.createElement("div");
    		winner55.className="yourwinner";
    		winner55.innerHTML="WINNER 5";
 	    	
 	     	 document.getElementById("winner5").appendChild(winner55);
    		
	
		}
    	
    	
    	
    	
    	if(winnercount==1)
    		{ 
    		
    		winnercount=0;
    		if(winner1==true)
    			{
    			
    			

   			 var startamount1;
     	    	
     	    	document.getElementById('cash1').innerHTML = '';
           	startamount1=document.createElement("div");
     	    	startamount1.className="startamount1";
     	    	
     	    	
     	    	startamount11=startamount11+Math.floor(totalamount/1);
     	    	
     	    	startamount1.innerHTML=startamount11;
     	    	
     	     	 document.getElementById("cash1").appendChild(startamount1);    			
   			
   			
   			
   			
   			
   			
     	     	 
     	     	 
     	   	 
  	     
    	     	 
    			totalamount=0;
    			totalvalue();
    			winner1=false;
    			}
    		
    		
    		
    		
    		if(winner2==true)
			{
			
			

   			
   			
   			 var startamount2;
    	    	
    	    	document.getElementById('cash2').innerHTML = '';
    	    
    	    	startamount2=document.createElement("div");
    	    	startamount2.className="startamount2";
    	    	
    	    	startamount22=startamount22+Math.floor(totalamount/1);
    	    	startamount2.innerHTML=startamount22;
    	    	
    	     	 document.getElementById("cash2").appendChild(startamount2);
     	 	 
    	  
	     	 
	     	 
	     	 
			totalamount=0;
			totalvalue();
			winner2=false;
			}
    		
    		
    		if(winner3==true)
			{
			
			

    	     	 var startamount3;
     	    	
     	    	document.getElementById('cash3').innerHTML = '';
     	    	
     	    	startamount3=document.createElement("div");
     	    	startamount3.className="startamount3";
     	    	startamount33=startamount33+Math.floor(totalamount/1);
     	    	
     	    	
     	    	startamount3.innerHTML=startamount33;
     	    	
     	     	 document.getElementById("cash3").appendChild(startamount3);
   			
     		 
	     	 
			totalamount=0;
			totalvalue();
			winner3=false;
			}
    		
    		
    		
    		
    		
    		if(winner4==true)
			{
			
			
		
    	
     	     	 
     	     	 
     	   	 
  	     	  var startamount4;
  	        	
  	        	document.getElementById('cash4').innerHTML = '';
  	       	
  	        	startamount4=document.createElement("div");
  	        	startamount4.className="startamount4";
  	        	startamount44=startamount44+Math.floor(totalamount/1);
  	        	
  	        	
  	        	startamount4.innerHTML=startamount44;
  	        	
  	            document.getElementById("cash4").appendChild(startamount4);
  	     	 
     	 	
    			
			totalamount=0;
			totalvalue();
			winner4=false;
			}
    		
    		
    		
    		if(winner5==true)
			{
			
			

   		
  	     	 
     	 	  var startamount5;
	        	
	        	document.getElementById('cash5').innerHTML = '';
	        	
	       	
	        	startamount5=document.createElement("div");
	        	startamount5.className="startamount5";
	        	startamount55=startamount55+Math.floor(totalamount/1);
	        	
	        	startamount5.innerHTML=startamount55;
	        	
	            document.getElementById("cash5").appendChild(startamount5);
	     	 
	     	 
	     	 
	     	 
			totalamount=0;
			totalvalue();
			winner5=false;
			}
    		
    	
    		}
    	
    	
    	
    	
    	
    	
    	
    	
    	if(winnercount==2)
		{
		
		winnercount=0;
		
		if((winner1==true)&&(winner2==true))
			{
			

			 var startamount1;
 	    	
 	    	document.getElementById('cash1').innerHTML = '';
       	startamount1=document.createElement("div");
 	    	startamount1.className="startamount1";
 	    	
 	    	
 	    	startamount11=startamount11+Math.floor(totalamount/2);
 	    	
 	    	startamount1.innerHTML=startamount11;
 	    	
 	     	 document.getElementById("cash1").appendChild(startamount1);    			
			
			
			
			
			 var startamount2;
	    	
	    	document.getElementById('cash2').innerHTML = '';
	    
	    	startamount2=document.createElement("div");
	    	startamount2.className="startamount2";
	    	
	    	startamount22=startamount22+Math.floor(totalamount/2);
	    	startamount2.innerHTML=startamount22;
	    	
	     	 document.getElementById("cash2").appendChild(startamount2);
 	 	 
	     
	     	 
			totalamount=0;
			totalvalue();
			winner1=false;
			winner2=false;
			}
		
		
		
		
		
		
		
    	
		
		if((winner1==true)&&(winner3==true))
			{
			
			

			 var startamount1;
 	    	
 	    	document.getElementById('cash1').innerHTML = '';
       	startamount1=document.createElement("div");
 	    	startamount1.className="startamount1";
 	    	
 	    	
 	    	startamount11=startamount11+Math.floor(totalamount/2);
 	    	
 	    	startamount1.innerHTML=startamount11;
 	    	
 	     	 document.getElementById("cash1").appendChild(startamount1);    			
			
			
			
			
		
 	 	 
	     	 var startamount3;
 	    	
 	    	document.getElementById('cash3').innerHTML = '';
 	    	
 	    	startamount3=document.createElement("div");
 	    	startamount3.className="startamount3";
 	    	startamount33=startamount33+Math.floor(totalamount/2);
 	    	
 	    	
 	    	startamount3.innerHTML=startamount33;
 	    	
 	     	 document.getElementById("cash3").appendChild(startamount3);
			
 	     	 
 	     	 
 	   	 
	  
	     	 
	     	 
	     	 
	     	 
			totalamount=0;
			totalvalue();
			winner1=false;
			winner3=false;
			}
		
		
		
		if((winner1==true)&&(winner4==true))
		{
		
		

			 var startamount1;
 	    	
 	    	document.getElementById('cash1').innerHTML = '';
       	startamount1=document.createElement("div");
 	    	startamount1.className="startamount1";
 	    	
 	    	
 	    	startamount11=startamount11+Math.floor(totalamount/2);
 	    	
 	    	startamount1.innerHTML=startamount11;
 	    	
 	     	 document.getElementById("cash1").appendChild(startamount1);    			
			
			
			
			
		
 	     	 
 	   	 
	     	  var startamount4;
	        	
	        	document.getElementById('cash4').innerHTML = '';
	       	
	        	startamount4=document.createElement("div");
	        	startamount4.className="startamount4";
	        	startamount44=startamount44+Math.floor(totalamount/2);
	        	
	        	
	        	startamount4.innerHTML=startamount44;
	        	
	            document.getElementById("cash4").appendChild(startamount4);
	     	 
 	 
     	 
     	 
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner1=false;
		winner4=false;
		}
	
	
	
		
		
		if((winner1==true)&&(winner5==true))
		{
		
		

			 var startamount1;
 	    	
 	    	document.getElementById('cash1').innerHTML = '';
       	startamount1=document.createElement("div");
 	    	startamount1.className="startamount1";
 	    	
 	    	
 	    	startamount11=startamount11+Math.floor(totalamount/2);
 	    	
 	    	startamount1.innerHTML=startamount11;
 	    	
 	     	 document.getElementById("cash1").appendChild(startamount1);    			
			
			
			
		
			
 	     	 
 	     	 
 	   	 
	     
	     	 
 	 	  var startamount5;
       	
       	document.getElementById('cash5').innerHTML = '';
       	
      	
       	startamount5=document.createElement("div");
       	startamount5.className="startamount5";
       	startamount55=startamount55+Math.floor(totalamount/2);
       	
       	startamount5.innerHTML=startamount55;
       	
           document.getElementById("cash5").appendChild(startamount5);
     	 
     	 
     	 
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner1=false;
		winner5=false;
		}
		
		
		
		
	
		

		if((winner2==true)&&(winner3==true))
		{
		
		

		
			
			
			
			 var startamount2;
	    	
	    	document.getElementById('cash2').innerHTML = '';
	    
	    	startamount2=document.createElement("div");
	    	startamount2.className="startamount2";
	    	
	    	startamount22=startamount22+Math.floor(totalamount/2);
	    	startamount2.innerHTML=startamount22;
	    	
	     	 document.getElementById("cash2").appendChild(startamount2);
 	 	 
	     	 var startamount3;
 	    	
 	    	document.getElementById('cash3').innerHTML = '';
 	    	
 	    	startamount3=document.createElement("div");
 	    	startamount3.className="startamount3";
 	    	startamount33=startamount33+Math.floor(totalamount/2);
 	    	
 	    	
 	    	startamount3.innerHTML=startamount33;
 	    	
 	     	 document.getElementById("cash3").appendChild(startamount3);
			
 	     	 
 	     	 
 	   	 
     	 
     	 
     	 
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner2=false;
		winner3=false;
		}
		
	
	
	

		if((winner2==true)&&(winner4==true))
		{
		
  			
			
			
			
			
			 var startamount2;
	    	
	    	document.getElementById('cash2').innerHTML = '';
	    
	    	startamount2=document.createElement("div");
	    	startamount2.className="startamount2";
	    	
	    	startamount22=startamount22+Math.floor(totalamount/2);
	    	startamount2.innerHTML=startamount22;
	    	
	     	 document.getElementById("cash2").appendChild(startamount2);
 	 	 
	     
 	     	 
 	     	 
 	   	 
	     	  var startamount4;
	        	
	        	document.getElementById('cash4').innerHTML = '';
	       	
	        	startamount4=document.createElement("div");
	        	startamount4.className="startamount4";
	        	startamount44=startamount44+Math.floor(totalamount/2);
	        	
	        	
	        	startamount4.innerHTML=startamount44;
	        	
	            document.getElementById("cash4").appendChild(startamount4);
	     	 
 	 	 
     	 
     	 
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner2=false;
		winner4=false;
		}
		
		
		

		if((winner2==true)&&(winner5==true))
		{
		
		

		
			
			
			
			 var startamount2;
	    	
	    	document.getElementById('cash2').innerHTML = '';
	    
	    	startamount2=document.createElement("div");
	    	startamount2.className="startamount2";
	    	
	    	startamount22=startamount22+Math.floor(totalamount/2);
	    	startamount2.innerHTML=startamount22;
	    	
	     	 document.getElementById("cash2").appendChild(startamount2);
 	 	 
	
 	     	 
 	   	 
	     	
 	 	  var startamount5;
       	
       	document.getElementById('cash5').innerHTML = '';
       	
      	
       	startamount5=document.createElement("div");
       	startamount5.className="startamount5";
       	startamount55=startamount55+Math.floor(totalamount/2);
       	
       	startamount5.innerHTML=startamount55;
       	
           document.getElementById("cash5").appendChild(startamount5);
     	 
     	 
     	 
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner2=false;
		winner5=false;
		}
		
		
    	
		
		
		

		if((winner3==true)&&(winner4==true))
		{
		
		

		
 	 	 
	     	 var startamount3;
 	    	
 	    	document.getElementById('cash3').innerHTML = '';
 	    	
 	    	startamount3=document.createElement("div");
 	    	startamount3.className="startamount3";
 	    	startamount33=startamount33+Math.floor(totalamount/2);
 	    	
 	    	
 	    	startamount3.innerHTML=startamount33;
 	    	
 	     	 document.getElementById("cash3").appendChild(startamount3);
			
 	     	 
 	     	 
 	   	 
	     	  var startamount4;
	        	
	        	document.getElementById('cash4').innerHTML = '';
	       	
	        	startamount4=document.createElement("div");
	        	startamount4.className="startamount4";
	        	startamount44=startamount44+Math.floor(totalamount/2);
	        	
	        	
	        	startamount4.innerHTML=startamount44;
	        	
	            document.getElementById("cash4").appendChild(startamount4);
	   
     	 
     	 
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner3=false;
		winner4=false;
		}
		
		
		
		if((winner3==true)&&(winner5==true))
		{
		

		
	     	
 	 	 
	     	 var startamount3;
 	    	
 	    	document.getElementById('cash3').innerHTML = '';
 	    	
 	    	startamount3=document.createElement("div");
 	    	startamount3.className="startamount3";
 	    	startamount33=startamount33+Math.floor(totalamount/2);
 	    	
 	    	
 	    	startamount3.innerHTML=startamount33;
 	    	
 	     	 document.getElementById("cash3").appendChild(startamount3);
			
 	     	 
 	     	 
 	   	 
	    
	     	 
 	 	  var startamount5;
       	
       	document.getElementById('cash5').innerHTML = '';
       	
      	
       	startamount5=document.createElement("div");
       	startamount5.className="startamount5";
       	startamount55=startamount55+Math.floor(totalamount/2);
       	
       	startamount5.innerHTML=startamount55;
       	
           document.getElementById("cash5").appendChild(startamount5);
     	 
     	 
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner3=false;
		winner5=false;
		}
		
		
		
		
		if((winner4==true)&&(winner5==true))
		{
		

			
			
 	     	 
 	     	 
 	   	 
	     	  var startamount4;
	        	
	        	document.getElementById('cash4').innerHTML = '';
	       	
	        	startamount4=document.createElement("div");
	        	startamount4.className="startamount4";
	        	startamount44=startamount44+Math.floor(totalamount/2);
	        	
	        	
	        	startamount4.innerHTML=startamount44;
	        	
	            document.getElementById("cash4").appendChild(startamount4);
	     	 
 	 	  var startamount5;
       	
       	document.getElementById('cash5').innerHTML = '';
       	
      	
       	startamount5=document.createElement("div");
       	startamount5.className="startamount5";
       	startamount55=startamount55+Math.floor(totalamount/2);
       	
       	startamount5.innerHTML=startamount55;
       	
           document.getElementById("cash5").appendChild(startamount5);
     	 
     	 
     	 
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner4=false;
		winner5=false;
		}
		
		
   	
    	
    }
    	
    	
    	
    	
    
    if(winnercount==3)
    	{
    	
    	winnercount=0;
    	if((winner1==true)&&(winner2==true)&&(winner3==true))
		{
		
		

			 var startamount1;
 	    	
 	    	document.getElementById('cash1').innerHTML = '';
       	startamount1=document.createElement("div");
 	    	startamount1.className="startamount1";
 	    	
 	    	
 	    	startamount11=startamount11+Math.floor(totalamount/3);
 	    	
 	    	startamount1.innerHTML=startamount11;
 	    	
 	     	 document.getElementById("cash1").appendChild(startamount1);    			
			
			
			
			
			 var startamount2;
	    	
	    	document.getElementById('cash2').innerHTML = '';
	    
	    	startamount2=document.createElement("div");
	    	startamount2.className="startamount2";
	    	
	    	startamount22=startamount22+Math.floor(totalamount/3);
	    	startamount2.innerHTML=startamount22;
	    	
	     	 document.getElementById("cash2").appendChild(startamount2);
 	 	 
	     	 var startamount3;
 	    	
 	    	document.getElementById('cash3').innerHTML = '';
 	    	
 	    	startamount3=document.createElement("div");
 	    	startamount3.className="startamount3";
 	    	startamount33=startamount33+Math.floor(totalamount/3);
 	    	
 	    	
 	    	startamount3.innerHTML=startamount33;
 	    	
 	     	 document.getElementById("cash3").appendChild(startamount3);
			
 	     	 
 	     	 
 	   	
     	 
     	 
		totalamount=0;
		totalvalue();
		winner1=false;
		winner2=false;
		winner3=false;
		
		
		
		
		
		
		}
    	
    	
    	
    	
    	if((winner1==true)&&(winner2==true)&&(winner4==true))
		{
		
		

			 var startamount1;
 	    	
 	    	document.getElementById('cash1').innerHTML = '';
       	startamount1=document.createElement("div");
 	    	startamount1.className="startamount1";
 	    	
 	    	
 	    	startamount11=startamount11+Math.floor(totalamount/3);
 	    	
 	    	startamount1.innerHTML=startamount11;
 	    	
 	     	 document.getElementById("cash1").appendChild(startamount1);    			
			
			
			
			
			 var startamount2;
	    	
	    	document.getElementById('cash2').innerHTML = '';
	    
	    	startamount2=document.createElement("div");
	    	startamount2.className="startamount2";
	    	
	    	startamount22=startamount22+Math.floor(totalamount/3);
	    	startamount2.innerHTML=startamount22;
	    	
	     	 document.getElementById("cash2").appendChild(startamount2);
 	 	 
	    
			
 	     	 
 	     	 
 	   	 
	     	  var startamount4;
	        	
	        	document.getElementById('cash4').innerHTML = '';
	       	
	        	startamount4=document.createElement("div");
	        	startamount4.className="startamount4";
	        	startamount44=startamount44+Math.floor(totalamount/3);
	        	
	        	
	        	startamount4.innerHTML=startamount44;
	        	
	            document.getElementById("cash4").appendChild(startamount4);
	     	 
 	 	 
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner1=false;
		winner2=false;
		winner4=false;
		
		
		
		
		
		
		}
    	
    	
    	
    	
    	if((winner1==true)&&(winner2==true)&&(winner5==true))
		{
		
		

			 var startamount1;
 	    	
 	    	document.getElementById('cash1').innerHTML = '';
       	startamount1=document.createElement("div");
 	    	startamount1.className="startamount1";
 	    	
 	    	
 	    	startamount11=startamount11+Math.floor(totalamount/3);
 	    	
 	    	startamount1.innerHTML=startamount11;
 	    	
 	     	 document.getElementById("cash1").appendChild(startamount1);    			
			
			
			
			
			 var startamount2;
	    	
	    	document.getElementById('cash2').innerHTML = '';
	    
	    	startamount2=document.createElement("div");
	    	startamount2.className="startamount2";
	    	
	    	startamount22=startamount22+Math.floor(totalamount/3);
	    	startamount2.innerHTML=startamount22;
	    	
	     	 document.getElementById("cash2").appendChild(startamount2);
 	 	 
	     	
	     	 
 	 	  var startamount5;
       	
       	document.getElementById('cash5').innerHTML = '';
       	
      	
       	startamount5=document.createElement("div");
       	startamount5.className="startamount5";
       	startamount55=startamount55+Math.floor(totalamount/3);
       	
       	startamount5.innerHTML=startamount55;
       	
           document.getElementById("cash5").appendChild(startamount5);
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner1=false;
		winner2=false;
		winner5=false;
		
		
		
		
		
		
		}
    	
    	
    	
    	
    	
    	
    	if((winner1==true)&&(winner3==true)&&(winner4==true))
		{
		
		

			 var startamount1;
 	    	
 	    	document.getElementById('cash1').innerHTML = '';
       	startamount1=document.createElement("div");
 	    	startamount1.className="startamount1";
 	    	
 	    	
 	    	startamount11=startamount11+Math.floor(totalamount/3);
 	    	
 	    	startamount1.innerHTML=startamount11;
 	    	
 	     	 document.getElementById("cash1").appendChild(startamount1);    			
			
			
			
			
 	 	 
	     	 var startamount3;
 	    	
 	    	document.getElementById('cash3').innerHTML = '';
 	    	
 	    	startamount3=document.createElement("div");
 	    	startamount3.className="startamount3";
 	    	startamount33=startamount33+Math.floor(totalamount/3);
 	    	
 	    	
 	    	startamount3.innerHTML=startamount33;
 	    	
 	     	 document.getElementById("cash3").appendChild(startamount3);
			
 	     	 
 	     	 
 	   	 
	     	  var startamount4;
	        	
	        	document.getElementById('cash4').innerHTML = '';
	       	
	        	startamount4=document.createElement("div");
	        	startamount4.className="startamount4";
	        	startamount44=startamount44+Math.floor(totalamount/3);
	        	
	        	
	        	startamount4.innerHTML=startamount44;
	        	
	            document.getElementById("cash4").appendChild(startamount4);
	     	 
 	 	
     	 
     	 
		totalamount=0;
		totalvalue();
		winner1=false;
		winner3=false;
		winner4=false;
		
		
		
		
		
		
		}
    	
    	
    	
    	
    	if((winner1==true)&&(winner3==true)&&(winner5==true))
		{
		
		

			 var startamount1;
 	    	
 	    	document.getElementById('cash1').innerHTML = '';
       	startamount1=document.createElement("div");
 	    	startamount1.className="startamount1";
 	    	
 	    	
 	    	startamount11=startamount11+Math.floor(totalamount/3);
 	    	
 	    	startamount1.innerHTML=startamount11;
 	    	
 	     	 document.getElementById("cash1").appendChild(startamount1);    			
			
			
			
			
		
 	 	 
	     	 var startamount3;
 	    	
 	    	document.getElementById('cash3').innerHTML = '';
 	    	
 	    	startamount3=document.createElement("div");
 	    	startamount3.className="startamount3";
 	    	startamount33=startamount33+Math.floor(totalamount/3);
 	    	
 	    	
 	    	startamount3.innerHTML=startamount33;
 	    	
 	     	 document.getElementById("cash3").appendChild(startamount3);
			
 	     	 
 	     	 
 	   	 
	     	 
 	 	  var startamount5;
       	
       	document.getElementById('cash5').innerHTML = '';
       	
      	
       	startamount5=document.createElement("div");
       	startamount5.className="startamount5";
       	startamount55=startamount55+Math.floor(totalamount/3);
       	
       	startamount5.innerHTML=startamount55;
       	
           document.getElementById("cash5").appendChild(startamount5);
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner1=false;
		winner3=false;
		winner5=false;
		
		
		
		
		
		
		}
    	
    	
    	
    	
    	
    	
    	
    	
    	if((winner1==true)&&(winner4==true)&&(winner5==true))
		{
		

			 var startamount1;
 	    	
 	    	document.getElementById('cash1').innerHTML = '';
       	startamount1=document.createElement("div");
 	    	startamount1.className="startamount1";
 	    	
 	    	
 	    	startamount11=startamount11+Math.floor(totalamount/3);
 	    	
 	    	startamount1.innerHTML=startamount11;
 	    	
 	     	 document.getElementById("cash1").appendChild(startamount1);    			
			
			
			
			
		
			
 	     	 
 	     	 
 	   	 
	     	  var startamount4;
	        	
	        	document.getElementById('cash4').innerHTML = '';
	       	
	        	startamount4=document.createElement("div");
	        	startamount4.className="startamount4";
	        	startamount44=startamount44+Math.floor(totalamount/3);
	        	
	        	
	        	startamount4.innerHTML=startamount44;
	        	
	            document.getElementById("cash4").appendChild(startamount4);
	     	 
 	 	  var startamount5;
       	
       	document.getElementById('cash5').innerHTML = '';
       	
      	
       	startamount5=document.createElement("div");
       	startamount5.className="startamount5";
       	startamount55=startamount55+Math.floor(totalamount/3);
       	
       	startamount5.innerHTML=startamount55;
       	
           document.getElementById("cash5").appendChild(startamount5);
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner1=false;
		winner4=false;
		winner5=false;
		
		
		
		
		
		
		}
    	
    	
    	
    	
    	
   	
    	
    	
    	if((winner2==true)&&(winner3==true)&&(winner4==true))
		{
		
		

	
			
			
			
			 var startamount2;
	    	
	    	document.getElementById('cash2').innerHTML = '';
	    
	    	startamount2=document.createElement("div");
	    	startamount2.className="startamount2";
	    	
	    	startamount22=startamount22+Math.floor(totalamount/3);
	    	startamount2.innerHTML=startamount22;
	    	
	     	 document.getElementById("cash2").appendChild(startamount2);
 	 	 
	     	 var startamount3;
 	    	
 	    	document.getElementById('cash3').innerHTML = '';
 	    	
 	    	startamount3=document.createElement("div");
 	    	startamount3.className="startamount3";
 	    	startamount33=startamount33+Math.floor(totalamount/3);
 	    	
 	    	
 	    	startamount3.innerHTML=startamount33;
 	    	
 	     	 document.getElementById("cash3").appendChild(startamount3);
			
 	     	 
 	     	 
 	   	 
	     	  var startamount4;
	        	
	        	document.getElementById('cash4').innerHTML = '';
	       	
	        	startamount4=document.createElement("div");
	        	startamount4.className="startamount4";
	        	startamount44=startamount44+Math.floor(totalamount/3);
	        	
	        	
	        	startamount4.innerHTML=startamount44;
	        	
	            document.getElementById("cash4").appendChild(startamount4);
	     	 
 	 	
     	 
     	 
	
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner2=false;
		winner3=false;
		winner4=false;
		
		
		
		
		
		
		}
    	
    	
    	
    	
    	
    	if((winner2==true)&&(winner3==true)&&(winner5==true))
		{
		
		

			
			
			
			 var startamount2;
	    	
	    	document.getElementById('cash2').innerHTML = '';
	    
	    	startamount2=document.createElement("div");
	    	startamount2.className="startamount2";
	    	
	    	startamount22=startamount22+Math.floor(totalamount/3);
	    	startamount2.innerHTML=startamount22;
	    	
	     	 document.getElementById("cash2").appendChild(startamount2);
 	 	 
	     	 var startamount3;
 	    	
 	    	document.getElementById('cash3').innerHTML = '';
 	    	
 	    	startamount3=document.createElement("div");
 	    	startamount3.className="startamount3";
 	    	startamount33=startamount33+Math.floor(totalamount/3);
 	    	
 	    	
 	    	startamount3.innerHTML=startamount33;
 	    	
 	     	 document.getElementById("cash3").appendChild(startamount3);
			
 	     	 
 	     	 
 	   	 
	     	
	     	 
 	 	  var startamount5;
       	
       	document.getElementById('cash5').innerHTML = '';
       	
      	
       	startamount5=document.createElement("div");
       	startamount5.className="startamount5";
       	startamount55=startamount55+Math.floor(totalamount/3);
       	
       	startamount5.innerHTML=startamount55;
       	
           document.getElementById("cash5").appendChild(startamount5);
     	 
	
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner2=false;
		winner3=false;
		winner5=false;
		
		
		
		
		
		
		}
    	
    	
    	
    	
    	if((winner2==true)&&(winner4==true)&&(winner5==true))
		{
		
		

		
			
			
			 var startamount2;
	    	
	    	document.getElementById('cash2').innerHTML = '';
	    
	    	startamount2=document.createElement("div");
	    	startamount2.className="startamount2";
	    	
	    	startamount22=startamount22+Math.floor(totalamount/3);
	    	startamount2.innerHTML=startamount22;
	    	
	     	 document.getElementById("cash2").appendChild(startamount2);
 	 	 
	     	
			
 	     	 
 	     	 
 	   	 
	     	  var startamount4;
	        	
	        	document.getElementById('cash4').innerHTML = '';
	       	
	        	startamount4=document.createElement("div");
	        	startamount4.className="startamount4";
	        	startamount44=startamount44+Math.floor(totalamount/3);
	        	
	        	
	        	startamount4.innerHTML=startamount44;
	        	
	            document.getElementById("cash4").appendChild(startamount4);
	     	 
 	 	  var startamount5;
       	
       	document.getElementById('cash5').innerHTML = '';
       	
      	
       	startamount5=document.createElement("div");
       	startamount5.className="startamount5";
       	startamount55=startamount55+Math.floor(totalamount/3);
       	
       	startamount5.innerHTML=startamount55;
       	
           document.getElementById("cash5").appendChild(startamount5);
     	 
	
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner2=false;
		winner4=false;
		winner5=false;
		
		
		
		
		
		
		}
    	
    	
    	
    	if((winner3==true)&&(winner4==true)&&(winner5==true))
		{
		
		
    	
      	     	 
      	     	 
      	     	 
      	     	 
      	     	 
      	     	 
      	     	 
      	     	 var startamount3;
       	    	
       	    	document.getElementById('cash3').innerHTML = '';
       	    	
       	    	startamount3=document.createElement("div");
       	    	startamount3.className="startamount3";
       	    	startamount33=startamount33+Math.floor(totalamount/3);
       	    	
       	    	
       	    	startamount3.innerHTML=startamount33;
       	    	
       	     	 document.getElementById("cash3").appendChild(startamount3); 	 
     	     	 
     	     	 
      	 
       	     	var startamount4;
 	        	
 	        	document.getElementById('cash4').innerHTML = '';
 	       	
 	        	startamount4=document.createElement("div");
 	        	startamount4.className="startamount4";
 	        	startamount44=startamount44+Math.floor(totalamount/3);
 	        	
 	        	
 	        	startamount4.innerHTML=startamount44;
 	        	
 	            document.getElementById("cash4").appendChild(startamount4);
     	 
     	 
 	            
 	 	 	  var startamount5;
 	        	
 	        	document.getElementById('cash5').innerHTML = '';
 	        	
 	       	
 	        	startamount5=document.createElement("div");
 	        	startamount5.className="startamount5";
 	        	startamount55=startamount55+Math.floor(totalamount/3);
 	        	
 	        	startamount5.innerHTML=startamount55;
 	        	
 	            document.getElementById("cash5").appendChild(startamount5);
	
     	 
     	 
     	 
		totalamount=0;
		totalvalue();
		winner3=false;
		winner4=false;
		winner5=false;
		
		
		
		
		
		
		}
    	
    	
    	
    	
    	
	
    	
    	}
    	
    	
    	if(winnercount==4)
    		{
    		
    		winnercount=0;
    		if((winner1==true)&&(winner2==true)&&(winner3==true)&&(winner4==true))
    		{
    		
    			
    		
    			 var startamount1;
       	    	
       	    	document.getElementById('cash1').innerHTML = '';
             	startamount1=document.createElement("div");
       	    	startamount1.className="startamount1";
       	    	
       	    	
       	    	startamount11=startamount11+Math.floor(totalamount/4);
       	    	
       	    	startamount1.innerHTML=startamount11;
       	    	
       	     	 document.getElementById("cash1").appendChild(startamount1);    			
     			
      			
       	     	 
       	     	 var startamount2;
         	    	
         	    	document.getElementById('cash2').innerHTML = '';
         	    
         	    	startamount2=document.createElement("div");
         	    	startamount2.className="startamount2";
         	    	
         	    	startamount22=startamount22+Math.floor(totalamount/4);
         	    	startamount2.innerHTML=startamount22;
         	    	
         	     	 document.getElementById("cash2").appendChild(startamount2);
         	     	 
         	     	 
         	     	 
         	     	 
         	     	 
         	     	 
         	     	 
         	     	 var startamount3;
          	    	
          	    	document.getElementById('cash3').innerHTML = '';
          	    	
          	    	startamount3=document.createElement("div");
          	    	startamount3.className="startamount3";
          	    	startamount33=startamount33+Math.floor(totalamount/4);
          	    	
          	    	
          	    	startamount3.innerHTML=startamount33;
          	    	
          	     	 document.getElementById("cash3").appendChild(startamount3); 	 
        	     	 
        	     	 
         	 
          	     	var startamount4;
    	        	
    	        	document.getElementById('cash4').innerHTML = '';
    	       	
    	        	startamount4=document.createElement("div");
    	        	startamount4.className="startamount4";
    	        	startamount44=startamount44+Math.floor(totalamount/4);
    	        	
    	        	
    	        	startamount4.innerHTML=startamount44;
    	        	
    	            document.getElementById("cash4").appendChild(startamount4);
         	 
         	 
    	
         	 
         	 
         	 
    		totalamount=0;
    		totalvalue();
    		winner1=false;
    		winner2=false;
    		winner3=false;
    		winner4=false;
    		
    		
    		
    		
    		
    		
    		}
    		
    		
    		
    		
    		if((winner1==true)&&(winner2==true)&&(winner3==true)&&(winner5==true))
    		{
    		
    			
    			 var startamount1;
       	    	
       	    	document.getElementById('cash1').innerHTML = '';
             	startamount1=document.createElement("div");
       	    	startamount1.className="startamount1";
       	    	
       	    	
       	    	startamount11=startamount11+Math.floor(totalamount/4);
       	    	
       	    	startamount1.innerHTML=startamount11;
       	    	
       	     	 document.getElementById("cash1").appendChild(startamount1);    			
     			
     			
      	     	 
      	     	 var startamount2;
        	    	
        	    	document.getElementById('cash2').innerHTML = '';
        	    
        	    	startamount2=document.createElement("div");
        	    	startamount2.className="startamount2";
        	    	
        	    	startamount22=startamount22+Math.floor(totalamount/4);
        	    	startamount2.innerHTML=startamount22;
        	    	
        	     	 document.getElementById("cash2").appendChild(startamount2);
        	     	 
        	     	 
        	     	 
        	     	 
        	     	 
        	     	 
        	     	 
        	     	 var startamount3;
         	    	
         	    	document.getElementById('cash3').innerHTML = '';
         	    	
         	    	startamount3=document.createElement("div");
         	    	startamount3.className="startamount3";
         	    	startamount33=startamount33+Math.floor(totalamount/4);
         	    	
         	    	
         	    	startamount3.innerHTML=startamount33;
         	    	
         	     	 document.getElementById("cash3").appendChild(startamount3);
       			
         	     	 
         	     	 
         	   	 
      	     	
      	     	 
         	 	  var startamount5;
   	        	
   	        	document.getElementById('cash5').innerHTML = '';
   	        	
   	       	
   	        	startamount5=document.createElement("div");
   	        	startamount5.className="startamount5";
   	        	startamount55=startamount55+Math.floor(totalamount/4);
   	        	
   	        	startamount5.innerHTML=startamount55;
   	        	
   	            document.getElementById("cash5").appendChild(startamount5);
        	     	 
         
         	 
    		totalamount=0;
    		totalvalue();
    		winner1=false;
    		winner2=false;
    		winner3=false;
    		winner5=false;
    		
    		
    		
    		
    		
    		
    		}
    		
    		
    		
    		
    		
    		if((winner1==true)&&(winner2==true)&&(winner4==true)&&(winner5==true))
    		{
    		
    			 var startamount1;
       	    	
       	    	document.getElementById('cash1').innerHTML = '';
             	startamount1=document.createElement("div");
       	    	startamount1.className="startamount1";
       	    	
       	    	
       	    	startamount11=startamount11+Math.floor(totalamount/4);
       	    	
       	    	startamount1.innerHTML=startamount11;
       	    	
       	     	 document.getElementById("cash1").appendChild(startamount1);    			
     			
     	     	 
     	     	 var startamount2;
       	    	
       	    	document.getElementById('cash2').innerHTML = '';
       	    
       	    	startamount2=document.createElement("div");
       	    	startamount2.className="startamount2";
       	    	
       	    	startamount22=startamount22+Math.floor(totalamount/4);
       	    	startamount2.innerHTML=startamount22;
       	    	
       	     	 document.getElementById("cash2").appendChild(startamount2);
      	     	 
      	     	 
      	   	 
      	       var startamount4;
	        	
	        	document.getElementById('cash4').innerHTML = '';
	       	
	        	startamount4=document.createElement("div");
	        	startamount4.className="startamount4";
	        	startamount44=startamount44+Math.floor(totalamount/4);
	        	
	        	
	        	startamount4.innerHTML=startamount44;
	        	
	            document.getElementById("cash4").appendChild(startamount4);
	     	 
   	 	  var startamount5;
	        	
	        	document.getElementById('cash5').innerHTML = '';
	        	
	       	
	        	startamount5=document.createElement("div");
	        	startamount5.className="startamount5";
	        	startamount55=startamount55+Math.floor(totalamount/4);
	        	
	        	startamount5.innerHTML=startamount55;
	        	
	            document.getElementById("cash5").appendChild(startamount5);
	     	 
         	 
      	 
         	 
    		totalamount=0;
    		totalvalue();
    		winner1=false;
    		winner2=false;
    		winner4=false;
    		winner5=false;
    		
    		
    		
    		
    		
    		
    		}
    		
    		
    		
    		if((winner1==true)&&(winner3==true)&&(winner4==true)&&(winner5==true))
    		{
    		
    			 var startamount1;
       	    	
       	    	document.getElementById('cash1').innerHTML = '';
             	startamount1=document.createElement("div");
       	    	startamount1.className="startamount1";
       	    	
       	    	
       	    	startamount11=startamount11+Math.floor(totalamount/4);
       	    	
       	    	startamount1.innerHTML=startamount11;
       	    	
       	     	 document.getElementById("cash1").appendChild(startamount1);    			
     			
       	     	 var startamount3;
        	    	
        	    	document.getElementById('cash3').innerHTML = '';
        	    	
        	    	startamount3=document.createElement("div");
        	    	startamount3.className="startamount3";
        	    	startamount33=startamount33+Math.floor(totalamount/4);
        	    	
        	    	
        	    	startamount3.innerHTML=startamount33;
        	    	
        	     	 document.getElementById("cash3").appendChild(startamount3);
      			
        	     	 
        	     	 
        	   	 
     	     	  var startamount4;
     	        	
     	        	document.getElementById('cash4').innerHTML = '';
     	       	
     	        	startamount4=document.createElement("div");
     	        	startamount4.className="startamount4";
     	        	startamount44=startamount44+Math.floor(totalamount/4);
     	        	
     	        	
     	        	startamount4.innerHTML=startamount44;
     	        	
     	            document.getElementById("cash4").appendChild(startamount4);
     	     	 
        	 	  var startamount5;
  	        	
  	        	document.getElementById('cash5').innerHTML = '';
  	        	
  	       	
  	        	startamount5=document.createElement("div");
  	        	startamount5.className="startamount5";
  	        	startamount55=startamount55+Math.floor(totalamount/4);
  	        	
  	        	startamount5.innerHTML=startamount55;
  	        	
  	            document.getElementById("cash5").appendChild(startamount5);
	     	 
         	 
      	 
         	 
    		totalamount=0;
    		totalvalue();
    		winner1=false;
    		winner3=false;
    		winner4=false;
    		winner5=false;
    		
    		
    		
    		
    		
    		
    		}
    		
    		
    		
    		if((winner2==true)&&(winner3==true)&&(winner4==true)&&(winner5==true))
    		{
    		
    			
    			 var startamount2;
      	    	
      	    	document.getElementById('cash2').innerHTML = '';
      	    
      	    	startamount2=document.createElement("div");
      	    	startamount2.className="startamount2";
      	    	
      	    	startamount22=startamount22+Math.floor(totalamount/4);
      	    	startamount2.innerHTML=startamount22;
      	    	
      	     	 document.getElementById("cash2").appendChild(startamount2);
       	 	 
      	     	 var startamount3;
       	    	
       	    	document.getElementById('cash3').innerHTML = '';
       	    	
       	    	startamount3=document.createElement("div");
       	    	startamount3.className="startamount3";
       	    	startamount33=startamount33+Math.floor(totalamount/4);
       	    	
       	    	
       	    	startamount3.innerHTML=startamount33;
       	    	
       	     	 document.getElementById("cash3").appendChild(startamount3);
     			
       	     	 
       	     	 
       	   	 
    	     	  var startamount4;
    	        	
    	        	document.getElementById('cash4').innerHTML = '';
    	       	
    	        	startamount4=document.createElement("div");
    	        	startamount4.className="startamount4";
    	        	startamount44=startamount44+Math.floor(totalamount/4);
    	        	
    	        	
    	        	startamount4.innerHTML=startamount44;
    	        	
    	            document.getElementById("cash4").appendChild(startamount4);
    	     	 
       	 	  var startamount5;
 	        	
 	        	document.getElementById('cash5').innerHTML = '';
 	        	
 	       	
 	        	startamount5=document.createElement("div");
 	        	startamount5.className="startamount5";
 	        	startamount55=startamount55+Math.floor(totalamount/4);
 	        	
 	        	startamount5.innerHTML=startamount55;
 	        	
 	            document.getElementById("cash5").appendChild(startamount5);
 	    
         	 
      	 
         	 
    		totalamount=0;
    		totalvalue();
    		winner2=false;
    		winner3=false;
    		winner4=false;
    		winner5=false;
    		
    		
    		
    		
    		
    		
    		}
    		
    		
    		
    		
    		
    		
    		
    		}
    	
    	
    	
    	
    	if(winnercount==5)
    		{
    		
    		
    		
    		winnercount=0;
    		if((winner1==true)&&(winner2==true)&&(winner3==true)&&(winner4==true)&&(winner5==true))
    		{
    		
    			
    			 var startamount1;
      	    	
      	    	document.getElementById('cash1').innerHTML = '';
            	startamount1=document.createElement("div");
      	    	startamount1.className="startamount1";
      	    	
      	    	
      	    	startamount11=startamount11+Math.floor(totalamount/5);
      	    	
      	    	startamount1.innerHTML=startamount11;
      	    	
      	     	 document.getElementById("cash1").appendChild(startamount1);    			
    			
    			
    			
    			
    			 var startamount2;
     	    	
     	    	document.getElementById('cash2').innerHTML = '';
     	    
     	    	startamount2=document.createElement("div");
     	    	startamount2.className="startamount2";
     	    	
     	    	startamount22=startamount22+Math.floor(totalamount/5);
     	    	startamount2.innerHTML=startamount22;
     	    	
     	     	 document.getElementById("cash2").appendChild(startamount2);
      	 	 
     	     	 var startamount3;
      	    	
      	    	document.getElementById('cash3').innerHTML = '';
      	    	
      	    	startamount3=document.createElement("div");
      	    	startamount3.className="startamount3";
      	    	startamount33=startamount33+Math.floor(totalamount/5);
      	    	
      	    	
      	    	startamount3.innerHTML=startamount33;
      	    	
      	     	 document.getElementById("cash3").appendChild(startamount3);
    			
      	     	 
      	     	 
      	   	 
   	     	  var startamount4;
   	        	
   	        	document.getElementById('cash4').innerHTML = '';
   	       	
   	        	startamount4=document.createElement("div");
   	        	startamount4.className="startamount4";
   	        	startamount44=startamount44+Math.floor(totalamount/5);
   	        	
   	        	
   	        	startamount4.innerHTML=startamount44;
   	        	
   	            document.getElementById("cash4").appendChild(startamount4);
   	     	 
      	 	  var startamount5;
	        	
	        	document.getElementById('cash5').innerHTML = '';
	        	
	       	
	        	startamount5=document.createElement("div");
	        	startamount5.className="startamount5";
	        	startamount55=startamount55+Math.floor(totalamount/5);
	        	
	        	startamount5.innerHTML=startamount55;
	        	
	            document.getElementById("cash5").appendChild(startamount5);
	    
         	 
    		totalamount=0;
    		
    		winner1=false;
    		winner2=false;
    		winner3=false;
    		winner4=false;
    		winner5=false;
    		totalvalue();
    		
    		
    		}
    		
    		
    		
    		}
    	
    
    
    
    }
  
