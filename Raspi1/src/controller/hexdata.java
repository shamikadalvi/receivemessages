package controller;

public class hexdata {

	public static void main(String[] args)
	
	
	{
		String datanew=inthex(12);
		System.out.println("data is");
		System.out.println(datanew);

	}
	
	
	
	public static String inthex(int val1)
	{
		
		
		String val2= Integer.toHexString(val1);
		
		
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
		
		
		if(val2.equals("8"))
			val2="08";
		
		
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
	
	
	
	
	

}
