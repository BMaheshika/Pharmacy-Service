package com;

import java.sql.*;

public class Pharmacy {
	private Connection connect() {
		Connection con = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");

			// Provide the correct details: DBServer/DBName, username, password
			con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/pharmacy", "root", "");
		} catch (Exception e) {
			e.printStackTrace();
		} 
		return con;
	}

	public String insertPharmacy(String phName, String phAddr, String phOwner,String contact,String regDate,String email) {
		
		String output = "";
		
		try {
			Connection con = connect();
			if (con == null) {
				return "Error while connecting to the database for inserting.";
			}
			// create a prepared statement
			String query = " insert into pharmacies(`RegId`,`phName`,`phAddr`,`phOwner`,`contact`,`regDate`,`email`)"
					+ " values (?, ?, ?, ?, ?,?,?)";
			PreparedStatement preparedStmt = con.prepareStatement(query);
			// binding values
			preparedStmt.setInt(1, 0);
			preparedStmt.setString(2, phName);
			preparedStmt.setString(3, phAddr);
			preparedStmt.setString(4, phOwner);
			preparedStmt.setString(5, contact);
			preparedStmt.setString(6, regDate);
			preparedStmt.setString(7, email);

			// execute the statement
			preparedStmt.execute();
			con.close();
			
			String newPharmacy = readPharmacy();
			 output = "{\"status\":\"success\", \"data\": \"" + newPharmacy + "\"}"; 
			 
			 
		} catch (Exception e) {
			output = "{\"status\":\"error\", \"data\":\"Error while inserting the Pharamacy.\"}"; 
			System.err.println(e.getMessage());
		}
		return output;
	}
	

	public String readPharmacy() {
		
		String output = "";
		
		try {
			Connection con = connect();
			if (con == null) {
				return "Error while connecting to the database for reading.";
			}
			
			// Prepare the html table to be displayed
			output = "<table border='1'><tr><th>Name</th><th>Address</th><th>Owner Name</th><th>Contact</th><th>Registered Date</th><th>Email</th><th>Update</th><th>Remove</th></tr>";
			String query = "select * from pharmacies";
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			
			// iterate through the rows in the result set
			while (rs.next()) {
				String RegId = Integer.toString(rs.getInt("RegId"));
				String phName = rs.getString("phName");
				String phAddr = rs.getString("phAddr");
				String phOwner = rs.getString("phOwner");
				String contact = Integer.toString(rs.getInt("contact"));
				String regDate = rs.getString("regDate");
				String email = rs.getString("email");
				
				// Add into the html table
				output += "<tr><td><input id='hidRegIdUpdate' name='hidRegIdUpdate' type='hidden' value='" + RegId + "'>"
						 + phName + "</td>"; 
				output += "<td>" + phAddr + "</td>";
				output += "<td>" + phOwner + "</td>";
				output += "<td>" + contact + "</td>";
				output += "<td>" + regDate + "</td>";
				output += "<td>" + email + "</td>";
				
				// buttons
				//put btn ids
				output += "<td><input name='btnUpdate' type='button' value='Update' class='btnUpdate btn btn-secondary'></td>"
				+"<td><input name='btnRemove' type='button' value='Remove' class='btnRemove btn btn-danger' data-itemid='"+RegId+"'>" + "</td></tr>";
						
				//<input name=\"hidRegIdDelete\" type=\"hidden\" value=\"" + RegId + "\">" + "</form></td></tr>";
			}
			con.close();
			
			// Complete the html table
			output += "</table>";
			
		} catch (Exception e) {
			output = "Error while reading the number of pharmacies.";
			System.err.println(e.getMessage());
		}
		return output;
	}

	public String updatePharmacy(String Id, String phName, String phAddr, String phOwner, String contact,String regDate, String email) {
		String output = "";
		try {
			Connection con = connect();
			if (con == null) {
				return "Error while connecting to the database for updating.";
			}
			// create a prepared statement
			String query = "UPDATE pharmacies SET phName=?,phAddr=?,phOwner=?,contact=?,regDate=? WHERE RegId=?";
			PreparedStatement preparedStmt = con.prepareStatement(query);
			// binding values
			
			preparedStmt.setString(1, phName);
			preparedStmt.setString(2, phAddr);
			preparedStmt.setString(3, phOwner);
			preparedStmt.setString(4, contact);
			preparedStmt.setString(5, regDate);
			preparedStmt.setString(6, email);
			
			preparedStmt.setInt(7, Integer.parseInt(Id));
			
			// execute the statement
			preparedStmt.execute();
			con.close();
		
			String newPhr = readPharmacy();
			output = "{\"status\":\"success\", \"data\": \"" +newPhr + "\"}"; 

		} catch (Exception e) {
			output = "{\"status\":\"error\", \"data\":\"Error while updating the pharmacy.\"}"; 
			System.err.println(e.getMessage());
		}
		return output;
	}
	
	public String deletePharmacy(String RegId) {
		String output = "";

		try {

			Connection con = connect();

			if (con == null) {
				return "Error while connecting to the database for deleting.";
			}

			// create a prepared statement
			String query = "delete from pharmacies  where RegId=?";

			PreparedStatement preparedStmt = con.prepareStatement(query);

			// binding values
			preparedStmt.setInt(1, Integer.parseInt(RegId));

			// execute the statement
			preparedStmt.execute();
			con.close();

			String newItems = readPharmacy();
			output = "{\"status\":\"success\", \"data\": \"" + newItems + "\"}";

		}

		catch (Exception e) {
			output = "{\"status\":\"error\", \"data\":\"Error while deleting the Pharmacy .\"}";
			System.err.println(e.getMessage());
		}

		return output;
	}
	
}
