package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class PharmacyAPI
 */
@WebServlet("/PharmacyAPI")
public class PharmacyAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       Pharmacy phrObj = new Pharmacy();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PharmacyAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String output = phrObj.insertPharmacy(request.getParameter("phName"),
				 request.getParameter("phAddr"),
				request.getParameter("phOwner"),
				request.getParameter("contact"),
				request.getParameter("regDate"),
				request.getParameter("email"));
		
				response.getWriter().write(output); 
	}
	
	// Convert request parameters to a Map
	
	private static Map getParasMap(HttpServletRequest request) {
		Map<String, String> map = new HashMap<String, String>();
		try {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			String[] params = queryString.split("&");
			for (String param : params) {

				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		} catch (Exception e) {
		}
		return map;
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		{
			 Map paras = getParasMap(request);
			 
			 String output = phrObj.updatePharmacy(paras.get("hidRegIdSave").toString(),
			 paras.get("phName").toString(),
			 paras.get("phAddr").toString(),
			paras.get("phOwner").toString(),
			paras.get("contact").toString(),
			paras.get("regDate").toString(),
			paras.get("email").toString());
			 
			response.getWriter().write(output);
			} 
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map paras = getParasMap(request);
		 String output = phrObj.deletePharmacy(paras.get("RegId").toString());
		 
		response.getWriter().write(output); 
	}

}
