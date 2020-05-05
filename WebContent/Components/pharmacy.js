$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
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
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	// If valid------------------------
	$("#formPharmacy").submit();
});

// UPDATE==========================================
$(document).on("click",".btnUpdate",function(event) {
			$("#hidRegIdSave").val($(this).closest("tr").find('#hidRegIdUpdate').val());
			$("#phName").val($(this).closest("tr").find('td:eq(0)').text());
			$("#phAddr").val($(this).closest("tr").find('td:eq(1)').text());
			$("#phOwner").val($(this).closest("tr").find('td:eq(2)').text());
			$("#contact").val($(this).closest("tr").find('td:eq(3)').text());
			$("#regDate").val($(this).closest("tr").find('td:eq(4)').text());
			$("#email").val($(this).closest("tr").find('td:eq(5)').text());
		});
// CLIENTMODEL=========================================================================
function validateItemForm() {
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