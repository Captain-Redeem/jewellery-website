var count = 2;

function validate() {
	var un = document.myform.username.value;
	var pw = document.myform.pword.value;
	var valid = false;
	var unArray = ["Admin", "SubAdmin"]; // As many as you like, no comma after final entry
	var pwArray = ["Password", "Colleague"]; // Number of passwords must equal number of users

	for (var i = 0; i < unArray.length; i++) {
		if ((un == unArray[i]) && (pw == pwArray[i])) {
			valid = true;
			break;
		}
	}

	if (valid) {
		alert("Login Successful");
		window.location = "adminusers.html";
		return false;
	}

	var t = " tries";
	if (count == 1) {
		t = " try";
	}
	if (count >= 1) {
		alert("Invalid username and/or password.  You have " + count + t + " left.");
		document.myform.username.value = "";
		document.myform.pword.value = "";
		count--;
	} else {
		alert("Still incorrect! You have no more attempts left");
		document.myform.username.value = "No more attempts allowed";
		document.myform.pword.value = "";
		document.myform.username.disabled = true;
		document.myform.pword.disabled = true;
		return false;
	}
}