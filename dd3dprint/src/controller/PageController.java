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
	 
	
	
