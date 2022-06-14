// Event listeners WITH PARAMETERS using ANONYMOUS FUNCTION
var elUsername = document.getElementById('username');
var elUserpassword = document.getElementById('password');							
var elMsg = document.getElementById('feedback'); 

function checklength(minLength) {
	if (elUsername.value.length < minLength) {
		elMsg.innerHTML = '<p>Username must be ' + minLength + ' characters or more</p>';
	}
    if (elUserpassword.value.length < minLength) {
		elMsg.innerHTML = '<p>password must be ' + minLength + ' characters or more</p>';
	}
    else {
		elMsg.innerHTML = '';  // Clear any error message
	}
}

elUsername.addEventListener('blur', function() {checklength(7)}, false);  // Anonymous function