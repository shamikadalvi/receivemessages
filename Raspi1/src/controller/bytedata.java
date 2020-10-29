package controller;

public class bytedata {

	public static void main(String[] args) 
	
	{
		// TODO Auto-generated method stub
		 //System.out.println("sending from pi" + (byte)0070);
		
		
		String valueis=hexto6bit("0f0f0e");
		System.out.println("sending from pi" + valueis);
		
	}
	
	
	
	
	
	
	static String hexto6bit(String newpart)
	{
		
		String convertedpart="";
		
		String convertedpart1 = "";
		String convertedpart2 = "";
		String convertedpart3 = "";
		String convertedpart4 = "";
		String convertedpart5 = "";
		String convertedpart6 = "";
		
		 String part1=newpart.substring(0, 1);
		 String part2=newpart.substring(1, 2);
		 String part3=newpart.substring(2, 3);
		 String part4=newpart.substring(3, 4);
		 String part5=newpart.substring(4, 5);
		 String part6=newpart.substring(5, 6);
		 
		 
		 
		
		if(part1.equals("0"))
		{
			convertedpart1="0000";	
			
		}
	
		if(part1.equals("1"))
		{
			convertedpart1="0001";	
			
		}
		
		if(part1.equals("2"))
		{
			convertedpart1="0010";	
			
		}
		
		
		if(part1.equals("3"))
		{
			convertedpart1="0011";	
			
		}
		
		if(part1.equals("4"))
		{
			convertedpart1="0100";	
			
		}
		
		
		if(part1.equals("5"))
		{
			convertedpart1="0101";	
			
		}
		
		
		if(part1.equals("6"))
		{
			convertedpart1="0110";	
			
		}
		
		
		if(part1.equals("7"))
		{
			convertedpart1="0111";	
			
		}
		
		
		if(part1.equals("8"))
		{
			convertedpart1="1000";	
			
		}
		
		
		if(part1.equals("9"))
		{
			convertedpart1="1001";	
			
		}
		
		
		if(part1.equals("a"))
		{
			convertedpart1="1010";	
			
		}
		
		if(part1.equals("b"))
		{
			convertedpart1="1011";	
			
		}
		
		if(part1.equals("c"))
		{
			convertedpart1="1100";	
			
		}
		
		if(part1.equals("d"))
		{
			convertedpart1="1101";	
			
		}
		
		if(part1.equals("e"))
		{
			convertedpart1="1110";	
			
		}
		
		
		
		if(part1.equals("f"))
		{
			convertedpart1="1111";	
			
		}
		
		
		
		
		
		if(part2.equals("0"))
		{
			convertedpart2="0000";	
			
		}
	
		if(part2.equals("1"))
		{
			convertedpart2="0001";	
			
		}
		
		if(part2.equals("2"))
		{
			convertedpart2="0010";	
			
		}
		
		
		if(part2.equals("3"))
		{
			convertedpart2="0011";	
			
		}
		
		if(part2.equals("4"))
		{
			convertedpart2="0100";	
			
		}
		
		
		if(part2.equals("5"))
		{
			convertedpart2="0101";	
			
		}
		
		
		if(part2.equals("6"))
		{
			convertedpart2="0110";	
			
		}
		
		
		if(part2.equals("7"))
		{
			convertedpart2="0111";	
			
		}
		
		
		if(part2.equals("8"))
		{
			convertedpart2="1000";	
			
		}
		
		
		if(part2.equals("9"))
		{
			convertedpart2="1001";	
			
		}
		
		
		if(part2.equals("a"))
		{
			convertedpart2="1010";	
			
		}
		
		if(part2.equals("b"))
		{
			convertedpart2="1011";	
			
		}
		
		if(part2.equals("c"))
		{
			convertedpart2="1100";	
			
		}
		
		if(part2.equals("d"))
		{
			convertedpart2="1101";	
			
		}
		
		if(part2.equals("e"))
		{
			convertedpart2="1110";	
			
		}
		
		
		
		if(part2.equals("f"))
		{
			convertedpart2="1111";	
			
		}
		
	
		
		
		if(part3.equals("0"))
		{
			convertedpart3="0000";	
			
		}
	
		if(part3.equals("1"))
		{
			convertedpart3="0001";	
			
		}
		
		if(part3.equals("2"))
		{
			convertedpart3="0010";	
			
		}
		
		
		if(part3.equals("3"))
		{
			convertedpart3="0011";	
			
		}
		
		if(part3.equals("4"))
		{
			convertedpart3="0100";	
			
		}
		
		
		if(part3.equals("5"))
		{
			convertedpart3="0101";	
			
		}
		
		
		if(part3.equals("6"))
		{
			convertedpart3="0110";	
			
		}
		
		
		if(part3.equals("7"))
		{
			convertedpart3="0111";	
			
		}
		
		
		if(part3.equals("8"))
		{
			convertedpart3="1000";	
			
		}
		
		
		if(part3.equals("9"))
		{
			convertedpart3="1001";	
			
		}
		
		
		if(part3.equals("a"))
		{
			convertedpart3="1010";	
			
		}
		
		if(part3.equals("b"))
		{
			convertedpart3="1011";	
			
		}
		
		if(part3.equals("c"))
		{
			convertedpart3="1100";	
			
		}
		
		if(part3.equals("d"))
		{
			convertedpart3="1101";	
			
		}
		
		if(part3.equals("e"))
		{
			convertedpart3="1110";	
			
		}
		
		
		
		if(part3.equals("f"))
		{
			convertedpart3="1111";	
			
		}
		
		
		
		
		
		if(part4.equals("0"))
		{
			convertedpart4="0000";	
			
		}
	
		if(part4.equals("1"))
		{
			convertedpart4="0001";	
			
		}
		
		if(part4.equals("2"))
		{
			convertedpart4="0010";	
			
		}
		
		
		if(part4.equals("3"))
		{
			convertedpart4="0011";	
			
		}
		
		if(part4.equals("4"))
		{
			convertedpart4="0100";	
			
		}
		
		
		if(part4.equals("5"))
		{
			convertedpart4="0101";	
			
		}
		
		
		if(part4.equals("6"))
		{
			convertedpart4="0110";	
			
		}
		
		
		if(part4.equals("7"))
		{
			convertedpart4="0111";	
			
		}
		
		
		if(part4.equals("8"))
		{
			convertedpart4="1000";	
			
		}
		
		
		if(part4.equals("9"))
		{
			convertedpart4="1001";	
			
		}
		
		
		if(part4.equals("a"))
		{
			convertedpart4="1010";	
			
		}
		
		if(part4.equals("b"))
		{
			convertedpart4="1011";	
			
		}
		
		if(part4.equals("c"))
		{
			convertedpart4="1100";	
			
		}
		
		if(part4.equals("d"))
		{
			convertedpart4="1101";	
			
		}
		
		if(part4.equals("e"))
		{
			convertedpart4="1110";	
			
		}
		
		
		
		if(part4.equals("f"))
		{
			convertedpart4="1111";	
			
		}
		
		
		
		
		if(part5.equals("0"))
		{
			convertedpart5="0000";	
			
		}
	
		if(part5.equals("1"))
		{
			convertedpart5="0001";	
			
		}
		
		if(part5.equals("2"))
		{
			convertedpart5="0010";	
			
		}
		
		
		if(part5.equals("3"))
		{
			convertedpart5="0011";	
			
		}
		
		if(part5.equals("4"))
		{
			convertedpart5="0100";	
			
		}
		
		
		if(part5.equals("5"))
		{
			convertedpart5="0101";	
			
		}
		
		
		if(part5.equals("6"))
		{
			convertedpart5="0110";	
			
		}
		
		
		if(part5.equals("7"))
		{
			convertedpart5="0111";	
			
		}
		
		
		if(part5.equals("8"))
		{
			convertedpart5="1000";	
			
		}
		
		
		if(part5.equals("9"))
		{
			convertedpart5="1001";	
			
		}
		
		
		if(part5.equals("a"))
		{
			convertedpart5="1010";	
			
		}
		
		if(part5.equals("b"))
		{
			convertedpart5="1011";	
			
		}
		
		if(part5.equals("c"))
		{
			convertedpart5="1100";	
			
		}
		
		if(part5.equals("d"))
		{
			convertedpart5="1101";	
			
		}
		
		if(part5.equals("e"))
		{
			convertedpart5="1110";	
			
		}
		
		
		
		if(part5.equals("f"))
		{
			convertedpart5="1111";	
			
		}
		
		
		
		
		if(part6.equals("0"))
		{
			convertedpart6="0000";	
			
		}
	
		if(part6.equals("1"))
		{
			convertedpart6="0001";	
			
		}
		
		if(part6.equals("2"))
		{
			convertedpart6="0010";	
			
		}
		
		
		if(part6.equals("3"))
		{
			convertedpart6="0011";	
			
		}
		
		if(part6.equals("4"))
		{
			convertedpart6="0100";	
			
		}
		
		
		if(part6.equals("5"))
		{
			convertedpart6="0101";	
			
		}
		
		
		if(part6.equals("6"))
		{
			convertedpart6="0110";	
			
		}
		
		
		if(part6.equals("7"))
		{
			convertedpart6="0111";	
			
		}
		
		
		if(part6.equals("8"))
		{
			convertedpart6="1000";	
			
		}
		
		
		if(part6.equals("9"))
		{
			convertedpart6="1001";	
			
		}
		
		
		if(part6.equals("a"))
		{
			convertedpart6="1010";	
			
		}
		
		if(part6.equals("b"))
		{
			convertedpart6="1011";	
			
		}
		
		if(part6.equals("c"))
		{
			convertedpart6="1100";	
			
		}
		
		if(part6.equals("d"))
		{
			convertedpart6="1101";	
			
		}
		
		if(part6.equals("e"))
		{
			convertedpart6="1110";	
			
		}
		
		
		
		if(part6.equals("f"))
		{
			convertedpart6="1111";	
			
		}
		
		
		convertedpart=convertedpart1+convertedpart2+convertedpart3+convertedpart4+convertedpart5+convertedpart6;
		
		return convertedpart;
		
	}
	

}
