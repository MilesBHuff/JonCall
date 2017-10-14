// database.js
// #############################################################################

// Global variables
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var params;
var url;

// GUI functions
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// btnLogin
// =============================================================================
/** Allows the user to login. **/
function btnLogin() {
	if(params.get("signup") != 0) {
		params.set("signup", 0);
		location.replace(url);
	} //fi
	if(document.title != "JonCall - Login") {
		document.title = "JonCall - Login"
	} //fi
	document.getElementById("frmSignup").style.display = "none";
	document.getElementById("btnLogin" ).style.display = "none";
	document.getElementById("btnSignup").style.display = "inline-grid";
	document.getElementById("frmLogin" ).style.display = "inline-grid";
} //function

// btnSignup
// =============================================================================
/** Allows the user to create an account. **/
function btnSignup() {
	if(params.get("signup") != 1) {
		params.set("signup", 1);
		location.replace(url);
	} //fi
	if(document.title != "JonCall - Signup") {
		document.title = "JonCall - Signup"
	} //fi
	document.getElementById("frmLogin" ).style.display = "none";
	document.getElementById("btnSignup").style.display = "none";
	document.getElementById("btnLogin" ).style.display = "inline-grid";
	document.getElementById("frmSignup").style.display = "inline-grid";
} //function

// main()
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/** The main function. **/
function main() {

	// Set variables
	// =========================================================================
	url    = new URL(window.location.href);
	params = url.searchParams;

	// Show the signup screen if specified in the URL
	// =========================================================================
	if(params.get("signup") > 0) {
		btnSignup();
	} else {
		btnLogin();
	} //fi

} //function
