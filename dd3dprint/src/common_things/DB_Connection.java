package common_things;

import java.sql.Connection;
import  java.sql.DriverManager;
import java.sql.SQLException;

public class DB_Connection {
	
	
	
	public static void main(String[] args) 
	
	{
	
		DB_Connection db=new DB_Connection();
		System.out.println(db.getConnection());
		
	}
	
	
	public Connection getConnection()
	{
		
		Connection connection=null;
		System.out.println("Connection Called");
		try{
			Class.forName("com.mysql.jdbc.Driver");
			//connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/login?useSSL=false","root","silicon17");
			connection=DriverManager.getConnection("jdbc:mysql://mysql3000.mochahost.com:3306/dipti11_login_project?useTimezone=true&serverTimezone=UTC","dipti11_login","silicon17");
			//connection=DriverManager.getConnection("jdbc:mysql://mysql3000.mochahost.com:3306/dddprint_3d?useTimezone=true&serverTimezone=UTC","dddprint_login","silicon17");
			System.out.println("Connection successful");
		}
		
		
	catch(ClassNotFoundException e)
		{
		
		e.printStackTrace();
		
		
		System.out.println("Connection  not successful class not found");
		
		
		}
		
		catch(SQLException e)
		{
		
		e.printStackTrace();
		System.out.println("Connection  not successful sql exception");
		}
		
		
		
		return connection;
		
		
	}
	

}
