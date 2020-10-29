package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import bean.Login_Bean;
import common_things.DB_Connection;

public class usermodel 


{

	PageController pc =new PageController();
	/*
	public static void main(String[] args)
	
	{
	    boolean flag1=false;
		usermodel um= new usermodel();
	   signintrial signin=new 	signintrial();
		  String user_name =signin.getUser_name();
     	  String password=signin.getPassword();
		
		
       flag1=um.signin_user(signin);
       System.out.println("the value of flag is " + flag1);
	}
	*/
	
	
	public boolean check_user_name(formtrial form1) 
	{
		
		boolean flag=false;
		
		
		DB_Connection db=new DB_Connection();
		Connection connection=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		
		try
		{
			 connection=db.getConnection();
			String query="select * from login where emailid=? and password=?";
			ps=connection.prepareStatement(query);
			ps.setString(1, form1.getUser_name());
			ps.setString(2, form1.getPassword());
			System.out.println(ps);
			rs=ps.executeQuery();
			
			
			if(rs.next())
			{
				
				flag=true;
			}
			
		}
		catch(Exception e)
		{
			
			System.out.println("Error occured");
		}
		
		finally
		{
			if(connection!=null)
				
			{
				
				try {
					connection.close();
				} 
				
				catch (SQLException e) {
					
					e.printStackTrace();
				}
			}
		}
		
		return flag;
	}
	
	
	
	
	public boolean signin_user(signintrial signin) 
	{
		
		boolean flag=false;
		
		
		DB_Connection db=new DB_Connection();
		Connection connection=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		
		try
		{
			 connection=db.getConnection();
			 String query="insert into login (firstname,lastname,emailid,password)"+"values(?,?,?,?)";
			  
			 
			    ps=connection.prepareStatement(query);
			    ps.setString(1, signin.getFirstname());
			    ps.setString(2, signin.getLastname());
				ps.setString(3, signin.getUser_name());
				ps.setString(4, signin.getPassword());
				System.out.println(ps);
				ps.execute();
				flag=true;
			
		}
		catch(Exception e)
		{
			
			System.out.println("Error occured");
		}
		
		finally
		{
			if(connection!=null)
				
			{
				
				try {
					connection.close();
				} 
				
				catch (SQLException e) {
					
					e.printStackTrace();
				}
			}
		}
		
		return flag;
	}
	
	
	
	
	public boolean amount_user(amount amount) 
	{
		
		boolean flag=false;
		
		
		DB_Connection db=new DB_Connection();
		Connection connection=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		
		try
		{
			 connection=db.getConnection();
			 String query="insert into payment (fullname,emailid,phonenum,address,amount,orderid)"+"values(?,?,?,?,?,?)";
			  
			 
			    ps=connection.prepareStatement(query);
			    ps.setString(1,amount.getFullname());
			    ps.setString(2, amount.getEmailid());
				ps.setString(3, amount.getPhonenum());
				ps.setString(4, amount.getAddress());
				ps.setString(5, pc.getTransamount22());
				ps.setString(6, pc.getOrderid22());
				
				System.out.println(ps);
				ps.execute();
				flag=true;
			
		}
		catch(Exception e)
		{
			
			System.out.println("Error occured");
		}
		
		finally
		{
			if(connection!=null)
				
			{
				
				try {
					connection.close();
				} 
				
				catch (SQLException e) {
					
					e.printStackTrace();
				}
			}
		}
		
		return flag;
	}
	
	
	
	
	
	
	
	
}
