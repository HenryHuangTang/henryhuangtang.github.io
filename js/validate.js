function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var Latitude = document.querySelector('#Latitude').value;
  var Longitude = document.querySelector('#Longitude').value;
  console.log(Latitude);
  console.log(Longitude);  

	if (!(parseFloat(Latitude) == Latitude && parseFloat(Latitude) >= -90 && parseFloat(Latitude) <= 90)) {
		document.querySelector('#LatitudeError').innerHTML = "* must be a valid Latitude (-90 to 90)";
		return false;  
	} else {
		document.querySelector('#LatitudeError').innerHTML = "*";
	}

	if (!(parseFloat(Longitude) == Longitude && parseFloat(Longitude) >= -180 && parseFloat(Longitude) <= 180)) {
			document.querySelector('#LongitudeError').innerHTML = "* must be a valid Longitude (-180 to 180)";
		return false;  	
	} else {
			document.querySelector('#LongitudeError').innerHTML = "*";
	}
	
	return true;
}
  
  

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
