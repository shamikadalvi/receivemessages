package controller;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.concurrent.TimeUnit;

import com.pi4j.io.gpio.GpioController;
import com.pi4j.io.gpio.GpioFactory;
import com.pi4j.io.gpio.GpioPinDigitalOutput;
import com.pi4j.io.gpio.RaspiPin;



import common_things.DB_Connection;

public class receivedata {

	
	public static void readDatabase()
	{
		
		
		Connection connection=null;
		
		
		try
		{
	
	
		
		    DB_Connection db=new DB_Connection();
			
			PreparedStatement ps=null;
			ResultSet rs1=null;
			Statement st1=null;
			connection=db.getConnection();
			 
		
			 
			 
			 String query1="select * from newmessage where ID=12";
             
             st1=connection.createStatement();
     		
 			rs1=st1.executeQuery(query1);    
 		
 			
 			
 			while(rs1.next())
 			{
 				
 				
 				
 				String	receivedmessage = rs1.getString("msgvalue");
 				 
 				
				System.out.println("the msg is" + receivedmessage );
				
				
				
				oled.oledClearFirstLine();
						
						
						
						
		    	 System.out.println("printing message");
				oled.oledWriteString(0, 0, receivedmessage);
				
				
				

				System.out.println("successfully read data");	
				
				//System.out.println("successfully saved data in the backend");
				// model1.setViewName("index26"); 
			
 				
 				
 			}
 				
 				
 				
 				
 			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			System.out.println("unsuccessfully saved data in the backend");	
			
		}
		
		
		finally
		{
			
			
			
			
			
			
			if(connection!=null)
				
			{
				
				try {
					connection.close();
					System.out.println("successfully closed connection");	
				} 
				
				catch (SQLException e) {
					
					
					System.out.println("connection not closed");	
				}
			}
			
			
		}
	
	
		




		
		
		
	}
	
	
	
	
	
	
	
	
	public static void main(String[] args)
	
	
	{
		int k;
		
		System.out.println("Hello World 3");
		
		
		//GpioController gpioController= GpioFactory.getInstance();
		//GpioPinDigitalOutput pinOut= gpioController.provisionDigitalOutputPin(RaspiPin.GPIO_08);
		
		
		k=1;
		
		System.out.println("Good night 3");
		
	
		
		  oled.OledInit();
	     System.out.println("oled initialized");
	     oled.oledClear();
	     
	     System.out.println("oled cleared");
	     oled.oledWriteString(0, 0, "data");
	     
	     
	     
	     while(true)
	     {
	    	 
	    	 
	    	 
	    	 try {
					TimeUnit.MICROSECONDS.sleep(5000000);
					System.out.println("read data");
					readDatabase();
					
					
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	    	 
	    	 
	    	 
	     }
	     
		
		
		
		
	}	
		
		

	

}
