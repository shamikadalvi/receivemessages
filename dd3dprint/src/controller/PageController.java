package controller;

import java.io.InputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;






import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTP;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTblBorders;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTblPr;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STBorder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


import common_things.DB_Connection;



@MultipartConfig(maxFileSize = 16177215) 
@Controller
public class PageController {
	
	
	boolean flag1=false;
	
	  String workorder="";
	     String password="";
	     String thedate="";
	     String themonth="";
	     String theyear="";
	     String maxheads="";
	     String ffs1="";
	     String smartpack="";
	     String weigher="";
	     String midpan="";
	     String gusset="";
	     String inkjet="";
	     String packetcount="";
	     String nrc="";
	     String userpassword="";
	     
	     String ffs2="";
	     String targetwt ="";
	     String vibtime ="";
	     String lowwt ="";
	     String highwt ="";
	     String readdelay ="";
	     String pandelay ="";
	     String targetdivide ="";
	     String weightoffstime ="";
	     String paperlength ="";
	     String printerdelay ="";
	     String paperdelay ="";
	     String printertime ="";
	     String horizontaltime ="";
	     String pmsdelay ="";
	     String horizontaldelay ="";
	     String pmsignore ="";
	     String kniefdelay ="";
	     String nitrogendelay ="";
	     String knieftime ="";
	     String nitrogentime ="";
	     String verticaldelay ="";
	     String gussetdelay ="";
	     String verticaltime ="";
	     String gussettime ="";
	     String stripcount ="";
	     String maxunwindtime ="";
	     String startrpm ="";
	     String weightomidtime ="";
	     String stoprpm ="";
	     String midpanholdtime ="";
	     String maxrpm ="";
	     String midpanopencounts ="";
	     String acclper ="";
	     String midpanrpm ="";
	     String declper ="";
	     String midpanmode ="";
	     String maxmachinespeed ="";
	     String maxspeed ="";
	     String actualmachinespeed ="";
	     
	     
	     
	     String enable1="";
	     String calwt1 ="";
	     String calcount1 ="";
	     String tarewt1 ="";
	     String netwt1 ="";
	     String vib1 ="";
	     String ready1="";
	     String comb1="";
	     String comm1="";
	     
	     
	     
	     
	     String enable2="";
	     String calwt2 ="";
	     String calcount2 ="";
	     String tarewt2 ="";
	     String netwt2 ="";
	     String vib2 ="";
	     String ready2="";
	     String comb2="";
	     String comm2="";
	     
	     
	     
	     
	     
	     String enable3="";
	     String calwt3 ="";
	     String calcount3 ="";
	     String tarewt3 ="";
	     String netwt3 ="";
	     String vib3 ="";
	     String ready3="";
	     String comb3="";
	     String comm3="";
	     
	     
	     
	     
	     String enable4="";
	     String calwt4 ="";
	     String calcount4 ="";
	     String tarewt4 ="";
	     String netwt4 ="";
	     String vib4 ="";
	     String ready4="";
	     String comb4="";
	     String comm4="";
	     
	     
	     
	     String enable5="";
	     String calwt5 ="";
	     String calcount5 ="";
	     String tarewt5 ="";
	     String netwt5 ="";
	     String vib5 ="";
	     String ready5="";
	     String comb5="";
	     String comm5="";
	     
	     
	     
	     
	     String enable6="";
	     String calwt6 ="";
	     String calcount6 ="";
	     String tarewt6 ="";
	     String netwt6 ="";
	     String vib6="";
	     String ready6="";
	     String comb6="";
	     String comm6="";
	     
	     
	     
	     
	     String enable7="";
	     String calwt7 ="";
	     String calcount7 ="";
	     String tarewt7 ="";
	     String netwt7 ="";
	     String vib7 ="";
	     String ready7="";
	     String comb7="";
	     String comm7="";
	     
	     
	     
	     String enable8="";
	     String calwt8 ="";
	     String calcount8 ="";
	     String tarewt8 ="";
	     String netwt8 ="";
	     String vib8 ="";
	     String ready8="";
	     String comb8="";
	     String comm8="";
	     
	     
	     String enable9="";
	     String calwt9 ="";
	     String calcount9 ="";
	     String tarewt9 ="";
	     String netwt9 ="";
	     String vib9 ="";
	     String ready9="";
	     String comb9="";
	     String comm9="";
	     
	     
	     
	     
	     String enable10="";
	     String calwt10 ="";
	     String calcount10 ="";
	     String tarewt10 ="";
	     String netwt10 ="";
	     String vib10 ="";
	     String ready10="";
	     String comb10="";
	     String comm10="";
	     
	     
	     
	     String enable11="";
	     String calwt11 ="";
	     String calcount11 ="";
	     String tarewt11 ="";
	     String netwt11 ="";
	     String vib11 ="";
	     String ready11="";
	     String comb11="";
	     String comm11="";
	     
	     
	     
	     
	     String enable12="";
	     String calwt12 ="";
	     String calcount12 ="";
	     String tarewt12 ="";
	     String netwt12="";
	     String vib12 ="";
	     String ready12="";
	     String comb12="";
	     String comm12="";
	     
	     
	     
	     
	     String enable13="";
	     String calwt13 ="";
	     String calcount13 ="";
	     String tarewt13 ="";
	     String netwt13 ="";
	     String vib13 ="";
	     String ready13="";
	     String comb13="";
	     String comm13="";
	     
	     
	     
	     String enable14="";
	     String calwt14 ="";
	     String calcount14 ="";
	     String tarewt14 ="";
	     String netwt14 ="";
	     String vib14 ="";
	     String ready14="";
	     String comb14="";
	     String comm14="";
	     
	     
	     
	     
	     String out1="";
	     String out2="";
	     String out3="";
	     String out4="";
	     String out5="";
	     String out6="";
	     String out7="";
	     String out8="";
	     String out9="";
	     String out10="";
	     String out11="";
	     String out12="";
	     String out13="";
	     String out14="";
	     String out15="";
	     String out16="";
	     String out17="";
	     String out18="";
	     String out19="";
	     String out20="";
	     String out21="";
	     String out22="";
	     String out23="";
	     String out24="";
	     
	     
	     
	     
	     String in1="";
	     String in2="";
	     String in3="";
	     String in4="";
	     String in5="";
	     String in6="";
	     String in7="";
	     String in8="";
	     String in9="";
	     String in10="";
	     String in11="";
	     String in12="";
	     String in13="";
	     String in14="";
	     String in15="";
	     String in16="";
	     String in17="";
	     String in18="";
	     String in19="";
	     String in20="";
	     String in21="";
	     String in22="";
	     String in23="";
	     String in24="";
//	PrintWriter writer = null;
	
	
	public String transamount22;
	public String orderid22;
	//useSSL=false;	
	public String getTransamount22() {
		return transamount22;
	}






	public void setTransamount22(String transamount22) {
		this.transamount22 = transamount22;
	}






	public String getOrderid22() {
		return orderid22;
	}






	public void setOrderid22(String orderid22) {
		this.orderid22 = orderid22;
	}





	HashMap<String, String[][]> hmr = new HashMap<String, String[][]>();
	
	 @RequestMapping(value="/dummy1.htm", method = RequestMethod.GET)
	  public ModelAndView ChangeDate(HttpServletRequest request, HttpServletResponse response) {

       
       
       ModelAndView model1 = new ModelAndView();
       
		//model1.addObject("msg", "Hello Spring");
		
       
       try {
       	
    	    //Date today = new Date();
 		   // SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("MM/dd/yyyy");
 	       // String date = DATE_FORMAT.format(today);
 	        //System.out.println("Today in dd-MM-yyyy format : " + date);
    	   
    	  // uf.updatepage();
    	//   hmr = tc.readTables();
    	   
    	   System.out.println("reached here dummy1.htm #***# read tables");
    	   
    		String count[][] = hmr.get("count");
    	
    
    	  int n=1;
    	  for(n=1;n<6;n++)
    	  {
    		  
    	    model1.addObject("event"+n,        count[n][0]);
       	    model1.addObject("calendar"+n,     count[n][1]);
       	    model1.addObject("month"+n,        count[n][2]);
       	    model1.addObject("date"+n,         count[n][3]);
       	    model1.addObject("year"+n,         count[n][4]);
       	    model1.addObject("hour"+n,         count[n][5]);
       	    model1.addObject("min"+n,         count[n][6]); 
    	  }
    	  
    	
    	   
    	   System.out.println("reached here index9");
  		    
    	   
  	
								
    	   
    	   model1.setViewName("index9"); 
       	
       	
       	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			
		} 

       
       return model1;
       
     
	}
	
	
	 
	 
	 
	 
	 @RequestMapping(value="/dummy2.htm", method = RequestMethod.POST)
	  public ModelAndView User_Password(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("form1") formtrial form1) {

		    
      
      ModelAndView model1 = new ModelAndView();
      
		model1.addObject("msg", "Hello Spring");
		
      
      try {
      
   
   	   
   		String count[][] = hmr.get("count");
   	
   
    	  String user_name =form1.getUser_name();
       	  String password=form1.getPassword();
       	  
       	  
       	usermodel um =new usermodel();
       boolean flag1=	um.check_user_name(form1);
       if(flag1==true)
       {
    	   
    	   System.out.println("reached here index16");
    		model1.addObject("user_name",  user_name);
      	    model1.addObject("password",  password);
      	   model1.setViewName("index16"); 
           	  
       	   System.out.println("reached here index16");
       }
       	  
       else
       {
    	   System.out.println("not reached here index15");
    	   model1.setViewName("index15");
    	   
       }
       
     	
      	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			
		} 

      
      return model1;
      
    
	   }
	 
	 
	 
	 
	 
	@RequestMapping(value="/sendmessage.htm", method = RequestMethod.POST)
	  public ModelAndView SendMessage(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("message") sendmessage message) {

		    
     
     ModelAndView model1 = new ModelAndView();
     
     
     String newmessage =message.getSendmessage();
     System.out.println("msg is " + newmessage);
     DB_Connection db=new DB_Connection();
     Connection connection=null;
    
     connection=db.getConnection();
       Statement st1=null;
	   ResultSet rs=null;
	   
	   PreparedStatement ps1=null;
	   ResultSet rs1=null; 	
	   
	   String query3="";
		
     
     try {
     
  
  	   
    	 query3="UPDATE newmessage SET " + "msgvalue" + "="  +"'"  +newmessage+ "'" +    "WHERE ID=12";
    	 
    	 
    		st1=connection.createStatement();
	    	st1.execute(query3); 
	    	System.out.println( "success");
  	
	    	
	           model1.addObject("newmessage",  newmessage);
	     	   model1.setViewName("index67"); 
  
   	 
      	 
      	  
    
			
		} catch (Exception e) {
			    System.out.println("failed to  save data");
				e.printStackTrace();
				model1.setViewName("index67"); 
		
			
		} 

     
     return model1;
     
   
	   }
	 
	 
	 
	 
	 
	 
	 @RequestMapping(value="/dummy44.htm", method = RequestMethod.POST)
	  public ModelAndView Transaction(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("trans") transaction trans) {

		    
   
   ModelAndView model1 = new ModelAndView();
   
		//model1.addObject("msg", "Hello Spring");
		
   
   try {
   

	
 	   
 	        System.out.println("reached here test txn");
 	        
 	        
 	        
 	      // String transamount1 = trans.getTXN_AMOUNT();
 	       
 	      //System.out.println("initial value is" + transamount1);
 	       
 	       //model1.addObject("trans1",  transamount1); 
 	       
 		   //System.out.println("the value of trans is " + transamount1 );
 		   
 		   
 		   
 		   
 		 
 		   
 		  //String transcation=transamount1 ;
           //model1.addObject("transcation",  transcation); 
 	       
 		   //System.out.println("the final value of transaction is " + transcation );
 		   
 		   
 		   
 		  
   	       model1.setViewName("TxnTest"); 
        	  
    	  
  
  	
   	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			
		} 

   
   return model1;
   
 
	   }
	 
	 
	 
	 
	 
	 @RequestMapping(value="/dummy11.htm", method = RequestMethod.POST)
	  public ModelAndView Transaction1(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("trans") transaction trans) {

		    
  
  ModelAndView model1 = new ModelAndView();
  
		//model1.addObject("msg", "Hello Spring");
		
  
  try {
  

	
	   
	        System.out.println("reached here test txn");
	        
	        
	        
	        int transamount1 = trans.getRubikscube();
	        int transamount2=trans.getBlindcube();
	       
	       
		   int transcation=transamount1 + transamount2;
          model1.addObject("transcation",  transcation); 
	       
		   System.out.println("the final value of transaction is " + transcation );
		   
	
  	       model1.setViewName("TxnTest"); 
       	  
   	  
 
 	
  	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			
		} 

  
  return model1;
  

	   }
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 @RequestMapping(value="/dummy200.htm", method = RequestMethod.POST)
	  public ModelAndView led1(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("led") ledblink led) {

		    
  
  ModelAndView model1 = new ModelAndView();
 
      String datavalue="";
  
       DB_Connection db=new DB_Connection();
       Connection connection=null;
       Connection connection1=null;
       
	   PreparedStatement ps=null;
	   ResultSet rs=null;
	   
	   PreparedStatement ps1=null;
	   ResultSet rs1=null;
  
  
		//model1.addObject("msg", "Hello Spring");
		
  
  try {
  

	       String ledstring="";
	   
	        System.out.println("reached here test txn");
	        
	        
	        
	        int ledvalue = led.getNumber();
	       
	       
	        
	        if(ledvalue==0)
	        {
	        	
	        	ledstring="OFF";
	        }
	        
	        
	        if(ledvalue%2==0)
	        {
	        	ledstring="OFF";
	        	
	        }
	        
	        
	        
	        if(ledvalue%2==1)
	        {
	        	ledstring="ON";
	        	
	        }
	        
	        
	        System.out.println("the final value of led is " + ledstring );   
	        
	        
	           connection=db.getConnection();
	      
	            String query="insert into ledstate (state)"+"values(?)";
			    ps=connection.prepareStatement(query);
			    ps.setString(1,ledstring);
	        
	        
			    System.out.println(ps);
				ps.execute();
				System.out.println("successfully saved data in the backend");
		  
               model1.addObject("ledstring",  ledstring); 
	       
		  
               
               connection1=db.getConnection();
               Statement st1=null;
               String query1="select * from datastate";
               
               st1=connection.createStatement();
       		
   			rs1=st1.executeQuery(query1);    
   			if(rs1.last()==true)
   			{
   				
   				flag1=true;
   				
   				
   				
   				
   			 datavalue = rs1.getString("data");
   			 
   			 
   			 
   			}
   			
               
               
   		 model1.addObject("datastring",  datavalue);    
               
               
               
               
               
               
               
		   
	
  	       model1.setViewName("index65"); 
       	  
   	  
 
 	
  	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			System.out.println("Unsuccessfully saved data in the backend");
			System.out.println("Error occured");
			 model1.setViewName("index65"); 
			
		} 
  
  
  
  finally
  {
  	if(connection!=null)
  		try {
  			connection.close();
  			
  			
  			
  			// model1.setViewName("index25"); 
  			
  			
  		} catch (SQLException e) 
  	   {
  			// TODO Auto-generated catch block
  			e.printStackTrace();
  		}
  	
  	
  	
  	if(connection1!=null)
  		try {
  			connection1.close();
  			
  			
  			
  			// model1.setViewName("index25"); 
  			
  			
  		} catch (SQLException e) 
  	   {
  			// TODO Auto-generated catch block
  			e.printStackTrace();
  		}
  	
  	
  	
  	}


  
  return model1;
  

	   }
	 
	 
	 
	 
	 @RequestMapping(value="/machine.htm", method = RequestMethod.POST)
	  public ModelAndView machine(HttpServletRequest request, HttpServletResponse response) {

		    
 
 ModelAndView model1 = new ModelAndView();

   
     
     
     
      DB_Connection db=new DB_Connection();
      Connection connection=null;
      Connection connection1=null;
      
	   PreparedStatement ps=null;
	   ResultSet rs=null;
	   
	   PreparedStatement ps1=null;
	   ResultSet rs1=null;
 
 
		//model1.addObject("msg", "Hello Spring");
		
 
 try {
 

	      
	   
	        System.out.println("reached here test txn");
	        
	        
	          connection1=db.getConnection();
              Statement st1=null;
              String query1="select * from newparameters where ID=12019197";
              
              st1=connection1.createStatement();
      		
  			rs1=st1.executeQuery(query1);    
  			if(rs1.last()==true)
  			{
  				
  				flag1=true;
  				
  				
  				
  				
  				workorder = rs1.getString("workorder");
  				password = rs1.getString("password");
  				thedate = rs1.getString("thedate");
  				themonth = rs1.getString("themonth");
  				theyear = rs1.getString("theyear");
  				maxheads = rs1.getString("maxheads");
  				ffs1 = rs1.getString("ffs1");
  			  
  				
  				  smartpack=rs1.getString("smartpack");
  			      weigher=rs1.getString("weigher");
  			      midpan=rs1.getString("midpan");
  			      gusset=rs1.getString("gusset");
  			      inkjet=rs1.getString("inkjet");
  			      packetcount=rs1.getString("packetcount");
  			      nrc=rs1.getString("nrc");
  			      userpassword=rs1.getString("userpassword");
  				
  				
  				
  	
  			      ffs2=rs1.getString("ffs2");
  			      targetwt =rs1.getString("targetwt");
  			      vibtime =rs1.getString("vibtime");
  			      lowwt =rs1.getString("lowwt");
  			      highwt =rs1.getString("highwt");
  			      readdelay =rs1.getString("readdelay");
  			      pandelay =rs1.getString("pandelay");
  			     targetdivide =rs1.getString("targetdivide");
  			     weightoffstime =rs1.getString("weightoffstime");
  			      paperlength =rs1.getString("paperlength");
  			      printerdelay =rs1.getString("printerdelay");
  			      paperdelay =rs1.getString("paperdelay");
  			      printertime =rs1.getString("printertime");
  			      horizontaltime =rs1.getString("horizontaltime");
  			      pmsdelay =rs1.getString("pmsdelay");
  			      horizontaldelay =rs1.getString("horizontaldelay");
  			     pmsignore =rs1.getString("pmsignore");
  			      kniefdelay =rs1.getString("kniefdelay");
  			      nitrogendelay =rs1.getString("nitrogendelay");
  			      knieftime =rs1.getString("knieftime");
  			      nitrogentime =rs1.getString("nitrogentime");
  			      verticaldelay =rs1.getString("verticaldelay");
  			      gussetdelay =rs1.getString("gussetdelay");
  			      verticaltime =rs1.getString("verticaltime");
  			      gussettime =rs1.getString("gussettime");
  			      stripcount =rs1.getString("stripcount");
  			      maxunwindtime =rs1.getString("maxunwindtime");
  			      startrpm =rs1.getString("startrpm");
  			      weightomidtime =rs1.getString("weightomidtime");
  			      stoprpm =rs1.getString("stoprpm");
  			      midpanholdtime =rs1.getString("midpanholdtime");
  			     maxrpm =rs1.getString("maxrpm");
  			      midpanopencounts =rs1.getString("midpanopencounts");
  			      acclper =rs1.getString("acclper");
  			      midpanrpm =rs1.getString("midpanrpm");
  			      declper =rs1.getString("declper");
  			      midpanmode =rs1.getString("midpanmode");
  			      maxmachinespeed =rs1.getString("maxmachinespeed");
  			      maxspeed =rs1.getString("maxspeed");
  			      actualmachinespeed =rs1.getString("actualmachinespeed");
  			      
  			      
  			      
  			      
  			      
  			      
  			     enable1=rs1.getString("enable1");
  			      calwt1 =rs1.getString("calwt1");
  			      calcount1 =rs1.getString("calcount1");
  			      tarewt1 =rs1.getString("tarewt1");
  			      netwt1 =rs1.getString("netwt1");
  			      vib1 =rs1.getString("vib1");
  			      ready1=rs1.getString("ready1");
  			      comb1=rs1.getString("comb1");
  			      comm1=rs1.getString("comm1");
  			     
  			     
  			     
  			     
  			     enable2=rs1.getString("enable2");
			      calwt2 =rs1.getString("calwt2");
			      calcount2 =rs1.getString("calcount2");
			      tarewt2 =rs1.getString("tarewt2");
			      netwt2 =rs1.getString("netwt2");
			      vib2 =rs1.getString("vib2");
			      ready2=rs1.getString("ready2");
			      comb2=rs1.getString("comb2");
			      comm2=rs1.getString("comm2");
  			     
  			     
  			     
  			     
  			     
			      enable3=rs1.getString("enable3");
  			      calwt3 =rs1.getString("calwt3");
  			      calcount3 =rs1.getString("calcount3");
  			      tarewt3 =rs1.getString("tarewt3");
  			      netwt3 =rs1.getString("netwt3");
  			      vib3 =rs1.getString("vib3");
  			      ready3=rs1.getString("ready3");
  			      comb3=rs1.getString("comb3");
  			      comm3=rs1.getString("comm3");
  			     
  			     
  			     
  			     
  			    enable4=rs1.getString("enable4");
			      calwt4 =rs1.getString("calwt4");
			      calcount4 =rs1.getString("calcount4");
			      tarewt4 =rs1.getString("tarewt4");
			      netwt4 =rs1.getString("netwt4");
			      vib4 =rs1.getString("vib4");
			      ready4=rs1.getString("ready4");
			      comb4=rs1.getString("comb4");
			      comm4=rs1.getString("comm4");
  			     
  			     
			      enable5=rs1.getString("enable5");
  			      calwt5 =rs1.getString("calwt5");
  			      calcount5 =rs1.getString("calcount5");
  			      tarewt5 =rs1.getString("tarewt5");
  			      netwt5 =rs1.getString("netwt5");
  			      vib5 =rs1.getString("vib5");
  			      ready5=rs1.getString("ready5");
  			      comb5=rs1.getString("comb5");
  			      comm5=rs1.getString("comm5");
  			     
  			     
  			     
  			    enable6=rs1.getString("enable6");
			      calwt6 =rs1.getString("calwt6");
			      calcount6 =rs1.getString("calcount6");
			      tarewt6 =rs1.getString("tarewt6");
			      netwt6 =rs1.getString("netwt6");
			      vib6 =rs1.getString("vib6");
			      ready6=rs1.getString("ready6");
			      comb6=rs1.getString("comb6");
			      comm6=rs1.getString("comm6");
  			     
  			     
  			     
			      enable7=rs1.getString("enable7");
  			      calwt7 =rs1.getString("calwt7");
  			      calcount7 =rs1.getString("calcount7");
  			      tarewt7 =rs1.getString("tarewt7");
  			      netwt7 =rs1.getString("netwt7");
  			      vib7 =rs1.getString("vib7");
  			      ready7=rs1.getString("ready7");
  			      comb7=rs1.getString("comb7");
  			      comm7=rs1.getString("comm7");
  			     
  			     
  			     
  			    enable8=rs1.getString("enable8");
			      calwt8 =rs1.getString("calwt8");
			      calcount8 =rs1.getString("calcount8");
			      tarewt8 =rs1.getString("tarewt8");
			      netwt8 =rs1.getString("netwt8");
			      vib8 =rs1.getString("vib8");
			      ready8=rs1.getString("ready8");
			      comb8=rs1.getString("comb8");
			      comm8=rs1.getString("comm8");
  			     
  			     
			      enable9=rs1.getString("enable9");
  			      calwt9 =rs1.getString("calwt9");
  			      calcount9 =rs1.getString("calcount9");
  			      tarewt9 =rs1.getString("tarewt9");
  			      netwt9 =rs1.getString("netwt9");
  			      vib9 =rs1.getString("vib9");
  			      ready9=rs1.getString("ready9");
  			      comb9=rs1.getString("comb9");
  			      comm9=rs1.getString("comm9");
  			     
  			     
  			     
  			      enable10=rs1.getString("enable10");
			      calwt10 =rs1.getString("calwt1");
			      calcount10 =rs1.getString("calcount10");
			      tarewt10 =rs1.getString("tarewt10");
			      netwt10 =rs1.getString("netwt10");
			      vib10 =rs1.getString("vib10");
			      ready10=rs1.getString("ready10");
			      comb10=rs1.getString("comb10");
			      comm10=rs1.getString("comm10");
			     
  			     
  			     
			      enable11=rs1.getString("enable11");
  			      calwt11 =rs1.getString("calwt11");
  			      calcount11 =rs1.getString("calcount11");
  			      tarewt11 =rs1.getString("tarewt11");
  			      netwt11 =rs1.getString("netwt11");
  			      vib11 =rs1.getString("vib11");
  			      ready11=rs1.getString("ready11");
  			      comb11=rs1.getString("comb11");
  			      comm11=rs1.getString("comm11");
  			     
  			     
  			       enable12=rs1.getString("enable12");
			      calwt12 =rs1.getString("calwt12");
			      calcount12 =rs1.getString("calcount12");
			      tarewt12 =rs1.getString("tarewt12");
			      netwt12 =rs1.getString("netwt12");
			      vib12 =rs1.getString("vib12");
			      ready12=rs1.getString("ready12");
			      comb12=rs1.getString("comb12");
			      comm12=rs1.getString("comm12");
  			     
  			     
  			     
			      enable13=rs1.getString("enable13");
  			      calwt13 =rs1.getString("calwt13");
  			      calcount13 =rs1.getString("calcount13");
  			      tarewt13 =rs1.getString("tarewt13");
  			      netwt13 =rs1.getString("netwt13");
  			      vib13 =rs1.getString("vib13");
  			      ready13=rs1.getString("ready13");
  			      comb13=rs1.getString("comb13");
  			      comm13=rs1.getString("comm13");
  			     
  			      enable14=rs1.getString("enable14");
			      calwt14 =rs1.getString("calwt14");
			      calcount14 =rs1.getString("calcount14");
			      tarewt14 =rs1.getString("tarewt14");
			      netwt14 =rs1.getString("netwt14");
			      vib14 =rs1.getString("vib14");
			      ready14=rs1.getString("ready14");
			      comb14=rs1.getString("comb14");
			      comm14=rs1.getString("comm14");
			      
			      
			      
			      
			        out1=rs1.getString("out1");
				      out2=rs1.getString("out2");
				      out3=rs1.getString("out3");
				      out4=rs1.getString("out4");
				      out5=rs1.getString("out5");
				      out6=rs1.getString("out6");
				      out7=rs1.getString("out7");
				      out8=rs1.getString("out8");
				      out9=rs1.getString("out9");
				      out10=rs1.getString("out10");
				      out11=rs1.getString("out11");
				      out12=rs1.getString("out12");
				      out13=rs1.getString("out13");
				      out14=rs1.getString("out14");
				      out15=rs1.getString("out15");
				      out16=rs1.getString("out16");
				      out17=rs1.getString("out17");
				      out18=rs1.getString("out18");
				      out19=rs1.getString("out19");
				      out20=rs1.getString("out20");
				      out21=rs1.getString("out21");
				      out22=rs1.getString("out22");
				      out23=rs1.getString("out23");
				      out24=rs1.getString("out24");
  			    
  			      
  			      
  			          
				      
				      in1=rs1.getString("in1");
				      in2=rs1.getString("in2");
				      in3=rs1.getString("in3");
				      in4=rs1.getString("in4");
				      in5=rs1.getString("in5");
				      in6=rs1.getString("in6");
				      in7=rs1.getString("in7");
				      in8=rs1.getString("in8");
				      in9=rs1.getString("in9");
				      in10=rs1.getString("in10");
				      in11=rs1.getString("in11");
				      in12=rs1.getString("in12");
				      in13=rs1.getString("in13");
				      in14=rs1.getString("in14");
				      in15=rs1.getString("in15");
				      in16=rs1.getString("in16");
				      in17=rs1.getString("in17");
				      in18=rs1.getString("in18");
				      in19=rs1.getString("in19");
				      in20=rs1.getString("in20");
				      in21=rs1.getString("in21");
				      in22=rs1.getString("in22");
				      in23=rs1.getString("in23");
				      in24=rs1.getString("in24");
				      
				      
  			 
  			}
  			
              
              
  		 model1.addObject("workorder",  workorder);    
  		 model1.addObject("password",  password);  
  		 model1.addObject("thedate",  thedate);  
  		 model1.addObject("themonth",  themonth);  
  		 model1.addObject("theyear",  theyear);  
  		 model1.addObject("maxheads",  maxheads);
  		 model1.addObject("packetcount",  packetcount);
  		 model1.addObject("nrc",  nrc);
  		 model1.addObject("userpassword",  userpassword);
  		 
  		 
  		 model1.addObject("targetwt",  targetwt);
  		 model1.addObject("vibtime",  vibtime);
  		 model1.addObject("lowwt",  lowwt);
  		 model1.addObject("highwt",  highwt);
  		 model1.addObject("readdelay",  readdelay);
  		 model1.addObject("pandelay",  pandelay);
  		 model1.addObject("targetdivide",  targetdivide);
  		 model1.addObject("weightoffstime",  weightoffstime);
  		 model1.addObject("paperlength",  paperlength);
  		 model1.addObject("printerdelay",  printerdelay);
  		 model1.addObject("paperdelay",  paperdelay);
  		 model1.addObject("printertime",  printertime);
  		 model1.addObject("horizontaltime",  horizontaltime);
  		 model1.addObject("pmsdelay",  pmsdelay);
  		 model1.addObject("horizontaldelay",  horizontaldelay );
  		 model1.addObject("pmsignore",  pmsignore);
  		 model1.addObject("kniefdelay",  kniefdelay);
  		 model1.addObject("nitrogendelay", nitrogendelay );
  		 model1.addObject("knieftime",knieftime  );
  		 model1.addObject("nitrogentime", nitrogentime );
  		 model1.addObject("verticaldelay", verticaldelay );
  		 model1.addObject("gussetdelay",gussetdelay  );
  		 model1.addObject("verticaltime",  verticaltime);
  		 model1.addObject("gussettime",  gussettime);
  		 model1.addObject("stripcount",  stripcount);
  		 model1.addObject("maxunwindtime",  maxunwindtime);
  		 model1.addObject("startrpm",  startrpm);
  		 model1.addObject("weightomidtime",  weightomidtime);
  		 model1.addObject("stoprpm",  stoprpm);
  		 model1.addObject("midpanholdtime",  midpanholdtime);
  		 model1.addObject("maxrpm", maxrpm);
  		 model1.addObject("midpanopencounts",  midpanopencounts);
  		 model1.addObject("acclper",  acclper);
  		 model1.addObject("midpanrpm",  midpanrpm);
  		 model1.addObject("declper",  declper);
  		 model1.addObject("midpanmode",  midpanmode);
  		 model1.addObject("maxmachinespeed",  maxmachinespeed);
  		 model1.addObject("maxspeed",  maxspeed);
  		 model1.addObject("actualmachinespeed",  actualmachinespeed);
  		 
  		 
  		 
  		 model1.addObject("calwt1",  calwt1);
  		 model1.addObject("calcount1",  calcount1);
  		 model1.addObject("tarewt1",  tarewt1);
  		 model1.addObject("netwt1",  netwt1);
  		 model1.addObject("vib1",  vib1);
  		 model1.addObject("comm1",  comm1);
  		 
  		 
  	
  		 model1.addObject("calwt2",  calwt2);
  		 model1.addObject("calcount2",  calcount2);
  		 model1.addObject("tarewt2",  tarewt2);
  		 model1.addObject("netwt2",  netwt2);
  		 model1.addObject("vib2",  vib2);
  		 model1.addObject("comm2",  comm2);
  		 
  		 
  		 
  		 
  		 model1.addObject("calwt3",  calwt3);
  		 model1.addObject("calcount3",  calcount3);
  		 model1.addObject("tarewt3",  tarewt3);
  		 model1.addObject("netwt3",  netwt3);
  		 model1.addObject("vib3",  vib3);
  		 model1.addObject("comm3",  comm3);
  		 
  		 
  		 
  		 
  		 model1.addObject("calwt4",  calwt4);
  		 model1.addObject("calcount4",  calcount4);
  		 model1.addObject("tarewt4",  tarewt4);
  		 model1.addObject("netwt4",  netwt4);
  		 model1.addObject("vib4",  vib4);
  		 model1.addObject("comm4",  comm4);
  		 
  		 
  		 
  		 
  		 model1.addObject("calwt5",  calwt5);
  		 model1.addObject("calcount5",  calcount5);
  		 model1.addObject("tarewt5",  tarewt5);
  		 model1.addObject("netwt5",  netwt5);
  		 model1.addObject("vib5",  vib5);
  		 model1.addObject("comm5",  comm5);
  		 
  		 
  		 
  		 model1.addObject("calwt6",  calwt6);
  		 model1.addObject("calcount6",  calcount6);
  		 model1.addObject("tarewt6",  tarewt6);
  		 model1.addObject("netwt6",  netwt6);
  		 model1.addObject("vib6",  vib6);
  		 model1.addObject("comm6",  comm6);
  		 
  		 
  		 
  		 
  		 model1.addObject("calwt7",  calwt7);
  		 model1.addObject("calcount7",  calcount7);
  		 model1.addObject("tarewt7",  tarewt7);
  		 model1.addObject("netwt7",  netwt7);
  		 model1.addObject("vib7",  vib7);
  		 model1.addObject("comm7",  comm7);
  		 
  		 
  		 
  		 model1.addObject("calwt8",  calwt8);
  		 model1.addObject("calcount8",  calcount8);
  		 model1.addObject("tarewt8",  tarewt8);
  		 model1.addObject("netwt8",  netwt8);
  		 model1.addObject("vib8",  vib8);
  		 model1.addObject("comm8",  comm8);
  		 
  		model1.addObject("calwt9",  calwt9);
 		 model1.addObject("calcount9",  calcount9);
 		 model1.addObject("tarewt9",  tarewt9);
 		 model1.addObject("netwt9",  netwt9);
 		 model1.addObject("vib9",  vib9);
 		 model1.addObject("comm9",  comm9);
  		 
  		 
 		 
 		 
 		 
 		 model1.addObject("calwt10",  calwt10);
  		 model1.addObject("calcount10",  calcount10);
  		 model1.addObject("tarewt10",  tarewt10);
  		 model1.addObject("netwt10",  netwt10);
  		 model1.addObject("vib10",  vib10);
  		 model1.addObject("comm10",  comm10);
  		 
 		 
 		 
  		 model1.addObject("calwt11",  calwt11);
  		 model1.addObject("calcount11",  calcount11);
  		 model1.addObject("tarewt11",  tarewt11);
  		 model1.addObject("netwt11",  netwt11);
  		 model1.addObject("vib11",  vib11);
  		 model1.addObject("comm11",  comm11);
  		 
  		 
  		 
  		 model1.addObject("calwt12",  calwt12);
  		 model1.addObject("calcount12",  calcount12);
  		 model1.addObject("tarewt12",  tarewt12);
  		 model1.addObject("netwt12",  netwt12);
  		 model1.addObject("vib12",  vib12);
  		 model1.addObject("comm12",  comm12);
  		 
  		 
  		 
  		 
  		 model1.addObject("calwt13",  calwt13);
  		 model1.addObject("calcount13",  calcount13);
  		 model1.addObject("tarewt13",  tarewt13);
  		 model1.addObject("netwt13",  netwt13);
  		 model1.addObject("vib13",  vib13);
  		 model1.addObject("comm13",  comm13);
  		 
  		 
  		 
  		 model1.addObject("calwt14",  calwt14);
  		 model1.addObject("calcount14",  calcount14);
  		 model1.addObject("tarewt14",  tarewt14);
  		 model1.addObject("netwt14",  netwt14);
  		 model1.addObject("vib14",  vib14);
  		 model1.addObject("comm14",  comm14);
  		 
  		 
  		 
  		 
  		 //int ffs1new =Integer.parseInt(ffs1);
  		 
  		 //int en1new =Integer.parseInt(enable1);
  		 //System.out.println("**the value of enablenew 1 is** " + en1new);
  		 
  		 
  		 if(ffs1.substring(0, 1).equals("0"))
  			 
  		 
  		 {
  		 
  		 model1.addObject("ffs1",  "ffs1");  
              
              
  		 }    
              
              
        
  		 
  		 if(ffs1.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("ffs1",  "ffs1on");  
              
              
  		 }    
  		 
  		 
  		 
  		 if(smartpack.substring(0, 1).equals("0"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("smartpack",  "smartpack");  
              
              
  		 }    
              
              
        
  		 
  		 if(smartpack.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("smartpack",  "smartpackon");  
              
              
  		 }    
  		 
  		 
  		 
  		 
  		 if(weigher.substring(0, 1).equals("0"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("weigher",  "weigher");  
              
              
  		 }    
              
              
        
  		 
  		 if(weigher.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("weigher",  "weigheron");  
              
              
  		 }    
  		 
  		 
  		 

  		 if(midpan.substring(0, 1).equals("0"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("midpan",  "midpan");  
              
              
  		 }    
              
              
        
  		 
  		 if(midpan.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("midpan",  "midpanon");  
              
              
  		 }    
  		 
  		 
  		 
          if(gusset.substring(0, 1).equals("0"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("gusset",  "gusset");  
              
              
  		 }    
              
              
        
  		 
  		 if(gusset.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("gusset",  "gusseton");  
              
              
  		 }    
  		 
  		 
  		 
  		 
  		 
         if(inkjet.substring(0, 1).equals("0"))
 			 
 	  		 
 		 {
 		 
 		 model1.addObject("inkjet",  "inkjet");  
             
             
 		 }    
             
             
       
 		 
 		 if(inkjet.substring(0, 1).equals("1"))
 			 
 	  		 
 		 {
 		 
 		 model1.addObject("inkjet",  "inkjeton");  
             
             
 		 }  
  		 
  		 
  		 
 		 
 		 
 		 if(ffs2.substring(0, 1).equals("0"))
  			 
 	  		 
  		 {
  		 
  		 model1.addObject("ffs2",  "ffs2");  
              
              
  		 }    
              
              
        
  		 
  		 if(ffs2.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("ffs2",  "ffs2on");  
              
              
  		 }    
  		 
  		 
  		 
  		// System.out.println("**the value of enable 1 is** " + enable1);
  		 
  		
  		 
  		 
  		 
      if(enable1.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
    	  
    	 
  		 model1.addObject("en1",  "en1");  
  		
              
  		 }    
              
              
        
  		 
  		 if(enable1.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  			
  		 model1.addObject("en1",  "en1on");  
              
              
  		 }    
  		 
  		 
  		 
  		 
  		if(ready1.substring(0, 1).equals("1"))
 			 
 	  		 
 		 {
 		 
 		 model1.addObject("ready1",  "ready1");  
             
             
 		 }    
             
             
       
 		 
 		 if(ready1.substring(0, 1).equals("0"))
 			 
 	  		 
 		 {
 		 
 		 model1.addObject("ready1",  "ready1on");  
             
             
 		 }    
 		 
  		
 		 
 		 
 		 
 		 
 		 
   		if(comb1.substring(0, 1).equals("0"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("comb1",  "comb1");  
              
              
  		 }    
              
              
        
  		 
  		 if(comb1.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("comb1",  "comb1on");  
              
              
  		 }    
  		 
  		 
  		 
  		 
  		 
  		
		   
  		 
           if(enable2.substring(0, 1).equals("0"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("en2",  "en2");  
              
              
  		 }    
              
              
        
  		 
  		 if(enable2.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("en2",  "en2on");  
              
              
  		 }    
  		 
  		 
  		 
  		if(ready2.substring(0, 1).equals("0"))
 			 
 	  		 
 		 {
 		 
 		 model1.addObject("ready2",  "ready2");  
             
             
 		 }    
             
             
       
 		 
 		 if(ready2.substring(0, 1).equals("1"))
 			 
 	  		 
 		 {
 		 
 		 model1.addObject("ready2",  "ready2on");  
             
             
 		 }    
 		 
  		
 		 
 		 
 		 
 		 
 		 
   		if(comb2.substring(0, 1).equals("0"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("comb2",  "comb2");  
              
              
  		 }    
              
              
        
  		 
  		 if(comb2.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("comb2",  "comb2on");  
              
              
  		 }    
  		 
  		 
  		 
  		 
  		 
  		 
  		 
       if(enable3.substring(0, 1).equals("0"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("en3",  "en3");  
              
              
  		 }    
              
              
        
  		 
  		 if(enable3.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("en3",  "en3on");  
              
              
  		 }    
  		 
  		 
  		 
  		if(ready3.substring(0, 1).equals("0"))
 			 
 	  		 
 		 {
 		 
 		 model1.addObject("ready3",  "ready3");  
             
             
 		 }    
             
             
       
 		 
 		 if(ready3.substring(0, 1).equals("1"))
 			 
 	  		 
 		 {
 		 
 		 model1.addObject("ready3",  "ready3on");  
             
             
 		 }    
 		 
  		
 		 
 		 
 		 
 		 
 		 
   		if(comb3.substring(0, 1).equals("0"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("comb3",  "comb3");  
              
              
  		 }    
              
              
        
  		 
  		 if(comb3.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("comb3",  "comb3on");  
              
              
  		 }    
  		 
  		 
  		 
  		 
  		 
  		 
  		 
         if(enable4.substring(0, 1).equals("0"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("en4",  "en4");  
              
              
  		 }    
              
              
        
  		 
  		 if(enable4.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("en4",  "en4on");  
              
              
  		 }    
  		 
  		 
  		 
  		 
  	   if(ready4.substring(0, 1).equals("0"))
			 
	  		 
		 {
		 
		 model1.addObject("ready4",  "ready4");  
           
           
		 }    
		 
  		
  		
       if(ready4.substring(0, 1).equals("1"))
 			 
 	  		 
 		 {
 		 
 		 model1.addObject("ready4",  "ready4on");  
             
             
 		 }    
 		 
  		
 		 
 		 
 		 
 		 
 		 
   		if(comb4.substring(0, 1).equals("0"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("comb4",  "comb4");  
              
              
  		 }    
              
              
        
  		 
  		 if(comb4.substring(0, 1).equals("1"))
  			 
  	  		 
  		 {
  		 
  		 model1.addObject("comb4",  "comb4on");  
              
              
  		 }    
  		 
  		 
  		 
  		 
  		 
  		 
  		 
  		 
  		 
         if(enable5.substring(0, 1).equals("0"))
    			 
    	  		 
    		 {
    		 
    		 model1.addObject("en5",  "en5");  
                
                
    		 }    
                
                
          
    		 
    		 if(enable5.substring(0, 1).equals("1"))
    			 
    	  		 
    		 {
    		 
    		 model1.addObject("en3",  "en3on");  
                
                
    		 }    
    		 
    		 
    		 
    		if(ready5.substring(0, 1).equals("0"))
   			 
   	  		 
   		 {
   		 
   		 model1.addObject("ready5",  "ready5");  
               
               
   		 }    
               
               
         
   		 
   		 if(ready5.substring(0, 1).equals("1"))
   			 
   	  		 
   		 {
   		 
   		 model1.addObject("ready5",  "ready5on");  
               
               
   		 }    
   		 
    		
   		 
   		 
   		 
   		 
   		 
     		if(comb5.substring(0, 1).equals("0"))
    			 
    	  		 
    		 {
    		 
    		 model1.addObject("comb5",  "comb5");  
                
                
    		 }    
                
                
          
    		 
    		 if(comb5.substring(0, 1).equals("1"))
    			 
    	  		 
    		 {
    		 
    		 model1.addObject("comb5",  "comb5on");  
                
                
    		 }    
    		 
   		 
      		 
    	       if(enable6.substring(0, 1).equals("0"))
    	  			 
    	  	  		 
    	  		 {
    	  		 
    	  		 model1.addObject("en6",  "en6");  
    	              
    	              
    	  		 }    
    	  		 
    	  		 if(enable6.substring(0, 1).equals("1"))
    	  			 
    	  	  		 
    	  		 {
    	  		 
    	  		 model1.addObject("en6",  "en6on");  
    	              
    	              
    	  		 }    
    	  		 
    	  		 
    	  		 
    	  		if(ready6.substring(0, 1).equals("0"))
    	 			 
    	 	  		 
    	 		 {
    	 		 
    	 		 model1.addObject("ready6",  "ready6");  
    	             
    	             
    	 		 }    
     		 
    	 		 if(ready6.substring(0, 1).equals("1"))
    	 			 
    	 	  		 
    	 		 {
    	 		 
    	 		 model1.addObject("ready6",  "ready6on");  
    	             
    	             
    	 		 }    
    	 		 
    	 		 
    	   		if(comb6.substring(0, 1).equals("0"))
    	  			 
    	  	  		 
    	  		 {
    	  		 
    	  		 model1.addObject("comb6",  "comb6");  
    	              
    	              
    	  		 }    
    			 
    	  		 if(comb6.substring(0, 1).equals("1"))
    	  	  		 
    	  		 {
    	  		 
    	  		 model1.addObject("comb6",  "comb6on");  
    	              
    	              
    	  		 }    
    	  		 
    	  		 
    	  		 
  		 
  		 
    	  	   if(enable7.substring(0, 1).equals("0"))
  	  			 
  	  	  		 
  	  		 {
  	  		 
  	  		 model1.addObject("en7",  "en7");  
  	              
  	              
  	  		 }    
  	  		 
  	  		 if(enable7.substring(0, 1).equals("1"))
  	  			 
  	  	  		 
  	  		 {
  	  		 
  	  		 model1.addObject("en7",  "en7on");  
  	              
  	              
  	  		 }    
  	  		 
  	  		 
  	  		 
  	  		if(ready7.substring(0, 1).equals("0"))
  	 			 
  	 	  		 
  	 		 {
  	 		 
  	 		 model1.addObject("ready7",  "ready7");  
  	             
  	             
  	 		 }    
   		 
  	 		 if(ready7.substring(0, 1).equals("1"))
  	 			 
  	 	  		 
  	 		 {
  	 		 
  	 		 model1.addObject("ready7",  "ready7on");  
  	             
  	             
  	 		 }    
  	 		 
  	 		 
  	   		if(comb7.substring(0, 1).equals("0"))
  	  			 
  	  	  		 
  	  		 {
  	  		 
  	  		 model1.addObject("comb7",  "comb7");  
  	              
  	              
  	  		 }    
  			 
  	  		 if(comb7.substring(0, 1).equals("1"))
  	  	  		 
  	  		 {
  	  		 
  	  		 model1.addObject("comb7",  "comb7on");  
  	              
  	              
  	  		 }    
  	  		 
  	  		 
  		 
              
  	  		 
  	  	   if(enable8.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en8",  "en8");  
	              
	              
	  		 }    
	  		 
	  		 if(enable8.substring(0, 1).equals("1"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en8",  "en8on");  
	              
	              
	  		 }    
	  		 
	  		 
	  		 
	  		if(ready8.substring(0, 1).equals("0"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready8",  "ready8");  
	             
	             
	 		 }    
		 
	 		 if(ready8.substring(0, 1).equals("1"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready8",  "ready8on");  
	             
	             
	 		 }    
	 		 
	 		 
	   		if(comb8.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb8",  "comb8");  
	              
	              
	  		 }    
			 
	  		 if(comb8.substring(0, 1).equals("1"))
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb8",  "comb8on");  
	              
	              
	  		 }    
	  		 
	  		 
  	  		 
 
	  	   if(enable9.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en9",  "en9");  
	              
	              
	  		 }    
	  		 
	  		 if(enable9.substring(0, 1).equals("1"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en9",  "en9on");  
	              
	              
	  		 }    
	  		 
	  		 
	  		 
	  		if(ready9.substring(0, 1).equals("0"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready9",  "ready9");  
	             
	             
	 		 }    
		 
	 		 if(ready9.substring(0, 1).equals("1"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready9",  "ready9on");  
	             
	             
	 		 }    
	 		 
	 		 
	   		if(comb9.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb9",  "comb9");  
	              
	              
	  		 }    
			 
	  		 if(comb9.substring(0, 1).equals("1"))
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb9",  "comb9on");  
	              
	              
	  		 }    
	  		 
	  		 
  		 
  		 
	  	   if(enable10.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en10",  "en10");  
	              
	              
	  		 }    
	  		 
	  		 if(enable10.substring(0, 1).equals("1"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en10",  "en10on");  
	              
	              
	  		 }    
	  		 
	  		 
	  		 
	  		if(ready10.substring(0, 1).equals("0"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready10",  "ready10");  
	             
	             
	 		 }    
		 
	 		 if(ready10.substring(0, 1).equals("1"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready10",  "ready10on");  
	             
	             
	 		 }    
	 		 
	 		 
	   		if(comb10.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb10",  "comb10");  
	              
	              
	  		 }    
			 
	  		 if(comb10.substring(0, 1).equals("1"))
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb10",  "comb6on");  
	              
	              
	  		 }    
	  		 
	  		 
  		 
  		 
	  	   if(enable11.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en11",  "en11");  
	              
	              
	  		 }    
	  		 
	  		 if(enable11.substring(0, 1).equals("1"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en11",  "en11on");  
	              
	              
	  		 }    
	  		 
	  		 
	  		 
	  		if(ready11.substring(0, 1).equals("0"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready11",  "ready11");  
	             
	             
	 		 }    
		 
	 		 if(ready11.substring(0, 1).equals("1"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready11",  "ready11on");  
	             
	             
	 		 }    
	 		 
	 		 
	   		if(comb11.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb11",  "comb11");  
	              
	              
	  		 }    
			 
	  		 if(comb11.substring(0, 1).equals("1"))
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb11",  "comb11on");  
	              
	              
	  		 }    
	  		 
	  		 
		   
  		 
	  	   if(enable12.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en12",  "en12");  
	              
	              
	  		 }    
	  		 
	  		 if(enable12.substring(0, 1).equals("1"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en12",  "en12on");  
	              
	              
	  		 }    
	  		 
	  		 
	  		 
	  		if(ready12.substring(0, 1).equals("0"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready12",  "ready12");  
	             
	             
	 		 }    
		 
	 		 if(ready12.substring(0, 1).equals("1"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready12",  "ready12on");  
	             
	             
	 		 }    
	 		 
	 		 
	   		if(comb12.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb12",  "comb12");  
	              
	              
	  		 }    
			 
	  		 if(comb12.substring(0, 1).equals("1"))
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb12",  "comb12on");  
	              
	              
	  		 }    
	  		 
	  		 
			   
	  	   if(enable13.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en13",  "en13");  
	              
	              
	  		 }    
	  		 
	  		 if(enable13.substring(0, 1).equals("1"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en13",  "en13on");  
	              
	              
	  		 }    
	  		 
	  		 
	  		 
	  		if(ready13.substring(0, 1).equals("0"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready13",  "ready13");  
	             
	             
	 		 }    
		 
	 		 if(ready13.substring(0, 1).equals("1"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready13",  "ready13on");  
	             
	             
	 		 }    
	 		 
	 		 
	   		if(comb13.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb13",  "comb13");  
	              
	              
	  		 }    
			 
	  		 if(comb13.substring(0, 1).equals("1"))
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb13",  "comb13on");  
	              
	              
	  		 }    
	  		 
	  		 
	  		 
	  	   if(enable14.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en14",  "en14");  
	              
	              
	  		 }    
	  		 
	  		 if(enable14.substring(0, 1).equals("1"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("en14",  "en14on");  
	              
	              
	  		 }    
	  		 
	  		 
	  		 
	  		if(ready14.substring(0, 1).equals("0"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready14",  "ready14");  
	             
	             
	 		 }    
		 
	 		 if(ready14.substring(0, 1).equals("1"))
	 			 
	 	  		 
	 		 {
	 		 
	 		 model1.addObject("ready14",  "ready14on");  
	             
	             
	 		 }    
	 		 
	 		 
	   		if(comb14.substring(0, 1).equals("0"))
	  			 
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb14",  "comb14");  
	              
	              
	  		 }    
			 
	  		 if(comb14.substring(0, 1).equals("1"))
	  	  		 
	  		 {
	  		 
	  		 model1.addObject("comb14",  "comb14on");  
	              
	              
	  		 }    
	  		 
	  		 
	  		 
			   
	  		 
	  		if(out1.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out1",  "out1");       
	  		 }    
	              
	 		 if(out1.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out1",  "out1on");       
	  		 }    
	  		 
	  		 
			 
	 		 
	 		if(out2.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out2",  "out2");       
	  		 }    
	              
	 		 if(out2.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out2",  "out2on");       
	  		 }    
	  		 
	 		 
	 		 
	 		if(out3.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out3",  "out3");       
	  		 }    
	              
	 		 if(out3.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out3",  "out3on");       
	  		 }    
	  		 
	 		 
	 		 
	 		if(out4.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out4",  "out4");       
	  		 }    
	              
	 		 if(out4.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out4",  "out4on");       
	  		 }    
	  		 
	 		 
	 		if(out5.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out5",  "out5");       
	  		 }    
	              
	 		 if(out5.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out5",  "out5on");       
	  		 }    
	  		 
	 		if(out6.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out6",  "out6");       
	  		 }    
	              
	 		 if(out6.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out6",  "out6on");       
	  		 }    
	  		 
	   		 
	 		if(out7.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out7",  "out7");       
	  		 }    
	              
	 		 if(out7.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out7",  "out7on");       
	  		 }    
	  		 
  		 
	 		 
	 		if(out8.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out8",  "out8");       
	  		 }    
	              
	 		 if(out8.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out8",  "out8on");       
	  		 }    
	  		 
	 		 
	 		 
	 		if(out9.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out9",  "out9");       
	  		 }    
	              
	 		 if(out9.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out9",  "out9on");       
	  		 }    
	  		 
	 		 
	 		if(out10.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out10",  "out10");       
	  		 }    
	              
	 		 if(out1.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out10",  "out10on");       
	  		 }    
	  		 
	 		 
	 		 
	 		if(out11.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out11",  "out11");       
	  		 }    
	              
	 		 if(out11.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out11",  "out11on");       
	  		 }    
	  		 
	 		 
	 		 
	 		 
	 		if(out12.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out12",  "out12");       
	  		 }    
	              
	 		 if(out12.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out12",  "out12on");       
	  		 }    
	  		 
	 		 
	 		 
	 		if(out13.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out13",  "out13");       
	  		 }    
	              
	 		 if(out13.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out13",  "out13on");       
	  		 }    
	  		 
  		 
	 		 
	 		if(out14.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out14",  "out14");       
	  		 }    
	              
	 		 if(out14.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out14",  "out14on");       
	  		 }    
	  		 
	 		 
	 		 
	 		if(out15.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out15",  "out15");       
	  		 }    
	              
	 		 if(out15.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out15",  "out15on");       
	  		 }    
	  		 
	 		 
	 		 
	 		if(out16.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out16",  "out16");       
	  		 }    
	              
	 		 if(out16.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out16",  "out16on");       
	  		 }    
	  		 
	 		 
	 		 
	 		 
	 		if(out17.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out17",  "out17");       
	  		 }    
	              
	 		 if(out17.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out17",  "out17on");       
	  		 }    
	  		 
	 		 
	 		 
	 		if(out18.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out18",  "out18");       
	  		 }    
	              
	 		 if(out18.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out18",  "out18on");       
	  		 }    
	  		 
	 		if(out19.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out19",  "out19");       
	  		 }    
	              
	 		 if(out19.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out19",  "out19on");       
	  		 }    
	  		 
	 		 
	 		 
	 		if(out20.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out20",  "out20");       
	  		 }    
	              
	 		 if(out20.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out20",  "out20on");       
	  		 }    
	  		 
	 		 
	 		 
	 		 
	 		if(out21.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out21",  "out21");       
	  		 }    
	              
	 		 if(out21.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out21",  "out21on");       
	  		 }    
	  		 
	 		 
	 		 
	 		if(out22.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out22",  "out22");       
	  		 }    
	              
	 		 if(out22.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out22",  "out22on");       
	  		 }    
	  		 
	 		 
	 		 
	 		 
	 		 
	 		if(out23.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out23",  "out23");       
	  		 }    
	              
	 		 if(out23.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out23",  "out23on");       
	  		 }    
	  		 
	 		 
	 		 
	 		 
	 		if(out24.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("out24",  "out24");       
	  		 }    
	              
	 		 if(out24.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("out24",  "out24on");       
	  		 }    
	  		 
	 		 
	 		 
	 		 
	 		if(in1.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in1",  "in1");       
	  		 }    
	              
	 		 if(in1.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in1",  "in1on");       
	  		 }    
	  		 
	 		 
	 		 
	 		 
	 		if(in2.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in2",  "in2");       
	  		 }    
	              
	 		 if(in2.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in2",  "in2on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		if(in3.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in3",  "in3");       
	  		 }    
	              
	 		 if(in3.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in3",  "in3on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		if(in4.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in4",  "in4");       
	  		 }    
	              
	 		 if(in4.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in4",  "in4on");       
	  		 }    
	 		 
	 		 
	 		 
	 		if(in5.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in5",  "in5");       
	  		 }    
	              
	 		 if(in5.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in5",  "in5on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		if(in6.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in6",  "in6");       
	  		 }    
	              
	 		 if(in6.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in6",  "in6on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		if(in7.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in7",  "in7");       
	  		 }    
	              
	 		 if(in7.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in7",  "in7on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		if(in8.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in8",  "in8");       
	  		 }    
	              
	 		 if(in8.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in8",  "in8on");       
	  		 }    
	 		 
	 		 
	 		 
	 		if(in9.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in9",  "in9");       
	  		 }    
	              
	 		 if(in9.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in9",  "in9on");       
	  		 }    
	 		 
	 		 
	 		 
	 		if(in10.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in10",  "in10");       
	  		 }    
	              
	 		 if(in10.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in10",  "in10on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		 
	 		if(in11.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in11",  "in11");       
	  		 }    
	              
	 		 if(in11.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in11",  "in11on");       
	  		 }    
	 		 
	 		 
	 		 
	 		if(in12.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in12",  "in12");       
	  		 }    
	              
	 		 if(in12.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in12",  "in12on");       
	  		 }    
	 		 
	 		 
	 		 
	 		if(in13.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in13",  "in13");       
	  		 }    
	              
	 		 if(in13.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in13",  "in13on");       
	  		 }    
	 		 
	 		 
	 		 
	 		if(in14.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in14",  "in14");       
	  		 }    
	              
	 		 if(in14.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in14",  "in14on");       
	  		 }    
	 		 
	 		 
	 		 
	 		if(in15.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in15",  "in15");       
	  		 }    
	              
	 		 if(in15.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in15",  "in15on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		 
	 		if(in16.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in16",  "in16");       
	  		 }    
	              
	 		 if(in16.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in16",  "in16on");       
	  		 }    
	 		 
	 		 
	 		 
	 		if(in17.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in17",  "in17");       
	  		 }    
	              
	 		 if(in17.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in17",  "in17on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		if(in18.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in18",  "in18");       
	  		 }    
	              
	 		 if(in18.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in18",  "in18on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		if(in19.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in19",  "in19");       
	  		 }    
	              
	 		 if(in19.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in19",  "in19on");       
	  		 }    
	 		 
	 		 
	 		if(in20.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in20",  "in20");       
	  		 }    
	              
	 		 if(in20.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in20",  "in20on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		if(in21.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in21",  "in21");       
	  		 }    
	              
	 		 if(in21.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in21",  "in21on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		 
	 		if(in22.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in22",  "in22");       
	  		 }    
	              
	 		 if(in22.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in22",  "in22on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		if(in23.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in23",  "in23");       
	  		 }    
	              
	 		 if(in23.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in23",  "in23on");       
	  		 }    
	 		 
	 		 
	 		 
	 		 
	 		if(in24.equals("0"))    		 
	  		 {
	  		 
	  		 model1.addObject("in24",  "in24");       
	  		 }    
	              
	 		 if(in24.equals("1"))
	  		 {
	  		 
	  		 model1.addObject("in24",  "in24on");       
	  		 }    
	 		 
	 		 
 	       model1.setViewName("index80"); 
      	  
  	  

	
 	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			System.out.println("Unsuccessfully saved data in the backend");
			System.out.println("Error occured");
			 model1.setViewName("index80"); 
			
		} 
 
 
 
 finally
 {
 	if(connection!=null)
 		try {
 			connection.close();
 			
 			
 			
 			// model1.setViewName("index25"); 
 			
 	                                                                                             		
 		} catch (SQLException e) 
 	   {
 			// TODO Auto-generated catch block
 			e.printStackTrace();
 		}
 	
 	
 	
 	if(connection1!=null)
 		try {
 			connection1.close();
 			
 			
 			
 			// model1.setViewName("index25"); 
 			
 			
 		} catch (SQLException e) 
 	   {
 			// TODO Auto-generated catch block
 			e.printStackTrace();
 		}
 	
 	
 	
 	}


 
 return model1;
 

	   }
	  
	 
	 
	 
	 
	 
	 @RequestMapping(value="/dummy22.htm", method = RequestMethod.POST)
	  public ModelAndView Transaction2(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("trans") transaction trans) {

		    
  
  ModelAndView model1 = new ModelAndView();
  
		//model1.addObject("msg", "Hello Spring");
		
  
  try {
  

	
	   
	        System.out.println("reached here test txn");
	        
	        
	        
	    
		   
		   
		   
		   
		  //int transamount2 = trans.getTXN_AMOUNT_BLIND();
	       
	      //System.out.println("initial value is" + transamount2);
	       
	       //model1.addObject("trans2",  transamount2); 
	       
		   //System.out.println("the value of trans is " + transamount2 );
		   
		   //int transcation= transamount2;
          //model1.addObject("transcation",  transcation); 
	       
		   //System.out.println("the final value of transaction 2  is " + transcation );
		   
		   
		   
		  
  	       model1.setViewName("TxnTest"); 
       	  
   	  
 
 	
  	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			
		} 

  
  return model1;
  

	   }
	 
	 
	 
	 
	 
	 
	 
	 @RequestMapping(value="/dummy45.htm", method = RequestMethod.POST)
	  public ModelAndView Sign_In2(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("amount") amount amount) {

		    
  
  
  ModelAndView model1 = new ModelAndView();
  
		//model1.addObject("msg", "Hello Spring");
		
  
  try {
  
	      
	      String orderid=amount.getORDER_ID();
	
	      String amount1=amount.getTXN_AMOUNT();
	      
	      
	    
	      orderid22=orderid;
	      transamount22=amount1;
	      System.out.println("the value of orderid is " + orderid );
	      
	      
	      System.out.println("the value of amount is " + amount1 );
	      
	      
	      System.out.println("the value of orderid22 is " + orderid22 );
	      
	      /*
	      usermodel um =new usermodel();
	      	
	      boolean flag1=	um.amount_user(amount);
	      if(flag1==true)
	      {
	   	   
	    	    
		        System.out.println("reached here page redirect");
			   
	  	         model1.setViewName("pgRedirect"); 
	          	  
	      	   
	      }
	      	  
	      else
	      {
	   	   System.out.println("could not update the database");
	   	  
	   	   
	      }  
	      
	      
	    
 */
	    System.out.println("reached here page redirect");
	    
         model1.setViewName("pgRedirect"); 
  	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			
		} 

  
  return model1;
  

	   }
	 
	 
	 
	 
	 
	 @RequestMapping(value="/dummy100.htm", method = RequestMethod.POST)
	  public ModelAndView Sign_In5(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("orders") orders orders) {
		 System.out.println("reached dummy100 ");
		    
 
 
 ModelAndView model1 = new ModelAndView();
 
		//model1.addObject("msg", "Hello Spring");
		
 
 try {
 
	      
	      int total=orders.getTotal();
	     
     
	      System.out.println("the value of total is " + total );
	      

	    System.out.println("page redirected to old index14.jsp");
	    
        model1.setViewName("index14"); 
 	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			
		} 
 System.out.println(" Error but page redirected to old index14.jsp");
 
 return model1;
 

	   }
	 
	 
	 
	 
	 @RequestMapping(value="/dummy101.htm", method = RequestMethod.POST)
	  public ModelAndView Sign_In6(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("orders") orders orders) {
		 System.out.println("reached dummy101 ");
		    


     ModelAndView model1 = new ModelAndView();

		//model1.addObject("msg", "Hello Spring");
		

try {

	      
	      //String total=orders.getTotal();
	
	     
	      
	      
	    
	      
	      
	      //System.out.println("the value of total is " + total );
	      
	      /*
	      usermodel um =new usermodel();
	      	
	      boolean flag1=	um.amount_user(amount);
	      if(flag1==true)
	      {
	   	   
	    	    
		        System.out.println("reached here page redirect");
			   
	  	         model1.setViewName("pgRedirect"); 
	          	  
	      	   
	      }
	      	  
	      else
	      {
	   	   System.out.println("could not update the database");
	   	  
	   	   
	      }  
	      
	      
	    
*/
	    System.out.println("page redirected store1.jsp");
	    
       model1.setViewName("store1"); 
	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			
		} 


return model1;


	   }
	 
	 
	 
	 
	 
	 
	 
	 
	 @RequestMapping(value="/dummy46.htm", method = RequestMethod.POST)
	  public ModelAndView Sign_In3(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("amount") amount amount) {

		    
 
 
 ModelAndView model1 = new ModelAndView();
 
		//model1.addObject("msg", "Hello Spring");
		
 
 try {
     /*
	      String fullname=amount.getFullname();
	      String emailid=amount.getEmailid();
	      String phonenum=amount.getPhonenum();
	      String address=amount.getAddress();
	      String amount1=amount.getTXN_AMOUNT();
	      String orderid=amount.getORDER_ID();
	
	   
	      
	      
	      System.out.println("the value of fullname is " + fullname );      
	      System.out.println("the value of emailid is " + emailid );
	      System.out.println("the value of phonenum is " + phonenum );
	      System.out.println("the value of address is " + address );
	      System.out.println("the value of amount1 is " + amount1 );
	      System.out.println("the value of orderid is " + orderid );
	      
	      
	      
	      usermodel um =new usermodel();
	      	
	      boolean flag1=	um.amount_user(amount);
	      if(flag1==true)
	      {
	   	   
	    	    
		        System.out.println("reached the index page");
			   
	  	         model1.setViewName("index22"); 
	          	  
	      	   
	      }
	      	  
	      else
	      {
	   	   System.out.println("could not update the database");
	    	    
	       	model1.setViewName("index22"); 
	      }  
	      
	   */   
	    
 	
	         model1.setViewName("index23"); 
	         
	         
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			
		} 

 
           return model1;
 

	   }
	 
	 
	 
	 
	 @RequestMapping(value="/dummy48.htm", method = RequestMethod.POST)
	  public ModelAndView Sign_In4(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("amount") amount amount) {

		 System.out.println("Reached here $$$$");      	    

    
       ModelAndView model1 = new ModelAndView();

		//model1.addObject("msg", "Hello Spring");


        DB_Connection db=new DB_Connection();
		Connection connection=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
      
		

try {
    
	      String fullname=amount.getFullname();
	      String emailid=amount.getEmailid();
	      String phonenum=amount.getPhonenum();
	      String address=amount.getAddress();
	      String amount1=transamount22;
	      String orderid=orderid22;
	      String product=null;
	      
	      
	      if(amount1.equals("50"))
	       product="Rubiks Cube";
	      
	      if(amount1.equals("100"))
	       product="Blind Cube";
	
	      if(amount1.equals("150"))
	       product="Rubiks Cube and Blind Cube";
	
	      
	      
	      System.out.println("the value of fullname is " + fullname );      
	      System.out.println("the value of emailid is " + emailid );
	      System.out.println("the value of phonenum is " + phonenum );
	      System.out.println("the value of address is " + address );
	      System.out.println("the value of amount1 is " + amount1 );
	      System.out.println("the value of orderid is " + orderid );
	      
	      
	      
	      System.out.println("the value of product is " + product );
	     
	      
	      
	      
	     
	         connection=db.getConnection();
			 String query="insert into payment (fullname,emailid,phonenum,address,product,amount,orderid)"+"values(?,?,?,?,?,?,?)";
			  
			 
			    ps=connection.prepareStatement(query);
			    ps.setString(1,amount.getFullname());
			    ps.setString(2, amount.getEmailid());
				ps.setString(3, amount.getPhonenum());
				ps.setString(4, amount.getAddress());
				ps.setString(5, product);
				ps.setString(6,amount1);
				ps.setString(7, orderid);
				
				System.out.println(ps);
				ps.execute();
				System.out.println("successfully saved data in the backend");
				 model1.setViewName("index25"); 
	         
			}     
		
					catch(Exception e)
					{
						System.out.println("Unsuccessfully saved data in the backend");
						System.out.println("Error occured");
						 model1.setViewName("index25"); 
					}


finally
{
	if(connection!=null)
		try {
			connection.close();
			
			
			
			 model1.setViewName("index25"); 
			
			
		} catch (SQLException e) 
	   {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


         return model1;
      


	   }
	 
	 
	 
	 
	 @RequestMapping(value="/dummy15.htm", method = RequestMethod.POST)
	  public ModelAndView upload(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("upload") upload upload) {

		 System.out.println("Reached here ####");      	    

   
      ModelAndView model1 = new ModelAndView();

		//model1.addObject("msg", "Hello Spring");


       DB_Connection db=new DB_Connection();
		Connection connection=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
     
		

try {
   
	      String firstname=upload.getFirstname();
	      String lastname=upload.getLastname();
	      String emailid=upload.getEmailid();
	      String phonenum=upload.getPhone();
	      
	      
	      System.out.println("the value of firstname is " + firstname );      
	      System.out.println("the value of lastname is " + lastname );
	      System.out.println("the value of emailid is " + emailid );
	      System.out.println("the value of phonenum is " + phonenum );
	     
	      InputStream inputStream = null;
	         
	        // obtains the upload file part in this multipart request
	        Part filePart = request.getPart("files");
	        
	/*        
	        if (filePart != null) {
	            // prints out some information for debugging
	            System.out.println(filePart.getName());
	            System.out.println(filePart.getSize());
	            System.out.println(filePart.getContentType());
	             
	            // obtains input stream of the upload file
	            inputStream = filePart.getInputStream();
	        }
	        
	        else
	        {
	        	 System.out.println("no file present ");
	        	
	        }
	        
*/
	        
	        
	        System.out.println("the size of the file is ");
	        System.out.println( filePart.getSize());
	      
	        model1.setViewName("index26"); 
}        
	        
	        
	        //System.out.println("the name is "+filePart.getName());
	        //inputStream = filePart.getInputStream();
	
	      
	        // input stream of the upload file
	    
	  /*
	         connection=db.getConnection();
			 String query="insert into uploadfiles (firstname,lastname,emailid,phone,files)"+"values(?,?,?,?,?)";
			  
			 
			    ps=connection.prepareStatement(query);
			    ps.setString(1,upload.getFirstname());
			    ps.setString(2, upload.getLastname());
				ps.setString(3, upload.getEmailid());
				ps.setString(4, upload.getPhone());
				ps.setBlob(5, inputStream);

				System.out.println(ps);
				ps.execute();
				System.out.println("successfully saved data in the backend");
				 model1.setViewName("index26"); 
	         
			}     
		
					catch(Exception e)
					{
						System.out.println("Unsuccessfully saved data in the backend");
						System.out.println("Error occured");
						 model1.setViewName("index26"); 
					}

*/

catch(Exception e)
{
	//System.out.println("Unsuccessfully saved data in the backend");
	System.out.println("Error occured");
	 model1.setViewName("index26"); 
}



finally
{
	if(connection!=null)
		try {
			connection.close();
			
			
			
			 model1.setViewName("index26"); 
			
			
		} catch (SQLException e) 
	   {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


        return model1;
     


	   }
	 
	 
	 
	 
	 
	 @RequestMapping(value="/dummy3.htm", method = RequestMethod.POST)
	  public ModelAndView Sign_In(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("signin") signintrial signin) {

		    
     
     ModelAndView model1 = new ModelAndView();
     
		model1.addObject("msg", "Hello Spring");
		
     
     try {
     
  
  	   
  		String count[][] = hmr.get("count");
  	
  
   	      String user_name =signin.getUser_name();
      	  String password=signin.getPassword();
      
      	  
      	usermodel um =new usermodel();
      	
      boolean flag1=	um.signin_user(signin);
      if(flag1==true)
      {
   	   
   	        System.out.println("reached here index16");
   		    model1.addObject("user_name",  user_name);
     	    model1.addObject("password",  password);
     	    model1.setViewName("index16"); 
          	  
      	   System.out.println("reached here index16");
      }
      	  
      else
      {
   	   System.out.println("not reached here index14");
   	   model1.setViewName("index15");
   	   
      }
      
    	
     	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			
		} 

     
     return model1;
     
   
	   }
	 
	 
	 
	 @RequestMapping(value="/poker.htm", method = RequestMethod.GET)
	  public ModelAndView Poker(HttpServletRequest request, HttpServletResponse response,@ModelAttribute("poker") pokertrial poker) {

		    
    
    ModelAndView model1 = new ModelAndView();
    
    
    String playername=poker.getPlayername();
    
    
   
     HttpSession session=request.getSession();
    
     System.out.println("the session is" + session.getId() );
     
     
     
     
     
     
     
     
     
     
     
    
    String flagname=poker.getFlagname();
    
    
    String yourname=poker.getYourname().toUpperCase();
    
    System.out.println("the player is" + playername );
    System.out.println("the flag is" + flagname );
    System.out.println("the nameis is" + yourname );
    
    
		model1.addObject("playername", playername);
		model1.addObject("flagname", flagname);
		model1.addObject("yourname", yourname);
    
    try {
    
    	      model1.setViewName("poker1");
    	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			
		} 

    
    return model1;
    
  
	   }
	 
	 
	 
	 
	 @RequestMapping(value="/dummy4.htm", method = RequestMethod.POST)
	  public ModelAndView TestConnection(HttpServletRequest request, HttpServletResponse response) {

		    
     
     ModelAndView model1 = new ModelAndView();
     
		
		
     
     try {
     
  
  	  
      	  
      	  
      	Connection connection=null;
      	DB_Connection db=new DB_Connection();
      	connection=db.getConnection();
      	
      if(connection!=null)
      {
   	   
   	     System.out.println("reached here index17");
   		
     	   model1.setViewName("index17");
     	  model1.addObject("msg", "Connection successful");
          	  
      	   
      }
      	  
      else
      {
   	   System.out.println("not reached here index18");
   	  model1.setViewName("index18");
 	  model1.addObject("msg", "Connection failure");
   	   
      }
      
    	
     	
			
		} catch (Exception ioe) {
			//System.out.println("error while appending in csv file for download via PrintWriter " + ioe.getMessage());
			System.out.println(ioe.getMessage());
			
		} 

     
     return model1;
     
   
	   }
	 
	 
	 
}
	 
	
	