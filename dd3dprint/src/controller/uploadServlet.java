package controller;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import common_things.DB_Connection;

/**
 * Servlet implementation class uploadServlet
 */
/*
 * 
 * */


/*
@WebServlet("/FileuploadServlet.htm")
@MultipartConfig
public class uploadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
     
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	
	
	{
		
		try
		{
		String name=request.getParameter("name");
		Part filepart=request.getPart("files");
		
		 InputStream inputStream = null;
		
		System.out.println("hello" + name);
		
		    DB_Connection db=new DB_Connection();
			Connection connection=null;
			PreparedStatement ps=null;
			ResultSet rs=null;
		
			
			if (filepart != null) {
	            // prints out some information for debugging
	            System.out.println(filepart.getName());
	            System.out.println(filepart.getSize());
	            System.out.println(filepart.getContentType());
	             
	            // obtains input stream of the upload file
	            inputStream = filepart.getInputStream();
	        }
	        
	        else
	        {
	        	 System.out.println("no file present ");
	        	
	        }
			
			
			
			 connection=db.getConnection();
			 String query="insert into uploadfilesnew (firstname,lastname,emailid,phone,files)"+"values(?,?,?,?,?)";
			  
			 
			    ps=connection.prepareStatement(query);
			    ps.setString(1,name);
			    ps.setString(2, name);
				ps.setString(3, name);
				ps.setString(4, name);
				ps.setBlob(5, inputStream);

				System.out.println(ps);
				ps.execute();
				
				
				if(connection!=null)
					
				{
					
					try {
						connection.close();
						System.out.println("successfully closed connection");	
					} 
					
					catch (SQLException e) {
						
						e.printStackTrace();
						System.out.println("connection not closed");	
					}
				}
						
				
				System.out.println("successfully saved data in the backend");	
				
				//System.out.println("successfully saved data in the backend");
				// model1.setViewName("index26"); 
				getServletContext().getRequestDispatcher("/index26.jsp").forward(request, response);
			
		}
		catch(Exception e)
		{

			System.out.println("unsuccessfully saved data in the backend");
			// model1.setViewName("index26"); 
			getServletContext().getRequestDispatcher("/index25.jsp").forward(request, response);
		
			
		}
		
		
		
		finally
		{
			
			
			// model1.setViewName("index26"); 
			//getServletContext().getRequestDispatcher("/index26.jsp").forward(request, response);
		}
	
		
		
		
	}




}*/




@WebServlet
@MultipartConfig(maxRequestSize =104857600,maxFileSize =104857600)
public class uploadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
     
	
	 @RequestMapping(value="/FileuploadServlet.htm" , method = RequestMethod.POST)
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	
	
	{
		
		 
		 System.out.println("reached here hello /FileuploadServlet.htm ");
		 
		 
		    DB_Connection db=new DB_Connection();
			Connection connection=null;
		 
			try
			{
			String firstname=request.getParameter("firstname");
			String lastname=request.getParameter("lastname");
			String emailid=request.getParameter("emailid");
			String phone=request.getParameter("phone");
			String materials=request.getParameter("material");
			
			//String materials=request.getAttribute("material");
			
			String comments=request.getParameter("comments");
			
			
			
			
			Part filepart=request.getPart("files");
			
			 InputStream inputStream = null;
			String filetype=null;
			String filetype1=null;
			
			    //DB_Connection db=new DB_Connection();
				//Connection connection=null;
				PreparedStatement ps=null;
				Statement st=null;
				ResultSet rs=null;
			
				
				if (filepart != null) {
		            // prints out some information for debugging
		            System.out.println(filepart.getName());
		            System.out.println(filepart.getSize());
		            System.out.println(filepart.getContentType());
		             
		            // obtains input stream of the upload file
		            filetype=filepart.getContentType();
		           
		            inputStream = filepart.getInputStream();
		        }
		        
		        else
		        {
		        	 System.out.println("no file present ");
		        	
		        }
				
				
				
				 connection=db.getConnection();
				 
				 
				 
				 /*
				 
				 String  querylimit="SET GLOBAL max_allowed_packet=20971520;"; //20mb
				 Statement stSetLimit=connection.createStatement();
				 stSetLimit.execute(querylimit);
				 */
				 
				 
				 String query="insert into enggfile (firstname,lastname,emailid,phone,material,comments,fileextension,files)"+"values(?,?,?,?,?,?,?,?)";
				  
				 
				    ps=connection.prepareStatement(query);
				    ps.setString(1,firstname);
				    ps.setString(2, lastname);
					ps.setString(3, emailid);
					ps.setString(4, phone);
					ps.setString(5, materials);
					ps.setString(6, comments);
					ps.setString(7, filetype);
					
					
					
					ps.setBlob(8, inputStream);

					System.out.println(ps);
					ps.execute();
					
				 
				 
				 
				 
				
							
					
					System.out.println("successfully saved data in the backend");	
					
					//System.out.println("successfully saved data in the backend");
					// model1.setViewName("index26"); 
					
				
			}
			catch(SQLException e)
			{

				e.printStackTrace();
				System.out.println("unsuccessfully saved data in the backend");	
				// model1.setViewName("index26"); 
				//getServletContext().getRequestDispatcher("/index25.jsp").forward(request, response);
			
				
			}
			
			
			
			finally
			{
				
				
				// model1.setViewName("index26"); 
				//getServletContext().getRequestDispatcher("/index26.jsp").forward(request, response);
				
				
				
				
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
				
				getServletContext().getRequestDispatcher("/index41.jsp").forward(request, response);
			}
		
			


	}
	 
	 
	 
	 
	 
	 @RequestMapping(value="/contactServlet.htm" , method = RequestMethod.POST)
		protected void doContact(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
		
		
		{
			
			 
			 System.out.println("reached here hello /contactServlet.htm ");
			 
				try
				{
				String name=request.getParameter("name");
				String company=request.getParameter("company");
				String emailid=request.getParameter("emailid");
				String phone=request.getParameter("phone");
				String address=request.getParameter("address");
				
				//String materials=request.getAttribute("material");
				
				String questions=request.getParameter("questions");
				
				
				
			
				
				    DB_Connection db=new DB_Connection();
					Connection connection=null;
					PreparedStatement ps=null;
					ResultSet rs=null;
				
					
					
					
					
					
					 connection=db.getConnection();
					 String query="insert into contactus (name,compnany,emailid,phone,address,questions)"+"values(?,?,?,?,?,?)";
					  
					 
					    ps=connection.prepareStatement(query);
					    ps.setString(1,name);
					    ps.setString(2, company);
						ps.setString(3, emailid);
						ps.setString(4, phone);
						ps.setString(5, address);
						ps.setString(6, questions);
						
						
						
						
						

						System.out.println(ps);
						ps.execute();
						
						
						if(connection!=null)
							
						{
							
							try {
								connection.close();
								System.out.println("successfully closed connection");	
							} 
							
							catch (SQLException e) {
								
								e.printStackTrace();
								System.out.println("connection not closed");	
							}
						}
								
						
						System.out.println("successfully saved data in the backend");	
						
						//System.out.println("successfully saved data in the backend");
						// model1.setViewName("index26"); 
						
					
				}
				catch(Exception e)
				{

					System.out.println("unsuccessfully saved data in the backend");
					// model1.setViewName("index26"); 
					//getServletContext().getRequestDispatcher("/index25.jsp").forward(request, response);
				
					
				}
				
				
				
				finally
				{
					
					
					// model1.setViewName("index26"); 
					//getServletContext().getRequestDispatcher("/index26.jsp").forward(request, response);
					getServletContext().getRequestDispatcher("/index41.jsp").forward(request, response);
				}
			
				


		}
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 

}

