$(document).ready(function(){
	
	if($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validatePharmacyForm();
	if (status != true) 
	{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	// If valid------------------------
	var type = ($("#hidRegIdSave").val() == "") ? "POST" : "PUT";
	
	$.ajax(
			{
			 url : "PharmacyAPI",
			 type : type,
			 data : $("#formPharmacy").serialize(),
			 dataType : "text",
			 complete : function(response, status)
			 {
			 onItemSaveComplete(response.responseText, status);
			 }
			});
});

//onItemSave function===========================

function onItemSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			
			$("#divItemsGrid").html(resultSet.data);
		}else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	}else if (status == "error") 
	{
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidRegIdSave").val("");
	$("#formPharmacy")[0].reset();
}



// UPDATE==========================================
$(document).on("click",".btnUpdate",function(event) 
		{
			$("#hidRegIdSave").val($(this).closest("tr").find('#hidRegIdUpdate').val());
			$("#phName").val($(this).closest("tr").find('td:eq(0)').text());
			$("#phAddr").val($(this).closest("tr").find('td:eq(1)').text());
			$("#phOwner").val($(this).closest("tr").find('td:eq(2)').text());
			$("#contact").val($(this).closest("tr").find('td:eq(3)').text());
			$("#regDate").val($(this).closest("tr").find('td:eq(4)').text());
			$("#email").val($(this).closest("tr").find('td:eq(5)').text());
		});

//REMOVE==============================================

$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		url : "PharmacyAPI",
		type : "DELETE",
		data : "RegId=" + $(this).data("RegId"),
		dataType : "text",
		complete : function(response, status) {
			onItemDeleteComplete(response.responseText, status);
		}
	});
});


//onItemDelete function================================

function onItemDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}
// CLIENTMODEL=========================================================================
function validatePharmacyForm() {
	// NAME
	if ($("#phName").val().trim() == "") {
		return "Insert Pharmacy Name.";
	}
	// ADDRESS
	if ($("#phAddr").val().trim() == "") {
		return "Insert Pharmacy Address.";
	}
	
	// OWNER-------------------------------
	if ($("#phOwner").val().trim() == "") {
		return "Insert Name of Owner.";
	}
	
	if ($("#contact").val().trim() == "") {
		return "Insert contact number.";
	}
	
	// DATE------------------------
	if ($("#regDate").val().trim() == "") {
		return "Insert Registered date.";
	}
	
	if ($("#email").val().trim() == "") {
		return "Insert Email Address.";
	}
	return true;

	
	
}