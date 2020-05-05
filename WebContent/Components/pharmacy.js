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
$(document).on(
		"click",
		".btnUpdate",
		function(event) {
			$("#hidRegIdSave").val(
					$(this).closest("tr").find('#hidRegIdUpdate').val());
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
	// is numerical value
//	var tmpPrice = $("#itemPrice").val().trim();
//	if (!$.isNumeric(tmpPrice)) {
//		return "Insert a numerical value for Item Price.";
//	}
//	// convert to decimal price
//	$("#itemPrice").val(parseFloat(tmpPrice).toFixed(2));
	
	
	
	
	
	//CONTACT
//	var contact = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
//	  var digits = p.replace(/\D/g, "");
//	  return contact.test(digits);
	
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
	
	//EMAIL
//	var email = v.trim();
//    return Validation.get('IsEmpty').test(email) || /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i.test(email);
//	
	
	
}