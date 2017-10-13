// script.js
// #############################################################################

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
	document.getElementById("divNotCalled").style.display = "none";
	document.getElementById("divYesCalled").style.display = "none";
	document.getElementById("frmEntry"    ).style.display = "inline-grid";
	document.getElementById("frmUpload"   ).style.display = "inline-grid";
} //function

// btnView
// =============================================================================
/** Hides the edit forms and shows the tables. **/
function btnView() {
	document.getElementById("frmEntry"    ).style.display = "none";
	document.getElementById("frmUpload"   ).style.display = "none";
	document.getElementById("divNotCalled").style.display = "inline-grid";
	document.getElementById("divYesCalled").style.display = "inline-grid";
} //function

// main()
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/** The main function. **/
function main() {
	//TODO
} //function
