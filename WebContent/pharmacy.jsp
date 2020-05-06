<%@ page import="com.Pharmacy"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Pharmacy Details</title>
<!-- <link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/pharmacy.js"></script> -->

<link rel= "stylesheet" href="Views/bootstrap.min.css">
<script type="text/javascript" src="Components/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="Components/pharmacy.js"></script>

</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-8">

				<h1>Pharmacy Details</h1>
				

				<form id="formPharmacy" name="formPharmacy" method="post" action="pharmacy.jsp">
					 Pharmacy Name: 
					 <input id="phName" name="phName" type="text" class="form-control form-control-sm">
					 <br> 
					 Address:
					 <input id="phAddr" name="phAddr" type="text" class="form-control form-control-sm">
					 <br> 
					 Owner:
					  <input id="phOwner" name="phOwner" type="text" class="form-control form-control-sm">
					 <br> 
					 Contact:
					 <input id="contact" name="contact" type="text" class="form-control form-control-sm">
					 <br>
					 Registered Date:
					 <input id="regDate" name="regDate" type="text" class="form-control form-control-sm">
					  <br>
					 Email:
					 <input id="email" name="email" type="text" class="form-control form-control-sm">
					<br>
					 <input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
					 <input type="hidden" id="hidRegIdSave" name="hidRegIdIDSave" value="">	 
				</form>
				
				<div id="alertSuccess" class="alert alert-success">
					<%
					out.print(session.getAttribute("statusMsg"));
					%>
				</div>
				<div id="alertError" class="alert alert-danger"></div>
				
				<br>
				<div id="divItemsGrid">
				<%  
					Pharmacy phrObj1 = new Pharmacy();
					out.print(phrObj1.readPharmacy());
				%>
				</div>
				
			</div>
		</div>	
	</div>
	
</body>
</html>