// script.js
// #############################################################################

// Global variables
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var params;
var url;

// GUI functions
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// btnDownload
// =============================================================================
/** Sends the latest .csvs to the user. **/
function btnDownload() {
	//TODO
} //function

// btnEdit
// =============================================================================
/** Hides the tables and shows the edit forms. **/
function btnEdit() {
	if(params.get("edit") != 1) {
		params.set("edit", 1);
		location.replace(url);
	} //fi
	if(document.title != "JonCall - Edit") {
		document.title = "JonCall - Edit"
	} //fi
	document.getElementById("divNotCalled").style.display = "none";
	document.getElementById("divYesCalled").style.display = "none";
	document.getElementById("frmEntry"    ).style.display = "inline-grid";
	document.getElementById("frmUpload"   ).style.display = "inline-grid";
} //function

// btnLogout
// =============================================================================
/** Logs the user out. **/
function btnLogout() {
	//TODO
	location.replace("login.html");
} //function

// btnView
// =============================================================================
/** Hides the edit forms and shows the tables. **/
function btnView() {
	if(params.get("edit") != 0) {
		params.set("edit", 0);
		location.replace(url);
	} //fi
	if(document.title != "JonCall - View") {
		document.title = "JonCall - View"
	} //fi
	document.getElementById("frmEntry"    ).style.display = "none";
	document.getElementById("frmUpload"   ).style.display = "none";
	document.getElementById("divNotCalled").style.display = "inline-grid";
	document.getElementById("divYesCalled").style.display = "inline-grid";
} //function

// main()
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/** The main function. **/
function main() {

	// Set variables
	// =========================================================================
	url    = new URL(window.location.href);
	params = url.searchParams;

	// Show the edit screen if specified in the URL
	// =========================================================================
	if(params.get("edit") > 0) {
		btnEdit();
	} else {
		btnView();
	} //fi
} //function
