package model;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import bean.Login_Bean;
import common_things.DB_Connection;
public class Login_Model

{

	public boolean check_user_name(Login_Bean obj_Login_Bean) 
	{
		
		boolean flag=false;
		
		
		DB_Connection db=new DB_Connection();
		Connection connection=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		
		try
		{
			 connection=db.getConnection();
			String query="select * from admin where user_name=? and password=?";
			ps=connection.prepareStatement(query);
			ps.setString(1, obj_Login_Bean.getUser_name());
			ps.setString(2, obj_Login_Bean.getPassword());
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
	
}
