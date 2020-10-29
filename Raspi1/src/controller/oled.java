package controller;


import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.concurrent.TimeUnit;

import com.pi4j.io.gpio.GpioController;
import com.pi4j.io.gpio.GpioFactory;
import com.pi4j.io.gpio.GpioPinDigitalOutput;
import com.pi4j.io.gpio.RaspiPin;








public class oled {

	
	static int count=0;
	static int ptr=0;
	
	static GpioController gpioController= GpioFactory.getInstance();
	
	static GpioPinDigitalOutput DC= gpioController.provisionDigitalOutputPin(RaspiPin.GPIO_04);
	static GpioPinDigitalOutput SDK= gpioController.provisionDigitalOutputPin(RaspiPin.GPIO_05);
	static GpioPinDigitalOutput SCLK= gpioController.provisionDigitalOutputPin(RaspiPin.GPIO_06);
	static GpioPinDigitalOutput RESET= gpioController.provisionDigitalOutputPin(RaspiPin.GPIO_03);
	static GpioPinDigitalOutput led= gpioController.provisionDigitalOutputPin(RaspiPin.GPIO_02);
	
	
	
	
	static String SSD1306_PIXEL_WIDTH=inttohex(128);
	static String  SSD1306_PIXEL_HEIGHT=inttohex(64);
	static String  SSD1306_PAGE_COUNT=inttohex(8);
	static String  SSD1306_PAGE_HEIGHT= inttohex(2);
	//static String  SSD1306_SEGMENT_COUNT= inttohex(7808);//7808 //check
	static String  SSD1306_FONT_WIDTH=inttohex(1);

	
	//fundamental commands
	

	static String  SSD1306_SET_CONTRAST        =inttohex(129);
	static String  SSD1306_CONTRAST_DEFAULT    = inttohex(127);  //  0b01111111
	static String  SSD1306_DISPLAY             =inttohex(164); //           0b10100100
	static String  SSD1306_DISPLAY_RESET       =inttohex(164); //         SSD1306_DISPLAY
	static String  SSD1306_DISPLAY_ALLON       =inttohex(165); //        SSD1306_DISPLAY | 0b01
	static String  SSD1306_DISPLAY_NORMAL      =inttohex(166); //       SSD1306_DISPLAY | 0b10
	static String  SSD1306_DISPLAY_INVERSE     =inttohex(166); //      SSD1306_DISPLAY | 0b11
	static String  SSD1306_DISPLAY_SLEEP       =inttohex(174); //      SSD1306_DISPLAY | 0b1110
	static String  SSD1306_DISPLAY_ON          =inttohex(175); //     SSD1306_DISPLAY | 0b1111
	static String  SSD1306_DISPLAYALLON_RESUME =inttohex(164); // 0xA4

	// addressing
	static String  SSD1306_ADDRESSING              = inttohex(32);  // 0x20
	static String  SSD1306_ADDRESSING_HORIZONTAL   = inttohex(0);  //
	static String  SSD1306_ADDRESSING_VERTICAL     = inttohex(1);  //
	static String  SSD1306_ADDRESSING_PAGE         = inttohex(2);  //
	static String  SSD1306_SET_COLUMN              = inttohex(33);  // 0x21
	static String  SSD1306_SET_PAGE               = inttohex(34);  // 0x22

	// hardware configuration
	static String  SSD1306_SET_START_LINE          = inttohex(64);  // 0x40
	static String  SSD1306_START_LINE_DEFAULT       = inttohex(0);  //
	static String  SSD1306_SET_SEG_SCAN             = inttohex(160);  // 0xA0
	static String  SSD1306_SET_SEG_SCAN_DEFAULT    = inttohex(160);  // SSD1306_SET_SEG_SCAN | 0b00
	static String  SSD1306_SET_SEG_SCAN_REVERSE     = inttohex(161);  //SSD1306_SET_SEG_SCAN | 0b01
	static String  SSD1306_SET_MULTIPLEX_RATIO      = inttohex(168);  //0b10101000 // 0xA8
	static String  SSD1306_MULTIPLEX_RATIO_DEFAULT = inttohex(63);  // 0b00111111
	static String  SSD1306_SET_COM_SCAN             = inttohex(192);  // 0xC0
	static String  SSD1306_SET_COM_SCAN_DEFAULT     = inttohex(192);  //SSD1306_SET_COM_SCAN | 0b0000
	static String  SSD1306_SET_COM_SCAN_REVERSE     = inttohex(200);  //SSD1306_SET_COM_SCAN | 0b1000
	static String  SSD1306_SET_DISPLAY_OFFSET       = inttohex(211);  // // 0xD3
	static String  SSD1306_DISPLAY_OFFSET_DEFAULT  = inttohex(0);  // 0b00000000
	static String  SSD1306_SET_COM_PINS             = inttohex(218);  //// 0xDA
	static String  SSD1306_COM_PINS_DEFAULT         = inttohex(18);  //

	// timing and driving
	static String  SSD1306_SET_CLOCK_FREQUENCY    = inttohex(213);  // 0xD5
	static String  SSD1306_CLOCK_FREQUENCY_DEFAULT = inttohex(128);  //
	static String  SSD1306_SET_PRECHARGE           = inttohex(217);  //0xD9
	static String  SSD1306_PRECHARGE_DEFAULT       = inttohex(34);  //
	static String  SSD1306_SET_VCOMH_DESELECT      = inttohex(219);  // 0xDB
	static String  SSD1306_VCOMH_DESELECT_DEFAULT  = inttohex(32);  //
	static String  SSD1306_SET_CHARGE_PUMP         = inttohex(141);  // 0x8D
	static String  SSD1306_CHARGE_PUMP_ENABLE      = inttohex(20);  //
	static String  SSD1306_NOP = inttohex(227);  //0xE3
	
	
   
	
	
	
	
	
	
	public static void main(String[] args) 
	
	
	{
		
		
		System.out.println("oled code started");
		
		
	
		
		
		
		OledInit();
		System.out.println("oled initialization done");
		oledClear();
		System.out.println("oled cleared");
		
		
		//oledClearAgain();
		//System.out.println("oled cleared again");
		
		while(true)
		{
			 
			
			
    
			/*
			
			oledDrawString(0,0,"ABCDEFGH");	
			oledDrawString(0,2,"IJKLMNOP");	
			oledDrawString(0,4,"QRSTUVW");	
			oledDrawString(0,6,"XYZ");	
			
			*/
			
			//oledDrawString(0,0,"abcdefgh");	
			
			//oledDrawString(0,2,"ijklmnop");
			
			
			//oledDrawString(0,4,"qrstuvw");
			
			//oledDrawString(0,6,"xyz");	
			
			
			
			//oledDrawString(0,0,"abcdefgh");	
			//oledDrawString(0,2,"ijklmnop");	
			//oledDrawString(0,4,"qrstuvw");	
			//oledDrawString(0,6,"xyz");	
			
			oledDrawString(15,0,"Happy");	
			oledDrawString(6,2,"Birthday");	
			//oledDrawString(14,4,"Sayalee");	
			
		/*		
			oledWriteString(0,2,"NewData");	
		
			ptr++;
			
			try {
				TimeUnit.MICROSECONDS.sleep(4000000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();   
			}	
			
			
			
			
			
			oledWriteString(0,2,"shamika"+ptr);
			
			try {
				TimeUnit.MICROSECONDS.sleep(4000000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();   
			}	

			*/
			
		}
		

	}
	
	
	
	public static String inttohex(int data)
	{
		
		
String val2= Integer.toHexString(data);
		
		
		if(val2.equals("0"))
			val2="00";
		
		
		if(val2.equals("1"))
			val2="01";
		
		if(val2.equals("2"))
			val2="02";
		
		
		if(val2.equals("3"))
			val2="03";
		
		if(val2.equals("4"))
			val2="04";
		
		
		if(val2.equals("5"))
			val2="05";
		
		if(val2.equals("6"))
			val2="06";
		
		if(val2.equals("7"))
			val2="07";
		
		if(val2.equals("8"))
			val2="08";
		
		if(val2.equals("9"))
			val2="09";
		
		
		
		if(val2.equals("a"))
			val2="0a";
		
		if(val2.equals("b"))
			val2="0b";
		
		if(val2.equals("c"))
			val2="0c";
		
		if(val2.equals("d"))
			val2="0d";
		
		if(val2.equals("e"))
			val2="0e";
		
		if(val2.equals("f"))
			val2="0f";
		
		
		return val2;
		
		
	}
	
	
	
	
	
	static void oledClearFirstLine()
	{
		
		
		System.out.println("clearing oled" );
		
		oledSetXY(0,0);
		
		
		
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		
		
        oledSetXY(7,0);
		
		
		
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		
		
		   oled.oledSetXY(14,0);
			
			
			
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
		
		
			
			 oled.oledSetXY(21,0);
				
				
				
				
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
			
		
			oled.oledSetXY(28,0);
					
					
			
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
					
			 oled.oledSetXY(35,0);
				
				
				
				
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
		
			oled.oledSetXY(42,0);
					
					
			
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			
			
			
			 oled.oledSetXY(49,0);
				
				
				
				
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
		
			oled.oledSetXY(56,0);
					
					
					
			
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			
			
			
			oled.oledSetXY(63,0);
			
			
			
			
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			
			
            oled.oledSetXY(70,0);
			
			
        	
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			oledWriteData(oled.inttohex(0));
			
			
			
			 oled.oledSetXY(77,0);
				
				
				
				
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
				oledWriteData(oled.inttohex(0));
			
		
		
		
		oled.oledSetXY(84,0);
					
					
		
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		
		oled.oledSetXY(91,0);
		
		
		
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
						
		
		
		
		oled.oledSetXY(98,0);
		
		
		
		
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		
		
		
		oled.oledSetXY(105,0);
		
		
		
		
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
		oledWriteData(oled.inttohex(0));
						
				
				
		
		
		
	}
	
	
	
	 static void oledWriteCmd(String ledcmd)
	 {
	   
		 DC.low();
		 String part1=ledcmd.substring(0, 1);
		 String part2=ledcmd.substring(1, 2);
		 
		 
		 //System.out.println("part1 is : "+part1);   
		 
		 
		 //System.out.println("part2 is : "+part2);   
		 
		 
		 String finalpart1=intto4bit(part1);
		 String finalpart2=intto4bit(part2);
		 
		 String finalpart= finalpart1+ finalpart2;
		 
	
		
		 
		  int countcmd=0;
		 while(countcmd<8)
		 {
			
			 
			 int sdkcmd= Integer.parseInt(finalpart.substring(countcmd, countcmd+1));
			 
			 //System.out.println("sdk is : "+sdkdata);
			 
			 
			 if(sdkcmd==1)
			 {
				 SDK.high();
				 
			 }
			 
			 
			 else
				 
			 {
				 
				 SDK.low();
			 }
			 
			 
			 
              SCLK.high();
			 
			 try {
				TimeUnit.MICROSECONDS.sleep(100);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			 
			 
			 SCLK.low();
			 
			 try {
					TimeUnit.MICROSECONDS.sleep(100);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 
			 countcmd++;
			 
		 }
		 
		 
		 

	   
	 }
	
	
	
	 static void oledWriteData(String leddata)
	 {
	   
		 DC.high();
		 String part1=leddata.substring(0, 1);
		 String part2=leddata.substring(1, 2);
		 
		 
		 //System.out.println("part1 is : "+part1);   
		 
		 
		 //System.out.println("part2 is : "+part2);   
		 
		 
		 String finalpart1=intto4bit(part1);
		 String finalpart2=intto4bit(part2);
		 
		 String finalpart= finalpart1+ finalpart2;
		 
	
		
		 
		 count=0;
		 while(count<8)
		 {
			
			 
			 int sdkdata= Integer.parseInt(finalpart.substring(count, count+1));
			 
			 //System.out.println("sdk is : "+sdkdata);
			 
			 
			 if(sdkdata==1)
			 {
				 SDK.high();
				 led.high();
				  //System.out.println("reached here sdkdata high");
				 
			 }
			 
			 
			 else
				 
			 {
				 
				 SDK.low();
				 led.low();
				  //System.out.println("reached here sdk data low");
			 }
			 
			 
                 SCLK.high();
			 
			 try {
				TimeUnit.MICROSECONDS.sleep(200);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			 
			 
			 SCLK.low(); 
		
			 
			 try {
					TimeUnit.MICROSECONDS.sleep(200);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 
			 count++;
			 
		 }
		 
		 
		 

	   
	 }
	 
	 
	 
	 static void oledDrawData(String leddata)
	 {
	   
		 DC.high();
		 String part1=leddata.substring(2, 3);
		 String part2=leddata.substring(3, 4);
		 
		 
		 //System.out.println("part1 is : "+part1);   
		 
		 
		 //System.out.println("part2 is : "+part2);   
		 
		 
		 String finalpart1=intto4bit(part1);
		 String finalpart2=intto4bit(part2);
		 
		 String finalpart= finalpart1+ finalpart2;
		 
	
		
		 
		 count=0;
		 while(count<8)
		 {
			
			 
			 int sdkdata= Integer.parseInt(finalpart.substring(count, count+1));
			 
			 //System.out.println("sdk is : "+sdkdata);
			 
			 
			 if(sdkdata==1)
			 {
				 SDK.high();
				 led.high();
				  //System.out.println("reached here sdkdata high");
				 
			 }
			 
			 
			 else
				 
			 {
				 
				 SDK.low();
				 led.low();
				  //System.out.println("reached here sdk data low");
			 }
			 
			 
                 SCLK.high();
			 
			 try {
				TimeUnit.MICROSECONDS.sleep(200);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			 
			 
			 SCLK.low(); 
		
			 
			 try {
					TimeUnit.MICROSECONDS.sleep(200);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 
			 count++;
			 
		 }
		 
		 
		 

	   
	 }
	 
	 
	static void OledInit()
	 {
	   
	  
	  RESET.low();
	   
	  try {
			TimeUnit.MICROSECONDS.sleep(5);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    
	   RESET.high();

	   oledWriteCmd(SSD1306_SET_MULTIPLEX_RATIO);
	   System.out.println("reached here 1");
	   oledWriteCmd(SSD1306_MULTIPLEX_RATIO_DEFAULT); 
	   System.out.println("reached here 2");
	   oledWriteCmd(SSD1306_DISPLAY_RESET); 
	   System.out.println("reached here 3");
	   oledWriteCmd(SSD1306_SET_DISPLAY_OFFSET);
	   System.out.println("reached here 4");
	   oledWriteCmd(SSD1306_DISPLAY_OFFSET_DEFAULT); 
	   System.out.println("reached here 5");
	   oledWriteCmd(SSD1306_START_LINE_DEFAULT); //check
	   System.out.println("reached here 6");
	   
	   oledWriteCmd(SSD1306_SET_SEG_SCAN_REVERSE);
	   System.out.println("reached here 7");
	   oledWriteCmd(SSD1306_SET_COM_SCAN_REVERSE);
	   System.out.println("reached here 8");
	   oledWriteCmd(SSD1306_SET_COM_PINS); 
	   
	   oledWriteCmd(SSD1306_COM_PINS_DEFAULT);
	

	   oledWriteCmd(SSD1306_SET_CONTRAST); 
	 
	   
	   String var1=  inttohex(255);
	 
	   
	   oledWriteCmd(var1); 
	 
	   
	   
       String var2=   inttohex(164);
       
	   
	   oledWriteCmd(var2); 
	   
	   
       String var3=   inttohex(166);
      
	   
	   oledWriteCmd(var3); 
	   

	 
	    

	   oledWriteCmd(SSD1306_SET_CLOCK_FREQUENCY);  
	  
        String var4=   inttohex(242);
	   
	   
	   oledWriteCmd(var4); 

	  
	   
	   oledWriteCmd(SSD1306_SET_CHARGE_PUMP); 
	   oledWriteCmd(SSD1306_CHARGE_PUMP_ENABLE); 
   
	 

	   oledWriteCmd(SSD1306_SET_PRECHARGE);  
	   oledWriteCmd(SSD1306_PRECHARGE_DEFAULT); 

	   
	  
	   oledWriteCmd(SSD1306_SET_VCOMH_DESELECT);
	   oledWriteCmd(SSD1306_VCOMH_DESELECT_DEFAULT); 
	   
	  

	   oledWriteCmd(SSD1306_DISPLAY_ON); 
	   oledWriteCmd(SSD1306_DISPLAY_RESET);
	   System.out.println("completed initialization");

	 }
	 
	 
	

	
	
    static	void oledClear() {
		  oledWriteCmd(SSD1306_DISPLAY_SLEEP);            
		  oledWriteCmd(SSD1306_ADDRESSING);               
		  oledWriteCmd(SSD1306_ADDRESSING_HORIZONTAL);   
		 // String var5=inttohex(0);
		 for(int i=0; i<1024; i++) 
		  oledWriteData(inttohex(0));    
		  
		  oledWriteCmd(SSD1306_ADDRESSING);               
		  oledWriteCmd(SSD1306_ADDRESSING_PAGE);         
		  oledWriteCmd(SSD1306_DISPLAY_ON);               
		  oledWriteCmd(SSD1306_DISPLAY_RESET);           
		  }

	 
	 
	
    

static void oledSetXY(int x, int y) {
  oledWriteCmd(SSD1306_SET_COLUMN);
  
  String var6=inttohex(x);
  
  String var7=inttohex(y);
  
  
  oledWriteCmd(var6);      
  oledWriteCmd(inttohex(127));    
  oledWriteCmd(SSD1306_SET_PAGE);            
  oledWriteCmd(var7);                           
  oledWriteCmd(inttohex(63));     
}

    



static void oledWriteChar(String string)
{

    switch(string)
    {


         case "!":
        
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(95));
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(0));
        
         break;

/*
        case '"':
      
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(7));
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(7));
          oledWriteData(inttohex(0));
        
         break;
  */     
          case "#":
      
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(20));
        
         break;

        case "$":
      
          oledWriteData(inttohex(36));
          oledWriteData(inttohex(42));
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(42));
          oledWriteData(inttohex(18));
        
         break;

         case "%":
      
          oledWriteData(inttohex(35));
          oledWriteData(inttohex(19));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(100));
          oledWriteData(inttohex(98));
        
         break;


          case "&":
      
          oledWriteData(inttohex(54));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(85));
          oledWriteData(inttohex(34));
          oledWriteData(inttohex(80));
        
         break;

         
         case "(":
      
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(28));
          oledWriteData(inttohex(34));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(0));
        
         break;
     
         case ")":
      
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(34));
          oledWriteData(inttohex(28));
          oledWriteData(inttohex(0));
        
         break;
       
          case "*":
      
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(62));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(20));
        
         break;
    
          case "+":
      
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(62));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(8));
        
         break;

         

          case ",":
      
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(80));
          oledWriteData(inttohex(48));
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(0));
        
         break;

          
           case "-":
      
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(8));
        
         break;
     
     
           case ".":
      
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(96));
          oledWriteData(inttohex(96));
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(0));
        
         break;

        
            case "/":
      
          oledWriteData(inttohex(32));
          oledWriteData(inttohex(16));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(2));
        
         break;


           case "0":
      
          oledWriteData(inttohex(62));
          oledWriteData(inttohex(81));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(69));
          oledWriteData(inttohex(62));
        
         break;


          
           case "1":
      
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(66));
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(0));
        
         break;

          case "2":
      
          oledWriteData(inttohex(66));
          oledWriteData(inttohex(97));
          oledWriteData(inttohex(81));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(70));
        
         break;



        case "3":
      
          oledWriteData(inttohex(33));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(69));
          oledWriteData(inttohex(75));
          oledWriteData(inttohex(49));
        
         break;

       
        case "4":
      
          oledWriteData(inttohex(24));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(18));
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(16));
        
         break;

   


          case "5":
      
          oledWriteData(inttohex(39));
          oledWriteData(inttohex(69));
          oledWriteData(inttohex(69));
          oledWriteData(inttohex(69));
          oledWriteData(inttohex(57));
        
         break;


        

          case "6":
      
          oledWriteData(inttohex(60));
          oledWriteData(inttohex(74));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(48));
        
         break;

     

          case "7":
      
          oledWriteData(inttohex(1));
          oledWriteData(inttohex(113));
          oledWriteData(inttohex(9));
          oledWriteData(inttohex(5));
          oledWriteData(inttohex(3));
        
         break;


          case "8":
      
          oledWriteData(inttohex(54));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(54));
        
         break;

     
          case "9":
      
          oledWriteData(inttohex(6));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(41));
          oledWriteData(inttohex(30));
        
         break;

         case ":":
        
           oledWriteData(inttohex(0));
          oledWriteData(inttohex(54));
          oledWriteData(inttohex(54));
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(0));
        
         break;


          case ";":
        
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(86));
          oledWriteData(inttohex(54));
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(0));
        
         break;
    
      
          case "<":
        
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(34));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(0));
        
         break;

           case "=":
        
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(20));
        
         break;


        


           case ">":
        
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(34));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(8));
        
         break;
        
          case "?":
        
          oledWriteData(inttohex(2));
          oledWriteData(inttohex(1));
          oledWriteData(inttohex(81));
          oledWriteData(inttohex(9));
          oledWriteData(inttohex(6));
        
         break;

   

         case "@":
        
          oledWriteData(inttohex(50));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(121));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(62));
        
         break;


         






       

          case "A":
        
          oledWriteData(inttohex(126));
          oledWriteData(inttohex(17));
          oledWriteData(inttohex(17));
          oledWriteData(inttohex(17));
          oledWriteData(inttohex(126));
        
         break;

         
        
          case "B":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(54));
        
         break;

       
         case "C":
        
          oledWriteData(inttohex(62));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(34));
        
         break;

        
         case "D":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(34));
          oledWriteData(inttohex(28));
        
         break;

         
          case "E":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(65));
        
         break;
    

          case "F":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(9));
          oledWriteData(inttohex(9));
          oledWriteData(inttohex(9));
          oledWriteData(inttohex(1));
        
         break;

      


            case "G":
        
          oledWriteData(inttohex(62));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(122));
        
         break;

       
           case "H":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(127));
        
         break;

         
          case "I":
        
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(0));
        
         break;


         case "J":
        
          oledWriteData(inttohex(32));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(63));
          oledWriteData(inttohex(1));
        
         break;

        
          case "K":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(34));
          oledWriteData(inttohex(65));
        
         break;


        case "L":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(64));
        
         break;


        case "M":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(2));
          oledWriteData(inttohex(12));
          oledWriteData(inttohex(2));
          oledWriteData(inttohex(127));
        
         break;


        case "N":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(16));
          oledWriteData(inttohex(127));
        
         break;

          
    
           case "O":
        
          oledWriteData(inttohex(62));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(62));
        
         break;

     


         case "P":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(9));
          oledWriteData(inttohex(9));
          oledWriteData(inttohex(9));
          oledWriteData(inttohex(6));
        
         break;


         case "Q":
        
          oledWriteData(inttohex(62));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(81));
          oledWriteData(inttohex(33));
          oledWriteData(inttohex(94));
        
         break;

         
        case "R":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(9));
          oledWriteData(inttohex(25));
          oledWriteData(inttohex(41));
          oledWriteData(inttohex(70));
        
         break;


         case "S":
        
          oledWriteData(inttohex(70));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(49));
        
         break;


         case "T":
        
          oledWriteData(inttohex(1));
          oledWriteData(inttohex(1));
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(1));
          oledWriteData(inttohex(1));
        
         break;



          case "U":
        
          oledWriteData(inttohex(63));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(63));
        
         break;
   
          case "V":
        
          oledWriteData(inttohex(31));
          oledWriteData(inttohex(32));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(32));
          oledWriteData(inttohex(31));
        
         break;

           case "W":
        
          oledWriteData(inttohex(63));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(56));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(63));
        
         break;


          case "X":
        
          oledWriteData(inttohex(99));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(99));
           break;

          case "Y":
        
          oledWriteData(inttohex(7));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(112));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(7));

           break;

          case "Z":
        
          oledWriteData(inttohex(97));
          oledWriteData(inttohex(81));
          oledWriteData(inttohex(73));
          oledWriteData(inttohex(69));
          oledWriteData(inttohex(67));

           break;
         
          case "[":
        
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(0));

          break;


         
          case "]":
        
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(0));

          break;
  
          
          case "^":
        
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(2));
          oledWriteData(inttohex(1));
          oledWriteData(inttohex(2));
          oledWriteData(inttohex(4));

          break;
  

         
          case "_":
        
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(64));

          break;



          case "`":
        
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(1));
          oledWriteData(inttohex(2));
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(0));

          break;
          
          

           case "a":
        
        	    oledWriteData(inttohex(32)); //0x20
		        oledWriteData(inttohex(84)); //0x54 
		        oledWriteData(inttohex(84)); //0x54
		        oledWriteData(inttohex(84)); //0x54
		        oledWriteData(inttohex(120)); //0x78

          break;


             case "b":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(72));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(56));

          break;


             case "c":
        
          oledWriteData(inttohex(56));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(32));

          break;


            case "d":
        
          oledWriteData(inttohex(56));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(72));
          oledWriteData(inttohex(127));

          break;

         
            case "e":
        
          oledWriteData(inttohex(56));
          oledWriteData(inttohex(84));
          oledWriteData(inttohex(84));
          oledWriteData(inttohex(84));
          oledWriteData(inttohex(24));

          break;


         
            case "f":
        
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(126));
          oledWriteData(inttohex(9));
          oledWriteData(inttohex(1));
          oledWriteData(inttohex(2));

          break;

            case "g":
        
          oledWriteData(inttohex(12));
          oledWriteData(inttohex(82));
          oledWriteData(inttohex(82));
          oledWriteData(inttohex(82));
          oledWriteData(inttohex(62));

          break;

           case "h":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(120));

          break;

           case "i":
        
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(125));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(0));

          break;

            case "j":
        
          oledWriteData(inttohex(32));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(61));
          oledWriteData(inttohex(0));

          break;

            case "k":
        
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(16));
          oledWriteData(inttohex(40));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(0));

          break;

           case "l":
        
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(0));

          break;


           case "m":
        
          oledWriteData(inttohex(124));
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(24));
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(120));

          break;


          case "n":
        
          oledWriteData(inttohex(124));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(120));

          break;

          case "o":
        
          oledWriteData(inttohex(56));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(56));

          break;

          case "p":
        
          oledWriteData(inttohex(124));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(8));

          break;


           case "q":
        
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(20));
          oledWriteData(inttohex(24));
          oledWriteData(inttohex(124));

          break;

             case "r":
        
          oledWriteData(inttohex(124));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(8));

          break;


               case "s":
        
          oledWriteData(inttohex(72));
          oledWriteData(inttohex(84));
          oledWriteData(inttohex(84));
          oledWriteData(inttohex(84));
          oledWriteData(inttohex(32));

          break;


            case "t":
        
          oledWriteData(inttohex(4));
          oledWriteData(inttohex(63));
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(32));

          break;

             case "u":
        
          oledWriteData(inttohex(60));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(32));
          oledWriteData(inttohex(124));

          break;


              case "v":
        
          oledWriteData(inttohex(28));
          oledWriteData(inttohex(32));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(32));
          oledWriteData(inttohex(24));

          break;


               case "w":
        
          oledWriteData(inttohex(60));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(48));
          oledWriteData(inttohex(64));
          oledWriteData(inttohex(60));

          break;


               case "x":
        
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(40));
          oledWriteData(inttohex(16));
          oledWriteData(inttohex(40));
          oledWriteData(inttohex(68));

          break;

         
            case "y":
        
          oledWriteData(inttohex(12));
          oledWriteData(inttohex(80));
          oledWriteData(inttohex(80));
          oledWriteData(inttohex(80));
          oledWriteData(inttohex(60));

          break;


            case "z":
        
          oledWriteData(inttohex(68));
          oledWriteData(inttohex(100));
          oledWriteData(inttohex(84));
          oledWriteData(inttohex(76));
          oledWriteData(inttohex(68));

          break;

              case "{":
        
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(54));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(0));

          break;


             case "|":
        
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(127));
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(0));

          break;

          
             case "}":
        
          oledWriteData(inttohex(0));
          oledWriteData(inttohex(65));
          oledWriteData(inttohex(54));
          oledWriteData(inttohex(8));
          oledWriteData(inttohex(0));

          break;

   
       
    }

  
}


static  void oledWriteBigChar(int x,int y,String bigchar)

{
	
	//A
	switch(bigchar)
	{
	case "A":
		oledSetXY(x,y);
		oledDrawData("0xf8");
		oledDrawData("0xfc");
		oledDrawData("0x66");
		oledDrawData("0x67");
		oledDrawData("0x67");
		oledDrawData("0x67");
		oledDrawData("0x66");
		oledDrawData("0xfc");
		oledDrawData("0xf8");
		oledSetXY(x,y+1);
		oledDrawData("0x07");
		oledDrawData("0x07");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x07");
		oledDrawData("0x07");	
	
		
		break;
		
		
		//B
		
	case "B":
		oledSetXY(x,y);
		oledDrawData("0xff");
		oledDrawData("0xff");
		oledDrawData("0x01");
		oledDrawData("0x21");
		oledDrawData("0x21");
		oledDrawData("0x73");
		oledDrawData("0xde");
		oledDrawData("0x8c");
		oledDrawData("0x00");
		oledSetXY(x,y+1);
		oledDrawData("0x07");
		oledDrawData("0x07");
		oledDrawData("0x04");
		oledDrawData("0x04");
		oledDrawData("0x04");
		oledDrawData("0x06");
		oledDrawData("0x03");
		oledDrawData("0x01");
		oledDrawData("0x00");
		
		break;
		
		
		
		//C
		
	case "C":
		oledSetXY(x,y);
		oledDrawData("0xf8");
		oledDrawData("0xfe");
		oledDrawData("0x07");
		oledDrawData("0x03");
		oledDrawData("0x03");
		oledDrawData("0x03");
		oledDrawData("0x03");
		oledDrawData("0x03");
		oledDrawData("0x00");
		oledSetXY(x,y+1);
		oledDrawData("0x00");
		oledDrawData("0x03");
		oledDrawData("0x07");
		oledDrawData("0x06");
		oledDrawData("0x06");
		oledDrawData("0x06");
		oledDrawData("0x06");
		oledDrawData("0x06");
		oledDrawData("0x00");
		
		break;
		
		
		//D
	case "D":
		oledSetXY(x,y);
		oledDrawData("0xff");
		oledDrawData("0xff");
		oledDrawData("0x01");
		oledDrawData("0x01");
		oledDrawData("0x03");
		oledDrawData("0x06");
		oledDrawData("0x8c");
		oledDrawData("0x70");
		oledDrawData("0x00");
		oledSetXY(x,y+1);
		oledDrawData("0x07");
		oledDrawData("0x07");
		oledDrawData("0x04");
		oledDrawData("0x04");
		oledDrawData("0x06");
		oledDrawData("0x03");
		oledDrawData("0x01");
		oledDrawData("0x00");
		oledDrawData("0x00");
		
		break;
		
			//E
		
	case "E":
		oledSetXY(x,y);
		oledDrawData("0xff");
		oledDrawData("0xff");
		oledDrawData("0x63");
		oledDrawData("0x63");
		oledDrawData("0x63");
		oledDrawData("0x63");
		oledDrawData("0x63");
		oledDrawData("0x63");
		oledDrawData("0x63");
		oledSetXY(x,y+1);
		oledDrawData("0x0f");
		oledDrawData("0x0f");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		
		break;
		
			//F
		
	case "F":
		oledSetXY(x,y);
		oledDrawData("0xff");
		oledDrawData("0xff");
		oledDrawData("0x33");
		oledDrawData("0x33");
		oledDrawData("0x33");
		oledDrawData("0x33");
		oledDrawData("0x33");
		oledDrawData("0x03");
		oledDrawData("0x00");
		oledSetXY(x,y+1);
		oledDrawData("0x0f");
		oledDrawData("0x0f");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		
		break;
		
		
		
		//G
		
		case "G":
		oledSetXY(x,y);
		oledDrawData("0xf8");
		oledDrawData("0xfe");
		oledDrawData("0x07");
		oledDrawData("0x03");
		oledDrawData("0x63");
		oledDrawData("0x63");
		oledDrawData("0xe3");
		oledDrawData("0xe3");
		oledDrawData("0x00");
		oledSetXY(x,y+1);
		oledDrawData("0x00");
		oledDrawData("0x03");
		oledDrawData("0x07");
		oledDrawData("0x06");
		oledDrawData("0x06");
		oledDrawData("0x06");
		oledDrawData("0x07");
		oledDrawData("0x07");
		oledDrawData("0x00");
		
		break;
		
			//H
			
		case "H":	
		oledSetXY(x,y);
		oledDrawData("0xff");
		oledDrawData("0xff");
		oledDrawData("0x60");
		oledDrawData("0x60");
		oledDrawData("0x60");
		oledDrawData("0x60");
		oledDrawData("0xff");
		oledDrawData("0xff");
		oledDrawData("0x00");
		oledSetXY(x,y+1);
		oledDrawData("0x0f");
		oledDrawData("0x0f");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x0f");
		oledDrawData("0x0f");
		oledDrawData("0x00");
		
		
		break;
		
		/////////////////////////////////////
			
			//I
			
			case "I":
		oledSetXY(x,y);
		oledDrawData("0x03");
		oledDrawData("0x03");
		oledDrawData("0x03");
		oledDrawData("0xff");
		oledDrawData("0xff");
		oledDrawData("0x03");
		oledDrawData("0x03");
		oledDrawData("0x03");
		oledDrawData("0x00");
		oledSetXY(x,y+1);
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x0f");
		oledDrawData("0x0f");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x00");
		
		break;
		
		
			
			//J
			
			case "J":
		oledSetXY(x,y);
		oledDrawData("0x00");
		oledDrawData("0x83");
		oledDrawData("0x83");
		oledDrawData("0x03");
		oledDrawData("0x03");
		oledDrawData("0xff");
		oledDrawData("0xff");
		oledDrawData("0x03");
		oledDrawData("0x03");
		oledSetXY(x,y+1);
		oledDrawData("0x00");
		oledDrawData("0x01");
		oledDrawData("0x03");
		oledDrawData("0x06");
		oledDrawData("0x06");
		oledDrawData("0x07");
		oledDrawData("0x03");
		oledDrawData("0x00");
		oledDrawData("0x00");
		
		break;
				
			//K
			
			case "K":
		oledSetXY(x,y);
		oledDrawData("0xff");
		oledDrawData("0xff");
		oledDrawData("0x60");
		oledDrawData("0x30");
		oledDrawData("0x78");
		oledDrawData("0x8c");
		oledDrawData("0x06");
		oledDrawData("0x03");
		oledDrawData("0x01");
		oledSetXY(x,y+1);
		oledDrawData("0x07");
		oledDrawData("0x07");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x01");
		oledDrawData("0x03");
		oledDrawData("0x06");
		oledDrawData("0x04");
		
		
		break;
				
			//L
			
			case "L":
		oledSetXY(x,y);
		oledDrawData("0xff");
		oledDrawData("0xff");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledSetXY(x,y+1);
		oledDrawData("0x0f");
		oledDrawData("0x0f");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x0c");
		oledDrawData("0x00");
		

	    break;

	     	
			//M
			
			case "M":
		oledSetXY(x,y);
		oledDrawData("0xff");
		oledDrawData("0xff");
		oledDrawData("0x06");
		oledDrawData("0x0c");
		oledDrawData("0x18");
		oledDrawData("0x0c");
		oledDrawData("0x06");
		oledDrawData("0xff");
		oledDrawData("0xff");
		oledSetXY(x,y+1);
		oledDrawData("0x0f");
		oledDrawData("0x0f");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x00");
		oledDrawData("0x0f");
		oledDrawData("0x0f");
			
		break;	

		
		


    	//N
		
		case "N":
	oledSetXY(x,y);
	oledDrawData("0xff");
	oledDrawData("0xff");
	oledDrawData("0x07");
	oledDrawData("0x3e");
	oledDrawData("0xf8");
	oledDrawData("0xc0");
	oledDrawData("0x00");
	oledDrawData("0xff");
	oledDrawData("0xff");
	oledSetXY(x,y+1);
	oledDrawData("0x0f");
	oledDrawData("0x0f");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x01");
	oledDrawData("0x07");
	oledDrawData("0x0e");
	oledDrawData("0x0f");
	oledDrawData("0x0f");

    break;


	
		//O
		
		case "O":
	oledSetXY(x,y);
	oledDrawData("0xf0");
	oledDrawData("0x9c");
	oledDrawData("0x0e");
	oledDrawData("0x03");
	oledDrawData("0x03");
	oledDrawData("0x03");
	oledDrawData("0x0e");
	oledDrawData("0x9c");
	oledDrawData("0xf0");
	oledSetXY(x,y+1);
	oledDrawData("0x00");
	oledDrawData("0x03");
	oledDrawData("0x07");
	oledDrawData("0x0c");
	oledDrawData("0x0c");
	oledDrawData("0x0c");
	oledDrawData("0x07");
	oledDrawData("0x03");
	oledDrawData("0x00");
	
	
    break;	
	
	
	//P
	
	case "P":
	oledSetXY(x,y);
	oledDrawData("0xff");
	oledDrawData("0xff");
	oledDrawData("0x33");
	oledDrawData("0x33");
	oledDrawData("0x33");
	oledDrawData("0x1e");
	oledDrawData("0x0c");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledSetXY(x,y+1);
	oledDrawData("0x07");
	oledDrawData("0x07");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	
	break;
	
		//Q
		
		
		case "Q":
	oledSetXY(x,y);
	oledDrawData("0xf0");
	oledDrawData("0x9c");
	oledDrawData("0x0e");
	oledDrawData("0x03");
	oledDrawData("0xc3");
	oledDrawData("0x83");
	oledDrawData("0x0e");
	oledDrawData("0x9c");
	oledDrawData("0xf0");
	oledSetXY(x,y+1);
	oledDrawData("0x00");
	oledDrawData("0x03");
	oledDrawData("0x07");
	oledDrawData("0x0c");
	oledDrawData("0x0c");
	oledDrawData("0x05");
	oledDrawData("0x03");
	oledDrawData("0x06");
	oledDrawData("0x0c");
	
	
	
	break;
	
	//R
	
	case "R":
	oledSetXY(x,y);
	oledDrawData("0xff");
	oledDrawData("0xff");
	oledDrawData("0x73");
	oledDrawData("0xf3");
	oledDrawData("0xb3");
	oledDrawData("0x1e");
	oledDrawData("0x0c");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledSetXY(x,y+1);
	oledDrawData("0x07");
	oledDrawData("0x07");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x01");
	oledDrawData("0x03");
	oledDrawData("0x06");
	oledDrawData("0x04");
	oledDrawData("0x00");
	
	
	
	
	break;
	
	
	//S
	
	
	case "S":
	oledSetXY(x,y);
	oledDrawData("0x1c");
	oledDrawData("0x3e");
	oledDrawData("0x67");
	oledDrawData("0x63");
	oledDrawData("0x63");
	oledDrawData("0x63");
	oledDrawData("0x63");
	oledDrawData("0xe3");
	oledDrawData("0xc0");
	oledSetXY(x,y+1);
	oledDrawData("0x00");
	oledDrawData("0x06");
	oledDrawData("0x06");
	oledDrawData("0x06");
	oledDrawData("0x06");
	oledDrawData("0x06");
	oledDrawData("0x06");
	oledDrawData("0x03");
	oledDrawData("0x01");
	
	
	break;
	
	
	//T
	
	case "T":
	oledSetXY(x,y);
	oledDrawData("0x03");
	oledDrawData("0x03");
	oledDrawData("0x03");
	oledDrawData("0xff");
	oledDrawData("0xff");
	oledDrawData("0x03");
	oledDrawData("0x03");
	oledDrawData("0x03");
	oledDrawData("0x00");
	oledSetXY(x,y+1);
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x07");
	oledDrawData("0x07");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");

	
	
	
	break;
	
		//U
		
		case "U":
	oledSetXY(x,y);
	oledDrawData("0xfe");
	oledDrawData("0xfe");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0xfe");
	oledDrawData("0xfe");
	oledSetXY(x,y+1);
	oledDrawData("0x00");
	oledDrawData("0x03");
	oledDrawData("0x07");
	oledDrawData("0x0c");
	oledDrawData("0x0c");
	oledDrawData("0x0c");
	oledDrawData("0x07");
	oledDrawData("0x03");
	oledDrawData("0x00");
	
	
	break;
	
		//V
		
		case "V":
	oledSetXY(x,y);
	oledDrawData("0x1e");
	oledDrawData("0x78");
	oledDrawData("0xe0");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0xe0");
	oledDrawData("0x78");
	oledDrawData("0x1e");
	oledSetXY(x,y+1);
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x01");
	oledDrawData("0x03");
	oledDrawData("0x06");
	oledDrawData("0x03");
	oledDrawData("0x01");
	oledDrawData("0x00");
	oledDrawData("0x00");
	
	
	
	break;
	
	
	
	
	//W
		
		case "W":
	oledSetXY(x,y);
	oledDrawData("0xfe");
	oledDrawData("0xfe");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0xc0");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0xfe");
	oledDrawData("0xfe");
	oledSetXY(x,y+1);
	oledDrawData("0x07");
	oledDrawData("0x07");
	oledDrawData("0x06");
	oledDrawData("0x03");
	oledDrawData("0x01");
	oledDrawData("0x03");
	oledDrawData("0x06");
	oledDrawData("0x07");
	oledDrawData("0x07");
	
	
	
	break;
	
	
	
	
	//X
	
	
	case "X":
	oledSetXY(x,y);
	oledDrawData("0x00");
	oledDrawData("0x03");
	oledDrawData("0x8f");
	oledDrawData("0xdc");
	oledDrawData("0x70");
	oledDrawData("0xdc");
	oledDrawData("0x8f");
	oledDrawData("0x03");
	oledDrawData("0x00");
	oledSetXY(x,y+1);
	oledDrawData("0x00");
	oledDrawData("0x06");
	oledDrawData("0x07");
	oledDrawData("0x01");
	oledDrawData("0x00");
	oledDrawData("0x01");
	oledDrawData("0x07");
	oledDrawData("0x06");
	oledDrawData("0x00");
	
	
	break;
	
		//y
		
		case "Y":
	oledSetXY(x,y);
	oledDrawData("0x07");
	oledDrawData("0x0f");
	oledDrawData("0x1c");
	oledDrawData("0xf8");
	oledDrawData("0xf8");
	oledDrawData("0x1c");
	oledDrawData("0x0f");
	oledDrawData("0x07");
	oledDrawData("0x00");
	oledSetXY(x,y+1);
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x0f");
	oledDrawData("0x0f");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	oledDrawData("0x00");
	
	
	break;
	
		//Z
		
		case "Z":
	oledSetXY(x,y);
	oledDrawData("0x03");
	oledDrawData("0x03");
	oledDrawData("0x83");
	oledDrawData("0xc3");
	oledDrawData("0x63");
	oledDrawData("0x33");
	oledDrawData("0x1b");
	oledDrawData("0x0f");
	oledDrawData("0x07");
	oledSetXY(x,y+1);
	oledDrawData("0x0e");
	oledDrawData("0x0f");
	oledDrawData("0x0d");
	oledDrawData("0x0c");
	oledDrawData("0x0c");
	oledDrawData("0x0c");
	oledDrawData("0x0c");
	oledDrawData("0x0c");
	oledDrawData("0x0c");
	
	break;
	
	
		case "a":
			oledSetXY(x,y);
			oledDrawData("0x80");
			oledDrawData("0xc0");
			oledDrawData("0x60");
			oledDrawData("0x30");
			oledDrawData("0x30");
			oledDrawData("0x60");
			oledDrawData("0xc0");
			oledDrawData("0xc0");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x01");
			oledDrawData("0x03");
			oledDrawData("0x06");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x06");
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x0c");
			
			break;
			
			
			case "b":
			oledSetXY(x,y);
			oledDrawData("0xfe");
			oledDrawData("0xfe");
			oledDrawData("0x60");
			oledDrawData("0x60");
			oledDrawData("0x60");
			oledDrawData("0xc0");
			oledDrawData("0x80");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x07");
			oledDrawData("0x03");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "c":
			oledSetXY(x,y);
			oledDrawData("0x80");
			oledDrawData("0xc0");
			oledDrawData("0x60");
			oledDrawData("0x60");
			oledDrawData("0x60");
			oledDrawData("0x60");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x03");
			oledDrawData("0x07");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "d":
			oledSetXY(x,y);
			oledDrawData("0x80");
			oledDrawData("0xc0");
			oledDrawData("0x60");
			oledDrawData("0x60");
			oledDrawData("0x60");
			oledDrawData("0xfe");
			oledDrawData("0xfe");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x03");
			oledDrawData("0x07");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "e":
			oledSetXY(x,y);
			oledDrawData("0xe0");
			oledDrawData("0xf0");
			oledDrawData("0xc8");
			oledDrawData("0xcc");
			oledDrawData("0xcc");
			oledDrawData("0xc8");
			oledDrawData("0xf0");
			oledDrawData("0x60");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x03");
			oledDrawData("0x07");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x04");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "f":
			oledSetXY(x,y);
			oledDrawData("0xfc");
			oledDrawData("0xfe");
			oledDrawData("0xc7");
			oledDrawData("0xc3");
			oledDrawData("0xc3");
			oledDrawData("0xc6");
			oledDrawData("0x1c");
			oledDrawData("0x18");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "g":
			oledSetXY(x,y);
			oledDrawData("0x1c");
			oledDrawData("0x36");
			oledDrawData("0x63");
			oledDrawData("0x63");
			oledDrawData("0x36");
			oledDrawData("0xfc");
			oledDrawData("0xf8");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x03");
			oledDrawData("0x06");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0e");
			oledDrawData("0x07");
			oledDrawData("0x03");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "h":
			oledSetXY(x,y);
			oledDrawData("0xff");
			oledDrawData("0xff");
			oledDrawData("0xc0");
			oledDrawData("0xc0");
			oledDrawData("0xc0");
			oledDrawData("0x80");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "i":
			oledSetXY(x,y);
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x30");
			oledDrawData("0x30");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "j":
			oledSetXY(x,y);
			oledDrawData("0x80");
			oledDrawData("0x80");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0xfb");
			oledDrawData("0xfb");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x03");
			oledDrawData("0x07");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x07");
			oledDrawData("0x03");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "k":
			oledSetXY(x,y);
			oledDrawData("0xf8");
			oledDrawData("0xf8");
			oledDrawData("0x00");
			oledDrawData("0x80");
			oledDrawData("0xc0");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x03");
			oledDrawData("0x07");
			oledDrawData("0x0c");
			oledDrawData("0x06");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			
			
			/////////////////////////////////////////////////////////////////////////
			case "l":
			oledSetXY(x,y);
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x0c");
			oledDrawData("0xfc");
			oledDrawData("0xfc");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x0c");
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x0c");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "m":
			oledSetXY(x,y);
			oledDrawData("0xe0");
			oledDrawData("0xc0");
			oledDrawData("0x80");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x80");
			oledDrawData("0x80");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x0f");
			oledDrawData("0x07");
			oledDrawData("0x01");
			oledDrawData("0x07");
			oledDrawData("0x0e");
			oledDrawData("0x07");
			oledDrawData("0x01");
			oledDrawData("0x07");
			oledDrawData("0x0e");
			
			break;
			
			case "n":
			oledSetXY(x,y);
			oledDrawData("0xe0");
			oledDrawData("0xe0");
			oledDrawData("0x80");
			oledDrawData("0xc0");
			oledDrawData("0x60");
			oledDrawData("0x60");
			oledDrawData("0x60");
			oledDrawData("0xc0");
			oledDrawData("0x80");
			oledSetXY(x,y+1);
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x01");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			
			break;
			
			case "o":
			oledSetXY(x,y);
			oledDrawData("0xc0");
			oledDrawData("0xe0");
			oledDrawData("0x30");
			oledDrawData("0x18");
			oledDrawData("0x18");
			oledDrawData("0x18");
			oledDrawData("0x30");
			oledDrawData("0xe0");
			oledDrawData("0xc0");
			oledSetXY(x,y+1);
			oledDrawData("0x01");
			oledDrawData("0x03");
			oledDrawData("0x06");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x06");
			oledDrawData("0x03");
			oledDrawData("0x01");
			
			break;
			
			case "p":
			oledSetXY(x,y);
			oledDrawData("0xfe");
			oledDrawData("0xff");
			oledDrawData("0x63");
			oledDrawData("0x63");
			oledDrawData("0x63");
			oledDrawData("0x3e");
			oledDrawData("0x1c");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x07");
			oledDrawData("0x07");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "q":
			oledSetXY(x,y);
			oledDrawData("0x1c");
			oledDrawData("0x3e");
			oledDrawData("0x63");
			oledDrawData("0x63");
			oledDrawData("0x63");
			oledDrawData("0xfe");
			oledDrawData("0xfc");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x06");
			oledDrawData("0x02");
			
			break;
			
			case "r":
			oledSetXY(x,y);
			oledDrawData("0xe0");
			oledDrawData("0xe0");
			oledDrawData("0x80");
			oledDrawData("0xc0");
			oledDrawData("0x60");
			oledDrawData("0x60");
			oledDrawData("0x60");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x01");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "s":
			oledSetXY(x,y);
			oledDrawData("0x30");
			oledDrawData("0x78");
			oledDrawData("0xcc");
			oledDrawData("0xcc");
			oledDrawData("0xcc");
			oledDrawData("0xcc");
			oledDrawData("0x8c");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x00");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x07");
			oledDrawData("0x03");
			oledDrawData("0x00");
			
			break;
			
			case "t":
			oledSetXY(x,y);
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0xff");
			oledDrawData("0xff");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x03");
			oledDrawData("0x07");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x06");
			oledDrawData("0x03");
			
			break;
			
			case "u":
			oledSetXY(x,y);
			oledDrawData("0xe0");
			oledDrawData("0xe0");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0xe0");
			oledDrawData("0xe0");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x03");
			oledDrawData("0x07");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x07");
			oledDrawData("0x03");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "v":
			oledSetXY(x,y);
			oledDrawData("0x00");
			oledDrawData("0xc0");
			oledDrawData("0x80");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x80");
			oledDrawData("0xc0");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x00");
			oledDrawData("0x01");
			oledDrawData("0x03");
			oledDrawData("0x06");
			oledDrawData("0x0c");
			oledDrawData("0x06");
			oledDrawData("0x03");
			oledDrawData("0x01");
			oledDrawData("0x00");
			
			break;
			
			case "w":
			oledSetXY(x,y);
			oledDrawData("0xc0");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x80");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0xc0");
			oledSetXY(x,y+1);
			oledDrawData("0x07");
			oledDrawData("0x0f");
			oledDrawData("0x0c");
			oledDrawData("0x0e");
			oledDrawData("0x0f");
			oledDrawData("0x0e");
			oledDrawData("0x0c");
			oledDrawData("0x0f");
			oledDrawData("0x07");
			
			break;
			
			case "x":
			oledSetXY(x,y);
			oledDrawData("0x60");
			oledDrawData("0xc0");
			oledDrawData("0x80");
			oledDrawData("0xc0");
			oledDrawData("0x60");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x0c");
			oledDrawData("0x06");
			oledDrawData("0x03");
			oledDrawData("0x06");
			oledDrawData("0x0c");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "y":
			oledSetXY(x,y);
			oledDrawData("0x38");
			oledDrawData("0x60");
			oledDrawData("0xc0");
			oledDrawData("0xc0");
			oledDrawData("0x60");
			oledDrawData("0x38");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x0f");
			oledDrawData("0x0f");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			
			case "z":
			oledSetXY(x,y);
			oledDrawData("0x30");
			oledDrawData("0x30");
			oledDrawData("0xb0");
			oledDrawData("0xf0");
			oledDrawData("0x70");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledSetXY(x,y+1);
			oledDrawData("0x0e");
			oledDrawData("0x0f");
			oledDrawData("0x0d");
			oledDrawData("0x0c");
			oledDrawData("0x0c");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			oledDrawData("0x00");
			
			break;
			//////////////////////////////////////////////////////////////////
			
	
	
		
	}
}




public static void oledWriteString(int x,int y,String characters)
{
	/*
  while (*characters) 
  {
     oledSetXY(x,y);
     oledWriteChar(*characters++);
     x=x+7;

  }
  */
	
	for(int k=0;k<characters.length();k++)
	{
		
		 oledSetXY(x,y);
	     oledWriteChar(characters.substring(k, k+1));
	     x=x+7;
	}
	
}

static void oledDrawString(int x,int y,String characters)
{
	
	
	for(int k=0;k<characters.length();k++)
	{
		
		 oledSetXY(x,y);
	     oledWriteBigChar(x,y,characters.substring(k, k+1));
	     x=x+10;
	    
	}
	
}


    
    
	
	static String intto4bit(String part)
	{
		
		String convertedpart = null;
		
		
		if(part.equals("0"))
		{
			convertedpart="0000";	
			
		}
	
		if(part.equals("1"))
		{
			convertedpart="0001";	
			
		}
		
		if(part.equals("2"))
		{
			convertedpart="0010";	
			
		}
		
		
		if(part.equals("3"))
		{
			convertedpart="0011";	
			
		}
		
		if(part.equals("4"))
		{
			convertedpart="0100";	
			
		}
		
		
		if(part.equals("5"))
		{
			convertedpart="0101";	
			
		}
		
		
		if(part.equals("6"))
		{
			convertedpart="0110";	
			
		}
		
		
		if(part.equals("7"))
		{
			convertedpart="0111";	
			
		}
		
		
		if(part.equals("8"))
		{
			convertedpart="1000";	
			
		}
		
		
		if(part.equals("9"))
		{
			convertedpart="1001";	
			
		}
		
		
		if(part.equals("a"))
		{
			convertedpart="1010";	
			
		}
		
		if(part.equals("b"))
		{
			convertedpart="1011";	
			
		}
		
		if(part.equals("c"))
		{
			convertedpart="1100";	
			
		}
		
		if(part.equals("d"))
		{
			convertedpart="1101";	
			
		}
		
		if(part.equals("e"))
		{
			convertedpart="1110";	
			
		}
		
		
		
		if(part.equals("f"))
		{
			convertedpart="1111";	
			
		}
		
		return convertedpart;
		
	}
	
	

}
